import React from "react";
import Footer from "../Footer";
import Header from "../header";

import service10 from "../../assets/images/resource/service-10.png";
import { Link } from "react-router-dom";
import innovators_icon from "../../assets/images/sales-force-icon/innovators--icon.svg";
import top_talent_icon from "../../assets/images/sales-force-icon/top-talent--icon.svg";
import years_xp_icon from "../../assets/images/sales-force-icon/years-xp--icon.svg";

import consulting_1 from "../../assets/images/sales-force-icon/consulting-1.svg";
import consulting_2 from "../../assets/images/sales-force-icon/consulting-2.svg";
import consulting_3 from "../../assets/images/sales-force-icon/consulting-3.svg";
import consulting_4 from "../../assets/images/sales-force-icon/consulting-4.svg";
export default function SalesforceConsultingServices() {
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
                    Salesforce Consulting Services
                  </p>
                  <h2>Delivering enterprise success through Salesforce</h2>
                  <div class="text">
                    Helping your business achieve its digital transformation
                    objectives.
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


        <section class="section-certf nitro-offscreen">
          <div class="cerf-container">
            <div class="certf-title">
              <h2
                class="home-heading-two heading-read"
                style={{ display: "none" }}
              >
                Mapping Your Unique Business Processes Onto Salesforce
              </h2>
            </div>
            <div class="certf-wrapper">
              <div class="certf-img">
              </div>
              <div class="list-section">
                <p>Personnel Certifications</p>
                <ul>
                  <li>Administrator</li> <li>Sales Cloud Consultant</li>
                  <li>Platform App Builder</li> <li>Field Service Lightning</li>
                  <li>Technical Architect</li>
                  <li>Platform Developer I / II</li>
                  <li>Service Cloud Consultant</li>
                  <li>Marketing Cloud Specialist</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section class="nitro-offscreen">
          <div class="container special-wrapper">
            <h2
              class="home-heading-two heading-read"
              style={{ display: "none" }}
            >
              What Makes Us Special
            </h2>
            <div class="cards-wrapper">
              <div class="special-card">
                <div class="card-img">
                  <img alt="years-xp" id="Nzc1OjM4-1" src={years_xp_icon} />
                </div>
                <div class="card-text">
                  <h3>10 Years of Experience</h3>
                  <p>
                    We’ve evolved over a period of 10 years acquiring skills and
                    expertise by designing, developing and deploying solutions
                    for the world’s leading companies.
                  </p>
                </div>
              </div>
              <div class="special-card">
                <div class="card-img">
                  <img alt="top-talent" id="Nzg2OjQw-1" src={top_talent_icon} />
                </div>
                <div class="card-text">
                  <h3>We Hire Top 2% Talent</h3>
                  <p>
                    With a workforce of 180+ engineers who are experts in the
                    latest programming languages, we have what it takes to
                    transform your business.
                  </p>
                </div>
              </div>
              <div class="special-card">
                <div class="card-img">
                  <img alt="innovators" id="Nzk3OjQw-1" src={innovators_icon} />
                </div>
                <div class="card-text">
                  <h3>A Team of Innovators</h3>
                  <p>
                    We are more than just consultants. We put our clients at the
                    heart of what we do- left, right &amp; center to add real
                    value to their business.
                  </p>
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
