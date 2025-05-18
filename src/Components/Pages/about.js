import React, {useState} from "react";
import { Link } from 'react-router-dom';

const About = () => {
    const [getCurrentPathName, setCurrentPathName] = useState('')
    return (
        <>
            <div id="about" className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-7">
                            <div className="section-title mb-4">
                                <h5 className="position-relative d-inline-block text-success text-uppercase">About Us</h5>
                                <h1 className="display-5 mb-0">The Gurugram's Best Hearing Aid Clinic That You Can Trust</h1>
                            </div>
                            <h4 className="text-body fst-italic mb-4">We make your hearing more comfortable and pleasant!</h4>
                            <p className="mb-4">EliteListen has proudly served the Gurugram, with state of the art hearing aid technology, advanced hearing testing and tinnitus services. Our patient-centered
                             approach allows us to focus on satisfying your hearing care needs, whatever they may be. Our practice will work with you to diagnose and find solutions for your hearing and tinnitus
                             needs using state-of-the-art equipment and the most advanced technology. EliteListen wants you to be satisfied with your care. We are a local, independent, service-oriented practice.
                             Our services are fully guaranteed, meaning we are committed to listening to your concerns, and your technology is always perfectly fit to renew your world of hearing.
                             A strong patient-provider relationship based on honesty, integrity, and values is what we strive for, and we feel that this is the best approach to making sure you don’t miss
                             any of the precious moments in your life.</p>
                            <div className="row g-3">
                                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                                    <h5 className="mb-3"><i className="fa fa-check-circle text-success me-3"></i>Award Winning</h5>
                                    <h5 className="mb-3"><i className="fa fa-check-circle text-success me-3"></i>Professional Staff</h5>
                                </div>
                                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                                    <h5 className="mb-3"><i className="fa fa-check-circle text-success me-3"></i>24/7 Service</h5>
                                    <h5 className="mb-3"><i className="fa fa-check-circle text-success me-3"></i>Fair Prices</h5>
                                </div>
                            </div>
                            <Link to="/appointment" className="btn btn-success py-2 px-4 ms-3" onClick={()=>setCurrentPathName('page')}>Make Appointment</Link>
                            {/* <a href="/appointment" className="btn btn-success py-3 px-5 mt-4 wow zoomIn" data-wow-delay="0.6s">Make Appointment</a> */}
                        </div>
                        {/* <div className="col-lg-5" style="min-height: 500px;"> */}
                        <div className="col-lg-5 min-h-128">
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100 rounded wow zoomIn object-fit-cover" data-wow-delay="0.9s" src="./assets/img/hearingtunning.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;