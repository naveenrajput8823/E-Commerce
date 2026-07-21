import React from "react";
import "../styles/ProductCard.css";

import product1 from "../assets/images/product1.png";
import product2 from "../assets/images/product2.png";
import product3 from "../assets/images/product3.png";
import product4 from "../assets/images/product4.png";
import product5 from "../assets/images/product5.png";
import product6 from "../assets/images/product6.png";
import product7 from "../assets/images/product7.png";
import product8 from "../assets/images/product8.png";
import product9 from "../assets/images/product9.jpg";
import product10 from "../assets/images/product10.jpg";

const products = [
  {
    id: 1,
    image: product1,
    name: "Smart Watch",
    price: 2499,
    oldPrice: 3299,
    rating: 4.8,
  },
  {
    id: 2,
    image: product2,
    name: "Wireless Earbuds",
    price: 1799,
    oldPrice: 2499,
    rating: 4.7,
  },
  {
    id: 3,
    image: product3,
    name: "Travel Backpack",
    price: 1499,
    oldPrice: 1999,
    rating: 4.6,
  },
  {
    id: 4,
    image: product4,
    name: "White Sneakers",
    price: 2299,
    oldPrice: 2999,
    rating: 4.8,
  },
  {
    id: 5,
    image: product5,
    name: "Canon DSLR Camera",
    price: 45999,
    oldPrice: 49999,
    rating: 4.9,
  },
  {
    id: 6,
    image: product6,
    name: "Laptop",
    price: 64999,
    oldPrice: 69999,
    rating: 4.8,
  },
  {
    id: 7,
    image: product7,
    name: "Wireless Headphones",
    price: 2999,
    oldPrice: 3999,
    rating: 4.8,
  },
  {
    id: 8,
    image: product8,
    name: "Dior Sauvage Perfume",
    price: 7999,
    oldPrice: 8999,
    rating: 4.9,
  },
  {
    id: 9,
    image: product9,
    name: "Smart Fitness Band",
    price: 1999,
    oldPrice: 2699,
    rating: 4.7,
  },
  {
    id: 10,
    image: product10,
    name: "Leather Wallet",
    price: 999,
    oldPrice: 1499,
    rating: 4.6,
  },
];

const ProductCard = () => {
  return (
    <section className="product-section">

      <div className="product-heading">
        <h2>Featured Products</h2>
        <p>Discover our best-selling products.</p>
      </div>

      <div className="product-container">

        {products.map((product) => (
          <div className="product-card" key={product.id}>

            <img src={product.image} alt={product.name} />

            <div className="product-info">

              <h3>{product.name}</h3>

              <div className="rating">
                ⭐ {product.rating}
              </div>

              <div className="price">

                <span className="new-price">
                  ₹{product.price}
                </span>

                <span className="old-price">
                  ₹{product.oldPrice}
                </span>

              </div>

              <button>Add to Cart</button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default ProductCard;