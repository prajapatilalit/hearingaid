import React from "react";
const Footer = () => {
    return (
        <>
            {/* <div className="container-fluid bg-dark text-light py-5 wow fadeInUp" data-wow-delay="0.3s" style="margin-top: -75px;"> */}
            <div className="container-fluid bg-dark text-light py-5 wow fadeInUp mt-n5" data-wow-delay="0.3s">
                <div className="container pt-5">
                    <div className="row g-5 pt-4">
                        <div className="col-lg-3 col-md-6">
                            <h3 className="text-white mb-4">Quick Links</h3>
                            <div className="d-flex flex-column justify-content-start">
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-success me-2"></i>Home</a>
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-success me-2"></i>About Us</a>
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-success me-2"></i>Our Services</a>
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-success me-2"></i>Latest Blog</a>
                                <a className="text-light" href="#"><i className="bi bi-arrow-right text-success me-2"></i>Contact Us</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h3 className="text-white mb-4">Popular Links</h3>
                            <div className="d-flex flex-column justify-content-start">
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-success me-2"></i>Home</a>
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-success me-2"></i>About Us</a>
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-success me-2"></i>Our Services</a>
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-success me-2"></i>Latest Blog</a>
                                <a className="text-light" href="#"><i className="bi bi-arrow-right text-success me-2"></i>Contact Us</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h3 className="text-white mb-4">Get In Touch</h3>
                            <p className="mb-2"><i className="bi bi-geo-alt text-success me-2"></i>H.No. 50 Street-4, Sheetla Colony, Sector-5, Gurugram, Haryana, India.</p>
                            <p className="mb-2"><a className="text-white" href="mailto:info@elitelisten.com"><i className="bi bi-envelope-open text-success me-2"></i>info@elitelisten.com</a></p>
                            <a className="mb-0 text-white" href="tel:+919911917723"><i className="bi bi-telephone text-success me-2"></i>+91-9911917723</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h3 className="text-white mb-4">Follow Us</h3>
                            <div className="d-flex">
                                <a className="btn btn-lg btn-success btn-lg-square rounded me-2" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                                <a className="btn btn-lg btn-success btn-lg-square rounded me-2" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                                <a className="btn btn-lg btn-success btn-lg-square rounded me-2" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                <a className="btn btn-lg btn-success btn-lg-square rounded" href="#"><i className="fab fa-instagram fw-normal"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container-fluid text-light py-4" style="background: #051225;"> */}
            <div className="container-fluid text-light py-4 bg-dark">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-md-6 text-center text-md-start">
                            <p className="mb-md-0">&copy; <a className="text-white border-bottom" href="#">Elite listen</a>. All Rights Reserved.</p>
                        </div>
                        {/* <div className="col-md-6 text-center text-md-end">
                            <p className="mb-0">Designed by <a className="text-white border-bottom" href="https://htmlcodex.com">HTML Codex</a><br/>
                                Distributed by <a className="text-white border-bottom" href="https://themewagon.com">ThemeWagon</a>              
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;