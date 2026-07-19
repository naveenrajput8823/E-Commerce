import React from 'react'
import "../styles/Navbar.css"
import { FaHeart, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'


function Navbar(){
  return (
    <>
      <header className='navbar'>

        <div className='logo'>
          <h2>OnlineShop</h2>
        </div>

        <ul className='nav-menu'>
          <li>Home</li>
          <li>Products</li>
          <li>Categories</li>
          <li>Contact</li>
        </ul>

        <div className='nav-right'>

          <div className='search-box'>
            <FaSearch className="search-icon" />
            <input type='text' placeholder='Search Products....'/>
          </div>

          <div className='icon'>
            <FaHeart/>
          </div>

          <div className='icon cart'>
            <FaShoppingCart/>
            <span className='cart-count'>0</span>
          </div>

          <button className='login-btn'>
            <FaUser/>
          </button>

        </div>
      </header>
    </>
  )
}

export default Navbar
