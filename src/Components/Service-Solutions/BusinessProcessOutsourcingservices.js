import React from "react";
import Footer from "../Footer";
import Header from "../header";

import service10 from "../../assets/images/resource/service-10.png";
import img1 from "../../assets/images/BPO/service-improve-productivity.svg";
import img2 from "../../assets/images/BPO/service-reduce-costs.svg";
import img3 from "../../assets/images/BPO/service-gain-customers.svg";
import img4 from "../../assets/images/BPO/service-cater-to-changing.svg";
import img5 from "../../assets/images/BPO/service-focus-core-business.svg";
import Tech_Support from "../../assets/images/BPO/bpo-tech-support.svg";
import Tech_Solution from "../../assets/images/BPO/bpo-tech-solutions.svg";
import Form_Processing from "../../assets/images/BPO/bpo-form-processing.svg";
import telemarketing from "../../assets/images/BPO/bpo-telemarketing.svg";
import helpdesk from "../../assets/images/BPO/bpo-it-helpdesk.svg";
import image_processing from "../../assets/images/BPO/bpo-image-processing.svg";
import data_entry from "../../assets/images/BPO/bpo-data-entry.svg";
import what_we_offer from "../../assets/images/BPO/Group 1.png";
import dashed_arrow from "../../assets/images/BPO/dashed-arrow.svg";
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
export default function BusinessProcessOutsourcingservices() {
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
                    BPO
                  </p>
                  <h2>Excellence in Customer Care, Delivered</h2>
                  <div class="text">
                    Focus on growing your business, while we handle your core
                    processes
                  </div>
                  <Link
                    to='/contact'
                    style={{ textDecoration: "none" }}
                    class="btn-style-one theme-btn"
                  >
                    Get a Proposal
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

        <section class="service-section">
          &gt;
          <div class="container">
            <div class="offer-title">
              <h2 class="home-heading-two">We can help you</h2>
            </div>
            <div class="offer-cards">
              <div class="card">
                <img alt="improve productivity" src={img1} />
                <h3>Improve Productivity</h3>
                <p>
                  Our team will help you cut down processing times and increase
                  efficiency, while adhering to your values.
                </p>
              </div>
              <div class="card">
                <img alt="Reduce Costs" src={img2} />
                <h3>Reduce Costs</h3>
                <p>
                  By removing the hassle of hiring and managing your own inhouse
                  teams, costs are significantly lowered.
                </p>
              </div>
              <div class="card">
                <img alt="Gain Customer Satisfaction" src={img3} />
                <h3>Gain Customer Satisfaction</h3>
                <p>
                  Our staff is highly trained to handle even the toughest
                  escalations and keep your customers happy.
                </p>
              </div>
              <div class="card">
                <img alt="Cater to Changing Demands" src={img4} />
                <h3>Cater to Changing Demands</h3>
                <p>
                  We offer flexible BPO engagement allowing you to get the
                  services you need whenever you need them.
                </p>
              </div>
              <div class="card">
                <img alt="Core Business Activities" src={img5} />
                <h3>Focus on Core Business Activities</h3>
                <p>
                  We help you focus on core business processes by taking care of
                  non essential tasks for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="experties nitro-offscreen">
          <div class="container">
            <div class="exprt-title">
              <h2 class="home-heading-two">Services We Offer</h2>
            </div>
            <div class="exprt-row">
              <div class="exprt-column">
                <div class="card c-typ3">
                  <div class="card-title">
                    <img
                      alt="Tech Support"
                      src={Tech_Support}
                    />
                    <h4>Tech Support</h4>
                  </div>
                  <p>
                    Efficient and quick solutions for your customer’s technical
                    conundrums.
                  </p>
                </div>
              </div>
            </div>
            <div class="exprt-row m-center">
              <div class="exprt-column">
                <div class="card c-typ1">
                  <div class="card-title">
                    <img
                      alt="Tech Solutions"
                      src={Tech_Solution}
                    />
                    <h4>Tech Solutions</h4>
                  </div>
                  <p>
                    Specialized software development to improve efficiency of
                    workflows.
                  </p>
                </div>
                <div class="card c-typ1">
                  <div class="card-title">
                    <img
                      alt="Form Processing"
                      src={Form_Processing}
                    />
                    <h4>Form Processing</h4>
                  </div>
                  <p>
                    Including customer surveys, requests, complaints, and
                    others.
                  </p>
                </div>
              </div>
              <div class="exprt-column">
                <div class="c-type-img">
                  <img
                    alt="what we offer"
                    src={what_we_offer}
                  />
                </div>
              </div>
              <div class="exprt-column">
                <div class="card c-typ2">
                  <div class="card-title">
                    <img
                      alt="Telemarketing"
                      src={telemarketing}
                    />
                    <h4>Telemarketing</h4>
                  </div>
                  <p>Inbound and outbound to suit your prospecting demands.</p>
                </div>
                <div class="card c-typ2">
                  <div class="card-title">
                    <img
                      alt="IT HelpDesk"
                      src={helpdesk}
                    />
                    <h4>IT HelpDesk</h4>
                  </div>
                  <p>
                    Addressing customer queries and enhancing their experience.
                  </p>
                </div>
              </div>
            </div>
            <div class="exprt-row">
              <div class="exprt-column">
                <div class="card c-typ1">
                  <div class="card-title">
                    <img
                      alt="Image Processing"
                      src={image_processing}
                    />
                    <h4>Image Processing</h4>
                  </div>
                  <p>
                    Manual and custom software options for real time processing.
                  </p>
                </div>
              </div>
              <div class="exprt-column">
                <div class="card c-typ2">
                  <div class="card-title">
                    <img
                      alt="Data Entry"
                      src={data_entry}
                    />
                    <h4>Data Entry</h4>
                  </div>
                  <p>
                    Storing and Managing data and in secure states for later
                    processing.
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
        <section class="nitro-offscreen">
          <div class="container bpo-proc">
            <div class="bpo-title">
              <h2 class="home-heading-two">Our BPO Process</h2>
            </div>
            <div class="bpo-steps">
              <div class="bpo-step">
                <div class="bpo-prog">
                  <span>1</span>
                  <img
                    alt="ARROW"
                    src={dashed_arrow}
                  />
                </div>
                <h4>Requirement Gathering</h4>
              </div>
              <div class="bpo-step">
                <div class="bpo-prog">
                  <span>2</span>
                  <img
                    alt="ARROW"
                    src={dashed_arrow}
                  />
                </div>
                <h4>Team Selection</h4>
              </div>
              <div class="bpo-step">
                <div class="bpo-prog">
                  <span>3</span>
                  <img
                    alt="Team Training"
                    src={dashed_arrow}
                  />
                </div>
                <h4>Team Training</h4>
              </div>
              <div class="bpo-step">
                <div class="bpo-prog">
                  <span>4</span>
                  <img
                    alt="Execution"
                    src={dashed_arrow}
                  />
                </div>
                <h4>Execution</h4>
              </div>
              <div class="bpo-step">
                <div class="bpo-prog">
                  <span>5</span>
                  <img
                    alt="Reporting"
                    src={dashed_arrow}
                  />
                </div>
                <h4>Reporting</h4>
              </div>
              <div class="bpo-step">
                <div class="bpo-prog">
                  <span>6</span>
                </div>
                <h4>Improvement &amp; Scaling</h4>
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
