import React, { useState } from 'react';
import { motion } from 'framer-motion';

const View1Intro = ({ onYes, onNo }) => {
    const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });

    const moveNoButton = () => {
        const x = Math.random() * 200 - 100; // Random x between -100 and 100
        const y = Math.random() * 200 - 100; // Random y between -100 and 100
        setNoButtonPos({ x, y });
    };

    return (
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl text-center border-4 border-valentine-pink">
            <div className="mb-6">
                {/* Placeholder for Cute Panda/Bear Sticker */}
                {/* TODO: Replace src with your own cute gif/sticker */}
                <img
                    src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmRzYWJnZDVjZTQydXgwNnd6dzNlNXhqbXpmeHJoYjBzOWxtaGFodyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gjHkRHSuHqu99y9Yjt/giphy.gif" // Generic cute bear placeholder
                    alt="Shy Bear"
                    className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg mb-4"
                />
                <h1 className="text-3xl font-bold text-gray-800 font-nunito leading-tight">
                    Hey! I want to ask you something! Can I?
                </h1>
            </div>

            <div className="flex justify-center gap-6 mt-8 relative min-h-[60px]">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onYes}
                    className="bg-valentine-red text-valentine-dark px-8 py-3 rounded-full font-bold text-xl shadow-lg hover:bg-valentine-pink transition-colors"
                >
                    YES
                </motion.button>

                <motion.button
                    animate={noButtonPos}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    onMouseEnter={moveNoButton}
                    onClick={onNo} // Allow clicking if they are fast enough, leads to Angry trap
                    className="bg-gray-300 text-gray-700 px-8 py-3 rounded-full font-bold text-xl shadow-lg absolute"
                    style={{ position: 'relative' }} // Use relative for initial, but motion works with transform
                >
                    NO
                </motion.button>
            </div>
        </div>
    );
};

export default View1Intro;
