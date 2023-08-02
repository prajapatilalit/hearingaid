import React from "react";

const Appointment = () => {

    return (
        <>
            <div id="appointment" className="container-fluid bg-success bg-appointment my-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-6 py-5">
                            <div className="py-5">
                                <h1 className="display-5 text-white mb-4">We Are A Certified and Award Winning Hearing Aid Clinic You Can Trust</h1>
                                <p className="text-white mb-0">We know that the first experience of a hearing aid is vital in setting the direction of the journey to better hearing. A negative experience can leave you wondering if you were right to try a hearing aid at all, but a positive one can make you feel more connected to your life than you have been for years.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="appointment-form h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
                                <h1 className="text-white mb-4">Make Appointment</h1>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6">
                                            <select className="form-select bg-light border-0 h-12" value="value">
                                                <option value="Select A Service">Select A Service</option>
                                                <option value="PTA">PTA(Pure Tone Audiometry)</option>
                                                <option value="Hearing Aid Trail">Hearing Aid Trail</option>
                                                <option value="Hearing Aid Repair">Hearing Aid Repair</option>
                                                <option value="Hearing Aid Programming">Hearing Aid Programming</option>
                                                <option value="Batteries">Batteries</option>

                                            </select> 
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <select className="form-select bg-light border-0 h-12" value="value">
                                                <option value="Select A Service">Select Audiology Expert</option>
                                                <option value="Vivek Mishra">Vivek Mishra</option>
                                                <option value="Vivek Mishra">Vivek Mishra</option>
                                                <option value="Vivek Mishra">Vivek Mishra</option>
                                                
                                            </select>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="text" className="form-control bg-light border-0 h-12" placeholder="Your Name" />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="email" className="form-control bg-light border-0 h-12" placeholder="Your Email" />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="date" id="date1" data-target-input="nearest">
                                                <input type="text"
                                                    className="form-control bg-light border-0 datetimepicker-input h-12"
                                                    placeholder="Appointment Date" data-target="#date1" data-toggle="datetimepicker" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="time" id="time1" data-target-input="nearest">
                                                <input type="text"
                                                    className="form-control bg-light border-0 datetimepicker-input h-12"
                                                    placeholder="Appointment Time" data-target="#time1" data-toggle="datetimepicker" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-dark w-100 py-3" type="submit">Make Appointment</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Appointment;