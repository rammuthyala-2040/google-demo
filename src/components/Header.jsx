import React from 'react';
import { SiGooglechrome } from "react-icons/si";
import { Link } from 'react-router-dom';
import './Header.css'; 
import logo from '../assets/Images/chrome.png';



const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light shadow">
        <div className="container-fluid">
          {/* Brand Section */}
          <Link to="/" className="navbar-brand d-flex align-items-center">
            {/* <SiGooglechrome
              size={50}
              className="icon text-warning border border-light rounded p-1 me-2"
            /> */}
            <img src={logo} alt="Chrome Logo" className="img-fluid" style={{ width: '70px', height: 'auto' }} />
     
            
            <span className="fw-bold text-black">Chrome</span>
          </Link>

          {/* Navbar Toggle for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-center">
              <li className="nav-item">
                <Link to="/" className="nav-link text-black fw-bold hover-effect">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/browser"
                  className="nav-link text-black fw-bold hover-effect"
                >
                  The Browser by Google
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/safety"
                  className="nav-link text-black fw-bold hover-effect"
                >
                  Safety
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/support"
                  className="nav-link text-black fw-bold hover-effect"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
