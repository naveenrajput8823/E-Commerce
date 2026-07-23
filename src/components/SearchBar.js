import React from "react";
import "../styles/SearchBar.css";

const SearchBar = () => {
  return (
    <section className="search-section">

      <div className="search-container">

        {/* Search */}

        <input
          type="text"
          placeholder="🔍 Search Products..."
        />

        {/* Category */}

        <select>
          <option>All Categories</option>
          <option>Fashion</option>
          <option>Electronics</option>
          <option>Beauty</option>
          <option>Books</option>
          <option>Sports</option>
        </select>

        {/* Sort */}

        <select>
          <option>Sort By</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest</option>
          <option>Popularity</option>
        </select>

        {/* Button */}

        <button>Search</button>

      </div>

    </section>
  );
};

export default SearchBar;