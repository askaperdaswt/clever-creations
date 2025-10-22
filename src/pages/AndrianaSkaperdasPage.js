import React from 'react';
import { Link } from 'react-router-dom';
import './AndrianaSkaperdasPage.css';

const AndrianaSkaperdasPage = () => {
  const candyImages = [
    'https://images.unsplash.com/photo-1500353391678-d7b57979d6d8?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1505252585461-04db1eb84625?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1541782814453-5df8c5ec8260?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1526318472350-3b1a69b4b5c0?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800&auto=format&fit=crop'
  ];
  return (
    <div className="andriana-page">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>
      <div className="andriana-content">
        <h1>Andriana Skaperdas</h1>
        <div className="profile-pic" aria-label="Profile picture placeholder" />
        <h2 className="candy-section-title">Candy Gallery</h2>
        <div className="candy-grid">
          {candyImages.map((src, index) => (
            <div className="candy-tile" key={index}>
              <img src={src} alt="Candy" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AndrianaSkaperdasPage;