import React from "react";
import "../styles/Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import logo from  "../assets/images/logo.png"


const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}

        <div className="footer-box">

          <div className="footer-logo">
            <img src= {logo} alt="OnlineShop Logo" />
          </div>
          <p>
            Your one-stop destination for fashion, electronics,
            beauty, books and much more at the best prices.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-box">

          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Wishlist</li>
            <li>Cart</li>
            <li>Contact</li>
          </ul>

        </div>

        {/* Categories */}

        <div className="footer-box">

          <h3>Categories</h3>

          <ul>
            <li>Fashion</li>
            <li>Electronics</li>
            <li>Beauty</li>
            <li>Books</li>
            <li>Sports</li>
          </ul>

        </div>

        {/* Contact */}

        <div className="footer-box">

          <h3>Contact</h3>

          <p>Email : support@shopsphere.com</p>
          <p>Phone : +91 98765 43210</p>
          <p>Location : Gurugram, India</p>

          <div className="social-icons">

            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaGithub />

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 ShopSphere. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;
