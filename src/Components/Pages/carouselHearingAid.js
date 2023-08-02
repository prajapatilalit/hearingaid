import React from "react";

const CarouselHearinAid = () => {

    return (
        <>
            <div className="container-fluid p-0 h-100">
                <div id="header-carousel" className="carousel slide carousel-fade h-100" data-bs-ride="carousel">
                    <div className="carousel-inner h-100">
                        <div className="carousel-item active h-100">
                            <img className="w-100" src="./assets/img/carousel-1.jpg" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3">
                                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">Keep Your Ear Healthy</h5>
                                    <h1 className="display-1 text-white mb-md-4 animated zoomIn fs-1">Hear the world clearly with EliteListen</h1>
                                    <a href="appointment.html" className="btn btn-success py-md-3 px-md-5 me-3 animated slideInLeft">Appointment</a>
                                    <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item h-100">
                            <img className="w-100" src="./assets/img/carousel-2.jpg" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3">
                                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">Keep Your Ear Healthy</h5>
                                    <h1 className="display-1 text-white mb-md-4 animated zoomIn fs-1">Hear the world clearly with EliteListen</h1>
                                    <a href="appointment.html" className="btn btn-success py-md-3 px-md-5 me-3 animated slideInLeft">Appointment</a>
                                    <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default CarouselHearinAid;