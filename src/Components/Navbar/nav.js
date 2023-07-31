import React, { useState } from "react";
import { Link } from 'react-router-dom';
// import Home from "../Pages/home"

const Nav = () => {
    console.log(window.location.pathname,"pathname")
    const [getCurrentPathName, setCurrentPathName] = useState('')

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
                        <Link to="/" className={`nav-item nav-link ${getCurrentPathName.includes('home') ? "active" :"" }`}  onClick={()=>setCurrentPathName('home')} >Home</Link>
                        <Link to="about" className={`nav-item nav-link ${getCurrentPathName.includes('about') ? "active" :"" }`}   onClick={()=>setCurrentPathName('about')} >About</Link>
                        <Link to="/service" className={`nav-item nav-link ${getCurrentPathName.includes('service') ? "active" :"" }`} onClick={()=>setCurrentPathName('service')}>Service</Link>
                        <div className="nav-item dropdown">
                            <span className={`nav-link dropdown-toggle ${getCurrentPathName.includes('page') ?   "active" :"" } `}data-bs-toggle="dropdown">Pages</span>
                            <div className="dropdown-menu m-0">
                                <Link to="/pricing" className="dropdown-item" onClick={()=>setCurrentPathName('page')}>Pricing Plan</Link>
                                <Link to="/team" className="dropdown-item" onClick={()=>setCurrentPathName('page')}>Our Ear Specialist</Link>
                                <Link to="/testimonial" className="dropdown-item" onClick={()=>setCurrentPathName('page')}>Testimonial</Link>
                                <Link to="/appointment" className="dropdown-item" onClick={()=>setCurrentPathName('page')}>Appointment</Link>
                            </div>
                        </div>
                        <Link to="/contact" className={`nav-item nav-link ${getCurrentPathName.includes('contact') ? "active" :"" }`} onClick={()=>setCurrentPathName('contact')} >Contact</Link>
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