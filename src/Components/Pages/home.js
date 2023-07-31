import React, {useEffect} from "react";
import Pricing from "./pricing";
import CarouselHearinAid from "./carouselHearingAid";
import FullscreenSearch from "./fullscreenSearch";
import Banner from "./banner";
import About from "./about";
import Appointment from "./appointment";
import Service from "./service";
import Offer from "./offer";
import Testimonial from "./testimonial";
import Team from "./team";
import Newsletter from "./newsletter";
// import Nav from "../Navbar/nav";

const Home = () => {
    // useEffect(() => {
    //     const hash = window.location.hash;
    //     if (hash) {
    //       const section = document.querySelector(hash);
    //       if (section) {
    //         section.scrollIntoView({ behavior: 'smooth' });
    //       }
    //     }
    // }, []);

    return (
        <>
            {/* <Nav/> */}
            <FullscreenSearch/>
            <CarouselHearinAid/>
            <Banner/>
            <About/>
            <Appointment/>
            <Service/>
            <Offer/>
            <Pricing/>
            <Testimonial/>
            <Team/>
            <Newsletter/>
        </>
    )
}

export default Home;