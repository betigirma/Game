import React from 'react';

const Scoreboard = ({ score, bestScore }) => {
  return (
    <div className="flex justify-around w-full bg-blue-600 text-white p-4">
      <div>
        <h3 className="text-xl">Current Score: {score}</h3>
      </div>
      <div>
        <h3 className="text-xl">Best Score: {bestScore}</h3>
      </div>
    </div>
  );
};

export default Scoreboard;
