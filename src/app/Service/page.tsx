"use client"
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';

export default function Service() {
    useEffect(() => {
        const handleScroll = () => {
            const cards = document.querySelectorAll('.card-container');
            const scrollY = window.scrollY || window.pageYOffset;
            
            cards.forEach((card, index) => {
                card.style.transform = `translateY(-${scrollY * (index + 1) * 0.2}px)`;
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card-stack">
                <motion.div className="card-container mt-96 h-60 w-80 bg-blue-200 mb-4  p-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                    <div className="card">Card 1</div>
                </motion.div>
                <motion.div className="card-container h-60 w-80 bg-green-200 mb-4  p-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                    <div className="card">Card 2</div>
                </motion.div>
                <motion.div className="card-container h-60 w-80 bg-yellow-200 mb-4  p-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                    <div className="card">Card 3</div>
                </motion.div>
                <motion.div className="card-container h-60 w-80 bg-red-200 mb-4  p-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                    <div className="card">Card 4</div>
                </motion.div>
                <motion.div className="card-container h-60 w-80 bg-purple-200 mb-4 p-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                    <div className="card">Card 5</div>
                </motion.div>
            </div>
        </div>
    );
}
