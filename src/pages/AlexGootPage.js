import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AlexGootPage.module.css';
import CandyGame from '../components/CandyGame';

const AlexGootPage = () => {
  const specialties = [
    {
      icon: "🍭",
      title: "Lollipops",
      description: "Handcrafted artisanal lollipops in unique flavors"
    },
    {
      icon: "🍬",
      title: "Hard Candies",
      description: "Traditional and modern hard candy creations"
    },
    {
      icon: "🍫",
      title: "Chocolate Work",
      description: "Premium chocolate confections and truffles"
    }
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
      
      <div className={styles.pageContainer}>
        <div className={styles.content}>
          <div className={styles.profile}>
            <div className={styles.profileInfo}>
              <h1>Alex Goot</h1>
              <h2>Sweet Treats Specialist 🥕🍰</h2>
              <p>
                Passionate about creating unique and delightful candy experiences.
                Specializing in artisanal lollipops, hard candies, and premium chocolate work.
              </p>
            </div>
            <div className={styles.imageContainer}>
              <img 
                src="https://images.pexels.com/photos/1028704/pexels-photo-1028704.jpeg"
                alt="Vibrant Candy Store with Colorful Displays" 
                className={styles.shopImage}
              />
            </div>
          </div>

          <h2>My Specialties</h2>
          <div className={styles.specialties}>
            {specialties.map((specialty, index) => (
              <div key={index} className={styles.specialtyCard}>
                <div className={styles.icon}>{specialty.icon}</div>
                <h3>{specialty.title}</h3>
                <p>{specialty.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.gameSection}>
            <h2>Play Sweet Memory Match! 🎮</h2>
            <p>Test your memory with this candy-themed matching game!</p>
            <CandyGame />
          </div>

          <div className={styles.contactSection}>
            <h2>Get in Touch</h2>
            <p>Interested in custom candy creations? Let's make something sweet together!</p>
            <p>📧 alex@clevercreations.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlexGootPage;