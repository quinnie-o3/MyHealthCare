import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Carousel from "./Carousel";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const services = [
    {
      image: "homePage_images/whole-body-thumb.jpg",
      title: "General Health Check & Cancer Screening",
      description: "Comprehensive health assessment and early cancer detection"
    },
    {
      image: "homePage_images/advancedCheckUp.png",
      title: "Advanced Health Checkup",
      description: "In-depth medical examination with advanced diagnostics"
    },
    {
      image: "homePage_images/healthcheckup.jpeg",
      title: "Basic Health Checkup",
      description: "Essential health screening for preventive care"
    },
    {
      image: "homePage_images/specifiedCheckUp.png",
      title: "Specialized Health Checkup",
      description: "Targeted health assessments for specific conditions"
    }
  ];

  const specialties = [
    {
      image: "homePage_images/radiologist.jpg",
      title: "Imaging Diagnosis",
      description: "Advanced imaging technology for accurate diagnosis"
    },
    {
      image: "homePage_images/the-basics-of-bone-joint-care-web.jpg",
      title: "Bone & Joint",
      description: "Orthopedic care and joint health specialists"
    },
    {
      image: "homePage_images/Pediatrics.jpeg",
      title: "Pediatrics",
      description: "Comprehensive care for infants, children, and adolescents"
    },
    {
      image: "homePage_images/OB-GYN.jpg",
      title: "Obstetrics & Gynecology",
      description: "Women's health and reproductive care"
    },
    {
      image: "homePage_images/bethesda-naval-medical-center.jpg",
      title: "ENT - Audiology",
      description: "Ear, nose, throat, and hearing specialists"
    }
  ];

  return (
    <div className="home-page">
      <Header />

      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-text">
              <h2 className="hero-title">Your Health, Our Priority</h2>
              <p className="hero-subtitle">
                Experience world-class healthcare services with cutting-edge technology and compassionate care
              </p>
            </div>
            
            <div className="carousel-wrapper">
              <Carousel />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services-section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Our Services</h2>
              <p className="section-subtitle">
                Comprehensive healthcare services tailored to your needs
              </p>
            </div>

            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-image-wrapper">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="service-image"
                    />
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>

                    <Link to="/medical" className="service-link">
                      View Details <ArrowRight className="link-icon" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="specialties" className="specialties-section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Our Specialties</h2>
              <p className="section-subtitle">
                Expert care across multiple medical specialties
              </p>
            </div>

            <div className="specialties-grid">
              {specialties.map((specialty, index) => (
                <div key={index} className="specialty-card">
                  <div className="specialty-content">
                    <div className="specialty-image-wrapper">
                      <img 
                        src={specialty.image} 
                        alt={specialty.title}
                        className="specialty-image"
                      />
                    </div>
                    <div className="specialty-text">
                      <h3 className="specialty-title">{specialty.title}</h3>
                      <p className="specialty-description">{specialty.description}</p>

                      <Link to="/specialty" className="specialty-link">
                        Read more <ArrowRight className="link-icon-sm" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-container">
            <h2 className="cta-title">Ready to Take Control of Your Health?</h2>
            <p className="cta-subtitle">
              Schedule your appointment today and experience personalized healthcare
            </p>
            <div className="cta-buttons">
              <Link to="/signup" className="btn-cta-primary">
                Get Started Now
              </Link>
              <Link to="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZWPGGStcCpZMsLnGMXvlBqrkMqmFZHkLrxCtcVQghSMSPGqFdjxrtcKpDDkJHgkwvGmvq" className="btn-cta-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
