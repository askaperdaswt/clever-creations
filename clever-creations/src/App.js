import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import ArtisanLollipops from './components/ArtisanLollipops';

function App() {
  // Array of 30 different candy and treat products
  const products = [
    { icon: "🍭", name: "Artisan Lollipops", description: "Handcrafted with natural flavors and vibrant colors", price: "$3.99" },
    { icon: "🍫", name: "Premium Chocolates", description: "Rich, creamy chocolates made from finest cocoa beans", price: "$12.99" },
    { icon: "🍬", name: "Gourmet Gummies", description: "Soft, chewy, and bursting with real fruit flavors", price: "$6.99" },
    { icon: "🧁", name: "Sweet Cupcakes", description: "Fluffy cupcakes topped with heavenly frosting", price: "$4.99" },
    { icon: "🍩", name: "Glazed Donuts", description: "Fresh-baked donuts with sweet glaze", price: "$2.50" },
    { icon: "🍪", name: "Chocolate Chip Cookies", description: "Warm, chewy cookies with premium chocolate chips", price: "$3.50" },
    { icon: "🎂", name: "Birthday Cake Slices", description: "Decadent cake slices perfect for celebrations", price: "$5.99" },
    { icon: "🍰", name: "Strawberry Shortcake", description: "Light sponge cake with fresh strawberries and cream", price: "$6.50" },
    { icon: "🥧", name: "Apple Pie Bites", description: "Mini apple pies with cinnamon and spice", price: "$4.25" },
    { icon: "🍮", name: "Crème Brûlée", description: "Silky custard with caramelized sugar top", price: "$7.99" },
    { icon: "🍯", name: "Honey Sticks", description: "Pure wildflower honey in convenient sticks", price: "$1.99" },
    { icon: "🧈", name: "Butter Toffee", description: "Rich, buttery toffee with almond pieces", price: "$8.99" },
    { icon: "🥨", name: "Chocolate Pretzels", description: "Crunchy pretzels dipped in dark chocolate", price: "$5.25" },
    { icon: "🍡", name: "Mochi Ice Cream", description: "Sweet rice dough filled with premium ice cream", price: "$4.75" },
    { icon: "🍘", name: "Rice Candy", description: "Traditional Asian rice crackers with sweet coating", price: "$3.25" },
    { icon: "🥜", name: "Candied Nuts", description: "Roasted nuts glazed with cinnamon sugar", price: "$6.75" },
    { icon: "🍓", name: "Chocolate Strawberries", description: "Fresh strawberries dipped in premium chocolate", price: "$9.99" },
    { icon: "🍒", name: "Cherry Cordials", description: "Dark chocolate shells filled with cherry liqueur", price: "$11.99" },
    { icon: "🥥", name: "Coconut Macaroons", description: "Sweet coconut cookies dipped in chocolate", price: "$4.50" },
    { icon: "🍋", name: "Lemon Drops", description: "Tangy lemon hard candies with sugar coating", price: "$2.99" },
    { icon: "🍊", name: "Orange Creamsicle Bars", description: "Creamy orange-flavored frozen treats", price: "$3.75" },
    { icon: "🍇", name: "Grape Gummy Clusters", description: "Realistic grape-shaped gummy candies", price: "$5.50" },
    { icon: "🍑", name: "Cherry Gum Balls", description: "Classic red cherry-flavored gumballs", price: "$0.25" },
    { icon: "🍌", name: "Banana Taffy", description: "Chewy banana-flavored salt water taffy", price: "$4.99" },
    { icon: "🥭", name: "Mango Jellies", description: "Tropical mango-flavored jelly candies", price: "$6.25" },
    { icon: "🍍", name: "Pineapple Rings", description: "Dried pineapple rings dusted with sugar", price: "$7.50" },
    { icon: "🥤", name: "Soda Pop Rocks", description: "Fizzy candy that pops in your mouth", price: "$1.75" },
    { icon: "☕", name: "Coffee Caramels", description: "Rich caramels infused with espresso", price: "$8.25" },
    { icon: "🍵", name: "Green Tea Chocolates", description: "Delicate matcha-flavored white chocolates", price: "$10.99" },
    { icon: "🎭", name: "Mystery Mix", description: "Assorted surprise candies - you never know what you'll get!", price: "$12.50" }
  ];
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/lollipops" element={<ArtisanLollipops />} />
          <Route path="/" element={
            <>
              {/* Navigation Header */}
              <nav className="navbar">
                <div className="nav-container">
                  <div className="nav-logo">
                    <h1>🍭 Clever Creations</h1>
                  </div>
                  <ul className="nav-menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                  </ul>
                </div>
              </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Clever Creations</h1>
          <p className="hero-subtitle">Where Sweet Dreams Come True</p>
          <p className="hero-description">
            Discover our magical collection of handcrafted candies, chocolates, and confections 
            made with love and the finest ingredients.
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
          <h2 className="section-title">Featured Delights</h2>
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

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>🍭 Clever Creations</h3>
              <p>Making the world sweeter, one candy at a time.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact Info</h4>
              <p>📍 123 Sweet Street, Candy City</p>
              <p>📞 (555) 123-SWEET</p>
              <p>✉️ hello@clevercreations.com</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Clever Creations. All rights reserved.</p>
          </div>
        </div>
      </footer>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
