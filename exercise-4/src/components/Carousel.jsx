import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  // State: we need 1 state to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle left arrow click
  function handleLeftClick() {
    // If we're on the first image (index 0), go to the last image
    // Otherwise, go to the previous image
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }

  // Handle right arrow click
  function handleRightClick() {
    // If we're on the last image, go to the first image (index 0)
    // Otherwise, go to the next image
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill 
        className="arrow arrow-left" 
        onClick={handleLeftClick}
      />

      {/* Display the current image based on currentIndex */}
      <img 
        src={images[currentIndex].src} 
        alt={images[currentIndex].alt} 
        className="slide" 
      />

      <BsArrowRightCircleFill 
        className="arrow arrow-right" 
        onClick={handleRightClick}
      />
    </div>
  );
};
