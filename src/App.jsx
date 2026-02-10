import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import View1Intro from './components/View1Intro';
import View2Angry from './components/View2Angry';
import View3Hype from './components/View3Hype';
import View4Question from './components/View4Question';
import View5Gift from './components/View5Gift';
import View6Letter from './components/View6Letter';

function App() {
  const [currentView, setCurrentView] = useState(1);

  // Animation variants for page transitions
  const variants = {
    enter: { opacity: 0, scale: 0.95 },
    center: { zIndex: 1, opacity: 1, scale: 1 },
    exit: { zIndex: 0, opacity: 0, scale: 1.05 },
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Background decorations can go here */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 opacity-50 z-0"></div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentView}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative z-10 w-full max-w-md"
        >
          {currentView === 1 && (
            <View1Intro
              onYes={() => setCurrentView(3)}
              onNo={() => setCurrentView(2)}
            />
          )}
          {currentView === 2 && (
            <View2Angry onBack={() => setCurrentView(1)} />
          )}
          {currentView === 3 && (
            <View3Hype onYes={() => setCurrentView(4)} />
          )}
          {currentView === 4 && (
            <View4Question onAnswer={() => setCurrentView(5)} />
          )}
          {currentView === 5 && (
            <View5Gift onNext={() => setCurrentView(6)} />
          )}
          {currentView === 6 && (
            <View6Letter />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
