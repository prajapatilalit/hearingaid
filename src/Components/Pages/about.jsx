import React from "react";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Content */}
          <div className="col-lg-7">
            <div className="section-title mb-4">
              <h5 className="position-relative d-inline-block text-success text-uppercase">About Us</h5>
              <h1 className="display-5 mb-0">The Gurugram's Best Hearing Aid Clinic That You Can Trust</h1>
            </div>
            <h4 className="text-body fst-italic mb-4">
              We make your hearing more comfortable and pleasant!
            </h4>
            <p className="mb-4">
              EliteListen has proudly served Gurugram with state-of-the-art hearing aid technology, advanced hearing testing, and tinnitus services.
              Our patient-centered approach allows us to focus on your unique needs. We diagnose and find solutions for hearing and tinnitus using the
              most advanced technology and a fully guaranteed service model based on honesty, integrity, and personalized care.
            </p>
            <div className="row g-3 mb-4">
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                <h5 className="mb-3">
                  <i className="fa fa-check-circle text-success me-3"></i>Award Winning
                </h5>
                <h5 className="mb-3">
                  <i className="fa fa-check-circle text-success me-3"></i>Professional Staff
                </h5>
              </div>
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                <h5 className="mb-3">
                  <i className="fa fa-check-circle text-success me-3"></i>All Day Service
                </h5>
                <h5 className="mb-3">
                  <i className="fa fa-check-circle text-success me-3"></i>Fair Prices
                </h5>
              </div>
            </div>
            <Link to="/#appointment" className="btn btn-success py-2 px-4">
              Make Appointment
            </Link>
          </div>

          {/* Image */}
          <div className="col-lg-5 wow zoomIn" data-wow-delay="0.9s">
            <div className="position-relative rounded overflow-hidden" style={{ minHeight: "400px" }}>
              <img
                className="position-absolute w-100 h-100 object-fit-cover rounded"
                src="./assets/img/silk_PhotoGrid.png"
                alt="Hearing tuning"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
