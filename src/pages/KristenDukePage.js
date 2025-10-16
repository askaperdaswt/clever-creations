import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './KristenDukePage.css';

const LOLLIPOP_COLORS = [
  { colors: ['#ff1493', '#ffffff'], points: 10, name: 'Pink' },
  { colors: ['#ff6347', '#ffffff'], points: 15, name: 'Red' },
  { colors: ['#ffd700', '#ffffff'], points: 20, name: 'Gold' },
  { colors: ['#00ff00', '#ffffff'], points: 25, name: 'Green' },
  { colors: ['#1e90ff', '#ffffff'], points: 30, name: 'Blue' },
  { colors: ['#9370db', '#ffffff'], points: 50, name: 'Purple' },
];

const KristenDukePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [lollipops, setLollipops] = useState([]);
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [highScore, setHighScore] = useState(0);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Define spawnLollipop function before useEffects that use it
  const spawnLollipop = useCallback(() => {
    const colorData = LOLLIPOP_COLORS[Math.floor(Math.random() * LOLLIPOP_COLORS.length)];
    const size = Math.random() * 0.6 + 0.6; // 0.6 to 1.2
    
    // Random position avoiding edges
    const x = Math.random() * (window.innerWidth - 200) + 100;
    const y = Math.random() * (window.innerHeight - 300) + 150;

    const newLollipop = {
      id: Date.now() + Math.random(),
      x,
      y,
      size,
      isPercent: false,
      colorData,
      spawnTime: Date.now()
    };

    setLollipops(prev => [...prev, newLollipop]);
  }, []);

  // Game timer
  useEffect(() => {
    if (!gameActive || timeLeft <= 0) {
      if (timeLeft <= 0 && gameActive) {
        setGameActive(false);
        if (score > highScore) {
          setHighScore(score);
        }
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [gameActive, timeLeft, score, highScore]);

  // Spawn lollipops during game
  useEffect(() => {
    if (!gameActive) return;

    const spawnInterval = setInterval(() => {
      spawnLollipop();
    }, 1500); // Spawn every 1.5 seconds

    return () => clearInterval(spawnInterval);
  }, [gameActive, spawnLollipop]);

  // Auto-remove lollipops after lifetime
  useEffect(() => {
    if (!gameActive) return;

    const checkInterval = setInterval(() => {
      const now = Date.now();
      setLollipops(prev => prev.filter(lollipop => now - lollipop.spawnTime < 4000));
    }, 100);

    return () => clearInterval(checkInterval);
  }, [gameActive]);

  const startGame = () => {
    setGameActive(true);
    setScore(0);
    setTimeLeft(60);
    setLollipops([]);
  };

  const handleLollipopClick = (lollipopId, points) => {
    if (!gameActive) return;
    
    setScore(prev => prev + points);
    setLollipops(prev => prev.filter(l => l.id !== lollipopId));
  };

  const calculateTilt = (lollipopX, lollipopY) => {
    // Calculate distance from lollipop to mouse
    const deltaX = mousePosition.x - lollipopX;
    const deltaY = mousePosition.y - lollipopY;
    
    // Calculate tilt angles (max 30 degrees in each direction)
    const maxTilt = 30;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const tiltFactor = Math.min(distance / 300, 1); // Normalize distance
    
    // rotateX tilts forward/backward (based on Y distance)
    const rotateX = -(deltaY / distance) * maxTilt * tiltFactor;
    
    // rotateY tilts left/right (based on X distance)
    const rotateY = (deltaX / distance) * maxTilt * tiltFactor;
    
    return { rotateX, rotateY };
  };

  return (
    <div className="kristen-page">
      {/* Game UI */}
      <div className="game-ui">
        <div className="game-stats">
          <div className="stat-box">
            <span className="stat-label">Score</span>
            <span className="stat-value">{score}</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">Time</span>
            <span className="stat-value">{timeLeft}s</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">High Score</span>
            <span className="stat-value">{highScore}</span>
          </div>
        </div>
        
        {!gameActive && (
          <div className="game-start-overlay">
            <div className="game-start-panel">
              <h2>🍭 Lollipop Catcher! 🍭</h2>
              <p>Click the lollipops to collect them before they disappear!</p>
              <div className="point-legend">
                <div><span style={{color: '#ff1493'}}>●</span> Pink = 10pts</div>
                <div><span style={{color: '#ff6347'}}>●</span> Red = 15pts</div>
                <div><span style={{color: '#ffd700'}}>●</span> Gold = 20pts</div>
                <div><span style={{color: '#00ff00'}}>●</span> Green = 25pts</div>
                <div><span style={{color: '#1e90ff'}}>●</span> Blue = 30pts</div>
                <div><span style={{color: '#9370db'}}>●</span> Purple = 50pts</div>
              </div>
              <button className="start-button" onClick={startGame}>
                {score > 0 ? 'Play Again' : 'Start Game'}
              </button>
              {score > 0 && <p className="final-score">Final Score: {score}</p>}
            </div>
          </div>
        )}
      </div>

      {/* Render all lollipops */}
      {lollipops.map((lollipop) => {
        const posX = lollipop.isPercent ? `${lollipop.x}%` : `${lollipop.x}px`;
        const posY = lollipop.isPercent ? `${lollipop.y}%` : `${lollipop.y}px`;
        const actualX = lollipop.isPercent 
          ? (window.innerWidth * lollipop.x) / 100 
          : lollipop.x;
        const actualY = lollipop.isPercent 
          ? (window.innerHeight * lollipop.y) / 100 
          : lollipop.y;
        const { rotateX, rotateY } = calculateTilt(actualX, actualY);
        
        const age = Date.now() - lollipop.spawnTime;
        const lifetime = 4000;
        const opacity = age > lifetime - 1000 ? (lifetime - age) / 1000 : 1;

        // Create conic gradient for swirly pattern
        const color1 = lollipop.colorData.colors[0];
        const color2 = lollipop.colorData.colors[1];
        const swirlGradient = `conic-gradient(from 0deg, ${color1} 0deg 30deg, ${color2} 30deg 60deg, ${color1} 60deg 90deg, ${color2} 90deg 120deg, ${color1} 120deg 150deg, ${color2} 150deg 180deg, ${color1} 180deg 210deg, ${color2} 210deg 240deg, ${color1} 240deg 270deg, ${color2} 270deg 300deg, ${color1} 300deg 330deg, ${color2} 330deg 360deg)`;

        return (
          <div
            key={lollipop.id}
            className="kristen-lollipop clickable-lollipop"
            style={{
              left: posX,
              top: posY,
              transform: `translate(-50%, -100%) scale(${lollipop.size}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              opacity: opacity,
              pointerEvents: gameActive ? 'auto' : 'none',
            }}
            onClick={() => handleLollipopClick(lollipop.id, lollipop.colorData.points)}
          >
            <div className="lollipop-candy" style={{ background: swirlGradient }}>
              <div className="lollipop-spiral"></div>
              <div className="point-badge">+{lollipop.colorData.points}</div>
            </div>
            <div className="lollipop-stick"></div>
          </div>
        );
      })}

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="kristen-content">
        <h1>Kristen Duke</h1>
        <p className="kristen-subtitle">Sweet Treats Specialist</p>
      </div>
    </div>
  );
};

export default KristenDukePage;