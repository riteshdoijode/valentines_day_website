import React from 'react';
import { motion } from 'framer-motion';

const View2Angry = ({ onBack }) => {
    return (
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl text-center border-4 border-red-500">
            <div className="mb-6">
                {/* Placeholder for Angry Cat */}
                <img
                    src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDlxaXlya3Jzdjd0cDJrc2kwbXNodGNiMzF6MGNyNGZ5a3RxZm96MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GAXXHdS0zXawVLOJLY/giphy.gif" // You might want to find a better angry cat gif
                    alt="Angry Cat"
                    className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg mb-4 bg-gray-200"
                />
                <h1 className="text-3xl font-bold text-red-600 font-nunito leading-tight">
                    How Dare You! <br /> It's too late to say no now!
                </h1>
            </div>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onBack}
                className="bg-red-500 text-white px-8 py-3 rounded-full font-bold text-xl shadow-lg hover:bg-red-600 transition-colors mt-4"
            >
                Go Back
            </motion.button>
        </div>
    );
};

export default View2Angry;
