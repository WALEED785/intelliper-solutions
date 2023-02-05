import React from "react";

import img1 from "../assets/images/resource/image-1.jpg";
import img6 from "../assets/images/main-slider/image-6.png";
import process1 from "../assets/images/resource/process-1.png";
import process2 from "../assets/images/resource/process-2.png";
import process3 from "../assets/images/resource/process-3.png";
import process4 from "../assets/images/resource/process-4.png";
import success from "../assets/images/resource/success.png";
import success1 from "../assets/images/resource/success-1.jpg";
import business1 from "../assets/images/resource/business-1.png";
import business2 from "../assets/images/resource/business-2.png";
import business3 from "../assets/images/resource/business-3.png";
import business4 from "../assets/images/resource/business-4.png";
import business5 from "../assets/images/resource/business-5.png";
import business6 from "../assets/images/resource/business-6.png";
import author1 from "../assets/images/resource/author-1.jpg";
import author2 from "../assets/images/resource/author-2.jpg";
import author3 from "../assets/images/resource/author-3.jpg";
import author4 from "../assets/images/resource/author-4.jpg";
import discuss from "../assets/images/resource/discuss.png";
import fitr from "../assets/images/case-study/fitr-training.png";
import circlepod from "../assets/images/case-study/circlepod.png";
import coachr from "../assets/images/case-study/coachr.png";
import hardassetsalliance from "../assets/images/case-study/hardassetsalliance.png";
import proctorgallagher from "../assets/images/case-study/proctorgallagher_2.png";
import taskrabbit from "../assets/images/case-study/taskrabbit.png";
import wayfair from "../assets/images/case-study/wayfair.png";
import distropro from "../assets/images/case-study/distropro.png";
import predictionstrike from "../assets/images/case-study/predictionstrike.png";
import map from "../assets/images/icons/map.png";
import home1 from "../assets/images/img1.png";
import home2 from "../assets/images/img2.png";
import home3 from "../assets/images/img3.png";
import home4 from "../assets/images/img4.png";
import home5 from "../assets/images/img5.png";
import home6 from "../assets/images/img6.png";

import Header from "./header";
import Footer from "./Footer";
// import { Carousel } from "react-bootstrap";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import SliderComponent from "./SliderComponent";
import SimpleSlider from "./SliderComponent";

