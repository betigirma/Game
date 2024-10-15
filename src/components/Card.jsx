import React from 'react';

const Card = ({ card, onClick }) => {
  return (
    <div
      className="border-2 border-gray-300 p-4 bg-white shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <img src={card.image} alt={card.name} className="w-full h-auto" />
      <p className="text-center mt-2 capitalize">{card.name}</p>
    </div>
  );
};

export default Card;
