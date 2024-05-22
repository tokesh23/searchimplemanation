import React from 'react';

const Card = ({ images, price, title }) => {
  return (
    <div className="card">
      <img src={images} alt={title} />
      <h2>{title}</h2>
      <p>${price}</p>
    </div>
  );
};

export default Card;
