import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const View4Question = ({ onAnswer }) => {
    const triggerConfetti = () => {
        const duration = 3000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            // since particles fall down, start a bit higher than random
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
    };

    const handleAnswer = () => {
        triggerConfetti();
        onAnswer();
    };

    return (
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl text-center border-4 border-valentine-pink max-w-lg w-full">
            <div className="mb-6">
                {/* Placeholder for Panda asking for hug */}
                <img
                    src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHpqbW02eGpoc2gwdjlkejUwcDhtOXJzMzZzMW9uOTV3OWxkbmJ4eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SYo1DFS8NLhhqzzjMU/giphy.gif" // You might want to find a better angry cat gif
                    alt="Cute Bear"
                    className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg mb-4 bg-gray-200"
                />
                <h1 className="text-4xl font-extrabold text-valentine-dark font-nunito mb-8">
                    Will you be my Valentine?
                </h1>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
                {['Yes', 'A', 'B', 'C'].map((label, index) => (
                    <motion.button
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleAnswer}
                        className="bg-valentine-pink text-valentine-dark py-4 rounded-xl font-bold text-2xl shadow-md hover:bg-valentine-red transition-all border-2 border-valentine-red/50"
                    >
                        {label}
                    </motion.button>
                ))}
            </div>

            <p className="text-gray-500 italic font-quicksand text-sm">
                Pick any option... they're all winners! 🌸
            </p>
        </div>
    );
};

export default View4Question;
