import React, { useState } from "react";


const Reviews = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const visibleCards = 1; 

  return (
    <div className="carousel">
      <button
        className="carousel-btn prev"
        onClick={goToPreviousSlide}
        aria-label="Previous Slide"
      >
        &lt;
      </button>
      <div className="carousel-track-container">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          }}
        >
          {cards.map((card, index) => (
            <div className="carousel-card" key={index}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        className="carousel-btn next"
        onClick={goToNextSlide}
        aria-label="Next Slide"
      >
        &gt;
      </button>
    </div>
  );
};

export default Reviews;
