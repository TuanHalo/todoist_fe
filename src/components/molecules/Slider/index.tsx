import React, { useState } from "react";
import "./style.scss";

type SliderProps = {
  count: number;
  children: React.ReactNode;
};

export const Slider = ({ count, children }: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="m-slider">
      <ul
        className="m-slider_slides"
        style={{ transform: `translateX(-${currentSlide * 200}%)` }}
      >
        {children}
      </ul>
      <ul className="m-slider_control">
        {Array.from({ length: count }, (_, index) => (
          <li
            className={`m-slider_control--item ${
              currentSlide === index ? "active" : ""
            }`}
            key={index}
            onClick={() => setCurrentSlide(index)}
          ></li>
        ))}
      </ul>
    </div>
  );
};