export default function Home() {
  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()} />;
  };

  return (
    <div>
      <div className="page-wrapper">
        <Header />
        <section className="banner-section">
          <div className="color-layer"></div>
          <div className="auto-container">
            <div className="row clearfix">
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <h1>We Provide Truly Prominent IT Solutions</h1>
                  <div className="text">
                  Unleashing the full potential of your business with reliable IT solutions
                  </div>
                  <div className="btns-box">
                    <Link
                      to="/contact"
                      style={{ textDecoration: "none" }}
                      className="theme-btn btn-style-one"
                    >
                      <span className="txt">Let's Talk</span>
                    </Link>
                    {/* btn-style-one theme-btn */}
                  </div>
                </div>
              </div>

              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="image" data-tilt data-tilt-max="4">
                    <img src={img6} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="rtt-section">
          <div className="container text-btn">
            <h2 className="home-heading-two">
              Let's co-create the right IT solution for your business.
            </h2>
            <a className="custo-btn" id="stylebtn">
              Let's Talk
            </a>
          </div>
        </section>
        <section className="business-section">
          <div className="circle-layer"></div>
          <div className="circle-layer-two"></div>
          <div className="auto-container">
            <div className="sec-title centered">
              <h2>
                Here are some of solutions suiting <br /> your business needs.
              </h2>
              <div className="text">
                Choose your coach training based on the program offerings, your
                instinct, <br /> We are different from a traditional IT staffing
                agency
              </div>
            </div>
            <div className="row clearfix">
              <div className="business-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <div className="color-circle"></div>
                    <img src={business1} alt="" />
                  </div>
                  <h3>
                    <Link
                      to="/custome-software"
                      style={{ textDecoration: "none" }}
                    >
                      Custom Software Development
                    </Link>
                  </h3>
                  <div className="text">
                    We are Australia highest rated Search Marketing, Creative IT
                    agency on australia in 2021.
                  </div>
                  <Link to="/custome-software" className="explore">
                    Explore More
                  </Link>
                </div>
              </div>

              <div className="business-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <div className="color-circle"></div>
                    <img src={business2} alt="" />
                  </div>
                  <h3>
                    <Link
                      to="/web-development-software"
                      style={{ textDecoration: "none" }}
                    >
                      Web App Development
                    </Link>
                  </h3>
                  <div className="text">
                    <br />
                    We believe in building interactive web applications, To
                    create experiences beyond our clients’ expectations.
                  </div>
                  <Link to="/web-development-software" className="explore">
                    Explore More
                  </Link>
                </div>
              </div>

              <div className="business-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <div className="color-circle"></div>
                    <img src={business3} alt="" />
                  </div>
                  <h3>
                    <Link to="/case-studies" style={{ textDecoration: "none" }}>
                      Mobile App Development
                    </Link>
                  </h3>
                  <div className="text">
                    Leveraging latest technological tools, We build high
                    performance apps to scale your business.
                  </div>
                  <Link to="/case-studies" className="explore">
                    Explore More
                  </Link>
                </div>
              </div>

              <div className="business-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <div className="color-circle"></div>
                    <img src={business4} alt="" />
                  </div>
                  <h3>
                    <Link to="/ui-ux-services" style={{ textDecoration: "none" }}>
                      UI/UX Design
                    </Link>
                  </h3>
                  <div className="text">
                    <br />
                    Create complex enterprise software, ensure reliable software
                    integration, modernise your legacy system.
                  </div>
                  <Link to="/ui-ux-services" className="explore">
                    Explore More
                  </Link>
                </div>
              </div>

              <div className="business-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <div className="color-circle"></div>
                    <img src={business5} alt="" />
                  </div>
                  <h3>
                    <Link
                      to="/embedded-software-development"
                      style={{ textDecoration: "none" }}
                    >
                      Embedded Software Development Services
                    </Link>
                  </h3>
                  <div className="text">
                    Hire Experienced & Dedicated Embedded Software Developers
                    Now
                  </div>
                  <br />
                  <Link to="/embedded-software-development" className="explore">
                    Explore More
                  </Link>
                </div>
              </div>

              <div className="business-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <div className="color-circle"></div>
                    <img src={business6} alt="" />
                  </div>
                  <h3>
                    <Link
                      to="/devops-services"
                      style={{ textDecoration: "none" }}
                    >
                      DevOps
                    </Link>
                  </h3>
                  <div className="text">
                    <br />
                    DevOps solutions automate away inefficiencies and improve
                    the quality and security of software.
                  </div>
                  <Link to="/devops-services" className="explore">
                    Explore More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="nitro-offscreen">
          <div class="embd-section">
            <div class="left-embd">
              <div class="embd-wrap">
                <div class="embd-text">
                  <h3>Build Your Dedicated Teams</h3>
                  <h4>Our teams at your service</h4>
                  <p style={{color: "#000000"}}>
                    Get your projects fast-tracked with best technical and
                    management talent. Increase quality and efficiency, and
                    retain complete control of teams.
                  </p>
                  <Link to="/contact" style={{textDecoration: "none", color: "#000000"}}>
                    Build Your Team <i class="la la-long-arrow-right"></i>
                  </Link>
                </div>
                <div class="embd-img left">
                  <svg
                    width="98"
                    height="110"
                    viewBox="0 0 98 110"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="95.7529"
                      cy="1.95425"
                      r="1.95412"
                      transform="rotate(90 95.7529 1.95425)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="95.7529"
                      cy="13.6786"
                      r="1.95412"
                      transform="rotate(90 95.7529 13.6786)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="95.7529"
                      cy="25.404"
                      r="1.95412"
                      transform="rotate(90 95.7529 25.404)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="95.7529"
                      cy="37.1284"
                      r="1.95412"
                      transform="rotate(90 95.7529 37.1284)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="95.7529"
                      cy="48.8538"
                      r="1.95412"
                      transform="rotate(90 95.7529 48.8538)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="95.7529"
                      cy="60.5774"
                      r="1.95412"
                      transform="rotate(90 95.7529 60.5774)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="95.7529"
                      cy="72.3018"
                      r="1.95412"
                      transform="rotate(90 95.7529 72.3018)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="95.7529"
                      cy="84.0271"
                      r="1.95412"
                      transform="rotate(90 95.7529 84.0271)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="95.7529"
                      cy="95.7525"
                      r="1.95412"
                      transform="rotate(90 95.7529 95.7525)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="95.7529"
                      cy="107.477"
                      r="1.95412"
                      transform="rotate(90 95.7529 107.477)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="84.0263"
                      cy="1.95412"
                      r="1.95412"
                      transform="rotate(90 84.0263 1.95412)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="84.0263"
                      cy="13.6786"
                      r="1.95412"
                      transform="rotate(90 84.0263 13.6786)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="84.0263"
                      cy="25.404"
                      r="1.95412"
                      transform="rotate(90 84.0263 25.404)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="84.0263"
                      cy="37.1284"
                      r="1.95412"
                      transform="rotate(90 84.0263 37.1284)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="84.0263"
                      cy="48.8538"
                      r="1.95412"
                      transform="rotate(90 84.0263 48.8538)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="84.0263"
                      cy="60.5773"
                      r="1.95412"
                      transform="rotate(90 84.0263 60.5773)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="84.0263"
                      cy="72.3018"
                      r="1.95412"
                      transform="rotate(90 84.0263 72.3018)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="84.0263"
                      cy="84.0271"
                      r="1.95412"
                      transform="rotate(90 84.0263 84.0271)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="84.0263"
                      cy="95.7525"
                      r="1.95412"
                      transform="rotate(90 84.0263 95.7525)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="84.0263"
                      cy="107.477"
                      r="1.95412"
                      transform="rotate(90 84.0263 107.477)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="72.3037"
                      cy="1.95412"
                      r="1.95412"
                      transform="rotate(90 72.3037 1.95412)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="72.3037"
                      cy="13.6786"
                      r="1.95412"
                      transform="rotate(90 72.3037 13.6786)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="72.3037"
                      cy="25.404"
                      r="1.95412"
                      transform="rotate(90 72.3037 25.404)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="72.3037"
                      cy="37.1284"
                      r="1.95412"
                      transform="rotate(90 72.3037 37.1284)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="72.3037"
                      cy="48.8538"
                      r="1.95412"
                      transform="rotate(90 72.3037 48.8538)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="72.3037"
                      cy="60.5773"
                      r="1.95412"
                      transform="rotate(90 72.3037 60.5773)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="72.3037"
                      cy="72.3018"
                      r="1.95412"
                      transform="rotate(90 72.3037 72.3018)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="72.3037"
                      cy="84.0271"
                      r="1.95412"
                      transform="rotate(90 72.3037 84.0271)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="72.3037"
                      cy="95.7525"
                      r="1.95412"
                      transform="rotate(90 72.3037 95.7525)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="72.3037"
                      cy="107.477"
                      r="1.95412"
                      transform="rotate(90 72.3037 107.477)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="60.5771"
                      cy="1.95412"
                      r="1.95412"
                      transform="rotate(90 60.5771 1.95412)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="60.5771"
                      cy="13.6786"
                      r="1.95412"
                      transform="rotate(90 60.5771 13.6786)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="60.5771"
                      cy="25.404"
                      r="1.95412"
                      transform="rotate(90 60.5771 25.404)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="60.5771"
                      cy="37.1284"
                      r="1.95412"
                      transform="rotate(90 60.5771 37.1284)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="60.5771"
                      cy="48.8538"
                      r="1.95412"
                      transform="rotate(90 60.5771 48.8538)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="60.5771"
                      cy="60.5773"
                      r="1.95412"
                      transform="rotate(90 60.5771 60.5773)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="60.5771"
                      cy="72.3018"
                      r="1.95412"
                      transform="rotate(90 60.5771 72.3018)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="60.5771"
                      cy="84.0271"
                      r="1.95412"
                      transform="rotate(90 60.5771 84.0271)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="60.5771"
                      cy="95.7525"
                      r="1.95412"
                      transform="rotate(90 60.5771 95.7525)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="60.5771"
                      cy="107.477"
                      r="1.95412"
                      transform="rotate(90 60.5771 107.477)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="48.8545"
                      cy="1.95412"
                      r="1.95412"
                      transform="rotate(90 48.8545 1.95412)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="48.8545"
                      cy="13.6786"
                      r="1.95412"
                      transform="rotate(90 48.8545 13.6786)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="48.8545"
                      cy="25.404"
                      r="1.95412"
                      transform="rotate(90 48.8545 25.404)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="48.8545"
                      cy="37.1284"
                      r="1.95412"
                      transform="rotate(90 48.8545 37.1284)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="48.8545"
                      cy="48.8538"
                      r="1.95412"
                      transform="rotate(90 48.8545 48.8538)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="48.8545"
                      cy="60.5773"
                      r="1.95412"
                      transform="rotate(90 48.8545 60.5773)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="48.8545"
                      cy="72.3018"
                      r="1.95412"
                      transform="rotate(90 48.8545 72.3018)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="48.8545"
                      cy="84.0271"
                      r="1.95412"
                      transform="rotate(90 48.8545 84.0271)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="48.8545"
                      cy="95.7525"
                      r="1.95412"
                      transform="rotate(90 48.8545 95.7525)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="48.8545"
                      cy="107.477"
                      r="1.95412"
                      transform="rotate(90 48.8545 107.477)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="37.1279"
                      cy="1.95412"
                      r="1.95412"
                      transform="rotate(90 37.1279 1.95412)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="37.1279"
                      cy="13.6786"
                      r="1.95412"
                      transform="rotate(90 37.1279 13.6786)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="37.1279"
                      cy="25.404"
                      r="1.95412"
                      transform="rotate(90 37.1279 25.404)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="37.1279"
                      cy="37.1284"
                      r="1.95412"
                      transform="rotate(90 37.1279 37.1284)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="37.1279"
                      cy="48.8538"
                      r="1.95412"
                      transform="rotate(90 37.1279 48.8538)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="37.1279"
                      cy="60.5773"
                      r="1.95412"
                      transform="rotate(90 37.1279 60.5773)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="37.1279"
                      cy="72.3018"
                      r="1.95412"
                      transform="rotate(90 37.1279 72.3018)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="37.1279"
                      cy="84.0271"
                      r="1.95412"
                      transform="rotate(90 37.1279 84.0271)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="37.1279"
                      cy="95.7525"
                      r="1.95412"
                      transform="rotate(90 37.1279 95.7525)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="37.1279"
                      cy="107.477"
                      r="1.95412"
                      transform="rotate(90 37.1279 107.477)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="25.4013"
                      cy="1.95412"
                      r="1.95412"
                      transform="rotate(90 25.4013 1.95412)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="25.4013"
                      cy="13.6786"
                      r="1.95412"
                      transform="rotate(90 25.4013 13.6786)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="25.4013"
                      cy="25.404"
                      r="1.95412"
                      transform="rotate(90 25.4013 25.404)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="25.4013"
                      cy="37.1284"
                      r="1.95412"
                      transform="rotate(90 25.4013 37.1284)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="25.4013"
                      cy="48.8538"
                      r="1.95412"
                      transform="rotate(90 25.4013 48.8538)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="25.4013"
                      cy="60.5773"
                      r="1.95412"
                      transform="rotate(90 25.4013 60.5773)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="25.4013"
                      cy="72.3018"
                      r="1.95412"
                      transform="rotate(90 25.4013 72.3018)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="25.4013"
                      cy="84.0271"
                      r="1.95412"
                      transform="rotate(90 25.4013 84.0271)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="25.4013"
                      cy="95.7525"
                      r="1.95412"
                      transform="rotate(90 25.4013 95.7525)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="25.4013"
                      cy="107.477"
                      r="1.95412"
                      transform="rotate(90 25.4013 107.477)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="13.6787"
                      cy="1.95412"
                      r="1.95412"
                      transform="rotate(90 13.6787 1.95412)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="13.6787"
                      cy="13.6786"
                      r="1.95412"
                      transform="rotate(90 13.6787 13.6786)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="13.6787"
                      cy="25.404"
                      r="1.95412"
                      transform="rotate(90 13.6787 25.404)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="13.6787"
                      cy="37.1284"
                      r="1.95412"
                      transform="rotate(90 13.6787 37.1284)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="13.6787"
                      cy="48.8538"
                      r="1.95412"
                      transform="rotate(90 13.6787 48.8538)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="13.6787"
                      cy="60.5773"
                      r="1.95412"
                      transform="rotate(90 13.6787 60.5773)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="13.6787"
                      cy="72.3018"
                      r="1.95412"
                      transform="rotate(90 13.6787 72.3018)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="13.6787"
                      cy="84.0271"
                      r="1.95412"
                      transform="rotate(90 13.6787 84.0271)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="13.6787"
                      cy="95.7525"
                      r="1.95412"
                      transform="rotate(90 13.6787 95.7525)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="13.6787"
                      cy="107.477"
                      r="1.95412"
                      transform="rotate(90 13.6787 107.477)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="1.95603"
                      cy="1.95412"
                      r="1.95412"
                      transform="rotate(90 1.95603 1.95412)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="1.95603"
                      cy="13.6786"
                      r="1.95412"
                      transform="rotate(90 1.95603 13.6786)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="1.95603"
                      cy="25.404"
                      r="1.95412"
                      transform="rotate(90 1.95603 25.404)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="1.95603"
                      cy="37.1284"
                      r="1.95412"
                      transform="rotate(90 1.95603 37.1284)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="1.95603"
                      cy="48.8538"
                      r="1.95412"
                      transform="rotate(90 1.95603 48.8538)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="1.95603"
                      cy="60.5773"
                      r="1.95412"
                      transform="rotate(90 1.95603 60.5773)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="1.95603"
                      cy="72.3018"
                      r="1.95412"
                      transform="rotate(90 1.95603 72.3018)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="1.95603"
                      cy="84.0271"
                      r="1.95412"
                      transform="rotate(90 1.95603 84.0271)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="1.95603"
                      cy="95.7525"
                      r="1.95412"
                      transform="rotate(90 1.95603 95.7525)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="1.95603"
                      cy="107.477"
                      r="1.95412"
                      transform="rotate(90 1.95603 107.477)"
                      fill="#a5a3a3"
                    ></circle>
                  </svg>
                  {/* <img
                    alt="Dedicated Teams"
                    src={business2}
                    style={{ width: "200px", height: "100px" }}
                  /> */}
                </div>
              </div>
              <svg
                class="custom-svg--wrapper"
                width="98"
                height="110"
                viewBox="0 0 98 110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="95.7529"
                  cy="1.95425"
                  r="1.95412"
                  transform="rotate(90 95.7529 1.95425)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="95.7529"
                  cy="13.6786"
                  r="1.95412"
                  transform="rotate(90 95.7529 13.6786)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="95.7529"
                  cy="25.404"
                  r="1.95412"
                  transform="rotate(90 95.7529 25.404)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="95.7529"
                  cy="37.1284"
                  r="1.95412"
                  transform="rotate(90 95.7529 37.1284)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="95.7529"
                  cy="48.8538"
                  r="1.95412"
                  transform="rotate(90 95.7529 48.8538)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="95.7529"
                  cy="60.5774"
                  r="1.95412"
                  transform="rotate(90 95.7529 60.5774)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="95.7529"
                  cy="72.3018"
                  r="1.95412"
                  transform="rotate(90 95.7529 72.3018)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="95.7529"
                  cy="84.0271"
                  r="1.95412"
                  transform="rotate(90 95.7529 84.0271)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="95.7529"
                  cy="95.7525"
                  r="1.95412"
                  transform="rotate(90 95.7529 95.7525)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="95.7529"
                  cy="107.477"
                  r="1.95412"
                  transform="rotate(90 95.7529 107.477)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="84.0263"
                  cy="1.95412"
                  r="1.95412"
                  transform="rotate(90 84.0263 1.95412)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="84.0263"
                  cy="13.6786"
                  r="1.95412"
                  transform="rotate(90 84.0263 13.6786)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="84.0263"
                  cy="25.404"
                  r="1.95412"
                  transform="rotate(90 84.0263 25.404)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="84.0263"
                  cy="37.1284"
                  r="1.95412"
                  transform="rotate(90 84.0263 37.1284)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="84.0263"
                  cy="48.8538"
                  r="1.95412"
                  transform="rotate(90 84.0263 48.8538)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="84.0263"
                  cy="60.5773"
                  r="1.95412"
                  transform="rotate(90 84.0263 60.5773)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="84.0263"
                  cy="72.3018"
                  r="1.95412"
                  transform="rotate(90 84.0263 72.3018)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="84.0263"
                  cy="84.0271"
                  r="1.95412"
                  transform="rotate(90 84.0263 84.0271)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="84.0263"
                  cy="95.7525"
                  r="1.95412"
                  transform="rotate(90 84.0263 95.7525)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="84.0263"
                  cy="107.477"
                  r="1.95412"
                  transform="rotate(90 84.0263 107.477)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="72.3037"
                  cy="1.95412"
                  r="1.95412"
                  transform="rotate(90 72.3037 1.95412)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="72.3037"
                  cy="13.6786"
                  r="1.95412"
                  transform="rotate(90 72.3037 13.6786)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="72.3037"
                  cy="25.404"
                  r="1.95412"
                  transform="rotate(90 72.3037 25.404)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="72.3037"
                  cy="37.1284"
                  r="1.95412"
                  transform="rotate(90 72.3037 37.1284)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="72.3037"
                  cy="48.8538"
                  r="1.95412"
                  transform="rotate(90 72.3037 48.8538)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="72.3037"
                  cy="60.5773"
                  r="1.95412"
                  transform="rotate(90 72.3037 60.5773)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="72.3037"
                  cy="72.3018"
                  r="1.95412"
                  transform="rotate(90 72.3037 72.3018)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="72.3037"
                  cy="84.0271"
                  r="1.95412"
                  transform="rotate(90 72.3037 84.0271)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="72.3037"
                  cy="95.7525"
                  r="1.95412"
                  transform="rotate(90 72.3037 95.7525)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="72.3037"
                  cy="107.477"
                  r="1.95412"
                  transform="rotate(90 72.3037 107.477)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="60.5771"
                  cy="1.95412"
                  r="1.95412"
                  transform="rotate(90 60.5771 1.95412)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="60.5771"
                  cy="13.6786"
                  r="1.95412"
                  transform="rotate(90 60.5771 13.6786)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="60.5771"
                  cy="25.404"
                  r="1.95412"
                  transform="rotate(90 60.5771 25.404)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="60.5771"
                  cy="37.1284"
                  r="1.95412"
                  transform="rotate(90 60.5771 37.1284)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="60.5771"
                  cy="48.8538"
                  r="1.95412"
                  transform="rotate(90 60.5771 48.8538)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="60.5771"
                  cy="60.5773"
                  r="1.95412"
                  transform="rotate(90 60.5771 60.5773)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="60.5771"
                  cy="72.3018"
                  r="1.95412"
                  transform="rotate(90 60.5771 72.3018)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="60.5771"
                  cy="84.0271"
                  r="1.95412"
                  transform="rotate(90 60.5771 84.0271)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="60.5771"
                  cy="95.7525"
                  r="1.95412"
                  transform="rotate(90 60.5771 95.7525)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="60.5771"
                  cy="107.477"
                  r="1.95412"
                  transform="rotate(90 60.5771 107.477)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="48.8545"
                  cy="1.95412"
                  r="1.95412"
                  transform="rotate(90 48.8545 1.95412)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="48.8545"
                  cy="13.6786"
                  r="1.95412"
                  transform="rotate(90 48.8545 13.6786)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="48.8545"
                  cy="25.404"
                  r="1.95412"
                  transform="rotate(90 48.8545 25.404)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="48.8545"
                  cy="37.1284"
                  r="1.95412"
                  transform="rotate(90 48.8545 37.1284)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="48.8545"
                  cy="48.8538"
                  r="1.95412"
                  transform="rotate(90 48.8545 48.8538)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="48.8545"
                  cy="60.5773"
                  r="1.95412"
                  transform="rotate(90 48.8545 60.5773)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="48.8545"
                  cy="72.3018"
                  r="1.95412"
                  transform="rotate(90 48.8545 72.3018)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="48.8545"
                  cy="84.0271"
                  r="1.95412"
                  transform="rotate(90 48.8545 84.0271)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="48.8545"
                  cy="95.7525"
                  r="1.95412"
                  transform="rotate(90 48.8545 95.7525)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="48.8545"
                  cy="107.477"
                  r="1.95412"
                  transform="rotate(90 48.8545 107.477)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="37.1279"
                  cy="1.95412"
                  r="1.95412"
                  transform="rotate(90 37.1279 1.95412)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="37.1279"
                  cy="13.6786"
                  r="1.95412"
                  transform="rotate(90 37.1279 13.6786)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="37.1279"
                  cy="25.404"
                  r="1.95412"
                  transform="rotate(90 37.1279 25.404)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="37.1279"
                  cy="37.1284"
                  r="1.95412"
                  transform="rotate(90 37.1279 37.1284)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="37.1279"
                  cy="48.8538"
                  r="1.95412"
                  transform="rotate(90 37.1279 48.8538)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="37.1279"
                  cy="60.5773"
                  r="1.95412"
                  transform="rotate(90 37.1279 60.5773)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="37.1279"
                  cy="72.3018"
                  r="1.95412"
                  transform="rotate(90 37.1279 72.3018)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="37.1279"
                  cy="84.0271"
                  r="1.95412"
                  transform="rotate(90 37.1279 84.0271)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="37.1279"
                  cy="95.7525"
                  r="1.95412"
                  transform="rotate(90 37.1279 95.7525)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="37.1279"
                  cy="107.477"
                  r="1.95412"
                  transform="rotate(90 37.1279 107.477)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="25.4013"
                  cy="1.95412"
                  r="1.95412"
                  transform="rotate(90 25.4013 1.95412)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="25.4013"
                  cy="13.6786"
                  r="1.95412"
                  transform="rotate(90 25.4013 13.6786)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="25.4013"
                  cy="25.404"
                  r="1.95412"
                  transform="rotate(90 25.4013 25.404)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="25.4013"
                  cy="37.1284"
                  r="1.95412"
                  transform="rotate(90 25.4013 37.1284)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="25.4013"
                  cy="48.8538"
                  r="1.95412"
                  transform="rotate(90 25.4013 48.8538)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="25.4013"
                  cy="60.5773"
                  r="1.95412"
                  transform="rotate(90 25.4013 60.5773)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="25.4013"
                  cy="72.3018"
                  r="1.95412"
                  transform="rotate(90 25.4013 72.3018)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="25.4013"
                  cy="84.0271"
                  r="1.95412"
                  transform="rotate(90 25.4013 84.0271)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="25.4013"
                  cy="95.7525"
                  r="1.95412"
                  transform="rotate(90 25.4013 95.7525)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="25.4013"
                  cy="107.477"
                  r="1.95412"
                  transform="rotate(90 25.4013 107.477)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="13.6787"
                  cy="1.95412"
                  r="1.95412"
                  transform="rotate(90 13.6787 1.95412)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="13.6787"
                  cy="13.6786"
                  r="1.95412"
                  transform="rotate(90 13.6787 13.6786)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="13.6787"
                  cy="25.404"
                  r="1.95412"
                  transform="rotate(90 13.6787 25.404)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="13.6787"
                  cy="37.1284"
                  r="1.95412"
                  transform="rotate(90 13.6787 37.1284)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="13.6787"
                  cy="48.8538"
                  r="1.95412"
                  transform="rotate(90 13.6787 48.8538)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="13.6787"
                  cy="60.5773"
                  r="1.95412"
                  transform="rotate(90 13.6787 60.5773)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="13.6787"
                  cy="72.3018"
                  r="1.95412"
                  transform="rotate(90 13.6787 72.3018)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="13.6787"
                  cy="84.0271"
                  r="1.95412"
                  transform="rotate(90 13.6787 84.0271)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="13.6787"
                  cy="95.7525"
                  r="1.95412"
                  transform="rotate(90 13.6787 95.7525)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="13.6787"
                  cy="107.477"
                  r="1.95412"
                  transform="rotate(90 13.6787 107.477)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="1.95603"
                  cy="1.95412"
                  r="1.95412"
                  transform="rotate(90 1.95603 1.95412)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="1.95603"
                  cy="13.6786"
                  r="1.95412"
                  transform="rotate(90 1.95603 13.6786)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="1.95603"
                  cy="25.404"
                  r="1.95412"
                  transform="rotate(90 1.95603 25.404)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="1.95603"
                  cy="37.1284"
                  r="1.95412"
                  transform="rotate(90 1.95603 37.1284)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="1.95603"
                  cy="48.8538"
                  r="1.95412"
                  transform="rotate(90 1.95603 48.8538)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="1.95603"
                  cy="60.5773"
                  r="1.95412"
                  transform="rotate(90 1.95603 60.5773)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="1.95603"
                  cy="72.3018"
                  r="1.95412"
                  transform="rotate(90 1.95603 72.3018)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="1.95603"
                  cy="84.0271"
                  r="1.95412"
                  transform="rotate(90 1.95603 84.0271)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="1.95603"
                  cy="95.7525"
                  r="1.95412"
                  transform="rotate(90 1.95603 95.7525)"
                  fill="#a5a3a3"
                ></circle>
                <circle
                  cx="1.95603"
                  cy="107.477"
                  r="1.95412"
                  transform="rotate(90 1.95603 107.477)"
                  fill="#a5a3a3"
                ></circle>
              </svg>
            </div>
            <div class="right-embd">
              <div class="embd-wrap">
                <div class="embd-text" style={{ color: "#000000" }}>
                  <h3>Fixed Price Project </h3>
                  <h4>We design and develop your vision</h4>
                  <p>
                    Get a comprehensive product development experience from
                    design to delivery with reduced development costs.
                  </p>
                  <Link to="/contact" style={{textDecoration: "none", color: "#000000"}}>
                    Develop Your Product <i class="la la-long-arrow-right"></i>
                  </Link>
                </div>
                <div class="embd-img right">
                  <svg
                    width="98"
                    height="110"
                    viewBox="0 0 98 110"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="95.7529"
                      cy="1.95425"
                      r="1.95412"
                      transform="rotate(90 95.7529 1.95425)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="95.7529"
                      cy="13.6786"
                      r="1.95412"
                      transform="rotate(90 95.7529 13.6786)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="95.7529"
                      cy="25.404"
                      r="1.95412"
                      transform="rotate(90 95.7529 25.404)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="95.7529"
                      cy="37.1284"
                      r="1.95412"
                      transform="rotate(90 95.7529 37.1284)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="95.7529"
                      cy="48.8538"
                      r="1.95412"
                      transform="rotate(90 95.7529 48.8538)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="95.7529"
                      cy="60.5774"
                      r="1.95412"
                      transform="rotate(90 95.7529 60.5774)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="95.7529"
                      cy="72.3018"
                      r="1.95412"
                      transform="rotate(90 95.7529 72.3018)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="95.7529"
                      cy="84.0271"
                      r="1.95412"
                      transform="rotate(90 95.7529 84.0271)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="95.7529"
                      cy="95.7525"
                      r="1.95412"
                      transform="rotate(90 95.7529 95.7525)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="95.7529"
                      cy="107.477"
                      r="1.95412"
                      transform="rotate(90 95.7529 107.477)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="84.0263"
                      cy="1.95412"
                      r="1.95412"
                      transform="rotate(90 84.0263 1.95412)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="84.0263"
                      cy="13.6786"
                      r="1.95412"
                      transform="rotate(90 84.0263 13.6786)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="84.0263"
                      cy="25.404"
                      r="1.95412"
                      transform="rotate(90 84.0263 25.404)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="84.0263"
                      cy="37.1284"
                      r="1.95412"
                      transform="rotate(90 84.0263 37.1284)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="84.0263"
                      cy="48.8538"
                      r="1.95412"
                      transform="rotate(90 84.0263 48.8538)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="84.0263"
                      cy="60.5773"
                      r="1.95412"
                      transform="rotate(90 84.0263 60.5773)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="84.0263"
                      cy="72.3018"
                      r="1.95412"
                      transform="rotate(90 84.0263 72.3018)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="84.0263"
                      cy="84.0271"
                      r="1.95412"
                      transform="rotate(90 84.0263 84.0271)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="84.0263"
                      cy="95.7525"
                      r="1.95412"
                      transform="rotate(90 84.0263 95.7525)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="84.0263"
                      cy="107.477"
                      r="1.95412"
                      transform="rotate(90 84.0263 107.477)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="72.3037"
                      cy="1.95412"
                      r="1.95412"
                      transform="rotate(90 72.3037 1.95412)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="72.3037"
                      cy="13.6786"
                      r="1.95412"
                      transform="rotate(90 72.3037 13.6786)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="72.3037"
                      cy="25.404"
                      r="1.95412"
                      transform="rotate(90 72.3037 25.404)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="72.3037"
                      cy="37.1284"
                      r="1.95412"
                      transform="rotate(90 72.3037 37.1284)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="72.3037"
                      cy="48.8538"
                      r="1.95412"
                      transform="rotate(90 72.3037 48.8538)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="72.3037"
                      cy="60.5773"
                      r="1.95412"
                      transform="rotate(90 72.3037 60.5773)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="72.3037"
                      cy="72.3018"
                      r="1.95412"
                      transform="rotate(90 72.3037 72.3018)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="72.3037"
                      cy="84.0271"
                      r="1.95412"
                      transform="rotate(90 72.3037 84.0271)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="72.3037"
                      cy="95.7525"
                      r="1.95412"
                      transform="rotate(90 72.3037 95.7525)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="72.3037"
                      cy="107.477"
                      r="1.95412"
                      transform="rotate(90 72.3037 107.477)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="60.5771"
                      cy="1.95412"
                      r="1.95412"
                      transform="rotate(90 60.5771 1.95412)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="60.5771"
                      cy="13.6786"
                      r="1.95412"
                      transform="rotate(90 60.5771 13.6786)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="60.5771"
                      cy="25.404"
                      r="1.95412"
                      transform="rotate(90 60.5771 25.404)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="60.5771"
                      cy="37.1284"
                      r="1.95412"
                      transform="rotate(90 60.5771 37.1284)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="60.5771"
                      cy="48.8538"
                      r="1.95412"
                      transform="rotate(90 60.5771 48.8538)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="60.5771"
                      cy="60.5773"
                      r="1.95412"
                      transform="rotate(90 60.5771 60.5773)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="60.5771"
                      cy="72.3018"
                      r="1.95412"
                      transform="rotate(90 60.5771 72.3018)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="60.5771"
                      cy="84.0271"
                      r="1.95412"
                      transform="rotate(90 60.5771 84.0271)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="60.5771"
                      cy="95.7525"
                      r="1.95412"
                      transform="rotate(90 60.5771 95.7525)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="60.5771"
                      cy="107.477"
                      r="1.95412"
                      transform="rotate(90 60.5771 107.477)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="48.8545"
                      cy="1.95412"
                      r="1.95412"
                      transform="rotate(90 48.8545 1.95412)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="48.8545"
                      cy="13.6786"
                      r="1.95412"
                      transform="rotate(90 48.8545 13.6786)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="48.8545"
                      cy="25.404"
                      r="1.95412"
                      transform="rotate(90 48.8545 25.404)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="48.8545"
                      cy="37.1284"
                      r="1.95412"
                      transform="rotate(90 48.8545 37.1284)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="48.8545"
                      cy="48.8538"
                      r="1.95412"
                      transform="rotate(90 48.8545 48.8538)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="48.8545"
                      cy="60.5773"
                      r="1.95412"
                      transform="rotate(90 48.8545 60.5773)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="48.8545"
                      cy="72.3018"
                      r="1.95412"
                      transform="rotate(90 48.8545 72.3018)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="48.8545"
                      cy="84.0271"
                      r="1.95412"
                      transform="rotate(90 48.8545 84.0271)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="48.8545"
                      cy="95.7525"
                      r="1.95412"
                      transform="rotate(90 48.8545 95.7525)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="48.8545"
                      cy="107.477"
                      r="1.95412"
                      transform="rotate(90 48.8545 107.477)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="37.1279"
                      cy="1.95412"
                      r="1.95412"
                      transform="rotate(90 37.1279 1.95412)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="37.1279"
                      cy="13.6786"
                      r="1.95412"
                      transform="rotate(90 37.1279 13.6786)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="37.1279"
                      cy="25.404"
                      r="1.95412"
                      transform="rotate(90 37.1279 25.404)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="37.1279"
                      cy="37.1284"
                      r="1.95412"
                      transform="rotate(90 37.1279 37.1284)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="37.1279"
                      cy="48.8538"
                      r="1.95412"
                      transform="rotate(90 37.1279 48.8538)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="37.1279"
                      cy="60.5773"
                      r="1.95412"
                      transform="rotate(90 37.1279 60.5773)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="37.1279"
                      cy="72.3018"
                      r="1.95412"
                      transform="rotate(90 37.1279 72.3018)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="37.1279"
                      cy="84.0271"
                      r="1.95412"
                      transform="rotate(90 37.1279 84.0271)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="37.1279"
                      cy="95.7525"
                      r="1.95412"
                      transform="rotate(90 37.1279 95.7525)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="37.1279"
                      cy="107.477"
                      r="1.95412"
                      transform="rotate(90 37.1279 107.477)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="25.4013"
                      cy="1.95412"
                      r="1.95412"
                      transform="rotate(90 25.4013 1.95412)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="25.4013"
                      cy="13.6786"
                      r="1.95412"
                      transform="rotate(90 25.4013 13.6786)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="25.4013"
                      cy="25.404"
                      r="1.95412"
                      transform="rotate(90 25.4013 25.404)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="25.4013"
                      cy="37.1284"
                      r="1.95412"
                      transform="rotate(90 25.4013 37.1284)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="25.4013"
                      cy="48.8538"
                      r="1.95412"
                      transform="rotate(90 25.4013 48.8538)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="25.4013"
                      cy="60.5773"
                      r="1.95412"
                      transform="rotate(90 25.4013 60.5773)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="25.4013"
                      cy="72.3018"
                      r="1.95412"
                      transform="rotate(90 25.4013 72.3018)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="25.4013"
                      cy="84.0271"
                      r="1.95412"
                      transform="rotate(90 25.4013 84.0271)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="25.4013"
                      cy="95.7525"
                      r="1.95412"
                      transform="rotate(90 25.4013 95.7525)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="25.4013"
                      cy="107.477"
                      r="1.95412"
                      transform="rotate(90 25.4013 107.477)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="13.6787"
                      cy="1.95412"
                      r="1.95412"
                      transform="rotate(90 13.6787 1.95412)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="13.6787"
                      cy="13.6786"
                      r="1.95412"
                      transform="rotate(90 13.6787 13.6786)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="13.6787"
                      cy="25.404"
                      r="1.95412"
                      transform="rotate(90 13.6787 25.404)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="13.6787"
                      cy="37.1284"
                      r="1.95412"
                      transform="rotate(90 13.6787 37.1284)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="13.6787"
                      cy="48.8538"
                      r="1.95412"
                      transform="rotate(90 13.6787 48.8538)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="13.6787"
                      cy="60.5773"
                      r="1.95412"
                      transform="rotate(90 13.6787 60.5773)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="13.6787"
                      cy="72.3018"
                      r="1.95412"
                      transform="rotate(90 13.6787 72.3018)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="13.6787"
                      cy="84.0271"
                      r="1.95412"
                      transform="rotate(90 13.6787 84.0271)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="13.6787"
                      cy="95.7525"
                      r="1.95412"
                      transform="rotate(90 13.6787 95.7525)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="13.6787"
                      cy="107.477"
                      r="1.95412"
                      transform="rotate(90 13.6787 107.477)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="1.95603"
                      cy="1.95412"
                      r="1.95412"
                      transform="rotate(90 1.95603 1.95412)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="1.95603"
                      cy="13.6786"
                      r="1.95412"
                      transform="rotate(90 1.95603 13.6786)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="1.95603"
                      cy="25.404"
                      r="1.95412"
                      transform="rotate(90 1.95603 25.404)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="1.95603"
                      cy="37.1284"
                      r="1.95412"
                      transform="rotate(90 1.95603 37.1284)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="1.95603"
                      cy="48.8538"
                      r="1.95412"
                      transform="rotate(90 1.95603 48.8538)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="1.95603"
                      cy="60.5773"
                      r="1.95412"
                      transform="rotate(90 1.95603 60.5773)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="1.95603"
                      cy="72.3018"
                      r="1.95412"
                      transform="rotate(90 1.95603 72.3018)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="1.95603"
                      cy="84.0271"
                      r="1.95412"
                      transform="rotate(90 1.95603 84.0271)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="1.95603"
                      cy="95.7525"
                      r="1.95412"
                      transform="rotate(90 1.95603 95.7525)"
                      fill="#a5a3a3"
                    ></circle>
                    <circle
                      cx="1.95603"
                      cy="107.477"
                      r="1.95412"
                      transform="rotate(90 1.95603 107.477)"
                      fill="#a5a3a3"
                    ></circle>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="circle-layer"></div>
          <div className="circle-layer-two"></div>
          <div className="auto-container">
            <div className="sec-title centered">
              <h2>Featured Work</h2>
              <div className="text">
                Choose your coach training based on the program offerings, your
                instinct, <br /> We are different from a traditional IT staffing
                agency
              </div>
            </div>
            <div className="row clearfix">
              <div className="case-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <div className="color-circle"></div>
                    <img src={predictionstrike} alt="" />
                  </div>
                  <h3>
                    <Link
                      to="/case-studies"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Prediction Strike
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="case-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <div className="color-circle"></div>
                    <img src={circlepod} alt="" />
                  </div>
                  <h3>
                    <Link
                      to="/case-studies"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Circle POD
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="case-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <div className="color-circle"></div>
                    <img src={hardassetsalliance} alt="" />
                  </div>
                  <h3>
                    <Link
                      to="/case-studies"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Hard Assets Alliance
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="case-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <div className="color-circle"></div>
                    <img src={fitr} alt="" />
                  </div>
                  <h3>
                    <Link
                      to="/case-studies"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Fitr Pro
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="case-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <div className="color-circle"></div>
                    <img src={taskrabbit} alt="" />
                  </div>
                  <h3>
                    <Link
                      to="/case-studies"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Task Rabbit
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="case-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <div className="color-circle"></div>
                    <img src={coachr} alt="" />
                  </div>
                  <h3>
                    <Link
                      to="/case-studies"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Coachr
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="case-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <div className="color-circle"></div>
                    <img src={distropro} alt="" />
                  </div>
                  <h3>
                    <Link
                      to="/web-development-software"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Distro Pro
                    </Link>
                  </h3>
                </div>
              </div>

              <div className="case-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <div className="color-circle"></div>
                    <img src={proctorgallagher} alt="" />
                  </div>
                  <h3>
                    <Link
                      to="/case-studies"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Proctor Gallagher
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="case-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <div className="color-circle"></div>
                    <img src={wayfair} alt="" />
                  </div>
                  <h3>
                    <Link
                      to="/case-studies"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Wayfair
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonial-section">
          {/* <div className="color-layer"></div> */}
          <div className="auto-container">
            <div className="inner-container">
              <div className="row clearfix">
                <div className="left-column col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="inner-column">
                    <div className="testimonial-block">
                      <div
                        className="inner-box wow fadeInLeft"
                        data-wow-delay="0ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="author-image">
                          <img src={author1} alt="" />
                        </div>
                        <div className="content">
                          <h5>Mahfuz Riad</h5>
                          <div className="text">
                            Duis aute irure dolor in reprehender it in voluptate
                            velit esse cillum dolore eu
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="testimonial-block">
                      <div
                        className="inner-box wow fadeInLeft"
                        data-wow-delay="150ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="author-image">
                          <img src={author2} alt="" />
                        </div>
                        <div className="content">
                          <h5>Rashed Ka</h5>
                          <div className="text">
                            Duis aute irure dolor in reprehender it in voluptate
                            velit esse cillum dolore eu
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="title-column col-xl-4 col-lg-12 col-md-12 col-sm-12">
                  <div
                    className="inner-column wow fadeInUp"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="quote-icon flaticon-quote-2">
                      <span className="circle"></span>
                    </div>
                    <h2>
                      Our valuable success <br /> clients story
                    </h2>
                    <div className="text">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                  </div>
                </div>

                <div className="right-column col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="inner-column">
                    <div className="testimonial-block style-two">
                      <div
                        className="inner-box wow fadeInRight"
                        data-wow-delay="0ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="author-image">
                          <img src={author3} alt="" />
                        </div>
                        <div className="content">
                          <h5>Foqrul islam</h5>
                          <div className="text">
                            Duis aute irure dolor in reprehender it in voluptate
                            velit esse cillum dolore eu
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="testimonial-block style-two">
                      <div
                        className="inner-box wow fadeInRight"
                        data-wow-delay="150ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="author-image">
                          <img src={author4} alt="" />
                        </div>
                        <div className="content">
                          <h5>Tamim Anjum</h5>
                          <div className="text">
                            Duis aute irure dolor in reprehender it in voluptate
                            velit esse cillum dolore eu
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="contact-page-section" style={{ margin: "100px 0px" }}>
          <div class="auto-container">
            <div class="inner-container" style={{ width: "1200px" }}>
              <div class="row clearfix">
                <div class="info-block col-lg-4 col-md-12 col-sm-12">
                  <div class="inner-column">
                    <ul class="list">
                      <li>
                        <span class="icon">
                          <img src={map} alt="" />
                        </span>
                        <strong>Location</strong>
                        605 Abdul Haque Rd, Block H-3 Johar Town, Lahore
                      </li>
                      <li>
                        <span class="icon"></span>
                        <strong>Email</strong>
                        <a
                          style={{ textDecoration: "none" }}
                          href="mailto:intelliper@gmail.com"
                        >
                          intelliper@gmail.com
                        </a>
                      </li>
                      <li>
                        <span class="icon"></span>
                        <strong>Phone</strong>
                        {/* <a href="tel:+8801-648-101-51">+8801 648 101 51</a> */}
                        <a
                          style={{ textDecoration: "none" }}
                          href="tel:+92-324-11-63-049"
                        >
                          +92 324 11 63 049
                        </a>
                      </li>
                      <li>
                        <strong>Social</strong>
                        <a
                          href="https://www.linkedin.com/in/muneeb-alee-itservices/"
                          style={{ textDecoration: "none" }}
                          class="fa fa-linkedin"
                        ></a>
                        <a
                          href="mailto:intellipers@gmail.com"
                          style={{ textDecoration: "none" }}
                          class="fa fa-envelope"
                        ></a>
                        <a
                          href="https://join.skype.com/invite/wHPEUq5ml4ol"
                          style={{ textDecoration: "none" }}
                          class="fa fa-skype"
                        ></a>
                        <a
                          href="https://wa.me/message/6ITRYHOBDR4EF1 "
                          style={{ textDecoration: "none" }}
                          class="fa fa-whatsapp"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="form-block col-lg-8 col-md-12 col-sm-12">
                  <div class="inner-column">
                    <div class="title-box">
                      <h3>Send a message</h3>
                      <div class="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut blandit <br /> arcu in pretium.
                      </div>
                    </div>

                    <div class="contact-form">
                      <form
                        method="post"
                        action="https://themazine.com/html/Esonit/Esonit/sendemail.php"
                        id="contact_form"
                      >
                        <div class="row clearfix">
                          <div className="form-group col-lg-12 col-md-6 col-sm-12">
                            <select>
                              <option value="">How can we help you?</option>
                              <option value="Mobile App Development">
                                Mobile App Development
                              </option>
                              <option value="Enterprise Software Development">
                                Enterprise Software Development
                              </option>
                              <option value="Web Development">
                                Web Development
                              </option>
                              <option value="Dedicated Teams">
                                Dedicated Teams
                              </option>
                              <option value="IT Consulting">
                                IT Consulting
                              </option>
                              <option value="Internet of Things">
                                Internet of Things
                              </option>
                              <option value="Blockchain">Blockchain</option>
                              <option value="Augmented Reality">
                                Augmented Reality
                              </option>
                              <option value="Artificial Intelligence">
                                Artificial Intelligence
                              </option>
                              <option value="Cloud Computing">
                                Cloud Computing
                              </option>
                              <option value="FinTech">FinTech</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                          <div class="form-group col-lg-6 col-md-6 col-sm-12">
                            <input
                              type="text"
                              name="username"
                              placeholder="Name"
                              required
                            />
                          </div>
                          <div class="form-group col-lg-6 col-md-6 col-sm-12">
                            <input
                              type="email"
                              name="email"
                              placeholder="Email"
                              required
                            />
                          </div>

                          <div class="form-group col-lg-6 col-md-6 col-sm-12">
                            <input
                              type="text"
                              name="phone"
                              placeholder="Phone"
                              required
                            />
                          </div>

                          <div class="form-group col-lg-6 col-md-6 col-sm-12">
                            <input
                              type="text"
                              name="subject"
                              placeholder="Subject"
                              required
                            />
                          </div>

                          <div class="form-group col-lg-12 col-md-12 col-sm-12">
                            <textarea
                              name="message"
                              placeholder="message"
                            ></textarea>
                          </div>

                          <div class="form-group col-lg-12 col-md-12 col-sm-12">
                            <button
                              class="theme-btn btn-style-one"
                              type="submit"
                              name="submit-form"
                            >
                              Submit Message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
