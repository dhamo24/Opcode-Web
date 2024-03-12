import React from 'react';

export default function Service() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card-stack">
                <div className="card-container bg-blue-200 mb-4 w-screen h-80 p-10">
                    <div className="card">Card 1</div>
                </div>
                <div className="card-container bg-green-200 mb-4 w-screen h-80 p-10">
                    <div className="card">Card 2</div>
                </div>
                <div className="card-container bg-yellow-200 mb-4 w-screen h-80 p-10">
                    <div className="card">Card 3</div>
                </div>
                <div className="card-container bg-red-200 mb-4 w-screen h-80 p-10">
                    <div className="card">Card 4</div>
                </div>
                <div className="card-container bg-purple-200 mb-4 w-screen h-80 p-10    ">
                    <div className="card">Card 5</div>
                </div>
            </div>
        </div>
    );
}
