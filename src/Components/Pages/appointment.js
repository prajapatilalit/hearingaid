import React, { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
console.log("base url,", process.env.REACT_APP_API_URL)
const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
import { API_BASE_URL } from "../../config";
const Appointment = () => {
    const [appointmentData, setAppointmentData] = useState({
        service: '',
        audioExpert: '',
        name: '',
        email: '',
        appointmentDate: '',
        appointmentTime: ''
    });

    // const [submitted, setSubmitted] = useState(false);

    const allServices = [
        "PTA(Pure Tone Audiometry)",
        "Hearing Aid Trail",
        "Hearing Aid Repair",
        "Hearing Aid Programming",
        "Batteries"
    ];
    const allExperts = [
        "Vivek Mishra",
    ];

    const handleChange = (e) => {
      const { name, value } = e.target;
      setAppointmentData({
        ...appointmentData,
        [name]: value
      });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(appointmentData);

        const data = {
          patientEmail: appointmentData.email,
          ownerEmail: 'vivekmshr1994@gmail.com',
          patientName: appointmentData.name,
          typeOfService: appointmentData.service,
          appointmentDate: appointmentData.appointmentDate,
          appointmentTime: appointmentData.appointmentTime,
        };

        try {
          const url = `${API_BASE_URL}/api/appointment`;
          const response = await axios.post(url, data);
            console.log("response", response);

          if (response.status === 200) {
            console.log("res", response);
            toast.success(response.data.message, { position: "top-right" });

            // Reset appointment data if it's a state variable
            setAppointmentData({
              service: '',
              audioExpert: '',
              name: '',
              email: '',
              appointmentDate: '',
              appointmentTime: ''
            });
          }
        } catch (error) {
          console.error('There was an error scheduling the appointment:', error);
          toast.error('Failed to schedule appointment.', { position: "top-right" });
        }
    };


    const successMessage = {
        fontSize: '1.5em',
        color: 'green'
    };

    return (
        <>
            <div id="appointment" className="container-fluid bg-success bg-appointment mb-5 wow fadeInUp" data-wow-delay="0.1s">
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
                                {/* {submitted ? (
                                    <div style={successMessage}>Thank you for your appointment!</div>
                                ) : (

                                )} */}
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6">
                                            <select className="form-select bg-light border-0 h-12" name="service" value={appointmentData.service} onChange={handleChange}>
                                                <option value="Select A Service">Select A Service</option>
                                                {allServices.map(service =>
                                                    <option value={service} key={service}>{service}</option>
                                                )}
                                            </select>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <select className="form-select bg-light border-0 h-12" name="audioExpert" value={appointmentData.audioExpert} onChange={handleChange}>
                                                <option value="Select A Service">Select Audiology Expert</option>
                                                {allExperts.map(expert =>
                                                    <option value={expert} key={expert}>{expert}</option>
                                                )}                                                ``
                                            </select>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control bg-light border-0 h-12"
                                                placeholder="Your Name"
                                                onChange={handleChange}
                                                value={appointmentData.name}
                                            />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control bg-light border-0 h-12"
                                                placeholder="Your Email"
                                                onChange={handleChange}
                                                value={appointmentData.email}
                                            />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="date" id="date1" data-target-input="nearest">
                                            <input
                                                type="date"
                                                name="appointmentDate"
                                                className="form-control bg-light border-0 datetimepicker-input h-12"
                                                placeholder="Appointment Date"
                                                onChange={handleChange}
                                                value={appointmentData.appointmentDate}
                                            />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="time" id="time1" data-target-input="nearest">
                                            <input
                                                type="time"
                                                name="appointmentTime"
                                                className="form-control bg-light border-0 h-12"
                                                placeholder="Appointment Time"
                                                onChange={handleChange}
                                                value={appointmentData.appointmentTime}
                                            />
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
            <ToastContainer/>
        </>
    )
}

export default Appointment;