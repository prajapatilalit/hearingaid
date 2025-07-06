import React from "react";

const Service = () => {
  return (
    <div
      id="hearingaid"
      className="container-fluid py-5 wow fadeInUp"
      data-wow-delay="0.1s"
    >
      <div className="container">
        {/* First Row */}
        <div className="row g-5 mb-5">
          {/* Left Image */}
          <div className="col-lg-5 wow zoomIn" data-wow-delay="0.3s">
            <div className="twentytwenty-container position-relative h-100 rounded overflow-hidden">
              <img
                className="position-absolute w-100 h-100 object-fit-cover"
                src="./assets/img/hearingaidimage.jpg"
                alt="Before hearing aid"
              />
              <img
                className="position-absolute w-100 h-100 object-fit-cover"
                src="./assets/img/hearingaidimage.jpg"
                alt="After hearing aid"
              />
            </div>
          </div>

          {/* Right Services Text */}
          <div className="col-lg-7">
            <div className="section-title mb-5">
              <h5 className="position-relative d-inline-block text-success text-uppercase">
                Shapes Of Hearing Aids
              </h5>
              <h1 className="display-5 mb-0">
                We Offer The Best Quality Ear Hearing Related Product Shapes
              </h1>
            </div>
            <div className="row g-5">
              <div className="col-md-4 service-item wow zoomIn" data-wow-delay="0.6s">
                <div className="rounded-top overflow-hidden">
                  <img
                    className="img-fluid"
                    src="./assets/img/download BTE.jpg"
                    alt="Hearing Screening"
                  />
                </div>
                <div className="position-relative bg-light rounded-bottom text-center p-4">
                  <h5 className="m-0">Behind The Ear(BTE) Hearing Aid</h5>
                </div>
              </div>
              <div className="col-md-4 service-item wow zoomIn" data-wow-delay="0.9s">
                <div className="rounded-top overflow-hidden">
                  <img
                    className="img-fluid"
                    src="./assets/img/signia ric pure.jpeg.jpg"
                    alt="Hearing Aid Fitting"
                  />
                </div>
                <div className="position-relative bg-light rounded-bottom text-center p-4">
                  <h5 className="m-0">Reciever in Canal(RIC) Hearing Aid</h5>
                </div>
              </div>
              <div className="col-md-4 service-item wow zoomIn" data-wow-delay="0.12s">
                <div className="rounded-top overflow-hidden">
                  <img
                    className="img-fluid"
                    src="./assets/img/SLIM RIC.jpeg.jpg"
                    alt="Slim RIC"
                  />
                </div>
                <div className="position-relative bg-light rounded-bottom text-center p-4">
                  <h5 className="m-0">Slim RIC Hearing Aid</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="row g-5 wow fadeInUp" data-wow-delay="0.1s">
          {/* Left More Services */}
          <div className="col-lg-7">
            <div className="row g-5">
              <div className="col-md-4 service-item wow zoomIn" data-wow-delay="0.3s">
                <div className="rounded-top overflow-hidden">
                  <img
                    className="img-fluid"
                    src="./assets/img/cic.jpeg.jpg"
                    alt="Hearing Aid Repair & Programming"
                  />
                </div>
                <div className="position-relative bg-light rounded-bottom text-center p-4">
                  <h5 className="m-0">Complete in Canal(CIC) Hearing Aid</h5>
                </div>
              </div>
              <div className="col-md-4 service-item wow zoomIn" data-wow-delay="0.6s">
                <div className="rounded-top overflow-hidden">
                  <img
                    className="img-fluid"
                    src="./assets/img/insio AX image.jpg"
                    alt="Into The Canal"
                  />
                </div>
                <div className="position-relative bg-light rounded-bottom text-center p-4">
                  <h5 className="m-0">Into The Canal(ITC) Hearing Aid</h5>
                </div>
              </div>
              <div className="col-md-4 service-item wow zoomIn" data-wow-delay="0.9s">
                <div className="rounded-top overflow-hidden">
                  <img
                    className="img-fluid"
                    src="./assets/img/IIC-Hearing-aid1.jpg"
                    alt="Invisible in Canal"
                  />
                </div>
                <div className="position-relative bg-light rounded-bottom text-center p-4">
                  <h5 className="m-0">Invisible in Canal(IIC) Hearing Aid</h5>
                </div>
              </div>
            </div>
          </div>

          {/* Right Appointment Call-to-Action */}
          <div className="col-lg-5 service-item wow zoomIn" data-wow-delay="0.9s">
            <div className="position-relative bg-success rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-4">
              <h3 className="text-white mb-3">Make Appointment</h3>
              <p className="text-white mb-3">
                Our expert audiologists provide top-quality hearing care using the
                latest technology. Schedule a personalized appointment and take the
                first step toward better hearing.
              </p>
              <h2 className="text-white mb-0">
                <a className="text-white text-decoration-none" href="tel:+919911917723">
                  <i className="bi bi-telephone text-warn me-2"></i>+91-9911917723
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
