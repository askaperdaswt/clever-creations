import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ icon, name, description, price }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (name === "Artisan Lollipops") {
      navigate('/lollipops');
    }
  };

  return (
    <div className={`product-card ${name === "Artisan Lollipops" ? 'clickable' : ''}`} onClick={handleClick}>
      <div className="product-icon">{icon}</div>
      <h3>{name}</h3>
      <p>{description}</p>
      <span className="price">{price}</span>
      {name === "Artisan Lollipops" && <div className="click-hint">Click to explore!</div>}
    </div>
  );
};

export default ProductCard;