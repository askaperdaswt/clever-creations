import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PremRamaniPage.css';

const PremRamaniPage = () => {
  const [lollipopColor, setLollipopColor] = useState('#ff6b9d');
  const [stickColor, setStickColor] = useState('#8b4513');

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
                
                {/* Lollipop Circle */}
                <circle
                  cx="150"
                  cy="100"
                  r="80"
                  fill={lollipopColor}
                  stroke="#fff"
                  strokeWidth="3"
                  filter="url(#shadow)"
                />
                
                {/* Spiral pattern */}
                <path
                  d="M 150 20 Q 190 50, 180 100 Q 160 140, 130 120 Q 100 90, 120 70 Q 140 50, 150 60"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.4)"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                
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