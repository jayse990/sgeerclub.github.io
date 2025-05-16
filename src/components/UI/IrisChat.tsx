import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Play, RotateCcw, CheckCircle, XCircle, Zap, Brain, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getRandomQuestions, Question } from '../../data/quiz';
import * as Dialog from '@radix-ui/react-dialog';

interface QuizState {
  mode: 'classic' | 'technical' | null;
  questions: Question[];
  currentAnswers: { [key: string]: string };
  showResults: boolean;
  score: number;
}

const IrisChat: React.FC = () => {
  const { t } = useLanguage();
  const [quizState, setQuizState] = useState<QuizState>({
    mode: null,
    questions: [],
    currentAnswers: {},
    showResults: false,
    score: 0,
  });

  const startQuiz = (mode: 'classic' | 'technical') => {
    setQuizState({
      mode,
      questions: getRandomQuestions(5, mode),
      currentAnswers: {},
      showResults: false,
      score: 0,
    });
  };

  const handleAnswer = (questionId: string, answer: string) => {
    setQuizState(prev => ({
      ...prev,
      currentAnswers: {
        ...prev.currentAnswers,
        [questionId]: answer,
      },
    }));
  };

  const submitQuiz = () => {
    const score = quizState.questions.reduce((acc, question) => {
      return acc + (quizState.currentAnswers[question.id] === question.answer ? 1 : 0);
    }, 0);

    setQuizState(prev => ({
      ...prev,
      showResults: true,
      score,
    }));
  };

  const resetQuiz = () => {
    setQuizState({
      mode: null,
      questions: [],
      currentAnswers: {},
      showResults: false,
      score: 0,
    });
  };

  return (
    <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/20 backdrop-blur-sm rounded-lg border border-blue-900/30 h-[600px] flex flex-col">
      <div className="p-4 border-b border-blue-900/30 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Bot className="text-blue-400" size={24} />
          <div>
            <h3 className="text-xl font-semibold text-white">Play with Iris</h3>
            <p className="text-sm text-gray-400">Quiz interactif & éducatif</p>
          </div>
        </div>
        {quizState.mode && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={resetQuiz}
            className="text-red-400 hover:text-red-300 transition-colors bg-red-500/10 hover:bg-red-500/20 rounded-lg px-4 py-2 flex items-center gap-2"
          >
            <X size={20} />
            <span>Exit</span>
          </motion.button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {!quizState.mode ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center h-full gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => startQuiz('classic')}
              className="bg-blue-600 text-white px-8 py-4 rounded-full flex items-center gap-3 font-medium w-64"
            >
              <Brain size={24} />
              Mode Classique
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => startQuiz('technical')}
              className="bg-purple-600 text-white px-8 py-4 rounded-full flex items-center gap-3 font-medium w-64"
            >
              <Zap size={24} />
              Mode Technique
            </motion.button>
          </motion.div>
        ) : (
          <div className="space-y-6">
            {quizState.questions.map((question, index) => (
              <motion.div
                key={question.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-blue-900/20 rounded-lg p-4"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-white font-medium">Question {index + 1}</h4>
                  {quizState.showResults && (
                    <div>
                      {quizState.currentAnswers[question.id] === question.answer ? (
                        <CheckCircle className="text-green-400" size={20} />
                      ) : (
                        <XCircle className="text-red-400" size={20} />
                      )}
                    </div>
                  )}
                </div>
                
                <p className="text-gray-200 mb-4">{question.question}</p>
                
                <div className="space-y-2">
                  {question.choices.map((choice) => (
                    <button
                      key={choice}
                      onClick={() => !quizState.showResults && handleAnswer(question.id, choice)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        quizState.currentAnswers[question.id] === choice
                          ? 'bg-blue-600 text-white'
                          : 'bg-blue-900/30 text-gray-300 hover:bg-blue-900/40'
                      } ${
                        quizState.showResults &&
                        choice === question.answer &&
                        'bg-green-600 text-white'
                      }`}
                      disabled={quizState.showResults}
                    >
                      {choice}
                    </button>
                  ))}
                </div>
                
                {quizState.showResults && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 text-sm text-gray-300"
                  >
                    <strong>Explication:</strong> {question.explanation}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {quizState.mode && !quizState.showResults && (
        <div className="p-4 border-t border-blue-900/30">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={submitQuiz}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium"
            disabled={Object.keys(quizState.currentAnswers).length !== quizState.questions.length}
          >
            Valider les réponses
          </motion.button>
        </div>
      )}

      {quizState.mode && quizState.showResults && (
        <div className="p-4 border-t border-blue-900/30">
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-xl font-bold text-white">
                Score: {quizState.score}/{quizState.questions.length}
              </p>
              <p className="text-gray-400">
                {quizState.score === quizState.questions.length
                  ? "🎉 Parfait ! Tu as tout bon !"
                  : quizState.score > quizState.questions.length / 2
                  ? "👏 Bien joué ! Continue comme ça !"
                  : "💪 Continue tes efforts !"}
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={resetQuiz}
              className="w-full flex items-center justify-center gap-2 bg-gray-700 text-white py-3 rounded-lg font-medium"
            >
              <RotateCcw size={20} />
              Choisir un autre mode
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IrisChat;