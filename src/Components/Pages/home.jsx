import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
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

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // wait for render
      }
    }
  }, [location]);

  return (
    <>
      <section id="fullscreen-search"><FullscreenSearch /></section>
      <section id="home"><CarouselHearinAid /></section>
      <section id="banner"><Banner /></section>
      <section id="about"><About /></section>
      <section id="appointment"><Appointment /></section>
      <section id="service"><Service /></section>
      <section id="offer"><Offer /></section>
      <section id="pricing"><Pricing /></section>
      <section id="testimonial"><Testimonial /></section>
      {/* <section id="team"><Team /></section> */}
      <section id="contact"><Newsletter /></section>
    </>
  );
};

export default Home;
