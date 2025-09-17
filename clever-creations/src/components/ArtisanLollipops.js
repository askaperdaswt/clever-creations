import React from 'react';
import { Link } from 'react-router-dom';
import './ArtisanLollipops.css';

const ArtisanLollipops = () => {
  const popsicles = [
    {
      id: 1,
      name: "Mango Popsicle",
      emoji: "🥭",
      shape: "Mango-shaped with rounded bottom and pointed top",
      description: "Creamy tropical mango puree with a hint of lime zest. This popsicle captures the essence of a perfectly ripe mango with its smooth, velvety texture and natural sweetness. The mango shape makes it instantly recognizable and adds to the authentic tropical experience.",
      flavor: "Sweet, tangy, and refreshing with natural mango flavor"
    },
    {
      id: 2,
      name: "Strawberry Popsicle",
      emoji: "🍓",
      shape: "Heart-shaped with small seeds visible on the surface",
      description: "Made from fresh strawberry puree with real fruit seeds for authentic texture. This popsicle features the classic heart shape of a strawberry, complete with tiny seeds that add a delightful crunch. The vibrant red color and sweet-tart flavor will transport you to a summer berry patch.",
      flavor: "Sweet and slightly tart with natural strawberry essence"
    },
    {
      id: 3,
      name: "Banana Popsicle",
      emoji: "🍌",
      shape: "Curved banana shape with natural ridges and texture",
      description: "Creamy banana puree with a touch of vanilla and cinnamon. Shaped like a real banana with its characteristic curve and natural ridges, this popsicle offers a smooth, custard-like texture. Perfect for those who love the comforting taste of banana cream pie in a frozen treat.",
      flavor: "Rich, creamy, and naturally sweet with warm vanilla notes"
    },
    {
      id: 4,
      name: "Champagne Popsicle",
      emoji: "🥂",
      shape: "Elegant champagne flute with bubbles and effervescence",
      description: "Sophisticated champagne sorbet with real sparkling wine and edible gold leaf. Shaped like a champagne flute with delicate bubbles frozen in time, this popsicle offers an adult treat perfect for celebrations. The effervescent texture and elegant presentation make it a luxurious frozen dessert.",
      flavor: "Bubbly, crisp, and sophisticated with notes of citrus and toast"
    },
    {
      id: 5,
      name: "Aperol Spritz Popsicle",
      emoji: "🍹",
      shape: "Cocktail glass with layered colors and garnish",
      description: "Inspired by the classic Italian aperitif, this popsicle features layers of Aperol, prosecco, and soda water frozen into a cocktail glass shape. Topped with a frozen orange slice garnish, it captures the essence of a refreshing Aperol Spritz in frozen form. Perfect for summer evenings and sophisticated gatherings.",
      flavor: "Bitter-sweet with herbal notes, citrus, and effervescent finish"
    }
  ];

  return (
    <div className="artisan-lollipops">
      {/* Navigation Header */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/">
              <h1>🍭 Clever Creations</h1>
            </Link>
          </div>
          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#products">Products</Link></li>
            <li><Link to="/#about">About</Link></li>
            <li><Link to="/#contact">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="popsicle-hero">
        <div className="hero-content">
          <h1 className="hero-title">Artisan Popsicles</h1>
          <p className="hero-subtitle">Handcrafted Frozen Delights Shaped Like Your Favorite Fruits & Drinks</p>
          <p className="hero-description">
            Each popsicle is carefully crafted to not only taste amazing but also look exactly like the fruit or drink it represents. 
            Made with premium ingredients and attention to detail, these frozen treats are a feast for both the eyes and the palate.
          </p>
        </div>
      </section>

      {/* Popsicles Showcase */}
      <section className="popsicles-showcase">
        <div className="container">
          <h2 className="section-title">Our Signature Popsicle Collection</h2>
          <div className="popsicles-grid">
            {popsicles.map((popsicle) => (
              <div key={popsicle.id} className="popsicle-card">
                <div className="popsicle-image">
                  <div className={`popsicle-visual popsicle-${popsicle.id}`}>
                    <div className="popsicle-body"></div>
                    <div className="popsicle-stick"></div>
                  </div>
                  <div className="popsicle-shape">{popsicle.shape}</div>
                </div>
                <div className="popsicle-content">
                  <h3 className="popsicle-name">{popsicle.name}</h3>
                  <p className="popsicle-description">{popsicle.description}</p>
                  <div className="flavor-profile">
                    <strong>Flavor Profile:</strong> {popsicle.flavor}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="popsicle-cta">
        <div className="container">
          <h2>Ready to Try Our Artisan Popsicles?</h2>
          <p>Experience the perfect blend of taste and artistry in every frozen treat!</p>
          <div className="cta-buttons">
            <button className="primary-btn">Order Now</button>
            <Link to="/" className="secondary-btn">Back to Home</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtisanLollipops;
