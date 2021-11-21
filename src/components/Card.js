import React from "react";
import "./Card.css";

export const Card = ({ product }) => {
  return (
    <div className="card-container">
      <div className="card-image-container">
        <div className="product-discount">-20%</div>
        <img
          className="card-image"
          alt="Pata de pollo"
          src={product.productImage}
        ></img>
        <div className="card-title">{product.productName}</div>
        <div className="product-price">
          <span className="text-product-price">${product.productPrice}</span>
          <span className="text-product-sell-price">
            ${product.productSellPrice}
          </span>
        </div>
        <button className="add-to-cart">Agregar al carrito</button>
      </div>
    </div>
  );
};
