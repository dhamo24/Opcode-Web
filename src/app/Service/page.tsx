"use client"
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
                <div className="card-container mt-96 h-60 w-80 bg-blue-200 mb-4  p-10">
                    <div className="card">Card 1</div>
                </div>
                <div className="card-container h-60 w-80 bg-green-200 mb-4  p-10">
                    <div className="card">Card 2</div>
                </div>
                <div className="card-container h-60 w-80 bg-yellow-200 mb-4  p-10">
                    <div className="card">Card 3</div>
                </div>
                <div className="card-container h-60 w-80 bg-red-200 mb-4  p-10">
                    <div className="card">Card 4</div>
                </div>
                <div className="card-container h-60 w-80 bg-purple-200 mb-4 p-10">
                    <div className="card">Card 5</div>
                </div>
            </div>
        </div>
    );
}
