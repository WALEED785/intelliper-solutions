import React from "react";
import Footer from "./Footer";
import Header from "./header";

import service10 from "../assets/images/resource/service-10.png";
import experience_design from "../assets/images/icon_2/experience-design.svg";
import full_stack from "../assets/images/icon_2/full-stack.svg";
import backend_dev from "../assets/images/icon_2/backend-dev.svg";
import qa_testing from "../assets/images/icon_2/qa-testing.svg";
import support_icon from "../assets/images/icon_2/support--icon.svg";
import app_dev from "../assets/images/icon_2/app-dev.svg";
import mob_ar_vr from "../assets/images/icon_2/mob-ar-vr.svg";
import mob_geo_tracking from "../assets/images/icon_2/mob-geo-tracking.svg";
import mob_iot from "../assets/images/icon_2/mob-iot.svg";
import mob_wearables from "../assets/images/icon_2/mob-wearables.svg";
import mob_ibeacon from "../assets/images/icon_2/mob-ibeacon@1x.webp";
import { Link } from "react-router-dom";
import fitr from "../assets/images/case-study/fitr-training.png";
import circlepod from "../assets/images/case-study/circlepod.png";
import coachr from "../assets/images/case-study/coachr.png";
import hardassetsalliance from "../assets/images/case-study/hardassetsalliance.png";
import proctorgallagher from "../assets/images/case-study/proctorgallagher_2.png";
import taskrabbit from "../assets/images/case-study/taskrabbit.png";
import wayfair from "../assets/images/case-study/wayfair.png";
import distropro from "../assets/images/case-study/distropro.png";
import predictionstrike from "../assets/images/case-study/predictionstrike.png";


