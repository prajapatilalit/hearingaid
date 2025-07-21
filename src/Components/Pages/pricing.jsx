import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  useEffect(() => {
    if (window?.jQuery) {
      const owlCarousel = window.jQuery(".price-carousel");
      if (owlCarousel?.owlCarousel) {
        owlCarousel.owlCarousel({
          autoplay: true,
          smartSpeed: 1500,
          margin: 45,
          dots: false,
          loop: true,
          nav: true,
          navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>',
          ],
          responsive: {
            0: {
              items: 1,
            },
            768: {
              items: 2,
            },
          },
        });
      }
    }
  }, []);

  const pricingPlans = [
    {
      title: "Hearing Aid Fitment",
      image: "./assets/img/hearing-aids-fitting.jpg",
    },
    {
      title: "Hearing Screening",
      image: "./assets/img/hearing screening.png",
    },
    {
      title: "Hearing Aid Repair & Programming",
      image: "./assets/img/hearing aid repair 2.jpg",
    },
  ];

  return (
    <div
      id="pricing"
      className="container-fluid pb-5 wow fadeInUp"
      data-wow-delay="0.1s"
    >
      <div className="container">
        <div className="row g-5">
          {/* LEFT SECTION */}
          <div className="col-lg-5">
            <div className="section-title mb-4">
              <h5 className="position-relative d-inline-block text-success text-uppercase">
                Pricing Plan
              </h5>
              <h1 className="display-5 mb-0">
                We Offer Fair Prices for Hearing Solutions
              </h1>
            </div>
            <p className="mb-4">
              Because we believe that hearing shouldn’t be a luxury—it’s a right.
              And it’s our mission to ensure that everyone who walks through our
              doors leaves with not just a hearing aid, but a renewed sense of
              connection and belonging.
            </p>
            <h5
              className="text-uppercase text-success wow fadeInUp"
              data-wow-delay="0.3s"
            >
              Call for Appointment
            </h5>
            <h1 className="wow fadeInUp" data-wow-delay="0.6s">
              +91-8800792198
            </h1>
          </div>

          {/* RIGHT SECTION */}
          <div className="col-lg-7">
            <div
              className="owl-carousel price-carousel wow zoomIn"
              data-wow-delay="0.9s"
            >
              {pricingPlans.map((plan, index) => (
                <div className="price-item pb-4" key={index}>
                  <div className="position-relative">
                    <img
                      style={{height: "155px"}}
                      className="img-fluid rounded-top"
                      src={plan.image}
                      alt={plan.title}
                    />
                  </div>
                  <div className="position-relative text-center bg-light border-bottom border-success py-5 p-4">
                    <h4>{plan.title}</h4>
                    <hr className="text-success w-50 mx-auto mt-0" />
                    <div className="d-flex justify-content-between mb-3">
                      <span>Modern Equipment</span>
                      <i className="fa fa-check text-success pt-1" />
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span>Professional Audiologist</span>
                      <i className="fa fa-check text-success pt-1" />
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>24/7 Call Support</span>
                      <i className="fa fa-check text-success pt-1" />
                    </div>
                    <Link
                      to="/appointment"
                      className="btn btn-success py-2 px-4 position-absolute top-100 start-50 translate-middle"
                    >
                      Appointment
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
