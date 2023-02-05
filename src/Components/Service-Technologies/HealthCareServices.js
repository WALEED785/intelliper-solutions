import React from "react";
import Footer from "../Footer";
import Header from "../header";

import service10 from "../../assets/images/resource/service-10.png";
import time from '../../assets/images/healthcare/da-save-time--icon.svg'
import data from '../../assets/images/healthcare/da-more-data--icon.svg'
import care from '../../assets/images/healthcare/da-patient-care--icon.svg'
import protection from '../../assets/images/healthcare/da-data-protection--icon.svg'
import big from '../../assets/images/healthcare/hc-big-data--icon.svg'
import blockchain from '../../assets/images/healthcare/hc-blockchain--icon.svg'
import vision from '../../assets/images/healthcare/hc-comp-vision--icon.svg'
import ml from '../../assets/images/healthcare/hc-ml--icon.svg'
import iot from '../../assets/images/healthcare/hc-iot--icon.svg'
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
export default function HealthCareServices() {
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
                    Healthcare
                  </p>
                  <h2>Better Health Through Technology</h2>
                  <div class="text">
                    We help our clients deliver better patient care through
                    smart & innovative software offerings.
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

        <section class="stat-section health">
          <div class="container">
            <div class="stat-title">
              <h2 class="home-heading-two">We will Help You</h2>
            </div>
            <div class="stat-wrapper">
              <div class="stat-row">
                <div class="stat-card c1">
                  <img
                    src={care}
                    alt="Improve patient care"
                  />
                  <h2 class="head">Improve patient care</h2>
                  <p>
                    We help you deliver solutions to enable ease of access to
                    medical information for your patients.
                  </p>
                </div>
                <div class="stat-card c2">
                  <img
                    src={data}
                    alt="more data"
                  />
                  <h2 class="head">Get more out of your data</h2>
                  <p>
                    We set up robust analytics models to help you extract
                    information that could be life saving.
                  </p>
                </div>
              </div>
              <div class="stat-row">
                <div class="stat-card c3">
                  <img
                    src={time}
                    alt="save-time"
                  />
                  <h2 class="head">Save time and resources</h2>
                  <p>
                    We help you automate processes so your resources can be
                    focused on more business oriented goals.
                  </p>
                </div>
                <div class="stat-card c4">
                  <img
                    src={protection}
                    alt="data protection"
                  />
                  <h2 class="head">Ensure Data Security</h2>
                  <p>
                    We use secure technologies such as blockchain to keep your
                    and your patients’ data secure and breach free.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="robenifit-section">
          <div class="container">
            <div class="robotrules-title">
              <h2 class="home-heading-two">Technologies We Work with</h2>
            </div>
            <div class="robenifit-wrap hc-wrap">
              <div class="robenifit-card">
                <img
                  src={iot}
                  alt="IoT"
                />
                <h4>Internet of Things</h4>
              </div>
              <div class="robenifit-card">
                <img
                  src={ml}
                  alt="Machine Learning"
                />
                <h4>Machine Learning</h4>
              </div>
              <div class="robenifit-card">
                <img
                  src={vision}
                  alt="Computer Vision"
                />
                <h4>Computer Vision</h4>
              </div>
              <div class="robenifit-card">
                <img
                  src={blockchain}
                  alt="Blockchain"
                />
                <h4>Blockchain</h4>
              </div>
              <div class="robenifit-card">
                <img
                  src={big}
                  alt="Big Data"
                />
                <h4>Big Data &amp; Analytics</h4>
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
