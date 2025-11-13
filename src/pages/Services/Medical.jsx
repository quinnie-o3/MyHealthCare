// 
// 

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel";

import { ArrowRight } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Medical.css";

// const Medical = () => {
//   const carouselSlides = [
//     { image: "homePage_images/whole-body-thumb.jpg", title: "General Health Check & Cancer Screening" },
//     { image: "homePage_images/advancedCheckUp.png", title: "Advanced Health Checkup" },
//     { image: "homePage_images/healthcheckup.jpeg", title: "Basic Health Checkup" },
//     { image: "homePage_images/specifiedCheckUp.png", title: "Specialized Health Checkup" },
//     { image: "homePage_images/radiologist.jpg", title: "Imaging Diagnosis" },
//     { image: "homePage_images/the-basics-of-bone-joint-care-web.jpg", title: "Bone & Joint Care" },
//     { image: "homePage_images/Pediatrics.jpeg", title: "Pediatrics" },
//     { image: "homePage_images/OB-GYN.jpg", title: "Obstetrics & Gynecology" },
//     { image: "homePage_images/bethesda-naval-medical-center.jpg", title: "ENT - Audiology" },
//   ];

//   const sectionRefs = useRef([]);

//   const scrollToService = (index) => {
//     sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   return (
//     <div className="medical-page">
//       <Header />

//       <section className="carousel-container">
//         <h1 className="carousel-title">Our Medical Services</h1>
//         <Carousel 
//           slides={carouselSlides} 
//           height="60vh"
//           autoPlayInterval={4000}
//           showNav={true}
//           showText={true}
//           showDots={true}
//         />
//       </section>

//       <section className="medical-details">
//         {carouselSlides.map((service, index) => (
//           <div
//             key={index}
//             ref={(el) => (sectionRefs.current[index] = el)}
//             className="service-detail"
//           >
//             <h2>{service.title}</h2>
//             <p>Thông tin chi tiết của {service.title}...</p>
//             <Link to="/signup" className="service-link">
//               Book Appointment <ArrowRight className="link-icon" />
//             </Link>
//           </div>
//         ))}
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Medical;

const Medical = () => {
  // Dữ liệu của bạn (đã có description)
  const carouselSlides = [
    {
      image: "homePage_images/whole-body-thumb.jpg",
      title: "General Health Check & Cancer Screening",
      description: "A comprehensive package designed to assess your overall health and detect potential cancer risks early, providing peace of mind and timely intervention."
    },
    {
      image: "homePage_images/advancedCheckUp.png",
      title: "Advanced Health Checkup",
      description: "Utilizes state-of-the-art diagnostics for an in-depth analysis of your health, focusing on complex risk factors and detailed bodily functions."
    },
    {
      image: "homePage_images/healthcheckup.jpeg",
      title: "Basic Health Checkup",
      description: "Our essential wellness package covers all fundamental health markers, perfect for routine checkups and maintaining your baseline health."
    },
    {
      image: "homePage_images/specifiedCheckUp.png",
      title: "Specialized Health Checkup",
      description: "Tailored checkups focusing on specific health concerns, such as cardiovascular health, diabetes management, or digestive disorders."
    },
    {
      image: "homePage_images/radiologist.jpg",
      title: "Imaging Diagnosis",
      description: "We provide high-precision diagnostic imaging services, including MRI, CT, X-Ray, and Ultrasound, for accurate and fast diagnoses."
    },
    {
      image: "homePage_images/the-basics-of-bone-joint-care-web.jpg",
      title: "Bone & Joint Care",
      description: "Our orthopedic department offers comprehensive care for all bone and joint conditions, from sports injuries to chronic arthritis."
    },
    {
      image: "homePage_images/Pediatrics.jpeg",
      title: "Pediatrics",
      description: "Dedicated, compassionate care for your children, from infancy through adolescence, ensuring their healthy growth and development."
    },
    {
      image: "homePage_images/OB-GYN.jpg",
      title: "Obstetrics & Gynecology",
      description: "Complete care for women's health, offering services in routine gynecology, prenatal care, childbirth, and specialized treatments."
    },
    {
      image: "homePage_images/bethesda-naval-medical-center.jpg",
      title: "ENT - Audiology",
      description: "Expert diagnosis and treatment for conditions of the Ear, Nose, and Throat, combined with comprehensive audiology services for hearing health."
    },
  ];

  return (
    <div className="medical-page">
      <Header />

      {/* Main content section */}
      <main className="medical-content-container">
        {/* Tiêu đề trang */}
        <div className="section-header">
          <h1 className="section-title">Our Medical Services</h1>
          <p className="section-subtitle">
            Comprehensive care across all specialties, available when you need it.
          </p>
        </div>

        {/* Lưới hiển thị các dịch vụ */}
        <div className="services-grid">
          {carouselSlides.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image-wrapper">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
              </div>
              <div className="service-content">
                <h2 className="service-title">{service.title}</h2>
                <p className="service-description">{service.description}</p>
                <Link to="/signup" className="service-link">
                  Book Appointment <ArrowRight className="link-icon" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Medical;