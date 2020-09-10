import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>Redmi 9 Prime-Full HD + Quad camera</p>
      </div>
      <div className="product__rating">
        <p>⭐️</p>
      </div>
      <img
        src="https://m.media-amazon.com/images/I/710qEb8G3gL._AC_SS350_.jpg"
        alt="mobile"
      />
      <button>Add to cart</button>
    </div>
  );
}

export default Product;
