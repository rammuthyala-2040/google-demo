import React, { useState } from "react";
import { motion } from "framer-motion"; // For animations
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "./PasswordManager.css"; // Custom styles

const PasswordManager = () => {
    const [leftCardContent, setLeftCardContent] = useState(1);
  const [rightCardContent, setRightCardContent] = useState(1);

  const handleLeftCardClick = () => {
    // Toggle between two states
    setLeftCardContent((prev) => (prev === 1 ? 2 : 1));
  };

  const handleRightCardClick = () => {
    // Toggle between two states
    setRightCardContent((prev) => (prev === 1 ? 2 : 1));
  };
  return (
    <div className="container">
      {/* Left Card */}
      <div
        className={`card left-card animated-card`}
        onClick={handleLeftCardClick}
      >
        <div className="search-section">
          {leftCardContent === 1 ? (
            <>
              <div className="search-bar">
                <img src="https://www.google.com/chrome/static/images/v2/gallery/search-back.webp" alt="" />
                <input
                  type="text"
                  value="300 usd to eur"
                  className="search-input"
                  readOnly
                />
                <div className="search-suggestions">
                 
                </div>
              </div>
              <p className="card-text">
                Access a world of knowledge at your fingertips. Check the
                weather, solve math equations, and get instant search results,
                all contained inside your browser’s address bar.
              </p>
            </>
          ) : (
            <p className="card-text">
              This is the updated information for the left card! Click again to
              toggle back.
            </p>
          )}
        </div>
      </div>

      {/* Right Card */}
      <div
        className={`card right-card animated-card`}
        onClick={handleRightCardClick}
      >
        <div className="toggle-section">
          {rightCardContent === 1 ? (
            <>
           <ul className="options">
                <li>Rename</li>
                <li>Remove</li>
                <li>Available offline</li>
              </ul>
              <div className="toggle-switch">
                <input type="checkbox" id="toggle" />
                <label htmlFor="toggle"></label>
              </div>
              
              <p className="card-text">
                Get things done in Gmail, Google Docs, and more, even offline!
              </p>
            </>
          ) : (
            <p className="card-text">
              This is the updated information for the right card! Click again
              to toggle back.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordManager;
