import React, { useEffect } from "react";
import { SiGooglechrome } from "react-icons/si";
import { Carousel } from "react-bootstrap";
import { gsap } from "gsap";
import "./Section.css";
import logo from '../assets/images/chrome.png';

const Section = () => {
  useEffect(() => {
    // GSAP animation on carousel items
    const slides = document.querySelectorAll(".carousel-item img");

    slides.forEach((slide) => {
      gsap.fromTo(
        slide,
        { scale: 1.2, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: slide,
            start: "top bottom",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div>
      <main className="d-flex justify-content-center align-items-center">
         <img src={logo} alt="Chrome Logo"  className="img-fluid" style={{ width: '100px', height: 'auto' }} />            
      </main>
      <div>
      <h1 className="browser text-center fs-1 fw-bold  ">
        The browser built <br /> to be yours
      </h1>
      
     
     
     </div>

      <div className="carousel-container">
        <Carousel fade interval={3000} controls={false} indicators={false}>
          <Carousel.Item>
            <img
              className="d-block w-100 animated-slide"
              src="https://miro.medium.com/v2/resize:fit:1400/1*d9DJY8HxjEbw3bf2fOx7zg.gif"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 animated-slide"
              src="https://www.google.com/chrome/static/images/intl/en_AU/v2/gallery/mobile-xp/chrome-gallery-mobile_desktop.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 animated-slide"
              src="https://www.google.com/chrome/static/images/v2/by-google/social-image/by-google-open-graph.webp"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Section;
