import React, { useEffect} from "react";
const Pricing = () => {
    useEffect(() => {
        const owlCarousel = window.jQuery('.price-carousel');
        owlCarousel.owlCarousel({
          // Owl Carousel options and settings
          autoplay: true,
            smartSpeed: 1500,
            margin: 45,
            dots: false,
            loop: true,
            nav : true,
            navText : [
                '<i class="bi bi-arrow-left"></i>',
                '<i class="bi bi-arrow-right"></i>'
            ],
            responsive: {
                0:{
                    items:1
                },
                768:{
                    items:2
                }
            }
        });
      }, []);

    return (
        <>
            <div id="pricing" className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-5">
                            <div className="section-title mb-4">
                                <h5 className="position-relative d-inline-block text-success text-uppercase">Pricing Plan</h5>
                                <h1 className="display-5 mb-0">We Offer Fair Prices for Dental Treatment</h1>
                            </div>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo eirmod magna dolore erat amet</p>
                            <h5 className="text-uppercase text-success wow fadeInUp" data-wow-delay="0.3s">Call for Appointment</h5>
                            <h1 className="wow fadeInUp" data-wow-delay="0.6s">+919911917723</h1>
                        </div>
                        <div className="col-lg-7">
                            <div className="owl-carousel price-carousel wow zoomIn" data-wow-delay="0.9s">
                                <div className="price-item pb-4">
                                    <div className="position-relative">
                                        <img className="img-fluid rounded-top" src="./assets/img/price-1.jpg" alt="" />
                                        {/* <div className="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle" style="z-index: 2;"> */}
                                        <div className="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle zindex" >
                                            <h2 className="text-success m-0">$35</h2>
                                        </div>
                                    </div>
                                    <div className="position-relative text-center bg-light border-bottom border-success py-5 p-4">
                                        <h4>Hearing Aid Fitment</h4>
                                        <hr className="text-success w-50 mx-auto mt-0" />
                                        <div className="d-flex justify-content-between mb-3"><span>Modern Equipment</span><i className="fa fa-check text-success pt-1"></i></div>
                                        <div className="d-flex justify-content-between mb-3"><span>Professional Audiologist</span><i className="fa fa-check text-success pt-1"></i></div>
                                        <div className="d-flex justify-content-between mb-2"><span>24/7 Call Support</span><i className="fa fa-check text-success pt-1"></i></div>
                                        <a href="appointment.html" className="btn btn-success py-2 px-4 position-absolute top-100 start-50 translate-middle">Appointment</a>
                                    </div>
                                </div>
                                <div className="price-item pb-4">
                                    <div className="position-relative">
                                        <img className="img-fluid rounded-top" src="./assets/img/price-2.jpg" alt="" />
                                        {/* <div className="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle" style="z-index: 2;"> */}
                                        <div className="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle zindex" >
                                            <h2 className="text-success m-0">$49</h2>
                                        </div>
                                    </div>
                                    <div className="position-relative text-center bg-light border-bottom border-success py-5 p-4">
                                        <h4>Hearing Screening</h4>
                                        <hr className="text-success w-50 mx-auto mt-0" />
                                        <div className="d-flex justify-content-between mb-3"><span>Modern Equipment</span><i className="fa fa-check text-success pt-1"></i></div>
                                        <div className="d-flex justify-content-between mb-3"><span>Professional Audiologist</span><i className="fa fa-check text-success pt-1"></i></div>
                                        <div className="d-flex justify-content-between mb-2"><span>24/7 Call Support</span><i className="fa fa-check text-success pt-1"></i></div>
                                        <a href="appointment.html" className="btn btn-success py-2 px-4 position-absolute top-100 start-50 translate-middle">Appointment</a>
                                    </div>
                                </div>
                                <div className="price-item pb-4">
                                    <div className="position-relative">
                                        <img className="img-fluid rounded-top" src="./assets/img/price-3.jpg" alt="" />
                                        {/* <div className="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle" style="z-index: 2;"> */}
                                        <div className="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle zindex">
                                            <h2 className="text-success m-0">$99</h2>
                                        </div>
                                    </div>
                                    <div className="position-relative text-center bg-light border-bottom border-success py-5 p-4">
                                        <h4>Hearing Aid Repair & Programming</h4>
                                        <hr className="text-success w-50 mx-auto mt-0" />
                                        <div className="d-flex justify-content-between mb-3"><span>Modern Equipment</span><i className="fa fa-check text-success pt-1"></i></div>
                                        <div className="d-flex justify-content-between mb-3"><span>Professional Audiologist</span><i className="fa fa-check text-success pt-1"></i></div>
                                        <div className="d-flex justify-content-between mb-2"><span>24/7 Call Support</span><i className="fa fa-check text-success pt-1"></i></div>
                                        <a href="appointment.html" className="btn btn-success py-2 px-4 position-absolute top-100 start-50 translate-middle">Appointment</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        </>
    )
}

export default Pricing;