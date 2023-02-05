import React from "react";
import Footer from "./Footer";
import Header from "./header";

import service10 from "../assets/images/resource/service-10.png";
import qa_automation from "../assets/images/qa_testing_icon/qa-automation.svg";
import qa_manual_testing from "../assets/images/qa_testing_icon/qa-manual-testing.svg";
import qa_security_testing from "../assets/images/qa_testing_icon/qa-security-testing.svg";
import qa_smartphone from "../assets/images/qa_testing_icon/qa-smartphone.svg";
import qa_testing from "../assets/images/qa_testing_icon/qa-testing.svg";
import qa_01 from "../assets/images/qa_testing_icon/qa-01.svg";
import qa_02 from "../assets/images/qa_testing_icon/qa-02.svg";
import qa_03 from "../assets/images/qa_testing_icon/qa-03.svg";
import qa_04 from "../assets/images/qa_testing_icon/qa-04.svg";
import card_desktop from "../assets/images/qa_testing_icon/card-desktop.svg";
import card_phone from "../assets/images/qa_testing_icon/card-phone.svg";
import card_speed from "../assets/images/qa_testing_icon/card-speed.svg";
import card_web_services from "../assets/images/qa_testing_icon/card-web-services.svg";
import { Link } from "react-router-dom";

export default function QATestingServices() {
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
                    Quality Assurance And Testing Services
                  </p>
                  <h2>
                    Lets Make Your Product <br /> Robust And Reliable.
                  </h2>
                  <div class="text">
                    Improving quality of your software without affecting your
                    delivery timeframe.
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
              {/* <p>SERVICES</p> */}
              <h2 className="home-heading-two">Services We Offer</h2>
            </div>
            <div className="offer-cards">
              <div className="card">
                <img
                  alt="Test Automation"
                  id="NTIxOjEyMw==-1"
                  src={qa_automation}
                />
                <h3>Test Automation</h3>
                <p>
                  Smarter testing helps reduce time and improve productivity.
                </p>
              </div>
              <div className="card">
                <img
                  alt="Performance Testing"
                  id="NTI2OjEyNA==-1"
                  src={qa_testing}
                />
                <h3>Performance Testing</h3>
                <p>To guage how your software will perform under high loads</p>
              </div>
              <div className="card">
                <img
                  alt="Security Testing"
                  id="NTMxOjEzMA==-1"
                  src={qa_security_testing}
                />
                <h3>Security Testing</h3>
                <p>
                  Ensuring security of your data through strict cybersecurity
                  protocols.
                </p>
              </div>
              <div className="card">
                <img
                  alt="Mobile Testing"
                  id="NTM2OjEyMg==-1"
                  src={qa_smartphone}
                />
                <h3>Mobile Testing</h3>
                <p>Keeping responsiveness and speed at utmost priority.</p>
              </div>
              <div className="card">
                <img
                  alt="Manual Testing"
                  id="NTQxOjEyNg==-1"
                  src={qa_manual_testing}
                />
                <h3>Manual Testing</h3>
                <p>Our testing process is incomplete without a human touch.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section-2">
          <div className="auto-container">
            <div className="ms-service-title tech-title">
              {/* <p>OUR PROCESS</p> */}
              <h2 className="home-heading-two">
                Our Verification & Validation Process
              </h2>
            </div>

            <div className="qa-process">
              <div className="column-qa">
                <img
                  alt="01"
                  id="NTU1OjEwMg==-1"
                  src={qa_01}
                />
                <h3>Planning</h3>
                <p>
                  Defining the scope and activities for software testing which
                  acts as a basic for QA for any digital product.
                </p>
              </div>
              <div className="column-qa">
                <img
                  alt="02"
                  id="NTU1OjEwMg==-1"
                  src={qa_02}
                />
                <h3>Designing</h3>
                <p>
                  Identifying testing techniques and process to outline how
                  testing should be done.
                </p>
              </div>
              <div className="column-qa">
                <img
                  alt="03"
                  id="NTU1OjEwMg==-1"
                  src={qa_03}
                />
                <h3>Execution</h3>
                <p>
                  Executing the final code to compare how the actual results
                  fare in comparison to expectations.
                </p>
              </div>
              <div className="column-qa">
                <img
                  alt="04"
                  id="NTU1OjEwMg==-1"
                  src={qa_04}
                />
                <h3>Reporting</h3>
                <p>
                  Presenting a final test report which provides insights into
                  the quality of the code.
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

        <section className="brand-section-2">
          <div className="auto-container">
            <div className="ms-service-title tech-title">
              {/* <p>LATEST TECHNOLOGIES</p> */}
              <h2 className="home-heading-two">Domains And Technologies</h2>
            </div>
            <div className="qa-cards">
              <div className="card">
                <img
                  alt="Desktop Card"
                  id="NTkxOjEyMg==-1"
                  src={card_desktop}
                />
                <h3>Desktop</h3>
                <ul>
                  <li>VS coded UI test</li>
                  <li>HP UFT</li>
                  <li>Sikuli Script</li>
                  <li>Ranorex</li>
                </ul>
              </div>
              <div className="card">
                <img
                  alt="Speed Card"
                  id="NjAxOjExOA==-1"
                  src={card_speed}                
                />
                <h3>Performance</h3>
                <ul>
                  <li>Apache JMete</li>
                  <li>BlazeMeter</li>
                  <li>Gatling</li>
                  <li>Load Runner</li>
                </ul>
              </div>
              <div className="card">
                <img
                  alt="Mobile"
                  id="NjExOjExNA==-1"
                  src={card_phone}
                />
                <h3>DesktopMobile</h3>
                <ul>
                  <li>Appium</li>
                  <li>Robotium</li>
                  <li>Silk Test</li>
                </ul>
              </div>
              <div className="card">
                <img
                  alt="Web Services"
                  id="NjIwOjEyNw==-1"
                  src={card_web_services}
                />
                <h3>Web Services</h3>
                <ul>
                  <li>Selenium</li>
                  <li>Protractor</li>
                  <li>Serenity</li>
                  <li>Cypress.io</li>
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
        
        <Footer />
      </div>
    </>
  );
}
