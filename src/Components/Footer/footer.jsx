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

  return (
    <footer className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}>
      <div className="container-fluid py-5 wow fadeInUp mt-n5" data-wow-delay="0.3s">
        <div className="container pt-5">
          <div className="d-flex justify-content-end align-items-center mb-4">
            {/* Dark Mode Toggle */}
            <button onClick={() => setDarkMode(!darkMode)} className="btn btn-outline-success">
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>

          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Quick Links</h5>
              {navLinks.map(({ name, pathUrl }) => (
                <Link className="d-block mb-2" to={pathUrl} key={name}>
                  <i className="bi bi-arrow-right text-success me-2"></i>{name}
                </Link>
              ))}
            </div>

            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Contact Us</h5>
              <p><i className="bi bi-geo-alt text-success me-2"></i>Gurugram, Haryana</p>
              <p><a className="text-reset" href="mailto:info@elitelisten.com"><i className="bi bi-envelope-open text-success me-2"></i>info@elitelisten.com</a></p>
              <p><a className="text-reset" href="tel:+919911917723"><i className="bi bi-telephone text-success me-2"></i>+91-9911917723</a></p>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Follow Us</h5>
              <div className="d-flex">
                {socialLinks.map(({ icon, url }, i) => (
                  <a key={i} href={url} className="btn btn-success btn-square me-2" target="_blank" rel="noopener noreferrer">
                    <i className={icon}></i>
                  </a>
                ))}
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Opening Hours</h5>
              <p><i className="bi bi-clock text-success me-2"></i>Mon - Sun: 8AM - 7PM</p>
              {/* <p><i className="bi bi-calendar text-success me-2"></i>Sunday: Closed</p> */}
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
