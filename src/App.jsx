import React, { useState, useEffect } from 'react';
import GameBoard from './components/GameBoard';
import Scoreboard from './components/Scoreboard';

const App = () => {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    // Use an external API, here I use PokeAPI to get Pokémon images
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12');
    const data = await response.json();

    const fetchedCards = data.results.map((pokemon, index) => ({
      id: index,
      name: pokemon.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
      clicked: false
    }));

    setCards(fetchedCards);
  };

  const shuffleCards = () => {
    let shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  };

  const handleCardClick = (id) => {
    const updatedCards = cards.map(card => {
      if (card.id === id) {
        if (!card.clicked) {
          card.clicked = true;
          setScore(score + 1);
          if (score >= bestScore) setBestScore(score + 1);
        } else {
          resetGame();
        }
      }
      return card;
    });
    setCards(updatedCards);
    shuffleCards();
  };

  const resetGame = () => {
    const resetCards = cards.map(card => ({ ...card, clicked: false }));
    setCards(resetCards);
    setScore(0);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Scoreboard score={score} bestScore={bestScore} />
      <GameBoard cards={cards} onCardClick={handleCardClick} />
    </div>
  );
};

export default App;
