import React from 'react';
import { Link } from 'react-router-dom';
import './WilliamsAbarcaPage.css';

const WilliamsAbarcaPage = () => {
  return (
    <div className="williams-page">
      <div className="williams-container">
        <Link to="/" className="williams-back-button">
          ← Back to Home
        </Link>

        {/* Hero Section */}
        <div className="williams-hero">
          <div className="williams-icon">✈️</div>
          <h1 className="williams-name">Will.I.am</h1>
          <p className="williams-title">Aviation Enthusiast & Creative Developer</p>
          <p className="williams-tagline">"Soaring to new heights, one adventure at a time"</p>
        </div>

        {/* Content Grid */}
        <div className="williams-content-grid">
          {/* About Me Card */}
          <div className="williams-card">
            <div className="williams-card-header">
              <span className="williams-card-icon">👋</span>
              <h2 className="williams-card-title">About Me</h2>
            </div>
            <div className="williams-card-content">
              <p>
                Welcome to my sweet corner of Clever Creations! I'm passionate about creating 
                delightful experiences that bring joy to people's lives. Whether it's through 
                innovative confections or creative digital solutions, I love making the world 
                a little sweeter.
              </p>
              <p>
                I believe in the power of attention to detail and the magic that happens when 
                creativity meets craftsmanship.
              </p>
            </div>
          </div>

          {/* Specialties Card */}
          <div className="williams-card">
            <div className="williams-card-header">
              <span className="williams-card-icon">🎨</span>
              <h2 className="williams-card-title">Specialties</h2>
            </div>
            <div className="williams-card-content">
              <ul>
                <li>Artisan Candy Creations</li>
                <li>Custom Sweet Designs</li>
                <li>Flavor Innovation</li>
                <li>Quality Craftsmanship</li>
                <li>Customer Experience</li>
              </ul>
            </div>
          </div>

          {/* Skills Card */}
          <div className="williams-card williams-full-width">
            <div className="williams-card-header">
              <span className="williams-card-icon">⚡</span>
              <h2 className="williams-card-title">Skills & Expertise</h2>
            </div>
            <div className="williams-card-content">
              <div className="williams-skills">
                <span className="williams-skill-tag">Creative Design</span>
                <span className="williams-skill-tag">Product Development</span>
                <span className="williams-skill-tag">Quality Assurance</span>
                <span className="williams-skill-tag">Team Collaboration</span>
                <span className="williams-skill-tag">Innovation</span>
                <span className="williams-skill-tag">Customer Focus</span>
                <span className="williams-skill-tag">Problem Solving</span>
                <span className="williams-skill-tag">Attention to Detail</span>
              </div>
            </div>
          </div>

          {/* Fun Facts Card */}
          <div className="williams-card">
            <div className="williams-card-header">
              <span className="williams-card-icon">🌟</span>
              <h2 className="williams-card-title">Fun Facts</h2>
            </div>
            <div className="williams-card-content">
              <div>
                <span className="williams-fun-facts">🍭 Favorite Candy: Lollipops</span>
                <span className="williams-fun-facts">🎵 Music Lover</span>
                <span className="williams-fun-facts">☕ Coffee Enthusiast</span>
                <span className="williams-fun-facts">🚀 Tech Geek</span>
                <span className="williams-fun-facts">📚 Lifelong Learner</span>
                <span className="williams-fun-facts">🎮 Gamer</span>
              </div>
            </div>
          </div>

          {/* Philosophy Card */}
          <div className="williams-card">
            <div className="williams-card-header">
              <span className="williams-card-icon">💭</span>
              <h2 className="williams-card-title">My Philosophy</h2>
            </div>
            <div className="williams-card-content">
              <p>
                Every creation is an opportunity to make someone's day better. I approach 
                each project with enthusiasm, dedication, and a commitment to excellence.
              </p>
              <p>
                Quality over quantity, creativity over convention, and joy in every detail.
              </p>
            </div>
          </div>

          {/* Contact Card */}
          <div className="williams-card williams-full-width">
            <div className="williams-card-header">
              <span className="williams-card-icon">📬</span>
              <h2 className="williams-card-title">Let's Connect</h2>
            </div>
            <div className="williams-card-content">
              <p style={{ textAlign: 'center', marginBottom: '1rem' }}>
                Interested in collaborating or just want to chat about sweets? I'd love to hear from you!
              </p>
              <div className="williams-contact-links">
                <a href="mailto:williams@clevercreations.com" className="williams-contact-button">
                  <span>📧</span> Email Me
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="williams-contact-button">
                  <span>💼</span> LinkedIn
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="williams-contact-button">
                  <span>🐙</span> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="williams-quote">
          "Life is short, eat dessert first... but make sure it's a quality dessert!"
        </div>
      </div>
    </div>
  );
};

export default WilliamsAbarcaPage;