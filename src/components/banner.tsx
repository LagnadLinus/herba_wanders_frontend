


import React, { useState, useEffect } from 'react';

// Banner Images - Replace these paths with actual images in your project
const bannerImages = [
  `${process.env.PUBLIC_URL}/static/images/banner1.jpg`,
  `${process.env.PUBLIC_URL}/static/images/banner2.jpg`,
  `${process.env.PUBLIC_URL}/static/images/banner3.jpg`,
];

const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + bannerImages.length) % bannerImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % bannerImages.length);
  };

  return (
    <div className="relative w-full overflow-hidden group">
      {/* Slides */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        role="region"
        aria-live="polite"
      >
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className="min-w-full transition-opacity duration-1000 ease-in-out"
            style={{ opacity: currentIndex === index ? 1 : 0 }}
          >
            <img
              src={image}
              alt={`Banner ${index + 1}`}
              className="w-full h-[400px] md:h-[500px] object-cover transition-opacity duration-1000 ease-in-out"
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-green-500 scale-110' : 'bg-gray-300'
            } transition-all duration-300`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-300 opacity-0 group-hover:opacity-100 animate-[slideInLeft_0.5s_ease-out_forwards]"
        aria-label="Previous Slide"
      >
        ❮
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-300 opacity-0 group-hover:opacity-100 animate-[slideInRight_0.5s_ease-out_forwards]"
        aria-label="Next Slide"
      >
        ❯
      </button>
    </div>
  );
};

export default Banner;
