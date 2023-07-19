import React from "react";

const Offer = () => {

    return (
        <>
            <div className="container-fluid bg-offer my-5 py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 wow zoomIn" data-wow-delay="0.6s">
                            <div className="offer-text text-center rounded p-5">
                                <h2 className="display-5 text-white">Save 30% On Your First Hearing Checkup</h2>
                                <p className="text-white mb-4">Get free Hearing aid trial</p>
                                <a href="appointment.html" className="btn btn-dark py-3 px-5 me-3">Appointment</a>
                                <a href="" className="btn btn-light py-3 px-5">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Offer;