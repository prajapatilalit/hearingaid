import React from "react";

const Service = () => {

    return (
        <>
            <div id="service" className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row g-5 mb-5">
                        {/* <div className="col-lg-5 wow zoomIn" data-wow-delay="0.3s" style="min-height: 400px;"> */}
                        <div className="col-lg-5 wow zoomIn min-h-96" data-wow-delay="0.3s">
                            <div className="twentytwenty-container position-relative h-100 rounded overflow-hidden">
                                <img className="position-absolute w-100 h-100 object-fit-cover" src="./assets/img/hearingaidimage.jpg" />
                                <img className="position-absolute w-100 h-100 object-fit-cover" src="./assets/img/hearingaidimage.jpg" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="section-title mb-5">
                                <h5 className="position-relative d-inline-block text-success text-uppercase">Our Services</h5>
                                <h1 className="display-5 mb-0">We Offer The Best Quality Ear Hearing Related Services</h1>
                            </div>
                            <div className="row g-5">
                                <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.6s">
                                    <div className="rounded-top overflow-hidden">
                                        <img className="img-fluid" src="./assets/img/hearscreening.jpg" alt="" />
                                    </div>
                                    <div className="position-relative bg-light rounded-bottom text-center p-4">
                                        <h5 className="m-0">Hearing Screening</h5>
                                    </div>
                                </div>
                                <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.9s">
                                    <div className="rounded-top overflow-hidden">
                                        <img className="img-fluid" src="./assets/img/hearingaidfitting.jpg" alt="" />
                                    </div>
                                    <div className="position-relative bg-light rounded-bottom text-center p-4">
                                        <h5 className="m-0">Hearing Aid Fitting</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="col-lg-7">
                            <div className="row g-5">
                                <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.3s">
                                    <div className="rounded-top overflow-hidden">
                                        <img className="img-fluid" src="./assets/img/hearingaidfitting.jpg" alt="" />
                                    </div>
                                    <div className="position-relative bg-light rounded-bottom text-center p-4">
                                        <h5 className="m-0">Hearing Aid Repair & Programming</h5>
                                    </div>
                                </div>
                                <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.6s">
                                    <div className="rounded-top overflow-hidden">
                                        <img className="img-fluid" src="./assets/img/speech-therapy-with-kids.jpg" alt="" />
                                    </div>
                                    <div className="position-relative bg-light rounded-bottom text-center p-4">
                                        <h5 className="m-0">Speech Therapy</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 service-item wow zoomIn" data-wow-delay="0.9s">
                            <div className="position-relative bg-success rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-4">
                                <h3 className="text-white mb-3">Make Appointment</h3>
                                <p className="text-white mb-3">At our esteemed clinic, we offer top-of-the-line ear testing services to ensure you receive the best hearing care possible. Our team of expert audiologists is dedicated to evaluating your hearing health and providing customized solutions that perfectly suit your individual needs.</p>
                                <h2 className="text-white mb-0"><a className="mb-2 text-white" href="tel:+919911917723"><i className="bi bi-telephone text-warn me-2"></i>+91-9911917723</a></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;