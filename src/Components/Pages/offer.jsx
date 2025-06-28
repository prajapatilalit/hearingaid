import React from "react";
import { Link } from "react-router-dom";

const Offer = () => {
    return (
        <section className="container-fluid bg-offer my-5 py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center wow zoomIn" data-wow-delay="0.6s">
                        <div className="offer-text bg-success rounded p-5 shadow">
                            <h2 className="display-5 text-white mb-3">Save 30% On Your First Hearing Checkup</h2>
                            <p className="text-white fs-5 mb-4">Book now and receive a <strong>free hearing aid trial</strong>.</p>
                            <div className="d-flex justify-content-center flex-wrap gap-3">
                                <Link to="/appointment" className="btn btn-dark py-3 px-5">Book Appointment</Link>
                                <Link to="/services" className="btn btn-light py-3 px-5">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offer;
