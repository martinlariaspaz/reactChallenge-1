import React from "react";
import "./Card.css";

export const Card = ({ product }) => {
  return (
    <div className="card-container">
      <div className="card-image-container">
        <img
          className="card-image"
          alt="Pata de pollo"
          src={product.productImage}
        ></img>
        {product.productName}
      </div>
    </div>
  );
};
