import React, { useState, useEffect } from "react";
import "./home.css";

const slides = [
  {
    image: "/homePage_images/homepage1.png",
    text: "Where compassion meets medical excellence.\nWe care for your health with dedication, empathy, and trust.",
  },
  {
    image: "/homePage_images/homepage2.png",
    text: "State-of-the-art facilities for comprehensive care.\nModern equipment, comfortable environment, expert staff.",
  },
  {
    image: "/homePage_images/homepage3.png",
    text: "Your Trusted Partner in Health and Wellness\nBuilding healthier communities, one family at a time.",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`carousel-slide ${i === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-content">
            {slide.text.split("\n").map((line, idx) => (
              <div key={idx}>{line}</div>
            ))}
          </div>
        </div>
      ))}

      <button className="carousel-control prev" onClick={prevSlide}>
        ‹
      </button>
      <button className="carousel-control next" onClick={nextSlide}>
        ›
      </button>

      <div className="carousel-indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`indicator ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          ></button>
        ))}
      </div>
    </div>
  );
}
