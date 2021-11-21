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
        <div className="card-title">{product.productName}</div>
        <div className="product-price">
          <span>${product.productPrice}</span>
          <span>${product.productSellPrice}</span>
        </div>
        <button className="add-to-cart">Agregar al carrito</button>
      </div>
    </div>
  );
};
