import React from 'react';
import { motion } from 'framer-motion';

const View6Letter = () => {
    return (
        <div className="bg-[#fffdf7] rounded-sm p-8 shadow-2xl max-w-lg w-full transform rotate-1 border border-gray-200 relative">
            {/* Paper texture feel */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")' }}></div>

            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-valentine-dark font-quicksand border-b-2 border-valentine-pink inline-block pb-2">
                    My Dearest Valentine 💕
                </h1>
            </div>

            <div className="space-y-4 text-gray-700 font-quicksand leading-relaxed text-lg">
                <p>
                    From the moment you walked into my life, everything became more beautiful. Your smile lights up my darkest days, and your love makes me feel like the luckiest person in the world.
                </p>
                <p>
                    On this Valentine's Day and every day after, I promise to cherish you, to make you laugh, and to love you with all my heart.
                </p>
            </div>

            <div className="mt-8 text-right">
                <p className="text-2xl font-bold text-valentine-dark font-cursive">
                    Forever Yours ❤️
                </p>
            </div>
        </div>
    );
};

export default View6Letter;
