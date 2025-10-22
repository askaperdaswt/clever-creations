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

      {/* Dessert Gallery */}
      <section className="dessert-gallery">
        <div className="container">
          <h2 className="section-title">Our Delicious Creations</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80" alt="Colorful macarons" />
              <div className="gallery-overlay">
                <h3>Artisan Macarons</h3>
                <p>French-style delicacies</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80" alt="Delicious cupcakes" />
              <div className="gallery-overlay">
                <h3>Gourmet Cupcakes</h3>
                <p>Handcrafted perfection</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80" alt="Assorted candies" />
              <div className="gallery-overlay">
                <h3>Premium Candies</h3>
                <p>Sweet sensations</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1511381939415-e44015466834?w=800&q=80" alt="Chocolate truffles" />
              <div className="gallery-overlay">
                <h3>Chocolate Truffles</h3>
                <p>Luxurious indulgence</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" alt="Colorful donuts" />
              <div className="gallery-overlay">
                <h3>Artisan Donuts</h3>
                <p>Fluffy & flavorful</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80" alt="Sweet cake" />
              <div className="gallery-overlay">
                <h3>Designer Cakes</h3>
                <p>Celebration ready</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80" alt="Classic tiramisu" />
              <div className="gallery-overlay">
                <h3>Classic Tiramisu</h3>
                <p>Italian perfection</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=800&q=80" alt="Fresh cinnamon buns" />
              <div className="gallery-overlay">
                <h3>Cinnamon Buns</h3>
                <p>Warm & gooey delight</p>
              </div>
            </div>
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