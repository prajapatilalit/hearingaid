import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  // Collapse mobile menu on click
  const closeNavbar = () => {
    const navbar = document.getElementById("navbarCollapse");
    if (navbar && navbar.classList.contains("show")) {
      const bsCollapse = new window.bootstrap.Collapse(navbar, { toggle: false });
      bsCollapse.hide();
    }
  };

  // Scroll spy to track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const isActive = (id) => (activeSection === id ? "active" : "");

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0 sticky-top">
      <HashLink smooth to="/#home" className="nav-item nav-link" onClick={closeNavbar}>
        <img width="200px" height="100px" src="./assets/img/logoelite.png" alt="Logo" />
      </HashLink>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <HashLink smooth to="/#home" onClick={closeNavbar} className={`nav-item nav-link ${isActive("home")}`}>
            Home
          </HashLink>
          <HashLink smooth to="/#about" onClick={closeNavbar} className={`nav-item nav-link ${isActive("about")}`}>
            About
          </HashLink>
          <HashLink smooth to="/#service" onClick={closeNavbar} className={`nav-item nav-link ${isActive("service")}`}>
            Service
          </HashLink>

          <div className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Pages
            </a>
            <ul className="dropdown-menu">
              <li>
                <HashLink smooth to="/#pricing" onClick={closeNavbar} className="dropdown-item">
                  Pricing Plan
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#team" onClick={closeNavbar} className="dropdown-item">
                  Our Ear Specialist
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#testimonial" onClick={closeNavbar} className="dropdown-item">
                  Testimonial
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#appointment" onClick={closeNavbar} className="dropdown-item">
                  Appointment
                </HashLink>
              </li>
            </ul>
          </div>

          <HashLink smooth to="/#contact" onClick={closeNavbar} className={`nav-item nav-link ${isActive("contact")}`}>
            Contact
          </HashLink>
        </div>

        <button type="button" className="btn text-dark" data-bs-toggle="modal" data-bs-target="#searchModal">
          <i className="fa fa-search"></i>
        </button>
        <HashLink
          smooth
          to="/#appointment"
          onClick={closeNavbar}
          className="btn btn-success py-2 px-4 ms-3"
        >
          Appointment
        </HashLink>
      </div>
    </nav>
  );
};

export default Nav;
