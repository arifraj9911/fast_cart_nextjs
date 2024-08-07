"use client"

import React, { useEffect, useRef, useState } from 'react';

const slides = [
  { text: 'Slide 1: Something you love is now on sale!', link: '#' },
  { text: 'Slide 2: Check out our latest offers!', link: '#' },
  { text: 'Slide 3: Don\'t miss out on our special discounts!', link: '#' }
];

const VerticalSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (slides.length + 1));
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      if (currentIndex === slides.length) {
        setTimeout(() => {
          sliderRef.current.style.transition = 'none';
          sliderRef.current.style.transform = 'translateY(0)';
          setCurrentIndex(0);
        }, 1000); // Wait for the transition to complete before resetting
      } else {
        sliderRef.current.style.transition = 'transform 1s ease-in-out';
        sliderRef.current.style.transform = `translateY(-${currentIndex * 100}%)`;
      }
    }
  }, [currentIndex]);

  return (
    <div className="relative overflow-hidden w-72 h-8"> {/* Adjust the width and height as needed */}
      <div 
        ref={sliderRef} 
        className="flex flex-col w-full"
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex items-center justify-center h-8 bg-teal-500 text-white w-full">
            <a href={slide.link} className="text-center">{slide.text}</a>
          </div>
        ))}
        <div className="flex items-center justify-center h-24 bg-teal-500 text-white w-full">
          <a href={slides[0].link} className="text-center">{slides[0].text}</a>
        </div>
      </div>
    </div>
  );
};

export default VerticalSlider;
