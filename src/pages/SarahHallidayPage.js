import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SarahHallidayPage = () => {
  const [cart, setCart] = useState([]);

  const lickMSticks = [
    {
      id: 1,
      name: "Classic Cherry",
      flavor: "Sweet Cherry",
      price: 2.99,
      description: "Our signature cherry flavor that started it all!",
      color: "#FF6B6B",
      emoji: "🍒"
    },
    {
      id: 2,
      name: "Tropical Mango",
      flavor: "Mango Madness",
      price: 3.49,
      description: "Tropical mango flavor that transports you to paradise!",
      color: "#FFD93D",
      emoji: "🥭"
    },
    {
      id: 3,
      name: "Blueberry Blast",
      flavor: "Wild Blueberry",
      price: 3.29,
      description: "Bursting with natural blueberry goodness!",
      color: "#4ECDC4",
      emoji: "🫐"
    },
    {
      id: 4,
      name: "Strawberry Swirl",
      flavor: "Strawberry Cream",
      price: 3.19,
      description: "Creamy strawberry with a hint of vanilla!",
      color: "#FF8A80",
      emoji: "🍓"
    },
    {
      id: 5,
      name: "Green Apple",
      flavor: "Sour Apple",
      price: 2.89,
      description: "Tart and tangy green apple perfection!",
      color: "#81C784",
      emoji: "🍏"
    },
    {
      id: 6,
      name: "Grape Explosion",
      flavor: "Concord Grape",
      price: 3.39,
      description: "Rich grape flavor that's simply irresistible!",
      color: "#9575CD",
      emoji: "🍇"
    },
    {
      id: 7,
      name: "Watermelon Wave",
      flavor: "Fresh Watermelon",
      price: 3.59,
      description: "Refreshing watermelon that's perfect for summer!",
      color: "#F8BBD9",
      emoji: "🍉"
    },
    {
      id: 8,
      name: "Orange Zest",
      flavor: "Citrus Orange",
      price: 2.79,
      description: "Zesty orange flavor with a citrus kick!",
      color: "#FFB74D",
      emoji: "🍊"
    }
  ];

  const addToCart = (stick) => {
    setCart([...cart, stick]);
  };

  const removeFromCart = (stickId) => {
    setCart(cart.filter(item => item.id !== stickId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              ← Back to Home
            </Link>
          </div>
          <div className="cart-info">
            <span>🛒 Cart: {cart.length} items - ${getTotalPrice()}</span>
          </div>
        </div>
      </nav>

      <div style={{ padding: '2rem', paddingTop: '6rem' }}>
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '3rem', color: '#FF6B6B', marginBottom: '1rem' }}>
            🍭 Sarah's Lick M Sticks 🍭
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Welcome to the sweetest collection of lick m sticks! Each one is handcrafted 
            with love and bursting with amazing flavors. Choose your favorites and add them to your cart!
          </p>
        </div>

        {/* Products Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {lickMSticks.map((stick) => (
            <div key={stick.id} style={{
              border: '2px solid #f0f0f0',
              borderRadius: '15px',
              padding: '1.5rem',
              textAlign: 'center',
              backgroundColor: 'white',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
              
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                {stick.emoji}
              </div>
              
              <h3 style={{ 
                color: stick.color, 
                marginBottom: '0.5rem',
                fontSize: '1.5rem'
              }}>
                {stick.name}
              </h3>
              
              <p style={{ 
                color: '#888', 
                marginBottom: '0.5rem',
                fontSize: '1rem'
              }}>
                {stick.flavor}
              </p>
              
              <p style={{ 
                marginBottom: '1rem',
                fontSize: '0.9rem',
                lineHeight: '1.4'
              }}>
                {stick.description}
              </p>
              
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: stick.color,
                marginBottom: '1rem'
              }}>
                ${stick.price}
              </div>
              
              <button 
                onClick={() => addToCart(stick)}
                style={{
                  backgroundColor: stick.color,
                  color: 'white',
                  border: 'none',
                  padding: '0.8rem 1.5rem',
                  borderRadius: '25px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#333'}
                onMouseLeave={(e) => e.target.style.backgroundColor = stick.color}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Cart Section */}
        {cart.length > 0 && (
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '2rem',
            borderRadius: '15px',
            marginTop: '2rem'
          }}>
            <h2 style={{ color: '#FF6B6B', marginBottom: '1rem' }}>Your Cart</h2>
            {cart.map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.5rem 0',
                borderBottom: '1px solid #eee'
              }}>
                <span>{item.emoji} {item.name} - ${item.price}</span>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    backgroundColor: '#ff4444',
                    color: 'white',
                    border: 'none',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '15px',
                    cursor: 'pointer'
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
            <div style={{
              marginTop: '1rem',
              paddingTop: '1rem',
              borderTop: '2px solid #FF6B6B',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: '#FF6B6B'
            }}>
              Total: ${getTotalPrice()}
            </div>
            <button style={{
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '25px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginTop: '1rem'
            }}>
              Checkout
            </button>
          </div>
        )}

        {/* About Section */}
        <div style={{
          marginTop: '3rem',
          padding: '2rem',
          backgroundColor: '#fff3e0',
          borderRadius: '15px',
          textAlign: 'center'
        }}>
          <h2 style={{ color: '#FF6B6B', marginBottom: '1rem' }}>About Sarah's Lick M Sticks</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#666' }}>
            Hi! I'm Sarah, and I'm passionate about creating the most delicious lick m sticks you've ever tasted. 
            Each stick is carefully crafted using premium ingredients and traditional techniques passed down through generations. 
            From classic flavors to unique combinations, every lick m stick is made with love and attention to detail. 
            Try them all and discover your new favorite!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SarahHallidayPage;