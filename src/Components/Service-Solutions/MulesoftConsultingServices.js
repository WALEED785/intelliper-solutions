import React from "react";
import Footer from "../Footer";
import Header from "../header";

import service10 from "../../assets/images/resource/service-10.png";
import img1 from '../../assets/images/service_now_icons/consultation.svg'
import img2 from '../../assets/images/service_now_icons/support--icon.svg'
import img3 from '../../assets/images/service_now_icons/mob-app-dev--icon.svg'
import img4 from '../../assets/images/service_now_icons/embd-automation-services.svg'
import { Link } from "react-router-dom";

export default function MulesoftConsultingServices() {
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
                    Mulesoft
                  </p>
                  <h2>
                    Improve organization agility through Mulesoft Solutions
                  </h2>
                  <div class="text">
                    MuleSoft is the platform of choice for modern enterprises
                    who aim to deliver stellar digital experiences for their
                    stakeholders.
                  </div>
                  <a
                    href="#"
                    style={{ textDecoration: "none" }}
                    class="btn-style-one theme-btn"
                  >
                    Get a Proposal
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

        <section className="ms-service" style={{ padding: "70px 0px" }}>
          
          <div class="container">
            <div class="ms-service-title">
              
              <p>SERVICES</p>
              <h2 class="home-heading-two">
                Providing End To End MuleSoft Services
              </h2>
            </div>
            <div class="serv-row">
              
              <div class="ms-serv">
                <div class="ms-serv-img">
                  
                  <img
                    alt="consulting"
                    src={img1}
                  />
                </div>
                <div class="ms-serv-text">
                  
                  <h3>Consulting</h3>
                  <p>
                    If you're evaluating MuleSoft, our architects will assess
                    your application landscape and prepare a fully scoped and
                    budgeted solution architecture blueprint.
                  </p>
                </div>
              </div>
              <div class="ms-serv">
                
                <div class="ms-serv-img">
                  
                  <img
                    alt="App Delivery"
                    src={img3}
                  />
                </div>
                <div class="ms-serv-text">
                  
                  <h3>App-Delivery</h3>
                  <p>
                    Our hybrid and cost-effective onsite, onshore, and offshore
                    delivery model provides robust integration and API
                    development on the Anypoint platform ensuring effective API
                    reusability, governance, and visibility.
              </p>
            </div>
          </div>
              <div class="ms-serv">
                
                <div class="ms-serv-img">
                  
                  <img
                    alt="Application Support"
                    src={img2}
                  />
                </div>
                <div class="ms-serv-text">
                  
                  <h3>Application Support</h3>
                  <p>
                    We offer round-the-clock support services for monitoring
                    your integration architecture, applications, and fixing any
                    API problems before they start impacting your business.
                  </p>
                </div>
              </div>
              <div class="ms-serv">
                
                <div class="ms-serv-img">
                  
                  <img
                    alt="Managed Services"
                    src={img4}
                  />
                </div>
                <div class="ms-serv-text">
                  
                  <h3>Managed Services</h3>
                  <p>
                    Our tailored and scalable managed services offering can help
                    you achieve your business outcomes quicker whether you're
                    looking for helping hands in the middle of a transformation
                    overhaul or are just looking to accelerate project delivery.
                  </p>
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

        <Footer />
      </div>
    </>
  );
}
