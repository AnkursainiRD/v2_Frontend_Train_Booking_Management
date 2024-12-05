import  { useEffect, useState } from "react";
import "../styles/Slider.css";
import gradient from "../assets/gradient.png"
import images from "../data/sliderImages";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={`Slide ${index + 1}`}
            className="slide"
          />
        ))}
      </div>
      <div className="gradient">
        <img src={gradient} alt="" />
      </div>
    </div>
  );
};

export default Slider;
