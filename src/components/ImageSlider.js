import React, { useState } from "react";
import { SliderData } from "./SliderData";
import "./ImageSlider.css";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <i className="left-arrow fas fa-angle-left" onClick={prevSlide} />
      <i className="right-arrow fas fa-angle-right" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="person" className="image" />
            )}
            {index === current && (
              <div className="slider-right">
                <div className="slider-heading">
                  <a href={slide.url}>{slide.name}</a>
                </div>
                <div className="slider-desc">{slide.text}</div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
