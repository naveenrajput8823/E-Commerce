import React from 'react'
import "../styles/Hero.css"
import { FaFire } from 'react-icons/fa'

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='hero-content'>
          <span className='hero-tag'> <FaFire /> Trending Collection</span>

          <h1> Discover Your <span> Dream Products </span> </h1>

          <p>
            Shop the latest fashion, electronics, accessories and much more 
            at unbeatable prices. Fast delivery, secure payments and exciting 
            offers every day.
          </p>

          <div className='hero-buttons'>
            <button className='shop-btn'>Shop Now</button>
            <button className='explore-btn'>Explore More</button>
          </div>
        </div>
        
        <div className='hero-image'>
            <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
          alt="shopping"
        />
        </div>
      </section>
    </>
  )
}

export default Hero
