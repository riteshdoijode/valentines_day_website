import React from 'react';
import { motion } from 'framer-motion';

const languages = [
    { lang: "English", text: "I Love You" },
    { lang: "Urdu", text: "میں تم سے پیار کرتا ہوں" },
    { lang: "Hindi", text: "मैं तुमसे प्यार करता हूँ" },
    { lang: "French", text: "Je T'aime" },
    { lang: "Spanish", text: "Te Amo" },
];

const View5Gift = ({ onNext }) => {
    return (
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-2xl w-full max-w-2xl border-4 border-valentine-pink flex flex-col md:flex-row gap-6 items-center">

            {/* Left Side: Bouquet */}
            <div className="w-full md:w-1/2 flex flex-col items-center">
                <h2 className="text-3xl font-bold text-valentine-dark mb-4 font-nunito">This is for you 😍</h2>
                {/* Placeholder for Bouquet */}
                <img
                    src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGplaXIzZmRqbjFtbDA3Mml4NnJwdWZwcnp1c3FuN2lzZjJlNmV2bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IzXiddo2twMmdmU8Lv/giphy.gif" // You might want to find a better angry cat gif
                    alt="Hug Bear"
                    className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg mb-4 bg-gray-200"
                />
            </div>

            {/* Right Side: Languages */}
            <div className="w-full md:w-1/2 flex flex-col gap-3">
                {languages.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/60 backdrop-blur-md p-3 rounded-xl border border-white/50 shadow-sm flex justify-between items-center"
                    >
                        <span className="text-xs font-bold text-gray-500 uppercase">{item.lang}</span>
                        <span className="text-lg font-bold text-valentine-dark">{item.text}</span>
                    </motion.div>
                ))}

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onNext}
                    className="mt-4 bg-valentine-dark text-white py-2 rounded-full font-bold shadow-lg hover:bg-pink-900 transition-colors self-end w-full"
                >
                    See My Letter <span className="ml-2">→</span>
                </motion.button>
            </div>

        </div>
    );
};

export default View5Gift;
