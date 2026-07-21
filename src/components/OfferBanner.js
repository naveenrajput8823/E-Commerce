import React from "react";
import "../styles/OfferBanner.css";

const OfferBanner = () => {
  return (
    <section className="offer-banner">

      <div className="offer-content">

        <span className="offer-tag">
          🔥 Limited Time Offer
        </span>

        <h2>
          Flat <span>50% OFF</span>
        </h2>

        <p>
          Grab the latest fashion, electronics, beauty products and much more
          at unbeatable prices. Don't miss this exclusive deal!
        </p>

        <button className="offer-btn">
          Shop Now
        </button>

      </div>

      <div className="offer-image">

        
      </div>

    </section>
  );
};

export default OfferBanner;