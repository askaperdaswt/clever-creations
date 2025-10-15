import React from 'react';
import { Link } from 'react-router-dom';

const HankThornhillPage = () => {
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
      <div style={{ padding: '2rem', paddingTop: '6rem', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🍩</div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#2d3436' }}>Hank Thornhill</h1>
          <p style={{ fontSize: '1.3rem', color: '#636e72', marginBottom: '2rem' }}>Sweet Treats Specialist</p>
          <div style={{
            background: 'linear-gradient(135deg, #ffeaa7, #fab1a0)',
            padding: '2rem',
            borderRadius: '15px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
          }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#2d3436' }}>
              Crafting delicious artisan donuts with creative flavors and premium ingredients.
              Each donut is handmade with care, bringing joy and sweetness to your day.
              From classic glazed to innovative seasonal specialties, there's something for everyone!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HankThornhillPage;