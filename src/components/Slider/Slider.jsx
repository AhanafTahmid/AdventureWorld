import React, { useState } from "react";
import "./Slider.css";

const Slider = () => {
  const slides = [
    { image: "https://media.istockphoto.com/id/1189969126/photo/group-of-hikers-walks-in-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=YlJOZLmELRF0HaEr1Xv4-Uae_VN4vnB8XnE99hGD3gQ=", title: "Explore Mountains" },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU3m1hB7Ods0k0SMohA8kibr9rXboQ5nxhXg&s", title: "Relax at Beaches" },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRtQYk7XotOkopbTirs9_GnQXaPYOxkK_Qxw&s", title: "Discover Cities" },
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
