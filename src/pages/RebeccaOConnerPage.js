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
            <div className="icon-image-placeholder" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/crumbmuffin.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            </div>
            <h3 className="icon-title">Crumb Cupcakes <span className="icon-emoji">🗽</span></h3>
          </div>

          <div className="rebecca-icon-card" onClick={() => console.log('Item 2 clicked')}>
            <div className="icon-image-placeholder" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/choregbread.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            </div>
            <h3 className="icon-title">Choreg <span className="icon-emoji">🇦🇲</span></h3>
          </div>

          <div className="rebecca-icon-card" onClick={() => console.log('Item 3 clicked')}>
            <div className="icon-image-placeholder" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/poptart.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            </div>
            <h3 className="icon-title">Brown Sugar Pop Tart <span className="icon-emoji">🤍</span></h3>
          </div>

          <div className="rebecca-icon-card" onClick={() => console.log('Item 4 clicked')}>
            <div className="icon-image-placeholder" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/Caramelswirlbirthdaycake.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            </div>
            <h3 className="icon-title">Caramel Swirl Cake <span className="icon-emoji">🎂</span></h3>
          </div>

          <div className="rebecca-icon-card" onClick={() => console.log('Item 5 clicked')}>
            <div className="icon-image-placeholder" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/choreground.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            </div>
            <h3 className="icon-title">Choreg (round braid) <span className="icon-emoji">🇦🇲</span></h3>
          </div>

          <div className="rebecca-icon-card" onClick={() => console.log('Item 6 clicked')}>
            <div className="icon-image-placeholder" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/Lemoncheesecake.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            </div>
            <h3 className="icon-title">Lemon Cheesecake <span className="icon-emoji">🍰</span></h3>
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

      {/* Testimonials Section */}
      <div className="rebecca-content">
        <div className="rebecca-section">
          <h2>What People Are Saying</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">
                "These crumb cupcakes are absolutely divine! The perfect blend of American comfort and homemade love."
              </p>
              <p className="testimonial-author">- Sarah M.</p>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-text">
                "The choreg reminds me of my grandmother's recipe. Authentic and delicious!"
              </p>
              <p className="testimonial-author">- David A.</p>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-text">
                "Best pop tarts I've ever had! The brown sugar flavor is incredible."
              </p>
              <p className="testimonial-author">- Emily R.</p>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-text">
                "The caramel swirl cake was the hit of my birthday party. Everyone wanted the recipe!"
              </p>
              <p className="testimonial-author">- Michael T.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RebeccaOConnerPage;