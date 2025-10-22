import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MalekElHagePage.css';

const MalekElHagePage = () => {
  // Music player state
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  // Mini-game state
  const [gameStarted, setGameStarted] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [foundGiraffe, setFoundGiraffe] = useState(false);
  const [foundHippo, setFoundHippo] = useState(false);
  const [gameGrid, setGameGrid] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const gameTimerRef = useRef(null);

  // Animal emojis for the game - removed giraffe and hippo from distractors
  const distractorAnimals = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🙈', '🙉', '🙊', '🐒', '🐔', '🐧', '🐦', '🐤', '🐣', '🐥', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐞', '🐜', '🦟', '🕷️', '🦂', '🐢', '🐍', '🦎', '🦕', '🦖', '🐙', '🦑', '🦀', '🦞', '🐠', '🐟', '🐡', '🐬', '🐳', '🐋', '🦈', '🐊', '🐅', '🐆', '🦓', '🦏', '🐘', '🦘', '🦡', '🐪', '🐫', '🦙'];

  // Initialize game grid
  const initializeGame = () => {
    const gridSize = 48; // 8x6 grid
    const animals = [...distractorAnimals];
    const grid = [];
    
    // Add giraffe and hippo at random positions
    const giraffePos = Math.floor(Math.random() * gridSize);
    let hippoPos = Math.floor(Math.random() * gridSize);
    while (hippoPos === giraffePos) {
      hippoPos = Math.floor(Math.random() * gridSize);
    }
    
    // Fill grid with random animals
    for (let i = 0; i < gridSize; i++) {
      if (i === giraffePos) {
        grid.push({ emoji: '🦒', type: 'giraffe', id: i });
      } else if (i === hippoPos) {
        grid.push({ emoji: '🦛', type: 'hippo', id: i });
      } else {
        const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
        grid.push({ emoji: randomAnimal, type: 'distractor', id: i });
      }
    }
    
    setGameGrid(grid);
    setGameStarted(true);
    setGameOver(false);
    setGameWon(false);
    setFoundGiraffe(false);
    setFoundHippo(false);
    setTimeLeft(30);
    setAttempts(0);
    
    // Start timer
    gameTimerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          endGame(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Handle animal click
  const handleAnimalClick = (animal) => {
    if (!gameStarted || gameOver) return;
    
    setAttempts(prev => prev + 1);
    
    if (animal.type === 'giraffe' && !foundGiraffe) {
      setFoundGiraffe(true);
      if (foundHippo) {
        endGame(true);
      }
    } else if (animal.type === 'hippo' && !foundHippo) {
      setFoundHippo(true);
      if (foundGiraffe) {
        endGame(true);
      }
    }
  };

  // End game
  const endGame = (won) => {
    setGameStarted(false);
    setGameOver(true);
    setGameWon(won);
    if (gameTimerRef.current) {
      clearInterval(gameTimerRef.current);
    }
  };

  // Reset game
  const resetGame = () => {
    setGameStarted(false);
    setGameOver(false);
    setGameWon(false);
    setFoundGiraffe(false);
    setFoundHippo(false);
    setGameGrid([]);
    setTimeLeft(30);
    setAttempts(0);
    if (gameTimerRef.current) {
      clearInterval(gameTimerRef.current);
    }
  };

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (gameTimerRef.current) {
        clearInterval(gameTimerRef.current);
      }
    };
  }, []);

  // Update progress
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', () => setIsPlaying(false));

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, []);

  // Music controls
  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(e => console.log('Audio play failed:', e));
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="malek-page">
      {/* Clean Header */}
      <header className="cedric-header">
        <div className="header-container">
          <div className="header-left">
            <Link to="/" className="back-link">← Back to Home</Link>
          </div>
          <div className="header-center">
            <h1 className="brand-name">Malek El Hage</h1>
            <p className="brand-subtitle">Artisan Sweet Maker</p>
          </div>
          <div className="header-right">
            <div className="header-info">
              <span className="availability">Available for pickup</span>
              <span className="hours">24h minimum notice</span>
            </div>
          </div>
        </div>
      </header>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        loop
        preload="metadata"
      >
        {/* Replace the src below with your royalty-free music URL */}
        <source src="https://archive.org/download/JSBach-BWV1007CelloSuiteNo1InGMajor/JSBach-BWV1007CelloSuiteNo1InGMajor.mp3" type="audio/mpeg" />
        {/* Alternative placeholder - Classical music from Internet Archive (public domain) */}
        Your browser does not support the audio element.
      </audio>

      {/* Music Player Controls */}
      <div className="malek-music-player">
        <div className="music-info">
          <span className="music-icon">🎵</span>
          <span className="music-title">Sweet Coding Vibes</span>
        </div>
        <div className="music-controls">
          <button onClick={togglePlay} className="play-button">
            {isPlaying ? '⏸️' : '▶️'}
          </button>
          <div className="progress-container">
            <span className="time">{formatTime(currentTime)}</span>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: duration ? `${(currentTime / duration) * 100}%` : '0%' }}
              ></div>
            </div>
            <span className="time">{formatTime(duration)}</span>
          </div>
          <div className="volume-control">
            <span className="volume-icon">🔊</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="volume-slider"
            />
          </div>
        </div>
      </div>

      {/* Hero Section - Cedric Style */}
      <section className="cedric-hero">
        <div className="hero-content">
          <div className="hero-left">
            <div className="avatar-display">
              <span className="main-avatar">🦒</span>
              <span className="secondary-avatar">🍫</span>
            </div>
          </div>
          <div className="hero-center">
            <h2 className="hero-title">Handcrafted Sweet Creations</h2>
            <p className="hero-subtitle">By pre-order or pickup</p>
            <p className="hero-description">Artisanal desserts crafted with precision and love</p>
          </div>
          <div className="hero-right">
            <div className="location-info">
              <p className="address">Local Sweet Shop</p>
              <p className="schedule">Available Daily</p>
              <p className="notice">🎵 Enjoy our background music!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Game Section */}
      <section className="mini-game-section">
        <div className="game-container">
          <div className="game-header">
            <h2>🎮 Sweet Animal Hunt!</h2>
            <p>Find the Giraffe 🦒 and Hippo 🦛 hidden among the animals to win a <strong>$4 OFF</strong> coupon!</p>
          </div>

          {!gameStarted && !gameOver && (
            <div className="game-start">
              <div className="game-instructions">
                <h3>How to Play:</h3>
                <ul>
                  <li>🔍 Find both the <strong>Giraffe 🦒</strong> and <strong>Hippo 🦛</strong></li>
                  <li>⏰ You have <strong>30 seconds</strong> to find them both</li>
                  <li>🎯 Click on the animals when you spot them</li>
                  <li>🎉 Win a <strong>$4 OFF</strong> coupon for your sweet treats!</li>
                </ul>
              </div>
              <button className="game-start-button" onClick={initializeGame}>
                🎮 Start Game
              </button>
            </div>
          )}

          {gameStarted && (
            <div className="game-active">
              <div className="game-status">
                <div className="game-timer">
                  <span className="timer-icon">⏰</span>
                  <span className="timer-text">Time: {timeLeft}s</span>
                </div>
                <div className="game-progress">
                  <span className={`found-indicator ${foundGiraffe ? 'found' : ''}`}>
                    🦒 {foundGiraffe ? '✅' : '❓'}
                  </span>
                  <span className={`found-indicator ${foundHippo ? 'found' : ''}`}>
                    🦛 {foundHippo ? '✅' : '❓'}
                  </span>
                </div>
                <div className="game-attempts">
                  Clicks: {attempts}
                </div>
              </div>
              
              <div className="game-grid">
                {gameGrid.map((animal) => (
                  <div
                    key={animal.id}
                    className={`game-animal ${
                      (animal.type === 'giraffe' && foundGiraffe) || 
                      (animal.type === 'hippo' && foundHippo) ? 'found' : ''
                    }`}
                    onClick={() => handleAnimalClick(animal)}
                  >
                    {animal.emoji}
                  </div>
                ))}
              </div>
            </div>
          )}

          {gameOver && (
            <div className="game-result">
              {gameWon ? (
                <div className="game-won">
                  <div className="celebration">🎉 🎊 🥳</div>
                  <h3>Congratulations! You Found Them Both!</h3>
                  <p>You found the Giraffe 🦒 and Hippo 🦛 in {attempts} clicks!</p>
                  
                  <div className="coupon-reward">
                    <div className="coupon-container">
                      <div className="coupon-header">
                        <h4>🎫 Your $4 OFF Coupon!</h4>
                      </div>
                      <div className="coupon-code">
                        <span className="promo-label">Promo Code:</span>
                        <span className="promo-code" onClick={() => {
                          navigator.clipboard.writeText('SWEET4OFF');
                          alert('Coupon code copied to clipboard! 🎉');
                        }}>
                          SWEET4OFF
                        </span>
                        <span className="copy-hint">Click to copy!</span>
                      </div>
                      <div className="coupon-details">
                        <p>✨ Use this code when ordering your Giraffe Tiramisu or Cinna-Hippo-Buns!</p>
                        <p>💝 Valid for one-time use • Expires in 30 days</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="game-lost">
                  <div className="consolation">😅 ⏰ 🦒🦛</div>
                  <h3>Time's Up!</h3>
                  <p>Don't worry, those sneaky animals are hard to spot!</p>
                  <p>You made {attempts} clicks. Try again for your $4 OFF coupon!</p>
                </div>
              )}
              
              <div className="game-actions">
                <button className="game-restart-button" onClick={resetGame}>
                  🔄 Play Again
                </button>
                {!gameWon && (
                  <button className="game-new-button" onClick={initializeGame}>
                    🎮 New Game
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Products Section - Cedric Style */}
      <section className="cedric-products">
        <div className="products-container">
          <div className="section-header">
            <h2>Our Seasonal Creations</h2>
            <p>Handcrafted desserts available by pre-order</p>
          </div>

          <div className="products-grid">
            
            {/* Giraffe Tiramisu */}
            <div className="product-card">
              <div className="product-image">
                <div className="image-placeholder giraffe-image">
                  <div className="image-overlay">
                    <span className="product-icon">🦒</span>
                    <span className="treat-icon">🍰</span>
                  </div>
                </div>
              </div>
              <div className="product-details">
                <h3 className="product-name">Giraffe Tiramisu</h3>
                <p className="product-description">
                  Coffee-soaked ladyfingers, mascarpone cream, giraffe-pattern cocoa dusting.
                </p>
                <div className="product-specs">
                  <span>— 30x40cm tray, serves 8-12, made fresh daily</span>
                </div>
                <div className="pricing-section">
                  <div className="price-row">
                    <span className="size">1 tray</span>
                    <span className="price">CAD $22.00</span>
                    <span className="notice">24h min.</span>
                    <button className="add-button" onClick={() => alert('WhatsApp: +1-XXX-XXX-XXXX or Email: malek@clevercreations.com to place your order!\n\n💡 Remember: Use coupon code SWEET4OFF for $4 off if you won the game!')}>
                      Add to order
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Cinna-Hippo-Buns */}
            <div className="product-card">
              <div className="product-image">
                <div className="image-placeholder hippo-image">
                  <div className="image-overlay">
                    <span className="product-icon">🦛</span>
                    <span className="treat-icon">🥐</span>
                  </div>
                </div>
              </div>
              <div className="product-details">
                <h3 className="product-name">Cinna-Hippo-Buns</h3>
                <p className="product-description">
                  Cinnamon buns with swirls of cinnamon sugar, cream cheese glaze.
                </p>
                <div className="product-specs">
                  <span>— 30x40cm tray, serves 8-12, baked fresh daily</span>
                </div>
                <div className="pricing-section">
                  <div className="price-row">
                    <span className="size">1 tray</span>
                    <span className="price">CAD $22.00</span>
                    <span className="notice">24h min.</span>
                    <button className="add-button" onClick={() => alert('WhatsApp: +1-XXX-XXX-XXXX or Email: malek@clevercreations.com to place your order!\n\n💡 Remember: Use coupon code SWEET4OFF for $4 off if you won the game!')}>
                      Add to order
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="additional-info">
        <div className="info-container">
          <div className="info-grid">
            
            <div className="info-card">
              <h3>About Our Sweets</h3>
              <p>
                Every dessert is handcrafted with premium ingredients and traditional techniques. 
                We believe in creating memorable experiences through exceptional flavors and 
                artistic presentation.
              </p>
              <ul>
                <li>Premium imported ingredients</li>
                <li>Traditional artisan techniques</li>
                <li>Fresh daily preparation</li>
                <li>Custom orders available</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>Special Events</h3>
              <p>
                Make your celebrations unforgettable with our bespoke dessert creations. 
                We specialize in custom orders for weddings, birthdays, and corporate events.
              </p>
              <ul>
                <li>Wedding dessert tables</li>
                <li>Birthday celebrations</li>
                <li>Corporate catering</li>
                <li>Holiday specials</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>Artisan Process</h3>
              <p>
                Each creation follows time-honored recipes with modern precision. 
                From sourcing ingredients to final presentation, quality is our priority.
              </p>
              <ul>
                <li>24-hour preparation process</li>
                <li>Temperature-controlled storage</li>
                <li>Eco-friendly packaging</li>
                <li>Quality guarantee</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section - Cedric Style */}
      <section className="cedric-contact">
        <div className="contact-container">
          <div className="contact-header">
            <h2>Get In Touch</h2>
            <p>Order your artisan sweets today</p>
          </div>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <h4>Place Your Order</h4>
                <p>Email: <a href="mailto:malek@clevercreations.com">malek@clevercreations.com</a></p>
                <p>WhatsApp: <button onClick={() => alert('WhatsApp: +1-XXX-XXX-XXXX\n\nPlease include:\n• Product selection\n• Pickup date\n• Special requests')}>Send Message</button></p>
              </div>
              
              <div className="contact-item">
                <h4>Pickup & Delivery</h4>
                <p>Local area pickup available</p>
                <p>Delivery service within city limits</p>
                <p>Address provided with order confirmation</p>
              </div>
              
              <div className="contact-item">
                <h4>Operating Hours</h4>
                <div className="hours-list">
                  <div className="hours-row">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hours-row">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="hours-row">
                    <span>Sunday:</span>
                    <span>Closed (Orders accepted)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-notes">
              <h4>Order Information</h4>
              <ul>
                <li>Minimum 24 hours advance notice required</li>
                <li>Custom orders available for special events</li>
                <li>All products made fresh to order</li>
                <li>Payment upon pickup or delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MalekElHagePage;