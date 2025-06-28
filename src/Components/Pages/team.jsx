import React from "react";
import { Link } from "react-router-dom";

const TeamCard = ({ name, role, image, delay }) => (
  <div className="col-lg-4 wow slideInUp" data-wow-delay={delay}>
    <div className="team-item">
      <div className="position-relative rounded-top z-1">
        <img className="img-fluid rounded-top w-100" src={image} alt={`Team member - ${name}`} />
        <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex" style={{ zIndex: 1 }}>
          {["twitter", "facebook-f", "linkedin-in", "instagram"].map((icon, i) => (
            <a key={i} className="btn btn-success btn-square m-1" href="#">
              <i className={`fab fa-${icon} fw-normal`}></i>
            </a>
          ))}
        </div>
      </div>
      <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
        <h4 className="mb-2">{name}</h4>
        <p className="text-success mb-0">{role}</p>
      </div>
    </div>
  </div>
);

const Team = () => {
  const teamMembers = [
    {
      name: "Vivek Mishra",
      role: "Hearing Aid Expert",
      image: "./assets/img/team-1.jpg",
      delay: "0.1s"
    },
    // {
    //   name: "Dr. John Doe",
    //   role: "Implant Surgeon",
    //   image: "./assets/img/team-2.jpg",
    //   delay: "0.3s"
    // },
    // {
    //   name: "Dr. Jane Smith",
    //   role: "Audiologist",
    //   image: "./assets/img/team-3.jpg",
    //   delay: "0.1s"
    // },
    // {
    //   name: "Dr. Emily Davis",
    //   role: "Speech Therapist",
    //   image: "./assets/img/team-4.jpg",
    //   delay: "0.3s"
    // },
    // {
    //   name: "Dr. Robert Lee",
    //   role: "ENT Specialist",
    //   image: "./assets/img/team-5.jpg",
    //   delay: "0.6s"
    // }
  ];

  return (
    <div className="container-fluid pb-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.1s">
            <div className="section-title bg-light rounded h-100 p-5">
              <h5 className="position-relative d-inline-block text-success text-uppercase">
                Our Audiology Specialist
              </h5>
              <h1 className="display-6 mb-4">
                Meet Our Certified & Experienced Audiology Experts
              </h1>
              <Link to="/appointment" className="btn btn-success py-3 px-5">
                Appointment
              </Link>
            </div>
          </div>

          {/* Team Cards */}
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
