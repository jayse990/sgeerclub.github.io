import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import AnimatedBackground from '../Animations/AnimatedBackground';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;