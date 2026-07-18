import React from "react";
import "../styles/Navbar.css";

import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">

      {/* Logo */}
      <div className="logo">
        <h2>ShopSphere</h2>
      </div>

      {/* Navigation Menu */}
      <ul className="nav-menu">
        <li>Home</li>
        <li>Products</li>
        <li>Categories</li>
        <li>Contact</li>
      </ul>

      {/* Right Section */}
      <div className="nav-right">

        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search products..."
          />
        </div>

        <div className="icon">
          <FaHeart />
        </div>

        <div className="icon cart">
          <FaShoppingCart />
          <span className="cart-count">0</span>
        </div>

        <button className="login-btn">
          <FaUser />
          Login
        </button>

      </div>

    </header>
  );
}

export default Navbar;