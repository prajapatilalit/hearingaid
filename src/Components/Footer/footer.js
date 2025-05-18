import React from "react";
import { Link } from 'react-router-dom';
const Footer = () => {
    const footeritems = [
        {name:"Home", pathUrl:"/"},
        {name:"About Us", pathUrl:"/about"},
        {name:"Our Services", pathUrl:"/service"},
        {name:"Latest Blog", pathUrl:"/"},
        {name:"Contact Us", pathUrl:"/contact"},
    ]

    const socialIcons = [
        {iconName:"fab fa-twitter fw-normal", pathUrl:"#"},
        {iconName:"fab fa-facebook-f fw-normal", pathUrl:"#"},
        {iconName:"fab fa-linkedin-in fw-normal", pathUrl:"#"},
        {iconName:"fab fa-instagram fw-normal", pathUrl:"#"},
    ]
    return (
        <>
            <div className="container-fluid bg-dark text-light py-5 wow fadeInUp mt-n5" data-wow-delay="0.3s">
                <div className="container pt-5">
                    <div className="row g-5 pt-4">
                        <div className="col-lg-3 col-md-6">
                            <h3 className="text-white mb-4">Quick Links</h3>
                            <div className="d-flex flex-column justify-content-start">
                                {footeritems.map(footeritem=>(
                                    <Link className="text-light mb-2" to={footeritem.pathUrl} key={footeritem.name}><i className="bi bi-arrow-right text-success me-2"></i>{footeritem.name}</Link>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h3 className="text-white mb-4">Popular Links</h3>
                            <div className="d-flex flex-column justify-content-start">
                                {footeritems.map(footeritem=>(
                                    <Link className="text-light mb-2" to={footeritem.pathUrl} key={footeritem.name}><i className="bi bi-arrow-right text-success me-2"></i>{footeritem.name}</Link>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h3 className="text-white mb-4">Get In Touch</h3>
                            <p className="mb-2"><i className="bi bi-geo-alt text-success me-2"></i>H.No. 50 Street-4, Sheetla Colony, Sector-5, Gurugram, Haryana, India.</p>
                            <p className="mb-2"><a className="text-white" href="mailto:info@elitelisten.com"><i className="bi bi-envelope-open text-success me-2"></i>info@elitelisten.com</a></p>
                            <a className="mb-2 text-white" href="tel:+919911917723"><i className="bi bi-telephone text-success me-2"></i>+91-9911917723</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h3 className="text-white mb-4">Follow Us</h3>
                            <div className="d-flex">
                                {socialIcons.map(socialIcon=>(
                                    <a className="btn btn-lg btn-success btn-lg-square rounded me-2" href={socialIcon.pathUrl} key={socialIcon.iconName}><i className={socialIcon.iconName}></i></a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid text-light py-4 bg-dark">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-md-6 text-center text-md-start">
                            <p className="mb-md-0">&copy; <a className="text-white border-bottom" href="https://elitelisten.com/">Elite listen</a>. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;