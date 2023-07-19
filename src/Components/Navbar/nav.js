import React from "react";
import { Link } from 'react-router-dom';
// import Home from "../Pages/home"

const Nav = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
                <a href="index.html" className="navbar-brand p-0">
                    <img width="200px" height="100px"src="./assets/img/logoelite.png"/>
                    {/* <h1 className="m-0 text-success"><i className="fa fa-deaf me-2"></i><em>EliteListen</em></h1> */}
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/about" className="nav-item nav-link">About</Link>
                        <Link to="/service" className="nav-item nav-link">Service</Link>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu m-0">
                                <Link to="/pricing" className="dropdown-item">Pricing Plan</Link>
                                <Link to="/team" className="dropdown-item">Our Ear Specialist</Link>
                                <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                                <Link to="/appointment" className="dropdown-item">Appointment</Link>
                            </div>
                        </div>
                        <Link to="/contact" className="nav-item nav-link">Contact</Link>
                    </div>
                    <button type="button" className="btn text-dark" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button>
                    <a href="appointment.html" className="btn btn-success py-2 px-4 ms-3">Appointment</a>
                </div>
            </nav>
            {/* <Home/> */}
        </>
    )
}

export default Nav;