import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './SweetPage.css';

const SweetPage = ({ products }) => {
  const { sweetName } = useParams();

  const product = products.find(p =>
    p.name.toLowerCase().replace(/[^a-z0-9]/g, '-') === sweetName
  );

  if (!product) {
    return (
      <div className="sweet-page">
        <div className="container">
          <h1>Sweet not found</h1>
          <Link to="/" className="back-button">← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="sweet-page">
      <div className="container">
        <Link to="/" className="back-button">← Back to Home</Link>

        <div className="sweet-header">
          <div className="sweet-icon-large">{product.icon}</div>
          <div className="sweet-info">
            <h1 className="sweet-title">{product.name}</h1>
            <p className="sweet-description">{product.description}</p>
            <div className="sweet-price">{product.price}</div>
          </div>
        </div>

        <div className="sweet-content">
          <h2>Product Details</h2>
          <p>This is a detailed page for {product.name}. More information and features can be added here.</p>

          <div className="sweet-actions">
            <button className="add-to-cart-btn">Add to Cart</button>
            <button className="wishlist-btn">Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SweetPage;