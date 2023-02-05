import React from "react";
import Footer from "../Footer";
import Header from "../header";

import service10 from "../../assets/images/resource/service-10.png";
import rpa_img from '../../assets/images/robotics/rpa-img.webp'
import robot_function from '../../assets/images/robotics/robot-function.svg'
import robot_included from '../../assets/images/robotics/robot-included.svg'
import resolution from '../../assets/images/robotics/robot-resolution.svg'
import idea from '../../assets/images/robotics/robot-idea.svg'
import agile from '../../assets/images/robotics/robot-agile.svg'
import time from '../../assets/images/robotics/robot-time.svg'
import estate from '../../assets/images/robotics/rbt-real-estate.svg'
import healthcare from '../../assets/images/robotics/rbt-healthcare.svg'
import building from '../../assets/images/robotics/rbt-government-building.svg'
import bank from '../../assets/images/robotics/rbt-bank.svg'
import video from '../../assets/images/robotics/rbt-video.svg'
import insurance from '../../assets/images/robotics/insurance.svg'
import retail from '../../assets/images/robotics/rbt-retail.svg'
import chain from '../../assets/images/robotics/rbbt-supply-chain.svg'
import { Link } from "react-router-dom";

export default function RoboticProcessAutomationServices() {
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
                    Robotic Process Automation Services
                  </p>
                  <h2>Automate Business Processes & Stay Ahead</h2>
                  <div class="text">
                    Our bots are the closest your customers can get to an in
                    person support team
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

        <section>
          <div class="container">
            <div class="robot1">
              <div class="robot-text">
                <h2 class="home-heading-two heading-read">
                  What Is Robotic Process Automation?
                </h2>
                <p>
                  Robotic Process Automation (RPA Services) allows you to
                  interact with users in any IT application or website,
                  typically in the same way a human would, to automate complex,
                  rule-based work.
                </p>
                <p>
                  The capability is usually comprised of a suite of software, a
                  virtual infrastructure, and a methodology for designing,
                  implementing and running the automation.
                </p>
              </div>
              <div class="robot-img">
                <img
                  src={rpa_img}
                  alt="Robotic-Automation image"
                />
              </div>
            </div>
          </div>
        </section>

        <section class="rules-section">
          <div class="container">
            <div class="robotrules-title">
              <h2 class="home-heading-two">
                Stop Wasting Time on Repetitive, Rules Driven Tasks
              </h2>
            </div>
            <div class="robotrules-list">
              <div class="robotrules-card">
                <img
                  src={robot_included}
                  alt="Functions Include"
                />
                <h3>Functions Include</h3>
                <ul>
                  <li>Search records</li>
                  <li>Create/Update/Delete Records</li>
                  <li>Product Records</li>
                  <li>Perform Calculations</li>
                  <li>Achieve full transacion logs</li>
                </ul>
              </div>
              <div class="robotrules-card">
                <img
                  src={robot_function}
                  alt="Advance Functions"
                />
                <h3>Advance Functions</h3>
                <ul>
                  <li>Login/Log Out</li>
                  <li>Click Buttons tri state boxes</li>
                  <li>Operate drop down menus</li>
                  <li>Use data pickers</li>
                  <li>Enter extract data</li>
                </ul>
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

        <section class="robenifit-section robt">
          <div class="container">
            <div class="robotrules-title">
              <h2 class="home-heading-two">
                Benefits Of Robotic Process Automation
              </h2>
            </div>
            <div class="robenifit-wrap">
              <div class="robenifit-card">
                <img
                  src={time}
                  alt="High Speed"
                />
                <h4>High Speed </h4>
              </div>
              <div class="robenifit-card">
                <img
                  src={agile}
                  alt="Increased Agility"
                />
                <h4>Increased Agility</h4>
              </div>
              <div class="robenifit-card">
                <img
                  src={idea}
                  alt="Robot Idea"
                />
                <h4>Better Employee Productivity</h4>
              </div>
              <div class="robenifit-card">
                <img
                  src={resolution}
                  alt="High Quality Services"
                />
                <h4>High Quality Services</h4>
              </div>
            </div>
          </div>
        </section>

        <section class="robenifit-section">
          <div class="container">
            <div class="robotrules-title">
              <h2 class="home-heading-two">Industries We Have Served</h2>
            </div>
            <div class="robenifit-wrap">
              <div class="robenifit-card">
                <img
                  src={building}
                  alt="Government Building"
                />
                <h4>Government</h4>
              </div>
              <div class="robenifit-card">
                <img
                  src={healthcare}
                  alt="Healthcare"
                />
                <h4>Healthcare</h4>~
              </div>
              <div class="robenifit-card">
                <img
                  src={estate}
                  alt="Real Estate"
                />
                <h4>Real Estate</h4>
              </div>
              <div class="robenifit-card">
                <img
                  src={bank}
                  alt="Banking"
                />
                <h4>Banking</h4>
              </div>
              <div class="robenifit-card">
                <img
                  src={video}
                  alt="Resolution"
                />
                <h4>Entertainment</h4>
              </div>
              <div class="robenifit-card">
                <img
                  src={insurance}
                  alt="Insurance"
                />
                <h4>Insurance</h4>
              </div>
              <div class="robenifit-card">
                <img
                  src={retail}
                  alt="Retail"
                />
                <h4>Retail</h4>
              </div>
              <div class="robenifit-card">
                <img
                  src={chain}
                  alt="Supply Chain"
                />
                <h4>Supply Chain</h4>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
