import React from "react";
import Footer from "./Footer";
import Header from "./header";

import service10 from "../assets/images/resource/service-10.png";
import design1 from "../assets/images/resource/design-1.png";
import design2 from "../assets/images/resource/design-2.png";
import { Link } from "react-router-dom";
import icon1 from "../assets/images/icon_2/strategy.svg";
import icon2 from "../assets/images/icon_2/architecture.svg";
import icon3 from "../assets/images/icon_2/design.svg";
import icon4 from "../assets/images/icon_2/development.svg";
import icon5 from "../assets/images/icon_2/testing.svg";
import icon6 from "../assets/images/icon_2/release.svg";
import icon7 from "../assets/images/icon_2/support.svg";
import smbs from "../assets/images/icon_2/smbs.svg";
import enterprises from "../assets/images/icon_2/enterprises.svg";
import startups from "../assets/images/icon_2/startups.svg";
import angular from "../assets/images/icon_2/angular.svg";
import c from "../assets/images/icon_2/c.svg";
import html5 from "../assets/images/icon_2/html5.svg";
import mob_ar_vr from "../assets/images/icon_2/mob-ar-vr.svg";
import mob_geo_tracking from "../assets/images/icon_2/mob-geo-tracking.svg";
import mob_iot from "../assets/images/icon_2/mob-iot.svg";
import mob_wearables from "../assets/images/icon_2/mob-wearables.svg";
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
import circlepod from "../assets/images/case-study/circlepod.png";
import hardassetsalliance from "../assets/images/case-study/hardassetsalliance.png";
import predictionstrike from "../assets/images/case-study/predictionstrike.png";

