import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { API_BASE_URL } from "../../config";

const Appointment = () => {
  const [appointmentData, setAppointmentData] = useState({
    name: "",
    email: "",
    service: "",
    mobile: "",
  });

  const [loading, setLoading] = useState(false);

  const allServices = [
    "PTA(Pure Tone Audiometry)",
    "Hearing Aid Trial",
    "Hearing Aid Repair",
    "Hearing Aid Programming",
    "Batteries",
  ];

  const allExperts = ["Vivek Mishra"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData({
      ...appointmentData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, service, mobile } = appointmentData;
    if (!name || !email || !service || !mobile) {
      toast.error("Please fill out all required fields.", { position: "top-right" });
      return;
    }

    const payload = {
      patientName: name,
      patientEmail: email,
      ownerEmail: "info@elitelisten.com",
      typeOfService: service,
      mobile,
    };

    try {
      setLoading(true);
      const response = await axios.post(`${API_BASE_URL}/api/appointment`, payload);
      if (response.status === 200) {
        toast.success(response.data.message, { position: "top-right" });
        setAppointmentData({
          name: "",
          email: "",
          service: "",
          mobile: "",
        });
      }
    } catch (err) {
      toast.error("Failed to schedule appointment.", { position: "top-right" });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        id="appointment"
        className="container-fluid bg-success bg-appointment mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="row gx-5">
            {/* Left content */}
            <div className="col-lg-6 d-flex align-items-center py-5">
              <div className="text-white p-4 p-lg-5">
                <h1 className="display-5 text-white fw-bold mb-4">
                  We Are A Certified and Award-Winning Hearing Aid Clinic You Can Trust
                </h1>
                <p className="mb-3">
                  At EliteListen, we understand how important your hearing experience is. A negative
                  first encounter can be discouraging — but the right fit can reconnect you to the
                  world around you.
                </p>
                <p>
                  Our expert audiologists are dedicated to ensuring your comfort, clarity, and
                  satisfaction using advanced hearing aid technology and personalized care.
                </p>
              </div>
            </div>

            {/* Right form */}
            <div className="col-lg-6">
              <div
                className="appointment-form h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn bg-dark bg-opacity-75 rounded"
                data-wow-delay="0.6s"
              >
                <h2 className="text-white mb-4">Make Appointment</h2>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <select
                        className="form-select bg-light border-0 h-100 py-2"
                        name="service"
                        value={appointmentData.service}
                        onChange={handleChange}
                      >
                        <option value="">Select A Service</option>
                        {allServices.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    {/* <div className="col-12 col-sm-6">
                      <select
                        className="form-select bg-light border-0 h-100 py-2"
                        name="audioExpert"
                        value={appointmentData.audioExpert}
                        onChange={handleChange}
                      >
                        <option value="">Select Audiology Expert</option>
                        {allExperts.map((expert) => (
                          <option key={expert} value={expert}>
                            {expert}
                          </option>
                        ))}
                      </select>
                    </div> */}
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control bg-light border-0 py-2"
                        placeholder="Your Name"
                        value={appointmentData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        name="email"
                        className="form-control bg-light border-0 py-2"
                        placeholder="Your Email"
                        value={appointmentData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="tel"
                        name="mobile"
                        className="form-control bg-light border-0 py-2"
                        placeholder="Your Mobile Number"
                        value={appointmentData.mobile}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary w-100 py-3 fw-bold"
                        disabled={loading}
                      >
                        {loading ? "Submitting..." : "Make Appointment"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Appointment;
