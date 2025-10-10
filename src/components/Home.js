import React from 'react';
import ProductCard from './ProductCard';

const Home = ({ products }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Clever Creations</h1>
          <p className="hero-subtitle">Where Sweet Dreams Come True</p>
          <p className="hero-description">
            From El Salvador, to Vancouver, to Boston and everywhere in between, we use the world's best ingredients to make our treats extra sweet!
          </p>
          <button className="cta-button">Shop Now</button>
        </div>
        <div className="hero-visual">
          <div className="candy-showcase">
            <div className="candy-item">🍬</div>
            <div className="candy-item">🍭</div>
            <div className="candy-item">🍫</div>
            <div className="candy-item">🧁</div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products" id="products">
        <div className="container">
          <h2 className="section-title">See what our super sweet team recommends!</h2>
          <div className="product-grid">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                icon={product.icon}
                name={product.name}
                description={product.description}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="about-content">
            <h2 className="section-title">Our Sweet Story</h2>
            <p className="about-description">
              At Clever Creations, we believe that every sweet treat should be a work of art.
              Since 2010, we've been crafting premium candies using traditional methods and
              innovative flavors. Our commitment to quality and creativity makes every bite
              a delightful surprise.
            </p>
            <div className="features">
              <div className="feature">
                <span className="feature-icon">🌱</span>
                <h4>Natural Ingredients</h4>
                <p>We use only the finest natural ingredients</p>
              </div>
              <div className="feature">
                <span className="feature-icon">👨‍🍳</span>
                <h4>Handcrafted</h4>
                <p>Every piece is carefully crafted by our skilled artisans</p>
              </div>
              <div className="feature">
                <span className="feature-icon">✨</span>
                <h4>Creative Flavors</h4>
                <p>Unique flavor combinations you won't find anywhere else</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;