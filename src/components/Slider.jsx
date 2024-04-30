import "../style/scss/slider.scss";
import Adress from "../data/adress.json";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Slider = ({ slides}) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 1 ? length - 1 : current - 1);
  };
  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div className="slider">
      <div className="slider-text">
        {Adress.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && <h1>{slide.name}</h1>}
            </div>
          );
        })}

        {Adress.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && <h2>{slide.location}</h2>}
              {index === current && <h2>{slide.phone}</h2>}
              {index === current && <h2>{slide.schedule}</h2>}
            </div>
          );
        })}

        <div className="slider-current">

        <FontAwesomeIcon
          icon={faArrowLeft}
          className="left-arrow"
          onClick={prevSlide}
          />
          <h3>{current + 1}</h3>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="right-arrow"
          onClick={nextSlide}
          />
          </div>
      </div>
      <div className="slider-img">
        {Adress.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img className="slideImg" src={slide.img} alt="" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
