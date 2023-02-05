import React from "react";
import Footer from "../Footer";
import Header from "../header";

import service10 from "../../assets/images/resource/service-10.png";
import consulting from "../../assets/images/IOT/ms-consulting--icon.svg";
import service_2 from "../../assets/images/IOT/iot-service-02.svg";
import service_3 from "../../assets/images/IOT/iot-service-03.svg";
import service_4 from "../../assets/images/IOT/iot-service-04.svg";
import retail from "../../assets/images/IOT/iot-retail.svg";
import agriculture from "../../assets/images/IOT/iot-agriculture.svg";
import automatives from "../../assets/images/IOT/iot-automatives.svg";
import aviation from "../../assets/images/IOT/iot-aviation.svg";
import health from "../../assets/images/IOT/iot-health-care.svg";
import smart from "../../assets/images/IOT/iot-smart-homes.svg";
import azure from "../../assets/images/IOT/iot-microsoft-azure--logo.svg";
import kafka from "../../assets/images/IOT/iot-kafka--logo.svg";
import hbase from "../../assets/images/IOT/iot-hbase--logo.svg";
import cloud from "../../assets/images/IOT/iot-google-cloud--logo.svg";
import cassandra from "../../assets/images/IOT/iot-cassandra--logo.svg";
import aws from "../../assets/images/IOT/iot-aws-2--logo.svg";
import aws1 from "../../assets/images/IOT/iot-aws1--logo.svg";
import AspNET from "../../assets/images/IOT/iot-AspNET--logo.svg";
import apache from "../../assets/images/IOT/iot-apache-spark--logo.svg";
import java from "../../assets/images/IOT/iot-java--logo.svg";
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

export default function IOTServices() {
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
                    Internet of things
                  </p>
                  <h2>Your IoT Partner From Idea, To Solution & Beyond</h2>
                  <div class="text">
                    We work with you to provide complete IoT development,
                    deployment and management.
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

        <section style={{ padding: "60px 0px" }}>
          <div class="container ms-service">
            <div class="ms-service-title">
              <h2 class="home-heading-two">What Our IoT Experts Offer</h2>
            </div>
            <div class="serv-row">
              <div class="ms-serv">
                <div class="ms-serv-img">
                  <img alt="IOT Consultancy" src={consulting} />
                </div>
                <div class="ms-serv-text">
                  <h3>IOT Consultancy</h3>
                  <p>
                    Our consultants devise strategies that align with all your
                    tech needs whether you have just one part of an IoT puzzle
                    missing or require a full-scale solution.
                  </p>
                </div>
              </div>
              <div class="ms-serv">
                <div class="ms-serv-img">
                  <img alt="App Development" src={service_2} />
                </div>
                <div class="ms-serv-text">
                  <h3>App Development</h3>
                  <p>
                    Customized mobile and web apps that harness the power of
                    connected devices to empower enterprises with
                    next-generation IoT products.
                  </p>
                </div>
              </div>
              <div class="ms-serv">
                <div class="ms-serv-img">
                  <img alt="Extension into IoT" src={service_3} />
                </div>
                <div class="ms-serv-text">
                  <h3>Extension into IoT</h3>
                  <p>
                    We extend existing enterprise and consumer solutions into
                    IoT, turning connected distributed devices and gadgets into
                    valuable assets.
                  </p>
                </div>
              </div>
              <div class="ms-serv">
                <div class="ms-serv-img">
                  <img alt="System Integration" src={service_4} />
                </div>
                <div class="ms-serv-text">
                  <h3>System Integration</h3>
                  <p>
                    Our backend integrations allow apps to keep track of and
                    communicate with devices via industry-standard protocols.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="custom-iot nitro-offscreen">
          <div class="container">
            <div class="ms-service-title">
              <h2 class="home-heading-two">
                We develop custom IoT solutions for clients from various
                industry verticals
              </h2>
            </div>
            <div class="iot-cards">
              <div class="iot-column">
                <div class="iot-card">
                  <img alt="AVIATION" src={aviation} />
                  <p>AVIATION</p>
                </div>
              </div>
              <div class="iot-column">
                <div class="iot-card">
                  <img alt="AGRICULTURE" src={agriculture} />
                  <p>AGRICULTURE</p>
                </div>
                <div class="iot-card">
                  <img alt="SMART HOMES" src={smart} />
                  <p>SMART HOMES</p>
                </div>
              </div>
              <div class="iot-column">
                <div class="iot-card round">
                  <p>Internet Of Things</p>
                </div>
              </div>
              <div class="iot-column">
                <div class="iot-card">
                  <img alt="HEALTH CARE" src={health} />
                  <p>HEALTH CARE</p>
                </div>
                <div class="iot-card">
                  <img alt="AUTOMATIVES" src={automatives} />
                  <p>AUTOMATIVES</p>
                </div>
              </div>
              <div class="iot-column">
                <div class="iot-card">
                  <img alt="RETAIL" src={retail} />
                  <p>RETAIL</p>
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

        <section class="iot-features nitro-offscreen">
          <div class="container">
            <div class="ms-service-title">
              <h2 class="home-heading-two">
                We use latest tech stacks to build IoT enabled future
              </h2>
            </div>
            <div class="iot-features-img">
              <img
                alt="cassandra"
                src={cassandra}
              />
              <img
                alt="apache-spark"
                src={apache}
              />
              <img
                alt="AspNET"
                src={AspNET}
              />
              <img
                alt="hbase"
                src={hbase}
              />
              <img
                alt="kafka"
                src={kafka}
              />
              <img
                alt="java"
                src={java}
              />
              <img
                alt="aws"
                src={aws}
              />
              <img
                alt="microsoft-azure"
                src={azure}
              />
              <img
                alt="google-cloud"
                src={cloud}
              />
              <img
                alt="aws1"
                src={aws1}
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
