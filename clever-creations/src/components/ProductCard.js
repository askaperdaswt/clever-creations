import React from 'react';
import './ProductCard.css';

const ProductCard = ({ icon, name, description, price }) => {
  return (
    <div className="product-card">
      <div className="product-icon">{icon}</div>
      <h3>{name}</h3>
      <p>{description}</p>
      <span className="price">{price}</span>
    </div>
  );
};

export default ProductCard;