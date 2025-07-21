import React from "react";
import { Link } from 'react-router-dom';
import { useDarkMode } from "./useDarkMode";

const Footer = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  const navLinks = [
    { name: "Home", pathUrl: "/#home" },
    { name: "About Us", pathUrl: "/about" },
    { name: "Hearing Aid", pathUrl: "/hearingaid" },
    { name: "Latest Blog", pathUrl: "/" },
    { name: "Contact Us", pathUrl: "/contact" },
  ];

  const socialLinks = [
    { icon: "fab fa-twitter", url: "#" },
    { icon: "fab fa-facebook-f", url: "#" },
    { icon: "fab fa-linkedin-in", url: "#" },
    { icon: "fab fa-instagram", url: "#" },
  ];

  const address = "84P GF Sector 43 Golf course Road opp. Huda water Works Nearest Metro Sector 42-43 and Millennium City Center, Gurugram, Haryana 122002";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <footer className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}>
      <div className="container-fluid py-5 mt-n5 wow fadeInUp" data-wow-delay="0.3s">
        <div className="container pt-5">
          <div className="d-flex justify-content-end mb-4">
            <button onClick={() => setDarkMode(!darkMode)} className="btn btn-outline-success">
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>

          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h5 className="mb-4 text-white">Quick Links</h5>
              {navLinks.map(({ name, pathUrl }) => (
                <Link className="d-block mb-2 text-reset" to={pathUrl} key={name}>
                  <i className="bi bi-arrow-right text-success me-2"></i>{name}
                </Link>
              ))}
            </div>

            <div className="col-lg-3 col-md-6">
              <h5 className="mb-4 text-white">Contact Us</h5>
              <div className="mb-3 d-flex align-items-start">
                <i className="bi bi-geo-alt text-success me-2 mt-1"></i>
                <div>
                  <div>{address}</div>
                  <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-link p-0">
                    📍 View on Map
                  </a>
                </div>
              </div>

              <div className="mb-2 d-flex align-items-center">
                <i className="bi bi-envelope-open text-success me-2"></i>
                <a className="text-reset text-decoration-none" href="mailto:info@elitelisten.com">
                  info@elitelisten.com
                </a>
              </div>

              <div className="d-flex align-items-center">
                <i className="bi bi-telephone text-success me-2"></i>
                <a className="text-reset text-decoration-none" href="tel:+918800792198">
                  +91-8800792198
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5 className="mb-4 text-white">Follow Us</h5>
              <div className="d-flex mb-3">
                {socialLinks.map(({ icon, url }, i) => (
                  <a key={i} href={url} className="btn btn-success btn-square rounded-circle me-2" target="_blank" rel="noopener noreferrer">
                    <i className={icon}></i>
                  </a>
                ))}
              </div>
              <h5 className="mb-2 text-white">Opening Hours</h5>
              <div className="d-flex align-items-center mb-1">
                <i className="bi bi-clock text-success me-2"></i>
                <span>Mon - Sun: 8AM - 7PM</span>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5 className="mb-4 text-white">Our Location</h5>
              <div className="ratio ratio-4x3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0716244535317!2d77.0365891755175!3d28.62601147567627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d193c13d64c0d%3A0x29e2752b7c77a01d!2s84P%2C%20Sector%2043%2C%20Gurugram%2C%20Haryana%20122002!5e0!3m2!1sen!2sin!4v1720682842300!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Business Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-3 border-top border-secondary">
        <small>
          &copy; {new Date().getFullYear()} <a href="https://elitelisten.com/" className="text-decoration-none">Elite Listen</a>. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
