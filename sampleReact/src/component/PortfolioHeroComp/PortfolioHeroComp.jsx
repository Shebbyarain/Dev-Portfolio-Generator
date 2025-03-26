// HeroSection.jsx
import React from 'react';
import './PortfolioHeroComp.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <h1>myportfolio</h1>
        </div>
        <div className="nav-links">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#service">Service</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="download-cv">
          <a href="/CVZohaibZulifqar.pdf" download className="cv-button">Download CV</a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="hero-text">
          <h3>Hello, I'm</h3>
          <h1>Zohaib Zulifqar</h1>
          <h2>A <span className="highlight-green">Associate Web Developer</span> From <span className="highlight-purple">Lahore</span></h2>
          
          <p>I am a creative web developer based in Lahore, and I am very passionate and dedicated to my work.</p>
          
          <div className="cta-container">
            <a href="#about" className="about-btn">About Me</a>
            <div className="social-icons">
              <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-behance"></i></a>
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="profile-container">
            <div className="profile-wrapper">
              <img src="/mypic.jpg" alt="Zohaib Zulifqar" className="profile-image" />
            </div>
            
            {/* Software Icons */}
            <div className="ai-icon">
              <i className="fab fa-adobe"></i>
            </div>
            <div className="ps-icon">
              <i className="fab fa-photoshop"></i>
            </div>
            <div className="figma-icon">
              <i className="fab fa-figma"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-icon"></div>
      </div>
    </div>
  );
};

export default HeroSection;