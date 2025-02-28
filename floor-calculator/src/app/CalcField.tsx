"use client"
import React, { useState } from "react";

const FlooringCalculator: React.FC = () => {
    const [floorLength, setFloorLength] = useState<number>(0);
    const [floorWidth, setFloorWidth] = useState<number>(0);
    const [boardLength, setBoardLength] = useState<number>(0);
    const [boardWidth, setBoardWidth] = useState<number>(0);
    const [numBoards, setNumBoards] = useState<number>(0);

    const calculateBoards = () => {
        const floorArea = floorLength * floorWidth;
        const boardArea = boardLength * boardWidth;
        setNumBoards(Math.ceil(floorArea / boardArea)); // Rounds up to the nearest whole number
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
            <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">Flooring Board Calculator</h1>

            <div className="space-y-4 w-full max-w-md">
                <div className="flex flex-col space-y-2">
                    <input
                        type="number"
                        placeholder="Floor Length (m)"
                        onChange={(e) => setFloorLength(parseFloat(e.target.value))}
                        className="text-black p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="number"
                        placeholder="Floor Width (m)"
                        onChange={(e) => setFloorWidth(parseFloat(e.target.value))}
                        className="text-black p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="number"
                        placeholder="Board Length (m)"
                        onChange={(e) => setBoardLength(parseFloat(e.target.value))}
                        className="text-black p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="number"
                        placeholder="Board Width (m)"
                        onChange={(e) => setBoardWidth(parseFloat(e.target.value))}
                        className="text-black p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    onClick={calculateBoards}
                    className="w-full p-3 mt-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Calculate
                </button>
            </div>

            {numBoards > 0 && (
                <div className="mt-6 w-full max-w-md text-center">
                    <h2 className="text-xl font-semibold text-gray-700">Boards Needed: {numBoards}</h2>
                    <div className="mt-4 grid grid-cols-3 gap-4">
                        {Array(numBoards)
                            .fill(null)
                            .map((_, index) => (
                                <img
                                    key={index}
                                    src="https://via.placeholder.com/150" // Replace with actual image path
                                    alt="Board"
                                    className="w-full h-auto object-cover rounded-md"
                                />
                            ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FlooringCalculator;
