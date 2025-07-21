import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEye } from "react-icons/fa";

const Service = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const deviceSpecifications = {
    ric: ["Bluetooth Connectivity", "Rechargeable", "30 hrs Battery", "Noise Reduction", "Small and discreet with a thin wire connecting to the ear canal", "Offers excellent sound quality", "Ideal for most types of hearing loss"],
    bte: ["Wireless Streaming", "Replaceable Battery", "Water Resistant", "Multiple Programs", "Rests comfortably behind the ear", "Suitable for mild to profound hearing loss", "Durable and easy to handle"],
    slimric: ["Sleek Design", "Rechargeable", "Auto Adjust Volume", "Outstanding speech clarity and noise reduction", "Directional Microphones", "Auto EchoShield to manage echo effects", "Best for mild to moderate hearing loss"],
    cic: ["Small & Discreet", "Rechargeable Battery", "Fits in Ear Canal", "Personalized Fit", "Custom-molded to fit partly or fully in the ear canal", "Nearly invisible when worn", "Best for mild to severe hearing loss"],
    itc: ["Fits Inside Ear", "Easy to Handle", "Directional Microphones", "Rechargeable", "Custom-molded to fit partly or fully in the ear canal", "Nearly invisible when worn", "Best for mild to severe hearing loss"],
    iic: ["Invisible Design", "Deep Canal Fit", "Basic Noise Reduction", "Small Battery", "Custom-molded to fit partly or fully in the ear canal", "Nearly invisible when worn", "Best for mild to moderate hearing loss"]
  };

  const renderEyeIcon = (key) => (
    <div
      className="position-absolute top-100 start-50 translate-middle"
      onClick={() => setHoveredCard(key)}
      onDoubleClick={() => setHoveredCard(null)}
      style={{ cursor: "pointer", zIndex: 2 }}
    >
      <FaEye size={20} className="text-success" />
    </div>
  );

  const renderPopup = (key) => (
    <AnimatePresence>
      {hoveredCard === key && (
        <motion.div
          className="position-absolute start-50 translate-middle-x shadow p-3 rounded"
          style={{ bottom: "14px", width: "250px", zIndex: 5, backgroundColor: "#dcd5cf" }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="d-flex justify-content-between">
            <h6 className="mb-2">Specifications:</h6>
            <div onClick={() => setHoveredCard(null)} style={{cursor: "pointer"}}>
              <i class="fas fa-times" style={{color: "#EE7923"}}></i>
            </div>
          </div>
          <ul className="mb-0 text-start small">
            {deviceSpecifications[key].map((spec, idx) => (
              <li key={idx}>{spec}</li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div id="hearingaid" className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        {/* First Row */}
        <div className="row g-5 mb-5">
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

          {/* Right Services */}
          <div className="col-lg-7">
            <div className="section-title mb-5">
              <h5 className="position-relative d-inline-block text-success text-uppercase">
                Shapes of Hearing Aids
              </h5>
              <h4 className="display-5 mb-0">
                Hearing aids come in various shapes and sizes to suit different hearing needs, comfort preferences, and lifestyles. Choosing the right shape ensures not only better sound quality but also a more natural and discreet fit.
              </h4>
            </div>

            <div className="row g-5">
              {/* BTE */}
              <div className="col-md-4 service-item wow zoomIn position-relative" data-wow-delay="0.6s">
                {/* {renderEyeIcon("bte")} */}
                {renderPopup("bte")}
                <div className="rounded-top overflow-hidden" onClick={() => setHoveredCard("bte")} style={{ cursor: "pointer", zIndex: 2 }} >
                  <img style={{ height: "213px" }} className="img-fluid" src="./assets/img/download BTE.jpg" alt="BTE" />
                </div>
                <div className="position-relative bg-light rounded-bottom text-center p-4" onClick={() => setHoveredCard("bte")} style={{ cursor: "pointer", zIndex: 2 }} >
                  <h5 className="m-0">Behind The Ear(BTE) Hearing Aid</h5>
                </div>
              </div>

              {/* RIC */}
              <div className="col-md-4 service-item wow zoomIn position-relative" data-wow-delay="0.9s">
                {/* {renderEyeIcon("ric")} */}
                {renderPopup("ric")}
                <div className="rounded-top overflow-hidden" onClick={() => setHoveredCard("ric")} style={{ cursor: "pointer", zIndex: 2 }}>
                  <img style={{ height: "213px" }} className="img-fluid" src="./assets/img/signia ric pure.jpeg.jpg" alt="RIC" />
                </div>
                <div className="position-relative bg-light rounded-bottom text-center p-4" onClick={() => setHoveredCard("ric")} style={{ cursor: "pointer", zIndex: 2 }}>
                  <h5 className="m-0">Reciever in Canal(RIC) Hearing Aid</h5>
                </div>
              </div>

              {/* Slim RIC */}
              <div className="col-md-4 service-item wow zoomIn position-relative" data-wow-delay="0.12s">
                {/* {renderEyeIcon("slimric")} */}
                {renderPopup("slimric")}
                <div className="rounded-top overflow-hidden" onClick={() => setHoveredCard("slimric")} style={{ cursor: "pointer", zIndex: 2 }}>
                  <img style={{ height: "213px" }} className="img-fluid" src="./assets/img/SLIM RIC.jpeg.jpg" alt="Slim RIC" />
                </div>
                <div className="position-relative bg-light rounded-bottom text-center p-4" onClick={() => setHoveredCard("slimric")} style={{ cursor: "pointer", zIndex: 2 }}>
                  <h5 className="m-0">Slim RIC Hearing Aid</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="row g-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="col-lg-7">
            <div className="row g-5">
              {/* CIC */}
              <div className="col-md-4 service-item wow zoomIn position-relative" data-wow-delay="0.3s">
                {/* {renderEyeIcon("cic")} */}
                {renderPopup("cic")}
                <div className="rounded-top overflow-hidden" onClick={() => setHoveredCard("cic")} style={{ cursor: "pointer", zIndex: 2 }}>
                  <img style={{ height: "213px" }} className="img-fluid" src="./assets/img/cic.jpeg.jpg" alt="CIC" />
                </div>
                <div className="position-relative bg-light rounded-bottom text-center p-4" onClick={() => setHoveredCard("cic")} style={{ cursor: "pointer", zIndex: 2 }}>
                  <h5 className="m-0">Complete in Canal(CIC) Hearing Aid</h5>
                </div>
              </div>

              {/* ITC */}
              <div className="col-md-4 service-item wow zoomIn position-relative" data-wow-delay="0.6s">
                {/* {renderEyeIcon("itc")} */}
                {renderPopup("itc")}
                <div className="rounded-top overflow-hidden" onClick={() => setHoveredCard("itc")} style={{ cursor: "pointer", zIndex: 2 }}>
                  <img style={{ height: "213px" }} className="img-fluid" src="./assets/img/insio AX image.jpg" alt="ITC" />
                </div>
                <div className="position-relative bg-light rounded-bottom text-center p-4" onClick={() => setHoveredCard("itc")} style={{ cursor: "pointer", zIndex: 2 }}>
                  <h5 className="m-0">Into The Canal(ITC) Hearing Aid</h5>
                </div>
              </div>

              {/* IIC */}
              <div className="col-md-4 service-item wow zoomIn position-relative" data-wow-delay="0.9s">
                {/* {renderEyeIcon("iic")} */}
                {renderPopup("iic")}
                <div className="rounded-top overflow-hidden" onClick={() => setHoveredCard("iic")} style={{ cursor: "pointer", zIndex: 2 }}>
                  <img style={{ height: "213px" }} className="img-fluid" src="./assets/img/IIC-Hearing-aid1.jpg" alt="IIC" />
                </div>
                <div className="position-relative bg-light rounded-bottom text-center p-4" onClick={() => setHoveredCard("iic")} style={{ cursor: "pointer", zIndex: 2 }}>
                  <h5 className="m-0">Invisible in Canal(IIC) Hearing Aid</h5>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Appointment */}
          <div className="col-lg-5 service-item wow zoomIn" data-wow-delay="0.9s">
            <div className="position-relative bg-success rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-4">
              <h3 className="text-white mb-3">Make Appointment</h3>
              <p className="text-white mb-3">
                Our expert audiologists provide top-quality hearing care using the latest technology. Schedule a personalized appointment and take the first step toward better hearing.
              </p>
              <h2 className="text-white mb-0">
                <a className="text-white text-decoration-none" href="tel:+918800792198">
                  <i className="bi bi-telephone text-warn me-2"></i>+91-8800792198
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
