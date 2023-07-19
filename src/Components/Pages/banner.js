import React from "react";

const Banner = () => {

    return ( 
        <>
            <div className="container-fluid banner mb-5">
                <div className="container">
                    <div className="row gx-0">
                        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
                            {/* <div className="bg-success d-flex flex-column p-5" style="height: 300px;"> */}
                            <div className="bg-success d-flex flex-column p-5 h-100">
                                <h3 className="text-white mb-3">Opening Hours</h3>
                                <div className="d-flex justify-content-between text-white mb-3">
                                    <h6 className="text-white mb-0">Mon - Fri</h6>
                                    <p className="mb-0"> 8:00am - 9:00pm</p>
                                </div>
                                <div className="d-flex justify-content-between text-white mb-3">
                                    <h6 className="text-white mb-0">Saturday</h6>
                                    <p className="mb-0"> 8:00am - 7:00pm</p>
                                </div>
                                <div className="d-flex justify-content-between text-white mb-3">
                                    <h6 className="text-white mb-0">Sunday</h6>
                                    <p className="mb-0"> 8:00am - 5:00pm</p>
                                </div>
                                <a className="btn btn-light" href="">Appointment</a>
                            </div>
                        </div>
                        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
                            {/* <div className="bg-dark d-flex flex-column p-5" style="height: 300px;"> */}
                            <div className="bg-dark d-flex flex-column p-5 h-100">
                                <h3 className="text-white mb-3">Search A Audiologist</h3>
                                <div className="date mb-3" id="date" data-target-input="nearest">
                                    <input type="text" className="form-control bg-light border-0 datetimepicker-input h-10"
                                        placeholder="Appointment Date" data-target="#date" data-toggle="datetimepicker"/>
                                </div>
                                {/* <select className="form-select bg-light border-0 mb-3" style="height: 40px;"> */}
                                <select className="form-select bg-light border-0 mb-3 h-10" value="">
                                    <option value="Select A Service">Select A Service</option>
                                    <option value="PTA">PTA(Pure Tone Audiometry)</option>
                                    <option value="Hearing Aid Trail">Hearing Aid Trail</option>
                                    <option value="Hearing Aid Repair">Hearing Aid Repair</option>
                                    <option value="Hearing Aid Programming">Hearing Aid Programming</option>
                                    <option value="Batteries">Batteries</option>
                                </select>
                                <a className="btn btn-light" href="">Search Audiologist</a>
                            </div>
                        </div>
                        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
                            {/* <div className="bg-secondary d-flex flex-column p-5" style="height: 300px;"> */}
                            <div className="bg-secondary d-flex flex-column p-5 h-100">
                                <h3 className="text-white mb-3">Make Appointment</h3>
                                <p className="text-white">Experience Exceptional Hearing with Our Comprehensive Ear Testing and Tailored Hearing Aid Solutions.</p>
                                <h2 className="text-white mb-0">+919911917723</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;