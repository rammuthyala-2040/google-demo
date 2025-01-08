import React from "react";
import "./Footer.css"; // External CSS file

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="social-icons">
          <a href="#" aria-label="YouTube">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" aria-label="X">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
      <div className="footer-links">
        <div className="link-section">
          <h3>Chrome Family</h3>
          <ul>
            <li><a href="#">Other Platforms</a></li>
            <li><a href="#">Chromebooks</a></li>
            <li><a href="#">Chromecast</a></li>
          </ul>
        </div>
        <div className="link-section">
          <h3>Enterprise</h3>
          <ul>
            <li><a href="#">Download Chrome Browser</a></li>
            <li><a href="#">Chrome Browser for Enterprise</a></li>
            <li><a href="#">Chrome Devices</a></li>
            <li><a href="#">ChromeOS</a></li>
            <li><a href="#">Google Cloud</a></li>
            <li><a href="#">Google Workspace</a></li>
          </ul>
        </div>
        <div className="link-section">
          <h3>Education</h3>
          <ul>
            <li><a href="#">Google Chrome Browser</a></li>
            <li><a href="#">Devices</a></li>
            <li><a href="#">Web Store</a></li>
          </ul>
        </div>
        <div className="link-section">
          <h3>Dev and Partners</h3>
          <ul>
            <li><a href="#">Chromium</a></li>
            <li><a href="#">ChromeOS</a></li>
            <li><a href="#">Chrome Web Store</a></li>
            <li><a href="#">Chrome Experiments</a></li>
            <li><a href="#">Chrome Beta</a></li>
            <li><a href="#">Chrome Dev</a></li>
            <li><a href="#">Chrome Canary</a></li>
          </ul>
        </div>
        <div className="link-section">
          <h3>Stay Connected</h3>
          <ul>
            <li><a href="#">Chrome Help</a></li>
            <li><a href="#">Update Chrome</a></li>
            <li><a href="#">Chrome Tips</a></li>
            <li><a href="#">Google Chrome Blog</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <ul>
          <li><a href="#">Privacy and Terms</a></li>
          <li><a href="#">About Google</a></li>
          <li><a href="#">Google products</a></li>
        </ul>
        <p>© 2025 Google</p>
      </div>
    </footer>
  );
};

export default Footer;
