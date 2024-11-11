// src/Components/Carousel.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Carousel = ({ slides, interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="p-6"
            >
              <h3 className="text-xl font-semibold text-[#1B5538] mb-2">{slide.title}</h3>
              <p className="text-gray-700">{slide.description}</p>
            </motion.div>
          )
        ))}
      </AnimatePresence>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${index === currentSlide ? 'bg-[#1B5538]' : 'bg-gray-300'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
