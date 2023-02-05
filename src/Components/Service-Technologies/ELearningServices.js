import React from "react";
import Footer from "../Footer";
import Header from "../header";

import service10 from "../../assets/images/resource/service-10.png";
import gamification from "../../assets/images/E-Learning/el-gamification--icon.svg";
import uf from "../../assets/images/E-Learning/el-uf--icon.svg";
import cp from "../../assets/images/E-Learning/el-native-cp--icon.svg";
import integrate from "../../assets/images/E-Learning/el-custom-integrate--icon.svg";
import redesign from "../../assets/images/E-Learning/el-redesign--icon.svg";
import elearning from "../../assets/images/E-Learning/el-elearning--icon.svg";
import ror from "../../assets/images/E-Learning/el-ror--logo.svg";
import cs from "../../assets/images/E-Learning/el-cs--logo.svg";
import Frame from "../../assets/images/E-Learning/el-Frame.svg";
import angular from "../../assets/images/E-Learning/el-angular--logo.svg";
import android from "../../assets/images/E-Learning/el-android-logomark.svg";
import apple from "../../assets/images/E-Learning/el-apple-logo.svg";
import html5 from "../../assets/images/E-Learning/el-html5--logo.svg";
import java from "../../assets/images/E-Learning/el-java-4.svg";
import react from "../../assets/images/E-Learning/el-react--logo.svg";
import swift from "../../assets/images/E-Learning/el-swift-logomark.svg";
import img from "../../assets/images/E-Learning/img.png";
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


export default function ELearningServices() {
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
                    E Learning
                  </p>
                  <h2>Helping Deliver Education Beyond Boundaries</h2>
                  <div class="text">
                    We help our clients revolutionize education through modern
                    technologies by delivering robust and secure E-Learning
                    platforms.
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

        <section>
          <div class="container">
            <div class="robot1">
              <div class="robot-text">
                <p class="robot-subtext">WHY US?</p>
                <h2 class="home-heading-two heading-read">Delivering Impact</h2>
                <p>
                  intelliper solution's has been developing and upgrading
                  eLearning solutions for over a decade and has delivered tens
                  of LMS projects to education sector, corporate sector and non
                  profit sector.
                </p>
              </div>
              <div class="robot-img el">
                <img
                  src={img}
                  alt="el-us"
                />
              </div>
            </div>
          </div>
        </section>

        <section class="offer-section">
          <div class="container">
            <div class="offer-title">
              <h2 class="home-heading-two">We Can Help You In</h2>
            </div>
            <div class="offer-cards">
              <div class="card">
                <img
                  src={gamification}
                  alt="gamification"
                />
                <h3>Gamification of E-Learning Platform</h3>
              </div>
              <div class="card">
                <img
                  src={cp}
                  alt="el-native"
                />
                <h3>Native &amp; Cross-Platform Solutions</h3>
              </div>
              <div class="card">
                <img
                  src={redesign}
                  alt="el-redesign"
                />
                <h3>Re-designing of Existing Product</h3>
              </div>
              <div class="card">
                <img
                  src={uf}
                  alt="el-uf"
                />
                <h3>Immersive &amp; User Friendly Designs</h3>
              </div>
              <div class="card">
                <img
                  src={integrate}
                  alt="el-custom-integrate"
                />
                <h3>Easy Customization &amp; Integration Processes</h3>
              </div>
              <div class="card">
                <img
                  src={elearning}
                  alt="el-elearning"
                />
                <h3>Transfer of E-Learning Applications to Mobile Platforms</h3>
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

        <section class="iot-features el">
          <div class="container">
            <div class="ms-service-title">
              <h2 class="home-heading-two">Tech Stacks</h2>
            </div>
            <div class="iot-features-img">
              <img
                src={apple}
                alt="apple"
              />
              <img
                src={swift}
                alt="logomark"
              />
              <img
                src={react}
                alt="react"
              />
              <img
                src={java}
                alt="java"
              />
              <img
                src={html5}
                alt="html5"
              />
              <img
                src={android}
                alt="android-logomark"
              />
              <img
                src={angular}
                alt="angular"
              />
              <img
                src={Frame}
                alt="Frame"
              />
              <img
                src={cs}
                alt="cs"
              />
              <img
                src={ror}
                alt="ror"
              />
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
