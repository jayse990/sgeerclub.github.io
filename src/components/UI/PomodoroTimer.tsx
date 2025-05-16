import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw, Timer } from 'lucide-react';
import * as Progress from '@radix-ui/react-progress';
import { useLanguage } from '../../context/LanguageContext';
import { cn } from '../../lib/utils';

interface PomodoroTimerProps {
  onComplete?: () => void;
}

interface TimerSettings {
  workTime: number;
  breakTime: number;
  cycles: number;
}

interface TimerSession {
  date: string;
  duration: number;
  type: 'work' | 'break';
}

const PomodoroTimer: React.FC<PomodoroTimerProps> = ({ onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [currentCycle, setCurrentCycle] = useState(1);
  const [settings, setSettings] = useState<TimerSettings>({
    workTime: 25,
    breakTime: 5,
    cycles: 4
  });
  const [sessions, setSessions] = useState<TimerSession[]>([]);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const { t } = useLanguage();
  const audioContextRef = useRef<AudioContext | null>(null);

  const totalTime = isBreak ? settings.breakTime * 60 : settings.workTime * 60;
  const progress = ((totalTime - timeLeft) / totalTime) * 100;

  const playNotificationSound = useCallback(async () => {
    if (!soundEnabled) return;

    try {
      // Create AudioContext on first interaction or when needed
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContext();
      }

      const ctx = audioContextRef.current;
      
      // Create an oscillator for a gentle bell-like sound
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      // Configure the sound
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(880, ctx.currentTime); // A5 note
      
      // Configure the envelope for a bell-like sound
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1);
      
      // Connect nodes
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      // Play the sound
      oscillator.start();
      oscillator.stop(ctx.currentTime + 1);
    } catch (error) {
      console.error('Error playing notification sound:', error);
    }
  }, [soundEnabled]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      playNotificationSound();
      
      if (!isBreak) {
        // Save work session
        const newSession: TimerSession = {
          date: new Date().toISOString(),
          duration: settings.workTime * 60,
          type: 'work'
        };
        setSessions(prev => [...prev, newSession]);
        
        if (currentCycle < settings.cycles) {
          setIsBreak(true);
          setTimeLeft(settings.breakTime * 60);
          setIsRunning(true); // Auto-start break
        } else {
          // Long break after completing all cycles
          setIsBreak(true);
          setTimeLeft(15 * 60); // 15 minutes long break
          setCurrentCycle(1);
          setIsRunning(true); // Auto-start long break
        }
      } else {
        // Save break session
        const newSession: TimerSession = {
          date: new Date().toISOString(),
          duration: isBreak ? settings.breakTime * 60 : 15 * 60,
          type: 'break'
        };
        setSessions(prev => [...prev, newSession]);
        
        setIsBreak(false);
        setTimeLeft(settings.workTime * 60);
        setCurrentCycle(prev => prev + 1);
        setIsRunning(true); // Auto-start next work session
      }
      onComplete?.();
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, isBreak, currentCycle, settings, onComplete, playNotificationSound]);

  const toggleTimer = () => {
    // Initialize AudioContext on first user interaction
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext();
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setIsBreak(false);
    setTimeLeft(settings.workTime * 60);
    setCurrentCycle(1);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getTotalWorkTime = () => {
    const today = new Date().toISOString().split('T')[0];
    return sessions
      .filter(session => session.type === 'work' && session.date.startsWith(today))
      .reduce((total, session) => total + session.duration, 0);
  };

  return (
    <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/20 backdrop-blur-sm rounded-lg p-6 border border-blue-900/30">
      <div className="flex items-center gap-3 mb-6">
        <Timer className="text-blue-400" size={24} />
        <div>
          <h3 className="text-xl font-semibold text-white">
            {isBreak ? 'Break Time!' : 'Focus Time'} - Cycle {currentCycle}/{settings.cycles}
          </h3>
          <p className="text-sm text-gray-400">
            Total work today: {Math.floor(getTotalWorkTime() / 60)} minutes
          </p>
        </div>
      </div>

      <div className="mb-6 space-y-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm text-gray-300 mb-2">Work Time (minutes)</label>
            <input
              type="number"
              value={settings.workTime}
              onChange={(e) => setSettings(prev => ({ ...prev, workTime: parseInt(e.target.value) }))}
              className="w-full bg-blue-900/20 border border-blue-900/30 rounded px-3 py-2 text-white"
              min="1"
              max="60"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm text-gray-300 mb-2">Break Time (minutes)</label>
            <input
              type="number"
              value={settings.breakTime}
              onChange={(e) => setSettings(prev => ({ ...prev, breakTime: parseInt(e.target.value) }))}
              className="w-full bg-blue-900/20 border border-blue-900/30 rounded px-3 py-2 text-white"
              min="1"
              max="30"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="sound-toggle"
            checked={soundEnabled}
            onChange={(e) => setSoundEnabled(e.target.checked)}
            className="rounded border-blue-900/30 bg-blue-900/20 text-blue-500"
          />
          <label htmlFor="sound-toggle" className="text-sm text-gray-300">
            Enable sound notifications
          </label>
        </div>
      </div>

      <div className="relative mb-6">
        <Progress.Root
          className="relative overflow-hidden bg-blue-950/50 rounded-full w-full h-4"
          value={progress}
        >
          <Progress.Indicator
            className={cn(
              "h-full transition-transform duration-300 ease-in-out rounded-full",
              isBreak ? "bg-green-500" : "bg-blue-500"
            )}
            style={{ transform: `translateX(-${100 - progress}%)` }}
          />
        </Progress.Root>
      </div>

      <div className="text-center mb-8">
        <motion.div
          key={timeLeft}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-4xl font-bold text-white"
        >
          {formatTime(timeLeft)}
        </motion.div>
      </div>

      <div className="flex justify-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleTimer}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-colors",
            isRunning
              ? "bg-red-500/20 text-red-400 hover:bg-red-500/30"
              : "bg-green-500/20 text-green-400 hover:bg-green-500/30"
          )}
        >
          {isRunning ? <Pause size={20} /> : <Play size={20} />}
          {isRunning ? 'Pause' : 'Start'}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={resetTimer}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-500/20 text-gray-400 hover:bg-gray-500/30 font-medium transition-colors"
        >
          <RotateCcw size={20} />
          Reset
        </motion.button>
      </div>
    </div>
  );
};

export default PomodoroTimer;