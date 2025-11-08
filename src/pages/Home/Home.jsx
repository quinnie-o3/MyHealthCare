import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <div className="container">
      <header>
        <div className="logo">
          <span className="logo-my">My</span>
          <span className="logo-health">Health</span>
          <span className="logo-my">Care</span>
          <span className="logo-plus">+</span>
        </div>

        <nav className="toolbar">
          <a href="#home">Home</a>
          <a href="#about">About us</a>

          <div className="dropdown">
            <span>Services</span>
            <div className="dropdown-content">
              <a href="#medical">Medical</a>
              <a href="#booking">Booking</a>
            </div>
          </div>
        </nav>

        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button>🔍</button>
        </div>

        <div className="auth-buttons">
          <Link to="/login" className="login">
            Log in
          </Link>
          <Link to="/signup" className="signup">
            Sign up
          </Link>
        </div>
      </header>

      <div className="main-content">
        <div className="carousel-container">
          <Carousel />
        </div>

        {/* Services Section */}
        <section className="services">
          <h2>Services</h2>
          <div className="service-grid">
            <div className="service-card">
              <img
                src="homePage_images/whole-body-thumb.jpg"
                alt="General Health Checkup"
              />
              <h3>General Health Check & Cancer Screening</h3>
              <a href="#" className="btn-detail">
                View Details
              </a>
            </div>
            <div className="service-card">
              <img
                src="homePage_images/advancedCheckUp.png"
                alt="Advanced Health Checkup"
              />
              <h3>Advanced Health Checkup</h3>
              <a href="#" className="btn-detail">
                View Details
              </a>
            </div>
            <div className="service-card">
              <img
                src="homePage_images/healthcheckup.jpeg"
                alt="Basic Health Checkup"
              />
              <h3>Basic Health Checkup</h3>
              <a href="#" className="btn-detail">
                View Details
              </a>
            </div>
            <div className="service-card">
              <img
                src="homePage_images/specifiedCheckUp.png"
                alt="Specialized Health Checkup"
              />
              <h3>Specialized Health Checkup</h3>
              <a href="#" className="btn-detail">
                View Details
              </a>
            </div>
          </div>
        </section>

        {/* Specialties Section */}
        <section className="specialties">
          <h2>Specialties</h2>
          <ul className="specialty-list">
            <li>
              <img src="homePage_images/radiologist.jpg" alt="Imaging Diagnosis" />
              <div>
                <h3>Imaging Diagnosis</h3>
                <a href="#">Read more</a>
              </div>
            </li>
            <li>
              <img
                src="homePage_images/the-basics-of-bone-joint-care-web.jpg"
                alt="Bone & Joint"
              />
              <div>
                <h3>Bone & Joint</h3>
                <a href="#">Read more</a>
              </div>
            </li>
            <li>
              <img src="homePage_images/Pediatrics.jpeg" alt="Pediatrics" />
              <div>
                <h3>Pediatrics</h3>
                <a href="#">Read more</a>
              </div>
            </li>
            <li>
              <img src="homePage_images/OB-GYN.jpg" alt="Obstetrics & Gynecology" />
              <div>
                <h3>Obstetrics & Gynecology</h3>
                <a href="#">Read more</a>
              </div>
            </li>
            <li>
              <img
                src="homePage_images/bethesda-naval-medical-center.jpg"
                alt="ENT - Audiology"
              />
              <div>
                <h3>ENT - Audiology</h3>
                <a href="#">Read more</a>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Home;