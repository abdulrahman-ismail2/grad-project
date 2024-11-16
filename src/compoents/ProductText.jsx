import ProductDetails from "../ProductDetails";
import productsData from "../data/data.json";
import { Link } from "react-router-dom";

import React from "react";

const ProductText = () => {
  const { products } = productsData;
  return (
    <div className="product-contnet">
      <div className="container">
        <div className="products-header">
          <h2 className="section-head">lastest products</h2>
        </div>
        <div className="products">
          {products.map((item) => (
            <div className="product" key={item.id}>
              <div className="card-img">
                <img src={item.img} alt="Product" loading="lazy" />
              </div>
              <div className="card-body">
                <h3 className="product-name">{item.name}</h3>
                <p className="product-desc">{item.desc}</p>
              </div>
              <div className="card-foot">
                <div className="card-price">
                  <span>{item.price}$</span>
                </div>
                <div className="product-details-btn">
                  <Link to="/ProductDetails">show product</Link>
                </div>
                <div className="product-tools">
                  <i className="fa-solid fa-heart"></i>
                  <i className="fa-solid fa-cart-shopping"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductText;
