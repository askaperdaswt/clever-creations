import React from 'react';
import { Link } from 'react-router-dom';

const AndrianaSkaperdasPage = () => {
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
      <div style={{ padding: '2rem', paddingTop: '6rem' }}>
        <h1>Andriana Skaperdas</h1>
      </div>
    </div>
  );
};

export default AndrianaSkaperdasPage;