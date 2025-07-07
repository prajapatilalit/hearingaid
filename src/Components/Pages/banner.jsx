import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";

const Banner = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    return (
        <div className="container-fluid banner mb-5">
          <div className="container">
            <div className="row gx-6 gy-4">
                {/* Opening Hours */}
                <div className="col-lg-6 wow zoomIn" data-wow-delay="0.1s">
                    <div className="bg-success d-flex flex-column justify-content-between p-5 h-100 rounded shadow">
                      <div>
                        <h3 className="text-white mb-4">Opening Hours</h3>
                        <div className="d-flex justify-content-between text-white mb-2">
                          <span>Mon - Fri</span>
                          <span>8:00am - 7:00pm</span>
                        </div>
                        <div className="d-flex justify-content-between text-white mb-2">
                          <span>Saturday</span>
                          <span>8:00am - 7:00pm</span>
                        </div>
                        <div className="d-flex justify-content-between text-white mb-4">
                          <span>Sunday</span>
                          <span>8:00am - 5:00pm</span>
                        </div>
                      </div>
                      {/* Smooth scroll to appointment section */}
                      <HashLink smooth to="/#appointment" className="btn btn-light mt-auto">
                        Book Appointment
                      </HashLink>
                    </div>
                </div>

                {/* Search Audiologist */}
                {/* <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
                    <div className="bg-dark d-flex flex-column p-5 h-100 rounded shadow">
                      <h3 className="text-white mb-4">Search An Audiologist</h3>


                      <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        className="form-control bg-light border-0 mb-3 h-100 py-2"
                        placeholderText="Select Appointment Date"
                        dateFormat="dd-MM-yyyy"
                        minDate={new Date()}
                      />

                      <select className="form-select bg-light border-0 mb-3 h-100 py-2">
                        <option value="">Select A Service</option>
                        <option value="PTA">PTA (Pure Tone Audiometry)</option>
                        <option value="Hearing Aid Trial">Hearing Aid Trial</option>
                        <option value="Hearing Aid Repair">Hearing Aid Repair</option>
                        <option value="Hearing Aid Programming">Hearing Aid Programming</option>
                        <option value="Batteries">Batteries</option>
                      </select>

                      <Link to="/team" className="btn btn-light mt-auto">
                        Search Audiologist
                      </Link>
                    </div>
                </div> */}


                {/* Call Section */}
                <div className="col-lg-6 wow zoomIn" data-wow-delay="0.6s">
                    <div className="bg-secondary d-flex flex-column justify-content-between p-5 h-100 rounded shadow text-white">
                        <div>
                          <h3 className="mb-3">Make Appointment</h3>
                          <p>
                            Experience exceptional hearing with our comprehensive ear testing and tailored hearing aid solutions.
                          </p>
                        </div>
                        <h2 className="mb-0">
                          <a className="text-white text-decoration-none" href="tel:+919911917723">
                            <i className="bi bi-telephone text-warning me-2"></i>
                            +91-9911917723
                          </a>
                        </h2>
                    </div>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Banner;
