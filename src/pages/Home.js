import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CategoryCard from '../components/CategoryCard'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <CategoryCard/>
      <ProductCard/>
      <Footer/>
    </>
  )
}

export default Home
