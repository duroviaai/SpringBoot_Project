import React from 'react';
import './Page2.css';

const Page2 = () => {
  return (
    <div className="page2-container">
      <nav className="navbar">
        <div className="nav-brand">SteveEditor</div>
        <div className="nav-links">
          <a href="#main">Main</a>
          <a href="#about">About</a>
          <a href="#program">Program</a>
          <a href="#price">Price</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </nav>

      <div className="hero-content">
        <h1 className="hero-title">
          EDIT LIKE A PRO<br />
          AND MAKE MONEY
        </h1>
        <p className="hero-description">
          This is an intensive program designed for those who want to master the<br />
          skills of professional editing and graphic design
        </p>
        <button className="order-btn">Order</button>
        <div className="order-arrow">
          <span>Order from here</span>
          <div className="arrow">↗</div>
        </div>
      </div>

      <div className="floating-icons">
        <div className="icon premiere-pro">
          <div className="icon-box">
            <span>Pr</span>
          </div>
          <span className="icon-label">Premiere pro</span>
          <span className="close-btn">×</span>
        </div>
        <div className="icon photoshop">
          <div className="icon-box">
            <span>Ps</span>
          </div>
          <span className="icon-label">Photoshop</span>
          <span className="close-btn">×</span>
        </div>
        <div className="icon after-effects">
          <div className="icon-box">
            <span>Ae</span>
          </div>
          <span className="icon-label">After effects</span>
          <span className="close-btn">×</span>
        </div>
      </div>
    </div>
  );
};

export default Page2;