export default function CustomeSoftware() {
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
                    Custom Software Development
                  </p>
                  <h2>
                    Website Design & <br /> Build Experts
                  </h2>
                  <div class="text">
                    We are Australia highest rated Search Marketing, Creative IT
                    agency on australia in 2021.
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
        <section class="designing-section">
          <div class="auto-container">
            <div class="design-block style-one">
              <div class="row clearfix">
                <div class="image-column col-lg-6 col-md-12 col-sm-12">
                  <div class="inner-column">
                    <div class="image titlt" data-tilt data-tilt-max="4">
                      <img src={design1} alt="" />
                    </div>
                  </div>
                </div>

                <div class="content-column col-lg-6 col-md-12 col-sm-12">
                  <div class="inner-column">
                    <h3>Website Design</h3>
                    <div class="text">
                      <p>
                        Lorem Ipsum generators on the Internet tend to repeat
                        predefined chunks as necessary, making this the first
                        true generator on the Internet.{" "}
                      </p>
                      <p>
                        It uses a dictionary of over 200 Latin words, combined
                        with a handful of model sentence structures, to generate
                        there are many variations of passages{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="design-block">
              <div class="row clearfix">
                <div class="content-column col-lg-6 col-md-12 col-sm-12">
                  <div class="inner-column">
                    <h3>Website Development</h3>
                    <div class="text">
                      <p>
                        Lorem Ipsum generators on the Internet tend to repeat
                        predefined chunks as necessary, making this the first
                        true generator on the Internet.{" "}
                      </p>
                      <p>
                        It uses a dictionary of over 200 Latin words, combined
                        with a handful of model sentence structures, to generate
                        there are many variations of passages{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div class="image-column col-lg-6 col-md-12 col-sm-12">
                  <div class="inner-column">
                    <div class="image titlt" data-tilt data-tilt-max="4">
                      <img src={design2} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section-2">
          <div className="auto-container">
            <div className="sec-title">
              <h2>End to End Software Development Methodologies</h2>
            </div>
            <div className="fp-lists">
              <div className="fp-column">
                <div className="column-steps">
                  <div className="fp-step">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="29"
                      height="28"
                      viewBox="0 0 29 28"
                      fill="none"
                      webcrx=""
                    >
                      <path
                        d="M23.3963 24.5287L24.6934 23.2321L22.8204 21.3586L21.5234 22.6553L23.3963 24.5287Z"
                        fill="url(#paint0_linear)"
                      />
                      <path
                        d="M4.88876 24.5316L6.76172 22.6582L5.46469 21.3615L3.59173 23.235L4.88876 24.5316Z"
                        fill="url(#paint1_linear)"
                      />
                      <path
                        d="M14.111 7.1327C10.3206 7.1327 7.26389 10.2302 7.26389 13.9798C7.26389 16.7104 8.89414 19.1966 11.3803 20.2562L11.7471 20.4193L11.7471 26.981C11.7471 27.5516 12.1954 27.9999 12.766 27.9999L15.4559 27.9999C16.0265 27.9999 16.4748 27.5516 16.4748 26.981L16.4748 20.4193L16.8416 20.2562C19.3278 19.1558 20.958 16.7104 20.958 13.9798C20.958 10.1894 17.9013 7.1327 14.111 7.1327Z"
                        fill="url(#paint2_linear)"
                      />
                      <path
                        d="M22.8182 6.59777L24.6914 4.72455L23.3946 3.4277L21.5213 5.30092L22.8182 6.59777Z"
                        fill="url(#paint3_linear)"
                      />
                      <path
                        d="M25.4827 14.9171L28.1318 14.9171L28.1318 13.0831L25.4827 13.0831L25.4827 14.9171Z"
                        fill="url(#paint4_linear)"
                      />
                      <path
                        d="M13.2158 2.64955L15.0498 2.64955L15.0498 0.00039196L13.2158 0.0003918L13.2158 2.64955Z"
                        fill="url(#paint5_linear)"
                      />
                      <path
                        d="M5.46194 6.60036L6.75879 5.30351L4.88557 3.43029L3.58872 4.72714L5.46194 6.60036Z"
                        fill="url(#paint6_linear)"
                      />
                      <path
                        d="M0.131114 14.9172L2.78027 14.9172L2.78027 13.0832L0.131114 13.0832L0.131114 14.9172Z"
                        fill="url(#paint7_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="24.4154"
                          y1="23.5099"
                          x2="22.0983"
                          y2="22.8138"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#263465" />
                          <stop offset="1" stop-color="#2D318E" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear"
                          x1="6.36037"
                          y1="23.0596"
                          x2="4.77389"
                          y2="22.124"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#263465" />
                          <stop offset="1" stop-color="#2D318E" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear"
                          x1="18.0236"
                          y1="27.9999"
                          x2="8.7321"
                          y2="11.6329"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#263465" />
                          <stop offset="1" stop-color="#2D318E" />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear"
                          x1="24.29"
                          y1="5.12595"
                          x2="22.7037"
                          y2="4.19012"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#263465" />
                          <stop offset="1" stop-color="#2D318E" />
                        </linearGradient>
                        <linearGradient
                          id="paint4_linear"
                          x1="27.5642"
                          y1="14.9171"
                          x2="27.1042"
                          y2="13.1337"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#263465" />
                          <stop offset="1" stop-color="#2D318E" />
                        </linearGradient>
                        <linearGradient
                          id="paint5_linear"
                          x1="14.6568"
                          y1="2.64955"
                          x2="13.5103"
                          y2="0.519026"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#263465" />
                          <stop offset="1" stop-color="#2D318E" />
                        </linearGradient>
                        <linearGradient
                          id="paint6_linear"
                          x1="6.48089"
                          y1="5.58141"
                          x2="4.16372"
                          y2="4.8856"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#263465" />
                          <stop offset="1" stop-color="#2D318E" />
                        </linearGradient>
                        <linearGradient
                          id="paint7_linear"
                          x1="2.2126"
                          y1="14.9172"
                          x2="1.75261"
                          y2="13.1337"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#263465" />
                          <stop offset="1" stop-color="#2D318E" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <p>IDEATION</p>
                  </div>
                  <div className="fp-step">
                    <img alt="STRATEGY" id="NTY0OjQy-1" src={icon1} />
                    <p>STRATEGY</p>
                  </div>
                  <div className="fp-step last">
                    <img alt="ARCHITECTURE" id="NTY5OjQ2-1" src={icon2} />
                    <p>ARCHITECTURE</p>
                  </div>
                </div>
                <div className="column-list">
                  <h3>Requirements Gathering</h3>
                  <ul>
                    <li>Work Breakdown Structure</li>
                    <li>Project Plan</li>
                    <li>Project Budget</li>
                    <li>Requirements Docs</li>
                    <li>Use Cases</li>
                    <li>User Stories</li>
                  </ul>
                </div>
              </div>
              <div className="fp-column">
                <div className="column-steps">
                  <div className="fp-step">
                    <img alt="DESIGN" id="NTg4OjEyNA==-1" src={icon3} />
                    <p>DESIGN</p>
                  </div>
                  <div className="fp-step">
                    <img alt="DEVELOPMENT" id="NTkzOjQ1-1" src={icon4} />
                    <p>DEVELOPMENT</p>
                  </div>
                  <div className="fp-step last">
                    <img alt="TESTING" id="NTk4OjQx-1" src={icon5} />
                    <p>TESTING</p>
                  </div>
                </div>
                <div className="column-list">
                  <h3>Design & Development</h3>
                  <ul>
                    <li>Low-Fi Design</li>
                    <li>Hi-FI Design</li>
                    <li>User Experience Design</li>
                    <li>Source Code</li>
                    <li>Compiled Code</li>
                    <li>Code Documentation</li>
                  </ul>
                </div>
              </div>
              <div className="fp-column">
                <div className="column-steps">
                  <div className="fp-step">
                    <img alt="RELEASE" id="NjE3OjEyNQ==-1" src={icon6} />
                    <p>RELEASE</p>
                  </div>
                  <div className="fp-step">
                    <img alt="Support" id="NjIyOjQx-1" src={icon7} />
                    <p>Support</p>
                  </div>
                </div>
                <div className="column-list">
                  <h3>Delivery & Support</h3>
                  <ul>
                    <li>Release Management</li>
                    <li>Change Management</li>
                    <li>User Docs and Training</li>
                    <li>Scheduled Maintenance</li>
                    <li>Adaptive Maintenance</li>
                    <li>Software Roadmap</li>
                  </ul>
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

        <section className="services-section-2">
          <div className="auto-container">
            <div className="sec-title">
              <h2>We Are Trusted by Every Business</h2>
            </div>
            <div className="row clearfix">
              <div className="service-block col-lg-4 col-md-6 col-sm-12">
                <div
                  class="column-2"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <img alt="Startups" id="NjU3OjM0-1" src={startups} />
                  <h3>Startups</h3>
                  <ul className="bullets-light">
                    <li>MVP for quick launch to market</li>
                    <li>Fixed price estimates for clear budgeting</li>
                    <li>Agile practices to accelerate project delivery</li>
                  </ul>
                </div>
              </div>
              <div className="service-block col-lg-4 col-md-6 col-sm-12">
                <div
                  class="column-2"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <img alt="SMBs" id="NjY2OjEyMA==-1" src={smbs} />
                  <h3>SMBs</h3>
                  <ul className="bullets-light">
                    <li>Flexible engagement models</li>
                    <li>In-depth domain expertise & industry knowledg</li>
                    <li>Tried-and-tested environment optimization methods</li>
                  </ul>
                </div>
              </div>
              <div className="service-block col-lg-4 col-md-6 col-sm-12">
                <div
                  class="column-2"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <img alt="Enterprises" id="Njc2OjM3-1" src={enterprises} />
                  <h3>Enterprises</h3>
                  <ul className="bullets-light">
                    <li>Consultancy to chalk out a future roadmap</li>
                    <li>Compliance with industry standards and regulations</li>
                    <li>Leverage emerging technologies</li>
                  </ul>
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
            <div className="btn-wrap">
              <Link
                to="/contact"
                style={{ textDecoration: "none" }}
                className="btn-style-one theme-btn"
              >
                <span className="txt">
                  <i className="flaticon-padlock"></i>Book a Call
                </span>
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
