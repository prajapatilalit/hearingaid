import React from "react";
import { HashLink } from "react-router-hash-link";

const CarouselHearinAid = () => {
  return (
    <div className="container-fluid p-0">
      <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">

          {/* Slide 1 */}
          <div className="carousel-item active">
            <img
              className="w-100"
              style={{ maxHeight: "650px", objectFit: "cover" }}
              src="./assets/img/front-view-man-holding-hearing-aidsss.jpg"
              alt="Man holding hearing aids"
            />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3 text-center">
                <h5 className="text-white text-uppercase mb-3 animated slideInDown">Keep Your Ear Healthy</h5>
                <h1 className="display-1 text-white mb-md-4 animated zoomIn fs-1">Hear the world clearly with EliteListen</h1>
                <HashLink smooth to="/#appointment" className="btn btn-success py-md-3 px-md-5 me-3 animated slideInLeft">
                  Appointment
                </HashLink>
                <HashLink smooth to="/#contact" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">
                  Contact Us
                </HashLink>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img
              className="w-100"
              style={{ maxHeight: "650px", objectFit: "cover" }}
              src="./assets/img/person-having-hearing-issues.jpg"
              alt="Ear health consultation"
            />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3 text-center">
                <h5 className="text-white text-uppercase mb-3 animated slideInDown">Keep Your Ear Healthy</h5>
                <h1 className="display-1 text-white mb-md-4 animated zoomIn fs-1">Hear the world clearly with EliteListen</h1>
                <HashLink smooth to="/#appointment" className="btn btn-success py-md-3 px-md-5 me-3 animated slideInLeft">
                  Appointment
                </HashLink>
                <HashLink smooth to="/#contact" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">
                  Contact Us
                </HashLink>
              </div>
            </div>
          </div>

        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CarouselHearinAid;
