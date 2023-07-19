import React from "react";

const Team = () => {

    return (
        <>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.1s">
                            <div className="section-title bg-light rounded h-100 p-5">
                                <h5 className="position-relative d-inline-block text-success text-uppercase">Our Audiology Specialist</h5>
                                <h1 className="display-6 mb-4">Meet Our Certified & Experienced Audiology Expert</h1>
                                <a href="appointment.html" className="btn btn-success py-3 px-5">Appointment</a>
                            </div>
                        </div>
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                            <div className="team-item">
                                {/* <div className="position-relative rounded-top" style="z-index: 1;"> */}
                                <div className="position-relative rounded-top z-1">
                                    <img className="img-fluid rounded-top w-100" src="./assets/img/team-1.jpg" alt="" />
                                    <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex zindex">
                                        <a className="btn btn-success btn-square m-1" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                                        <a className="btn btn-success btn-square m-1" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                                        <a className="btn btn-success btn-square m-1" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                        <a className="btn btn-success btn-square m-1" href="#"><i className="fab fa-instagram fw-normal"></i></a>
                                    </div>
                                </div>
                                <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                                    <h4 className="mb-2">Vivek Mishra</h4>
                                    <p className="text-success mb-0">Hearing Aid Expert</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                            <div className="team-item">
                                <div className="position-relative rounded-top z-1">
                                    <img className="img-fluid rounded-top w-100" src="./assets/img/team-2.jpg" alt="" />
                                    <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                                        <a className="btn btn-success btn-square m-1" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                                        <a className="btn btn-success btn-square m-1" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                                        <a className="btn btn-success btn-square m-1" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                        <a className="btn btn-success btn-square m-1" href="#"><i className="fab fa-instagram fw-normal"></i></a>
                                    </div>
                                </div>
                                <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                                    <h4 className="mb-2">Dr. John Doe</h4>
                                    <p className="text-success mb-0">Implant Surgeon</p>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="col-lg-4 wow slideInUp" data-wow-delay="0.1s">
                            <div className="team-item">
                                <div className="position-relative rounded-top z-1" >
                                    <img className="img-fluid rounded-top w-100" src="./assets/img/team-3.jpg" alt="" />
                                    <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                                        <a className="btn btn-success btn-square m-1" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                                        <a className="btn btn-success btn-square m-1" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                                        <a className="btn btn-success btn-square m-1" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                        <a className="btn btn-success btn-square m-1" href="#"><i className="fab fa-instagram fw-normal"></i></a>
                                    </div>
                                </div>
                                <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                                    <h4 className="mb-2">Dr. John Doe</h4>
                                    <p className="text-success mb-0">Implant Surgeon</p>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                            <div className="team-item">
                                <div className="position-relative rounded-top z-1" >
                                    <img className="img-fluid rounded-top w-100" src="./assets/img/team-4.jpg" alt="" />
                                    <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                                        <a className="btn btn-success btn-square m-1" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                                        <a className="btn btn-success btn-square m-1" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                                        <a className="btn btn-success btn-square m-1" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                        <a className="btn btn-success btn-square m-1" href="#"><i className="fab fa-instagram fw-normal"></i></a>
                                    </div>
                                </div>
                                <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                                    <h4 className="mb-2">Dr. John Doe</h4>
                                    <p className="text-success mb-0">Implant Surgeon</p>
                                </div>
                            </div>
                        </div> */}
                        {/*<div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                            <div className="team-item">
                                
                                <div className="position-relative rounded-top z-1">
                                    <img className="img-fluid rounded-top w-100" src="./assets/img/team-5.jpg" alt="" />
                                    <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                                        <a className="btn btn-success btn-square m-1" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                                        <a className="btn btn-success btn-square m-1" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                                        <a className="btn btn-success btn-square m-1" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                        <a className="btn btn-success btn-square m-1" href="#"><i className="fab fa-instagram fw-normal"></i></a>
                                    </div>
                                </div>
                                <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                                    <h4 className="mb-2">Dr. John Doe</h4>
                                    <p className="text-success mb-0">Implant Surgeon</p>
                                </div>
                            </div>
                        </div>*/}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team;