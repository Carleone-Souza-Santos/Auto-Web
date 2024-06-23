// src/components/Slider.js
import React, { useState } from 'react';

import car1 from '../assets/img/car1.png';
import car2 from '../assets/img/car2.png';
import car3 from '../assets/img/car3.png';
import car4 from '../assets/img/car4.png';
import car5 from '../assets/img/car5.png';

import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from 'react-icons/ri';

import {
  SliderContainer,
  Slide,
  CarImage,
  Content,
  Arrows,
  Indicators,
} from '../styles/Slider';

const slides = [
  {
    img: car1,
    info: 'Único Dono',
    title: '911 Turbo',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    img: car2,
    info: 'Único Dono',
    title: '911 Turbo',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    img: car3,
    info: 'Conversível',
    title: 'Ferrari',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    img: car4,
    info: '2015',
    title: 'Lamborghini',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    img: car5,
    info: 'Único Dono',
    title: '911 Turbo',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <SliderContainer>
      {slides.map((slide, index) => (
        <Slide key={index} isActive={index === activeSlide}>
          <CarImage>
            <img src={slide.img} alt={slide.title} />
          </CarImage>
          <Content>
            <p className="car-info">{slide.info}</p>
            <h2>{slide.title}</h2>
            <p className="car-descrip">{slide.description}</p>
            <button className="infor">Ver Mais</button>
          </Content>
        </Slide>
      ))}

      <Arrows>
        <button onClick={prevSlide}>
          <RiArrowLeftDoubleFill size={30} color="white" alt="Prev" />
        </button>
        <button onClick={nextSlide}>
          <RiArrowRightDoubleFill size={30} color="white" alt="Next" />
        </button>
      </Arrows>

      <Indicators>
        <p className="number">0{activeSlide + 1}</p>
        <ul>
          {slides.map((_, index) => (
            <li
              key={index}
              className={index === activeSlide ? 'active' : ''}
            ></li>
          ))}
        </ul>
      </Indicators>
    </SliderContainer>
  );
};

export default Slider;
