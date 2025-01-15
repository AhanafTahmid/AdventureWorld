import React, { useState } from "react";
import "./Slider.css";

const Slider = () => {
  const slides = [
    { image: "https://img.freepik.com/premium-photo/explore-stunning-scenery-majestic-mountains-ideal-travel-destinations-creating-unforgettable-memories-concept-travel-destinations-scenic-views-memorable-memories_918839-374730.jpg", title: "Explore Mountains" },
    { image: "https://thumbs.dreamstime.com/b/couple-relax-beach-enjoying-beautiful-sea-tropical-island-enjoy-summer-vacation-concept-150711582.jpg", title: "Relax at Beaches" },
    { image: "https://images.adsttc.com/media/images/6242/cde5/3e4b/3145/de00/0015/newsletter/shutterstock_406828165.jpg?1648545235", title: "Discover Cities" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider">
      <button className="prev" onClick={prevSlide}>
        ❮
      </button>
      <div className="slide">
        <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
        <h2>{slides[currentSlide].title}</h2>
      </div>
      <button className="next" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};

export default Slider;
