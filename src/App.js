import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import SweetPage from './components/SweetPage';

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
        {/* Navigation Header */}
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo">
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h1>🍭 Clever Creations</h1>
              </Link>
            </div>
            <ul className="nav-menu">
              <li><Link to="/">Home</Link></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/sweet/:sweetName" element={<SweetPage products={products} />} />
        </Routes>

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
                  <li><Link to="/">Home</Link></li>
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
      </div>
    </Router>
  );
}

export default App;
