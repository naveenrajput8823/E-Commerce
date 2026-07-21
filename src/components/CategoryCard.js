import React from "react";
import "../styles/CategoryCard.css";

import fashion from "../assets/images/fashion.png";
import electronics from "../assets/images/electronics.png";
import beauty from "../assets/images/beauty.png";
import books from "../assets/images/books.png";
import homeLiving from "../assets/images/home-living.png";
import sports from "../assets/images/sports.png";

const categories = [
  {
    id: 1,
    name: "Fashion",
    image: fashion,
    total: "250+ Products",
  },
  {
    id: 2,
    name: "Electronics",
    image: electronics,
    total: "180+ Products",
  },
  {
    id: 3,
    name: "Beauty",
    image: beauty,
    total: "120+ Products",
  },
  {
    id: 4,
    name: "Books",
    image: books,
    total: "95+ Products",
  },
  {
    id: 5,
    name: "Home Living",
    image: homeLiving,
    total: "160+ Products",
  },
  {
    id: 6,
    name: "Sports",
    image: sports,
    total: "140+ Products",
  },
];

const CategoryCard = () => {
  return (
    <section className="category-section">

      <div className="category-heading">
        <h2>Shop by Category</h2>
        <p>Choose your favourite category and start shopping today.</p>
      </div>

      <div className="category-container">

        {categories.map((category) => (
          <div className="category-card" key={category.id}>

            <div className="category-image">
              <img src={category.image} alt={category.name} />
            </div>

            <div className="category-content">
              <h3>{category.name}</h3>

              <p>{category.total}</p>

              <button className="category-btn">
                Explore
              </button>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default CategoryCard;