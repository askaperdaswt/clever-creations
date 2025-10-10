import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ icon, name, description, price }) => {
  const sweetUrl = `/sweet/${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;

  return (
    <Link to={sweetUrl} className="product-card-link">
      <div className="product-card">
        <div className="product-icon">{icon}</div>
        <h3>{name}</h3>
        <p>{description}</p>
        <span className="price">{price}</span>
      </div>
    </Link>
  );
};

export default ProductCard;