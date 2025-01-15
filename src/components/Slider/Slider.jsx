import React, { useState } from "react";
import "./Slider.css";

const Slider = () => {
  const slides = [
    { image: "https://via.placeholder.com/1200x500?text=Explore+Mountains", title: "Explore Mountains" },
    { image: "https://via.placeholder.com/1200x500?text=Relax+at+Beaches", title: "Relax at Beaches" },
    { image: "https://via.placeholder.com/1200x500?text=Discover+Cities", title: "Discover Cities" },
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
