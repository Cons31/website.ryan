import React from "react";
import "./ProductItem.css";

function ProductItem({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description.slice(0, 100)}...</p>
      <button className="add-btn" onClick={() => addToCart(product)}>
        Masukkan ke Keranjang
      </button>
    </div>
  );
}

export default ProductItem;
