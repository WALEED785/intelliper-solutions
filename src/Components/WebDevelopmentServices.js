import React from "react";
import Footer from "./Footer";
import Header from "./header";

import service10 from "../assets/images/resource/service-10.png";
import angular from "../assets/images/icon_2/angular.svg";
import c from "../assets/images/icon_2/c.svg";
import html5 from "../assets/images/icon_2/html5.svg";
import experience_design from "../assets/images/icon_2/experience-design.svg";
import full_stack from "../assets/images/icon_2/full-stack.svg";
import backend_dev from "../assets/images/icon_2/backend-dev.svg";
import qa_testing from "../assets/images/icon_2/qa-testing.svg";
import support_icon from "../assets/images/icon_2/support--icon.svg";
import app_dev from "../assets/images/icon_2/app-dev.svg";
import mongodb from "../assets/images/icon_2/mongodb.svg";
import mysql from "../assets/images/icon_2/mysql.svg";
import nodejs from "../assets/images/icon_2/nodejs.svg";
import oracle from "../assets/images/icon_2/oracle.svg";
import php from "../assets/images/icon_2/php.svg";
import python from "../assets/images/icon_2/python.svg";
import react from "../assets/images/icon_2/react.svg";
import ror from "../assets/images/icon_2/ror.svg";
import sql_server from "../assets/images/icon_2/sql-server.svg";
import wordpress from "../assets/images/icon_2/wordpress.svg";
import java from "../assets/images/icon_2/java.svg";
import cassandra from "../assets/images/icon_2/cassandra.svg";
import fitr from "../assets/images/case-study/fitr-training.png";
import circlepod from "../assets/images/case-study/circlepod.png";
import coachr from "../assets/images/case-study/coachr.png";
import hardassetsalliance from "../assets/images/case-study/hardassetsalliance.png";
import proctorgallagher from "../assets/images/case-study/proctorgallagher_2.png";
import taskrabbit from "../assets/images/case-study/taskrabbit.png";
import wayfair from "../assets/images/case-study/wayfair.png";
import distropro from "../assets/images/case-study/distropro.png";
import predictionstrike from "../assets/images/case-study/predictionstrike.png";
import { Link } from "react-router-dom";
export default function WebDevelopmentService() {
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
                    Web App Development
                  </p>
                  <h2>
                    We Create Progress by <br /> Building Web Experiences
                  </h2>
                  <div class="text">
                    We believe in building interactive web applications, To
                    create experiences beyond our clients’ expectations.
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
                <h3>Frontend Development</h3>
                <p>
                  With our extensive expertise in UI/UX design and front-end
                  development, we build web applications with delightful user
                  experiences.
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
            <h2 className="home-heading-two">Ready to Get Started?</h2>
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
        <section className="brand-section-2">
          <div className="auto-container">
            <div className="ms-service-title tech-title">
              <p>TECHNICAL EXPERTISE</p>
              <h2 className="home-heading-two">
                Tech Stacks For Effective & Up-To-Date Web Apps
              </h2>
            </div>
            <div className="tech-web-app">
              <ul className="web-apps--logo">
                <li>
                  <img
                    alt="nodejs"
                    id="Njk3OjM2-1"
                    src={nodejs}
                  />
                </li>
                <li>
                  <img
                    alt="python"
                    id="Njk5OjM2-1"
                    src={python}
                  />
                </li>
                <li>
                  <img
                    alt="sql server"
                    id="NzAxOjQw-1"
                    src={sql_server}
                  />
                </li>
                <li>
                  <img
                    alt="php"
                    id="NzAyOjEyMg==-1"
                    src={php}
                  />
                </li>
                <li>
                  <img
                    alt="react"
                    id="NzA0OjEyNg==-1"
                    src={react}
                  />
                </li>
                <li>
                  <img
                    alt="mongodb"
                    id="NzA3OjM3-1"
                    src={mongodb}
                  />
                </li>
                <li>
                  <img
                    alt="mysql"
                    id="NzA4OjEyNg==-1"
                    src={mysql}
                  />
                </li>
                <li>
                  <img
                    alt="ruby on rails"
                    id="NzExOjQz-1"
                    src={ror}
                  />
                </li>
                <li>
                  <img
                    alt="oracle"
                    id="NzEzOjM2-1"
                    src={oracle}
                  />
                </li>
                <li>
                  <img
                    alt="html5"
                    id="NzE0OjEyNg==-1"
                    src={html5}
                  />
                </li>
                <li>
                  <img
                    alt="java"
                    id="NzE2OjEyNA==-1"
                    src={java}
                  />
                </li>
                <li>
                  <img
                    alt="angular"
                    id="NzE5OjM3-1"
                    src={angular}
                  />
                </li>
                <li>
                  <img
                    alt="cassandra"
                    id="NzIxOjM5-1"
                    src={cassandra}
                  />
                </li>
                <li>
                  <img
                    alt="Wordpress"
                    id="NzIzOjM5-1"
                    src={wordpress}
                  />
                </li>
                <li>
                  <img
                    alt="c icon"
                    id="NzI0OjEyMw==-1"
                    src={c}
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>

        
      
        <Footer />
      </div>
    </>
  );
}
