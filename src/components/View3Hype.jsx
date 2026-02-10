import React from 'react';
import { motion } from 'framer-motion';

const View3Hype = ({ onYes }) => {
    return (
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl text-center border-4 border-valentine-pink">
            <div className="mb-6">
                {/* Placeholder for Happy Bears */}
                <img
                    src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHloNHN0OGludnNjNzZrd2d4YWRmOHhvbjZmZ3FmZGFxanc4ajU5NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1JmGiBtqTuehfYxuy9/giphy.gif" // You might want to find a better angry cat gif
                    alt="Cute Bear"
                    className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg mb-4 bg-gray-200"
                />
                <h1 className="text-3xl font-bold text-gray-800 font-nunito leading-tight mb-4">
                    GOOD MY CUTIEPIE 😍
                </h1>
                <p className="text-xl text-gray-600 font-quicksand">
                    Most important question... are you ready?? 😅
                </p>
            </div>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onYes}
                className="bg-valentine-red text-valentine-dark px-8 py-3 rounded-full font-bold text-xl shadow-lg hover:bg-valentine-pink transition-colors mt-4"
            >
                Yes!! 💘
            </motion.button>
        </div>
    );
};

export default View3Hype;
