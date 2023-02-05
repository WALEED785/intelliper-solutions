import React from "react";
import Footer from "../Footer";
import Header from "../header";

import service10 from "../../assets/images/resource/service-10.png";
import img1 from '../../assets/images/service_now_icons/consultation.svg'
import img2 from '../../assets/images/service_now_icons/advice-service--logo.svg'
import img3 from '../../assets/images/service_now_icons/aws-computing--icon.svg'
import img4 from '../../assets/images/service_now_icons/backend-dev--icon.svg'
import img5 from '../../assets/images/service_now_icons/aws-integration--icon.svg'
import img6 from '../../assets/images/service_now_icons/support.svg'
import img7 from '../../assets/images/service_now_icons/ms-consulting--icon.svg'
import img8 from '../../assets/images/service_now_icons/embd-automation-services.svg'
import img9 from '../../assets/images/service_now_icons/backend-dev--icon.svg'
import img10 from '../../assets/images/service_now_icons/mob-app-dev--icon.svg'
import img12 from '../../assets/images/service_now_icons/app-dev--icon.svg'
import { Link } from "react-router-dom";
import fitr from "../../assets/images/case-study/fitr-training.png";
import circlepod from "../../assets/images/case-study/circlepod.png";
import coachr from "../../assets/images/case-study/coachr.png";
import hardassetsalliance from "../../assets/images/case-study/hardassetsalliance.png";
import proctorgallagher from "../../assets/images/case-study/proctorgallagher_2.png";
import taskrabbit from "../../assets/images/case-study/taskrabbit.png";
import wayfair from "../../assets/images/case-study/wayfair.png";
import distropro from "../../assets/images/case-study/distropro.png";
import predictionstrike from "../../assets/images/case-study/predictionstrike.png";
export default function ServicenowConsultingServices() {
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
                    ServiceNow Services
                  </p>
                  <h2>
                    Driving Process efficiency through ServiceNow Services
                  </h2>
                  <div class="text">
                    Helping you bring optimization and effectiveness to your
                    workflows.
                  </div>
                  <a
                    href="#"
                    style={{ textDecoration: "none" }}
                    class="btn-style-one theme-btn"
                  >
                    Let's Talk
                  </a>
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

        <section class="services-section">
          <div class="container">
            <div class="offer-title">
              <h2 class="home-heading-two">What We Do</h2>
            </div>
            <div class="offer-cards">
              <div class="card">
                <img
                  alt="Experience Design"
                  src={img1}
                />
                <h3>Advisory Services</h3>
                <p>
                  Strategic planning for your ServiceNow investment based on
                  your process, people, and requirements to ensure that you get
                  the best out of the platform.
                </p>
              </div>
              <div class="card">
                <img
                  alt="UI/UX"
                  src={img2}
                />
                <h3>User Interface &amp; Experience</h3>
                <p>
                  Focusing on simplicity and modern design trends, our app
                  designs are ergonomic and beautiful, delivering productive
                  experiences to the user.
                </p>
              </div>
              <div class="card">
                <img
                  alt="Implementation"
                  src={img3}
                />
                <h3>Implementation</h3>
                <p>
                  ServiceNow’s built in versatility allows it to be configured
                  to accomplish various basic tasks without a need for extensive
                  custom development.
                </p>
              </div>
              <div class="card">
                <img
                  alt="Custom Development"
                  src={img4}
                />
                <h3>Custom Development</h3>
                <p>
                  Our engineers can write custom scripts and code within
                  ServiceNow if your requirements lie outside the reach of the
                  platform’s standard functionality.
                </p>
              </div>
              <div class="card">
                
                <img
                  alt="Integrations"
                  src={img5}
                />
                <h3>Integrations</h3>
                <p>
                  ServiceNow’s adaptability to link with other systems makes it
                  particularly useful. We help you drive business value by
                  integrating your ServiceNow instance with your preferred
                  setup.
                </p>
              </div>
              <div class="card">
                
                <img
                  alt="support"
                  src={img6}
                />
                <h3>Management and Administration</h3>
                <p>
                  Low on internal resources? Our engineers can act as an
                  extension to your team to maximize your return on investment.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="rtt-section">
          <div className="container text-btn">
            <h2 className="home-heading-two">Ready to Get Started?</h2>
            <a className="custo-btn" id="stylebtn">
              Let's Talk
            </a>
          </div>
        </section>

        <section class="offer-section nitro-offscreen">
          <div class="container">
            
            <div class="offer-title">
              
              <h2 class="home-heading-two">Service Now helps you</h2>
            </div>
            <div class="offer-cards">
              
              <div class="card">
                
                <img
                  alt="IT Experience"
                  src={img7}
                />
                <h3>Transform your IT experience</h3>
                <p>
                  Deliver omnichannel customer experiences by deploying purpose
                  built solutions to drive innovation.
                </p>
              </div>
              <div class="card">
                
                <img
                  alt="Check"
                  src={img8}
                />
                <h3>Respond faster to security risks &amp; threats</h3>
                <p>
                  Delivering security through compliance to Cybersecurity
                  standard.
                </p>
              </div>
              <div class="card">
                
                <img
                  alt="Check"
                  src={img9}
                />
                <h3>Improve Employee Experience</h3>
                <p>
                  By increasing employee engagement through specialized
                  services.
                </p>
              </div>
              <div class="card">
                
                <img
                  alt="Check"
                  src={img10}
                />
                <h3>Deliver Business Services effectively</h3>
                <p>
                  Using AIOps to drive performance and productivity through AI.
                </p>
              </div>
              <div class="card">
                
                <img
                  alt="Check"
                  src={img12}
                />
                <h3>Delight customers with end-to-end service</h3>
                <p>
                  Through the use of CSM module and making feedback a priority.
                </p>
              </div>
              <div class="card">
                
                <img
                  alt="Check"
                  src={img5}
                />
                <h3>Build seamlessly integrated Applications</h3>
                <p>
                  Empowering everyone to automate workflows and create ease.
                </p>
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

        <Footer />
      </div>
    </>
  );
}
