import React from "react";
import Footer from "./Footer";
import Header from "./header";

import service10 from "../assets/images/resource/service-10.png";
import User from "../assets/images/ui_ux/uiux-User-Research.webp";
import Experience from "../assets/images/ui_ux/uiux-Experience-Design.webp";
import Development from "../assets/images/ui_ux/uiux-Development.webp";
import Design from "../assets/images/ui_ux/uiux-UX-Design.webp";
import functional from "../assets/images/ui_ux/uiux-Non-functional-testing-icon.webp";
import Strategy from "../assets/images/ui_ux/Define-Strategy-1.webp";
import Together from "../assets/images/ui_ux/Explore-Together-1.webp";
import Build from "../assets/images/ui_ux/Build-Iterate-1.webp";
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

export default function UIUXServices() {
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
                    UI UX
                  </p>
                  <h2>
                    We design and launch digital products that deliver great
                    user experiences
                  </h2>
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

        <section>
          <div class="container ms-service ">
            <div class="ms-service-title uiux-t">
              <p>DESIGN SERVICES</p>
              <h2 class="home-heading-two heading-read">
                We build delightful experiences, understanding user needs
              </h2>
            </div>
            <div class="serv-row">
              <div class="ms-serv uiux-serv">
                <div class="ms-serv-img">
                  <img alt="User Research" src={User} />
                </div>
                <div class="ms-serv-text">
                  <h3>User Research</h3>
                  <p>
                    Before getting our hands dirty, we do extensive research to
                    build up your user personas, in order to map your product’s
                    full customer journey.
                  </p>
                </div>
              </div>
              <div class="ms-serv uiux-serv">
                <div class="ms-serv-img">
                  <img alt="Experience Design" src={Design} />
                </div>
                <div class="ms-serv-text">
                  <h3>Rapid Prototyping</h3>
                  <p>
                    We create prototypes and test our ideas with real users.
                    This way we can really get more feedback about your upcoming
                    product’s usability.
                  </p>
                </div>
              </div>
              <div class="ms-serv uiux-serv">
                <div class="ms-serv-img">
                  <img alt="UX Design" src={Design} />
                </div>
                <div class="ms-serv-text">
                  <h3>UX Design</h3>
                  <p>
                    We bring together professional user experience design and
                    top-notch technology to deliver compelling experiences that
                    solve business challenges and make people happy.
                  </p>
                </div>
              </div>
              <div class="ms-serv uiux-serv nitro-offscreen">
                <div class="ms-serv-img">
                  <img alt="Development" src={Development} />
                </div>
                <div class="ms-serv-text">
                  <h3>Development</h3>
                  <p>
                    Our software engineers collaborate with designers to ensure
                    that products we deliver to our clients are perfect from
                    experience, design and technology perspectives.
                  </p>
                </div>
              </div>
              <div class="ms-serv uiux-serv nitro-offscreen">
                <div class="ms-serv-img">
                  <img alt="Non Functional Testing" src={functional} />
                </div>
                <div class="ms-serv-text">
                  <h3>Usability Testing</h3>
                  <p>
                    We partner with our clients to build products that address
                    real user needs. This emphasis on human-centered design
                    means that the products we build deliver compelling
                    experiences.
                  </p>
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
                    <img src={circlepod} alt="" />
                  </div>
                  <h3>
                    <Link
                      to="/case-studies"
                      style={{ textDecoration: "none", color: "black"  }}
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
                      style={{ textDecoration: "none", color: "black"  }}
                    >
                      Hard Assets Alliance{" "}
                    </Link>
                  </h3>
                </div>
              </div>
              
              
            </div>
          </div>
        </section>
        <section class="nitro-offscreen">
          <div class="container ms-service ">
            <div class="ms-service-title uiux-t">
              <p>OUR PROCESS</p>
              <h2 class="home-heading-two heading-read">
                Our 3 step formula for building great products
              </h2>
            </div>
            <div class="uiux3step">
              <div class="step3">
                <img alt="01" src={Together} />
                <h3>Explore Together</h3>
                <ul>
                  <li>Identifying major pain points</li>
                  <li>Goals to be achieved</li> <li>Competitor analyses</li>
                </ul>
              </div>
              <div class="step3">
                <img alt="02" src={Strategy} />
                <h3>Define Strategy</h3>
                <ul>
                  <li>Design Strategy</li> <li>Use Cases</li>
                  <li>Paper Wireframes</li>
                </ul>
              </div>
              <div class="step3">
                <img alt="03" src={Build} />
                <h3>Build &amp; Iterate</h3>
                <ul>
                  <li>Interactive Prototype</li>
                  <li>System Assets &amp; Specs</li> <li>UI Style Guide</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="rtt-section">
          <div className="container text-btn">
            <h2 className="home-heading-two">
              Let's co-create the digital IT solution for your business.
            </h2>
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
