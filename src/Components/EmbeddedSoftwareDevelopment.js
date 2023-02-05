import React from "react";
import Footer from "./Footer";
import Header from "./header";

import service10 from "../assets/images/resource/service-10.png";
import embd_automation_services from "../assets/images/embedded_software_icon/embd-automation-services.svg";
import embd_design_services from "../assets/images/embedded_software_icon/embd-design-services.svg";
import embd_firmware from "../assets/images/embedded_software_icon/embd-firmware.svg";
import embd_software_development from "../assets/images/embedded_software_icon/embd-software-development.svg";
import embd_training_services from "../assets/images/embedded_software_icon/embd-training-services.svg";
import Unmatched from "../assets/images/embedded_software_icon/embd-Unmatched.svg";
import time_zone from "../assets/images/embedded_software_icon/embd-time-zone.svg";
import quality_work from "../assets/images/embedded_software_icon/embd-quality-work.svg";
import engineering_talent from "../assets/images/embedded_software_icon/embd-engineering-talent.svg";
import effortless_communication from "../assets/images/embedded_software_icon/embd-effortless-communication.svg";
import { Link } from "react-router-dom";

export default function EmbeddedSoftwareDevelopment() {
  return (
    <>
      <div class="page-wrapper">
        <Header />
        <section class="top-container banner-section-five">
          <div class="auto-container">
            <div class="row clearfix">
              <div class="content-column col-lg-6 col-md-12 col-sm-12">
                <div class="inner-column">
                  <p
                    style={{
                      position: "relative",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "20px",
                      paddingBottom: "5px",
                      marginBottom: "20px",
                      color: "#212529",
                      marginTop: "0",
                    }}
                  >
                    <span
                      style={{
                        content: "",
                        width: "35px",
                        height: "2px",
                        position: "absolute",
                        bottom: "-4px",
                        left: 0,
                        background: "#2569e6",
                        WebkitTransform: "translateY(-50%)",
                        transform: "translateY(-50%)",
                      }}
                    />
                    Embedded Software Development
                  </p>
                  <h2>
                    Your Embedded Software <br />
                    Development Partner
                  </h2>
                  <div class="text">
                    Hire Experienced & Dedicated Embedded Software Developers
                    Now
                  </div>
                  <Link
                    to='/contact'
                    style={{ textDecoration: "none" }}
                    class="btn-style-one theme-btn"
                  >
                    Let's Talk
                  </Link>
                </div>
              </div>
              <div class="image-column col-lg-6 col-md-12 col-sm-12">
                <div class="inner-column">
                  <div class="image">
                    <img src={service10} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="brand-section-2">
          <div className="auto-container">
            <div className="ms-service-title tech-title">
              {/* <p>SERVICES</p> */}
              <h2 className="home-heading-two">Services We Offer</h2>
            </div>
            <div className="offer-cards">
              <div className="card">
                <img
                  alt="design"
                  id="NTIwOjEyMQ==-1"
                  src={embd_design_services}
                />
                <h3>Embedded Design Services</h3>
                <p>
                  Our Expertise in Embedded Linux, bare-metal and Real Time
                  Operating Systems (RTOS) enable us to provide you the highest
                  quality embedded designs.
                </p>
              </div>
              <div className="card">
                <img
                  alt="firmware"
                  id="NTI2OjExNg==-1"
                  src={embd_firmware}
                />
                <h3>Embedded Firmware</h3>
                <p>
                  We develop high-end Embedded Systems with higher security,
                  reliable connectivity, fast storage and optimized Performance.
                </p>
              </div>
              <div className="card">
                <img
                  alt="automation"
                  id="NTMyOjEyOQ==-1"
                  src={embd_automation_services}
                />
                <h3>Automation Services</h3>
                <p>
                  Helping you automate processes from single core process based
                  system architectures design to highly complex.
                </p>
              </div>
              <div className="card">
                <img
                  alt="software development"
                  id="NTM4OjE0MA==-1"
                  src={embd_software_development}
                />
                <h3>Software Development</h3>
                <p>
                  Offering top-notch GUI tools development for embedded systems,
                  for configuration, control, data analysis and visualization.
                </p>
              </div>
              <div className="card">
                <img
                  alt="training services"
                  id="NTQ0OjEzNA==-1"
                  src={embd_training_services}
                />
                <h3>Training Services</h3>
                <p>
                  Helping you build a clear path to excel as embedded developer
                  and providing structured training covering both software and
                  hardware.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section-2">
          <div className="auto-container">
            <div className="ms-service-title tech-title">
              {/* <p>OUR PROCESS</p> */}
              <h2 className="home-heading-two">Why Work With Intelliper</h2>
            </div>

            <div className="offer-cards">
              <div className="card">
                <img
                  alt="engineering-talent"
                  id="NTU5OjEzNg==-1"
                  src={engineering_talent}
                />
                <h3>The best engineering talent</h3>
                <p>
                  Our engineers are best in class, so you can rest assured that
                  your product development is in good hands.
                </p>
              </div>
              <div className="card">
                <img
                  alt="Unmatched"
                  id="NTY1OjExOA==-1"
                  src={Unmatched}
                />
                <h3>Unmatched scalability</h3>
                <p>
                  We help you build a team of specialists to help you achieve
                  your goals, and can scale them up or down whenever and
                  wherever you need.
                </p>
              </div>
              <div className="card">
                <img
                  alt="time-zone"
                  id="NTcxOjExOA==-1"
                  src={time_zone}
                />
                <h3>Your choice of time zones</h3>
                <p>
                  Development centers across the globe enable us to build teams
                  for you which can work on a time zone of your choice, or even
                  work 24/7 if you are on a time crunch.
                </p>
              </div>
              <div className="card">
                <img
                  alt="quality-work"
                  id="NTc3OjEyNA==-1"
                  src={quality_work}
                />
                <h3>Top notch quality of work</h3>
                <p>
                  The one thing we never compromise on is quality. Don’t believe
                  us? Just listen to what our clients have to say.
                </p>
              </div>
              <div className="card">
                <img
                  alt="effortless communication"
                  id="NTgzOjE0OA==-1"
                  src={effortless_communication}
                />
                <h3>Effortless Communication</h3>
                <p>
                  The combination of overlapping time zones and smart use of
                  tools like Jira, GitHub and many others, means that internal
                  and external communication is never a problem.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="rtt-section">
          <div className="container text-btn">
            <h2 className="home-heading-two">Let's co-create the digital IT solution for your business.</h2>
            <a className="custo-btn" id="stylebtn">
              Let's Talk
            </a>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
}
