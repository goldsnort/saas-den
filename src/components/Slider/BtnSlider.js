import React from "react";
import "./Slider.css";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <i
        className={
          direction === "next"
            ? "fas fa-angle-right fa-3x"
            : "fas fa-angle-left fa-3x"
        }
      />
    </button>
  );
}
