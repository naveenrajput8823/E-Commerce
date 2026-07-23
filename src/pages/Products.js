import React from "react";
import "../styles/Products.css";

import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <section className="products-page">

      <div className="products-header">

        <h1>All Products</h1>

        <p>
          Explore our latest collection and find your perfect product.
        </p>

      </div>

      <div className="filter-section">

        <input
          type="text"
          placeholder="🔍 Search Products..."
        />

        <select>
          <option>All Categories</option>
          <option>Fashion</option>
          <option>Electronics</option>
          <option>Beauty</option>
          <option>Books</option>
          <option>Sports</option>
        </select>

      </div>

      <ProductCard />

    </section>
  );
};

export default Products;