import React from 'react';
import { Link } from 'react-router-dom';
import './RebeccaOConnerPage.css';

const RebeccaOConnerPage = () => {
  return (
    <div className="rebecca-page">
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

      {/* Hero Section - Above the Fold with Volcano Background */}
      <section 
        className="rebecca-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${process.env.PUBLIC_URL}/izalco-volcano.jpg)`
        }}
      >
        <div className="rebecca-hero-content">
          <h1 className="rebecca-hero-title">Treats no tan típicos</h1>
          <p className="rebecca-hero-subtitle">Postres de gringolandía y más allá, hechos en El Salvador 🇸🇻 🇺🇸 🌍</p>
        </div>
      </section>

      {/* Clickable Icons Grid */}
      <div className="rebecca-icons-container">
        <div className="rebecca-icons-grid">
          <div className="rebecca-icon-card" onClick={() => console.log('Item 1 clicked')}>
            <div className="icon-image-placeholder">
              <span>Photo</span>
            </div>
            <h3 className="icon-title">Treat 1 <span className="icon-emoji">🍪</span></h3>
          </div>

          <div className="rebecca-icon-card" onClick={() => console.log('Item 2 clicked')}>
            <div className="icon-image-placeholder">
              <span>Photo</span>
            </div>
            <h3 className="icon-title">Treat 2 <span className="icon-emoji">🍫</span></h3>
          </div>

          <div className="rebecca-icon-card" onClick={() => console.log('Item 3 clicked')}>
            <div className="icon-image-placeholder">
              <span>Photo</span>
            </div>
            <h3 className="icon-title">Treat 3 <span className="icon-emoji">🧁</span></h3>
          </div>

          <div className="rebecca-icon-card" onClick={() => console.log('Item 4 clicked')}>
            <div className="icon-image-placeholder">
              <span>Photo</span>
            </div>
            <h3 className="icon-title">Treat 4 <span className="icon-emoji">🍰</span></h3>
          </div>

          <div className="rebecca-icon-card" onClick={() => console.log('Item 5 clicked')}>
            <div className="icon-image-placeholder">
              <span>Photo</span>
            </div>
            <h3 className="icon-title">Treat 5 <span className="icon-emoji">🍩</span></h3>
          </div>

          <div className="rebecca-icon-card" onClick={() => console.log('Item 6 clicked')}>
            <div className="icon-image-placeholder">
              <span>Photo</span>
            </div>
            <h3 className="icon-title">Treat 6 <span className="icon-emoji">🍭</span></h3>
          </div>

          <div className="rebecca-icon-card" onClick={() => console.log('Item 7 clicked')}>
            <div className="icon-image-placeholder">
              <span>Photo</span>
            </div>
            <h3 className="icon-title">Treat 7 <span className="icon-emoji">🎂</span></h3>
          </div>

          <div className="rebecca-icon-card" onClick={() => console.log('Item 8 clicked')}>
            <div className="icon-image-placeholder">
              <span>Photo</span>
            </div>
            <h3 className="icon-title">Treat 8 <span className="icon-emoji">🥧</span></h3>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="rebecca-content">
        <div className="rebecca-section">
          <h2>About Our Treats</h2>
          <p>
            Experience the authentic flavors of El Salvador with our traditional sweet treats. 
            Each creation is crafted with love, bringing together centuries-old recipes with 
            a modern twist.
          </p>
          <p>
            From the volcanic landscapes to your table, we deliver the essence of 
            Salvadoran sweetness in every bite.
          </p>
        </div>

        <div className="rebecca-section">
          <h2>Our Story</h2>
          <p>
            Inspired by the rich cultural heritage of El Salvador, our treats típicos 
            celebrate the vibrant flavors and traditions passed down through generations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RebeccaOConnerPage;