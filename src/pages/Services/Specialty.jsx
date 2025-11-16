import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./Specialty.css";

// Dùng đường dẫn tuyệt đối từ thư mục public
const specialties = [
  {
    image: "/homePage_images/radiologist.jpg",
    title: "Imaging Diagnosis",
    description: `
      Our Imaging Diagnosis Center provides state-of-the-art imaging technologies,
      including MRI, CT scan, ultrasound, and digital X-ray. With a team of skilled radiologists
      and advanced equipment, we ensure fast and accurate diagnostic results.
      We focus on early detection, monitoring complex conditions, and offering
      comprehensive imaging services to support all departments across the hospital.
    `
  },
  {
    image: "/homePage_images/the-basics-of-bone-joint-care-web.jpg",
    title: "Bone & Joint",
    description: `
      The Bone & Joint Department offers specialized care for orthopedic conditions,
      including fractures, arthritis, joint degeneration, and sports injuries.
      Our experienced orthopedic surgeons utilize modern minimally invasive techniques
      to ensure faster recovery and long-term mobility improvement.
      Rehabilitation programs are tailored to each patient for optimal healing.
    `
  },
  {
    image: "/homePage_images/Pediatrics.jpeg",
    title: "Pediatrics",
    description: `
      Our Pediatrics Department provides comprehensive medical care for infants,
      children, and adolescents. We focus on preventive medicine, early diagnosis,
      vaccinations, nutrition counseling, and treatment of acute and chronic illnesses.
      With a warm, child-friendly environment, we ensure comfort and safety for every child.
    `
  },
  {
    image: "/homePage_images/OB-GYN.jpg",
    title: "Obstetrics & Gynecology",
    description: `
      The OB-GYN Department supports women's health through all life stages.
      We offer prenatal care, fertility counseling, gynecological surgery,
      cancer screening, and reproductive health services. Our maternity care team
      ensures a safe and personalized experience for expecting mothers.
    `
  },
  {
    image: "/homePage_images/bethesda-naval-medical-center.jpg",
    title: "ENT - Audiology",
    description: `
      Our ENT - Audiology Department provides diagnostic and treatment services
      for ear, nose, throat, and hearing-related conditions. With advanced audiology
      testing systems and experienced specialists, we treat sinus infections,
      allergies, hearing loss, voice disorders, and head & neck issues.
    `
  }
];

const Specialty = () => {
  return (
    <div className="speciality-page">
      <Header />

      <main className="speciality-main">
        <section className="speciality-hero">
          <h1 className="speciality-title">Our Medical Specialties</h1>
          <p className="speciality-subtitle">
            Explore our comprehensive list of specialized departments designed to provide expert care
            across every area of medicine.
          </p>
        </section>

        <section className="speciality-list-section">
          <div className="speciality-list-container">
            {specialties.map((item, index) => (
              <div key={index} className="speciality-item-card">
                <div className="speciality-image-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="speciality-item-image"
                  />
                </div>

                <div className="speciality-item-content">
                  <h2 className="speciality-item-title">{item.title}</h2>
                  <p className="speciality-item-description">
                    {item.description}
                  </p>

                  <Link to="/signup" className="btn-book-item">
                    Book Appointment <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Specialty;
