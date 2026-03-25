import React from 'react';
import './Page1.css';
import flightIcon from '../assets/flight.jpg';

// Simple i18n constants
const labels = {
  from: 'From',
  to: 'To'
};

const Page1 = () => {
  return (
    <div className="page1-container">
      <div className="content-wrapper">
        {/* Header */}
        <header className="header">
          <div className="logo">
            <span className="sky">Sky</span>
            <span className="explorer">Explorer</span>
          </div>
          <nav className="nav">
            <a href="#features">Features</a>
            <a href="#method">Method</a>
            <a href="#pricing">Pricing</a>
            <a href="#changelog">Changelog</a>
          </nav>
          <button className="login-btn">Log in</button>
        </header>

        {/* Hero Section */}
        <main className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              Find the best <img src={flightIcon} alt="flight" className="plane-icon" /> flights faster
            </h1>
            <p className="hero-subtitle">Travel smarter</p>
          </div>

          {/* Search Form */}
          <div className="search-section">
            <div className="search-options">
              <div className="trip-options">
                <label className="radio-option active">
                  <input type="radio" name="trip" value="roundtrip" defaultChecked />
                  <span>Round trip</span>
                  <span className="dropdown-arrow">▼</span>
                </label>
              </div>
              <div className="passengers-option">
                <span>Passengers</span>
                <span className="dropdown-arrow">▼</span>
              </div>
            </div>

            <div className="search-form">
              <div className="location-inputs">
                <div className="input-group from-input">
                  <label htmlFor="from-input">{labels.from}</label>
                  <input id="from-input" type="text" value="Warsaw, Poland" readOnly />
                </div>
                <button className="swap-btn" type="button" aria-label="Swap locations">⇄</button>
                <div className="input-group to-input">
                  <label htmlFor="to-input">{labels.to}</label>
                  <input id="to-input" type="text" value="Bangkok, Thailand" readOnly />
                </div>
              </div>
              <button className="search-btn" type="submit">Search</button>
            </div>
          </div>
        </main>

        {/* Airlines Section */}
        <div className="airlines">
          <span className="airline-logo lufthansa">lufthansa</span>
          <span className="airline-logo lot">LOT</span>
          <span className="airline-logo delta">DELTA</span>
          <span className="airline-logo klm">KLM</span>
          <span className="airline-logo united">UNITED</span>
        </div>
      </div>
    </div>
  );
};

export default Page1;