export default function MobileAppDevelopmentServices() {
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
                    Mobile App Development
                  </p>
                  <h2>
                    We do not build apps We <br /> build experiences
                  </h2>
                  <div class="text">
                    Leveraging latest technological tools & industry practices,
                    we build high performance apps to scale your business.
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
              <p>SERVICES</p>
              <h2 className="home-heading-two">What We Do</h2>
            </div>
            <div className="offer-cards">
              <div className="card">
              <img
                  alt="Experience"
                  id="NTI4OjEyMw==-1"
                  src={experience_design}
                />
                <h3>Experience Design</h3>
                <p>
                  With our extensive expertise in UI/UX design and front-end
                  development, we build web applications with delightful user
                  experiences.
                </p>
              </div>
              <div className="card">
              <img
                  alt="APP Development"
                  id="NTI4OjEyMw==-1"
                  src={app_dev}
                />
                <h3>App Development</h3>
                <p>
                  For the past decade we have been creating high performance,
                  feature-packed mobile applications that will meet all your
                  expectations.
                </p>
              </div>
              <div className="card">
              <img
                  alt="Full Stack Development"
                  id="NTQyOjQ4-1"
                  src={full_stack}
                />
                <h3>Full Stack Development</h3>
                <p>
                  We provide skillful software engineering to the full spectrum
                  of technologies from simple frontend prototyping to the
                  high-performing backend.
                </p>
              </div>
              <div className="card">
              <img
                  alt="QA Testing"
                  id="NTQ4OjEyMQ==-1"
                  src={qa_testing}
                />
                <h3>QA Testing</h3>
                <p>
                  A wide range of independent software QA and testing services
                  that adhere to the highest levels of security and industry
                  standards.
                </p>
              </div>
              <div className="card">
              <img
                  alt="Support"
                  id="NTU0OjExNQ==-1"
                  src={support_icon}
                />
                <h3>Support</h3>
                <p>
                  SLA based platform support with different maintenance plans to
                  avoid any downtime, manage feature enhancements & maintenance
                  of your app.
                </p>
              </div>
              <div className="card">
              <img
                  alt="Backend Development"
                  id="NTM1OjQ1-1"
                  src={backend_dev}
                />
                <h3>Backend Development</h3>
                <p>
                  We build extensible on-premise and cloud-based back-end
                  solutions for mobile, web, desktop systems that scale with
                  your growing needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section-2">
          <div className="auto-container">
            <div className="ms-service-title tech-title">
              <p>OUR PROCESS</p>
              <h2 className="home-heading-two">How We Do It</h2>
            </div>
            <div className="cm-row">
              <div className="cm-column  line">
                <span>1</span>
                <h3>Requirements Gathering</h3>
                <ul>
                  <li>Requirements Definition</li>
                  <li>Analyzing the requirements</li>
                  <li>Documenting the process</li>
                  <li>Provide initial design</li>
                </ul>
              </div>
              <div className="cm-column  line">
                <span>2</span>
                <h3>Development & Testing</h3>

                <ul>
                  <li>Frontend & backend development</li>
                  <li>Weekly Client Feedback (SCRUM)</li>
                  <li>QA Testing</li>
                  <li>Deployment</li>
                </ul>
              </div>
              <div className="cm-column">
                <span>3</span>
                <h3>Support & Maintenance</h3>
                <ul>
                  <li>SLA Based Support</li>
                  <li>L3 and Production Support Services</li>
                  <li>Operational support where needed</li>
                  <li>On-going Support</li>
                </ul>
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

        <section className="brand-section-2">
          <div className="auto-container">
            <div className="ms-service-title tech-title">
              <p>LATEST TECHNOLOGIES</p>
              <h2 className="home-heading-two">
                Constantly Pushing Our Limits To Explore Latest Technologies
              </h2>
            </div>
            <div className="offer-cards">
              <div className="card">
                <img
                  alt="geo-tracking"
                  id="NjA2OjEyOQ==-1"
                  src={mob_geo_tracking}
                />
                <h3>Geo Tracking</h3>
                <p>
                  We can embed geolocation technology in your app for mobile
                  workforce management, fleet tracking to geo-fencing,
                  geo-targeting and location-aware in-app messaging.
                </p>
              </div>
              <div className="card">
                <img
                  alt="mob-ar-vr"
                  id="NjExOjExOQ==-1"
                  src={mob_ar_vr}
                />
                <h3>Virtual/Augmented Reality</h3>
                <p>
                  With Apple launching ARKit and Google’s ARCore hitting the
                  market, we now have two rock-solid platforms for the
                  development of augmented reality apps for mobile devices.
                </p>
              </div>
              <div className="card">
                <img
                  alt="mob-wearables"
                  id="NjE2OjEyNw==-1"
                  src={mob_wearables}
                />
                <h3>Wearables</h3>
                <p>
                  We are early adopters of new technology frameworks and offer
                  ground-breaking wearable development services for frontline,
                  innovative businesses.
                </p>
              </div>
              <div className="card">
                <img
                  alt="mob-ibeacon"
                  id="NjIxOjEyMQ==-1"
                  src={mob_ibeacon}
                />
                <h3>iBeacon</h3>
                <p>
                  Using iBeacon and location-based technology, we offer bespoke
                  solutions for your business to enhance your audience reach.
                </p>
              </div>
              <div className="card">
                <img
                  alt="mob-iot"
                  id="NjI2OjExNQ==-1"
                  src={mob_iot}
                />
                <h3>Internet of Things</h3>
                <p>
                  We can build exceptional mobile experiences for the fast-paced
                  mobile industry for years, giving top-class IOT mobile app
                  development experience.
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
        <section className="case-section">
          <div className="circle-layer"></div>
          <div className="circle-layer-two"></div>
          <div className="auto-container">
            <div className="sec-title centered">
              <h2>Featured Work</h2>
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
                      style={{ textDecoration: "none", color: "black"  }}
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
                    <img src={fitr} alt="" />
                  </div>
                  <h3>
                    <Link
                      to="/case-studies"
                      style={{ textDecoration: "none", color: "black"  }}
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
                      style={{ textDecoration: "none", color: "black"  }}
                    >
                      Task Rabbit
                    </Link>
                  </h3>
                </div>
              </div>
              
              
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
