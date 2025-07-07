import React from "react";

const Topbar = () => {
  return (
    <div className="container-fluid bg-light px-5 d-none d-lg-block">
      <div className="row gx-0 align-items-center">
        {/* Left Side - Opening Hours */}
        <div className="col-md-6 text-center text-md-start">
          <div className="d-inline-flex align-items-center h-100">
            <small className="text-muted py-2">
              <i className="far fa-clock text-success me-2"></i>
              Opening Hours: Mon - Sun : 08:00 AM - 07:00 PM
            </small>
          </div>
        </div>

        {/* Right Side - Contact Info */}
        <div className="col-md-6 text-center text-md-end">
          <div className="d-inline-flex align-items-center bg-success text-white rounded-start px-4 py-2">
            <small className="me-4 border-end pe-3">
              <a href="mailto:info@elitelisten.com" className="text-white text-decoration-none">
                <i className="fa fa-envelope-open me-2"></i>
                info@elitelisten.com
              </a>
            </small>
            <small>
              <a href="tel:+919911917723" className="text-white text-decoration-none">
                <i className="fa fa-phone-alt me-2"></i>
                +91-9911917723
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
