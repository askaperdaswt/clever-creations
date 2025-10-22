import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PremRamaniPage.css';

const PremRamaniPage = () => {
  const [lollipopColor, setLollipopColor] = useState('#ff6b9d');
  const [stickColor, setStickColor] = useState('#8b4513');
  const [selectedDesign, setSelectedDesign] = useState('round');

  const colorOptions = [
    { name: 'Pink', value: '#ff6b9d' },
    { name: 'Purple', value: '#a29bfe' },
    { name: 'Blue', value: '#74b9ff' },
    { name: 'Green', value: '#55efc4' },
    { name: 'Yellow', value: '#ffeaa7' },
    { name: 'Orange', value: '#fab1a0' },
    { name: 'Red', value: '#ff7675' },
    { name: 'Mint', value: '#81ecec' },
  ];

  const stickOptions = [
    { name: 'Brown', value: '#8b4513' },
    { name: 'White', value: '#f5f5f5' },
    { name: 'Red', value: '#ff6b6b' },
    { name: 'Blue', value: '#4a90e2' },
  ];

  const designOptions = [
    { name: 'Round', value: 'round', icon: '⭕' },
    { name: 'Heart', value: 'heart', icon: '💗' },
    { name: 'Star', value: 'star', icon: '⭐' },
    { name: 'Flower', value: 'flower', icon: '🌸' },
    { name: 'Square', value: 'square', icon: '🟦' },
    { name: 'Swirl', value: 'swirl', icon: '🌀' },
  ];

  // Render different lollipop designs based on selected design
  const renderLollipop = () => {
    switch (selectedDesign) {
      case 'round':
        return (
          <>
            <circle
              cx="150"
              cy="100"
              r="80"
              fill={lollipopColor}
              stroke="#fff"
              strokeWidth="3"
              filter="url(#shadow)"
            />
            <path
              d="M 150 20 Q 190 50, 180 100 Q 160 140, 130 120 Q 100 90, 120 70 Q 140 50, 150 60"
              fill="none"
              stroke="rgba(255, 255, 255, 0.4)"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </>
        );
      
      case 'heart':
        return (
          <>
            <path
              d="M 150,140 C 150,140 90,110 90,70 C 90,40 110,30 130,40 C 140,45 150,55 150,55 C 150,55 160,45 170,40 C 190,30 210,40 210,70 C 210,110 150,140 150,140 Z"
              fill={lollipopColor}
              stroke="#fff"
              strokeWidth="3"
              filter="url(#shadow)"
            />
            <circle cx="120" cy="65" r="8" fill="rgba(255, 255, 255, 0.5)" />
            <circle cx="180" cy="65" r="8" fill="rgba(255, 255, 255, 0.5)" />
          </>
        );
      
      case 'star':
        return (
          <>
            <path
              d="M 150,30 L 170,90 L 230,90 L 180,125 L 200,185 L 150,150 L 100,185 L 120,125 L 70,90 L 130,90 Z"
              fill={lollipopColor}
              stroke="#fff"
              strokeWidth="3"
              filter="url(#shadow)"
            />
            <circle cx="150" cy="100" r="12" fill="rgba(255, 255, 255, 0.5)" />
          </>
        );
      
      case 'flower':
        return (
          <>
            <circle cx="150" cy="60" r="25" fill={lollipopColor} stroke="#fff" strokeWidth="2" filter="url(#shadow)" />
            <circle cx="110" cy="85" r="25" fill={lollipopColor} stroke="#fff" strokeWidth="2" filter="url(#shadow)" />
            <circle cx="190" cy="85" r="25" fill={lollipopColor} stroke="#fff" strokeWidth="2" filter="url(#shadow)" />
            <circle cx="120" cy="130" r="25" fill={lollipopColor} stroke="#fff" strokeWidth="2" filter="url(#shadow)" />
            <circle cx="180" cy="130" r="25" fill={lollipopColor} stroke="#fff" strokeWidth="2" filter="url(#shadow)" />
            <circle cx="150" cy="100" r="30" fill={lollipopColor} stroke="#fff" strokeWidth="3" filter="url(#shadow)" />
            <circle cx="150" cy="100" r="15" fill="rgba(255, 255, 255, 0.5)" />
          </>
        );
      
      case 'square':
        return (
          <>
            <rect
              x="80"
              y="40"
              width="140"
              height="140"
              rx="10"
              fill={lollipopColor}
              stroke="#fff"
              strokeWidth="3"
              filter="url(#shadow)"
            />
            <rect x="100" y="60" width="30" height="30" rx="5" fill="rgba(255, 255, 255, 0.4)" />
            <rect x="170" y="60" width="30" height="30" rx="5" fill="rgba(255, 255, 255, 0.4)" />
            <rect x="100" y="130" width="30" height="30" rx="5" fill="rgba(255, 255, 255, 0.4)" />
            <rect x="170" y="130" width="30" height="30" rx="5" fill="rgba(255, 255, 255, 0.4)" />
          </>
        );
      
      case 'swirl':
        return (
          <>
            <circle
              cx="150"
              cy="100"
              r="80"
              fill={lollipopColor}
              stroke="#fff"
              strokeWidth="3"
              filter="url(#shadow)"
            />
            <path
              d="M 150 100 Q 150 60, 180 70 Q 200 80, 190 110 Q 180 140, 150 140 Q 115 140, 105 110 Q 95 75, 125 60 Q 150 50, 165 65"
              fill="none"
              stroke="rgba(255, 255, 255, 0.6)"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <circle cx="150" cy="100" r="15" fill="rgba(255, 255, 255, 0.4)" />
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>
      <div className="customizer-container">
        <h1 className="customizer-title">🍭 Lollipop Customizer</h1>
        <p className="customizer-subtitle">Create your perfect lollipop!</p>
        
        <div className="customizer-content">
          {/* Preview Section */}
          <div className="preview-section">
            <div className="preview-window">
              <svg
                width="300"
                height="400"
                viewBox="0 0 300 400"
                xmlns="http://www.w3.org/2000/svg"
                className="lollipop-svg"
              >
                {/* Lollipop Stick */}
                <rect
                  x="145"
                  y="180"
                  width="10"
                  height="200"
                  fill={stickColor}
                  rx="5"
                />
                
                {/* Lollipop Design */}
                {renderLollipop()}
                
                {/* Shadow filter */}
                <defs>
                  <filter id="shadow">
                    <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.3"/>
                  </filter>
                </defs>
              </svg>
            </div>
          </div>

          {/* Controls Section */}
          <div className="controls-section">
            <div className="control-group">
              <h3>Design Shape</h3>
              <div className="design-grid">
                {designOptions.map((design) => (
                  <button
                    key={design.value}
                    className={`design-option ${selectedDesign === design.value ? 'active' : ''}`}
                    onClick={() => setSelectedDesign(design.value)}
                    title={design.name}
                  >
                    <span className="design-icon">{design.icon}</span>
                    <span className="design-name">{design.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="control-group">
              <h3>Lollipop Color</h3>
              <div className="color-grid">
                {colorOptions.map((color) => (
                  <button
                    key={color.value}
                    className={`color-option ${lollipopColor === color.value ? 'active' : ''}`}
                    style={{ backgroundColor: color.value }}
                    onClick={() => setLollipopColor(color.value)}
                    title={color.name}
                  >
                    {lollipopColor === color.value && '✓'}
                  </button>
                ))}
              </div>
            </div>

            <div className="control-group">
              <h3>Stick Color</h3>
              <div className="color-grid">
                {stickOptions.map((color) => (
                  <button
                    key={color.value}
                    className={`color-option ${stickColor === color.value ? 'active' : ''}`}
                    style={{ backgroundColor: color.value }}
                    onClick={() => setStickColor(color.value)}
                    title={color.name}
                  >
                    {stickColor === color.value && '✓'}
                  </button>
                ))}
              </div>
            </div>

            <div className="action-buttons">
              <button className="btn-primary">Add to Cart</button>
              <button className="btn-secondary">Save Design</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremRamaniPage;