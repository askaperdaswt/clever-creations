import React, { useState, useEffect } from 'react';
import styles from './CandyGame.module.css';

const CandyGame = () => {
  const candyEmojis = ['🍭', '🍬', '🍫', '🧁', '🍪', '🍩'];
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [score, setScore] = useState(0);

  // Initialize game
  useEffect(() => {
    const shuffledCards = [...candyEmojis, ...candyEmojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({ id: index, emoji }));
    setCards(shuffledCards);
  }, [candyEmojis]);

  // Handle card click
  const handleCardClick = (id) => {
    if (flipped.length === 2 || flipped.includes(id) || matched.includes(id)) return;
    
    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [firstId, secondId] = newFlipped;
      const firstCard = cards.find(card => card.id === firstId);
      const secondCard = cards.find(card => card.id === secondId);

      if (firstCard.emoji === secondCard.emoji) {
        setMatched([...matched, firstId, secondId]);
        setScore(score + 1);
      }

      setTimeout(() => setFlipped([]), 1000);
    }
  };

  // Check if game is won
  useEffect(() => {
    if (matched.length === cards.length && cards.length > 0) {
      alert('Congratulations! You matched all the candies! 🎉');
    }
  }, [matched, cards]);

  // Reset game
  const resetGame = () => {
    const shuffledCards = [...candyEmojis, ...candyEmojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({ id: index, emoji }));
    setCards(shuffledCards);
    setFlipped([]);
    setMatched([]);
    setScore(0);
  };

  return (
    <div className={styles.gameContainer}>
      <div className={styles.gameHeader}>
        <h3>Sweet Memory Match</h3>
        <div className={styles.gameInfo}>
          <span>Matches: {score} / 6</span>
          <button onClick={resetGame} className={styles.resetButton}>New Game</button>
        </div>
      </div>
      <div className={styles.gameGrid}>
        {cards.map(card => (
          <div
            key={card.id}
            className={`${styles.card} ${
              flipped.includes(card.id) || matched.includes(card.id)
                ? styles.flipped
                : ''
            }`}
            onClick={() => handleCardClick(card.id)}
          >
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>?</div>
              <div className={styles.cardBack}>{card.emoji}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandyGame;
