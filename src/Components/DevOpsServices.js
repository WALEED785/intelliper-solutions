import React from "react";
import Footer from "./Footer";
import Header from "./header";

import service10 from "../assets/images/resource/service-10.png";
import management from  "../assets/images/devops_icons/dev-management.svg";
import document from  "../assets/images/devops_icons/dev-document.svg";
import automation from  "../assets/images/devops_icons/dev-automation.svg";
import megaphone from  "../assets/images/devops_icons/megaphone.svg";
import throughput from  "../assets/images/devops_icons/throughput.svg";
import risk from  "../assets/images/devops_icons/risk.svg";
import process from  "../assets/images/devops_icons/process.svg";
import amazon_cloudfront from  "../assets/images/devops_icons/amazon-cloudfront.svg";
import amazon_webseries from  "../assets/images/devops_icons/amazon-webseries.svg";
import ansible from  "../assets/images/devops_icons/ansible.svg";
import astra_zeneca from  "../assets/images/devops_icons/astra-zeneca.svg";
import aws_ecs from  "../assets/images/devops_icons/aws-ecs.svg";
import azure from  "../assets/images/devops_icons/azure.svg";
import chef from  "../assets/images/devops_icons/chef.svg";
import data_dog from  "../assets/images/devops_icons/data-dog.svg";
import docker from  "../assets/images/devops_icons/docker.svg";
import google_cloud from  "../assets/images/devops_icons/google-cloud.svg";
import kubernetes from  "../assets/images/devops_icons/kubernetes.svg";
import new_relic from  "../assets/images/devops_icons/new-relic.svg";
import puppet from  "../assets/images/devops_icons/puppet.svg";
import splunk from  "../assets/images/devops_icons/splunk.svg";
import { Link } from "react-router-dom";

export default function DevOpsServices() {
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
                    DevOps
                  </p>
                  <h2>
                    Enhance Your IT Team's <br />
                    Performance with DevOps
                  </h2>
                  <div class="text">
                    DevOps solutions automate away inefficiencies and improve
                    the quality and security of software. intelliper solution's DevOps
                    consulting services help companies optimize their IT Team's
                    Performance.
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
              <h2 className="home-heading-two">Our DevOps Services</h2>
            </div>
            <div className="offer-cards">
              <div className="card">
                <img
                  alt="document"
                  id="NTIwOjExNQ==-1"
                  src={document}
                />
                <h3>DevOps Assessment</h3>
                <p>
                  Our DevOps engineer analyze the key points, draw a road map
                  and recommend tools and processes to automate deployement
                  cycle across your delivery infrastructure
                </p>
              </div>
              <div className="card">
                <img
                  alt="management"
                  id="NTI1OjExOQ==-1"
                  src={management}
                />
                <h3>DevOps Automation</h3>
                <p>
                  We automate end to end delivery cycle and ensure that your
                  deployments and rollbacks are performed in a click with risks
                  mitigated and productivity increased
                </p>
              </div>
              <div className="card">
                <img
                  alt="automation"
                  id="NTMwOjExOQ==-1"
                  src={automation}
                />
                <h3>DevOps Management</h3>
                <p>
                  We assist your core team ensuring a full-fleged integrated
                  functioning of the delivery pipeline automation cycle and in
                  adapting your automated deployement cycle to changes
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section-2">
          <div className="auto-container">
            <div className="ms-service-title tech-title">
              {/* <p>OUR PROCESS</p> */}
              <h2 className="home-heading-two">What You Will Get</h2>
            </div>

            <div className="qa-process">
              <div className="column-qa">
                <img
                  alt="megaphone"
                  id="NTQ0OjExNw==-1"
                  src={megaphone}
                />
                <h3>Reduced Time to Market</h3>
                <p>
                  Reduce time to market by up to 50% through streamlined
                  software delivery.
                </p>
              </div>
              <div className="column-qa">
                <img
                  alt="throughput"
                  id="NTQ5OjExOQ==-1"
                  src={throughput}
                />
                <h3>High Throughput</h3>
                <p>
                  Increase team productivity and deliver new functionality
                  faster.
                </p>
              </div>
              <div className="column-qa">
                <img
                  alt="Low Risk"
                  id="NTU0OjExMQ==-1"
                  src={risk}
                />
                <h3>Low Risk</h3>
                <p>
                  Early identification of quality concerns, reduction of defects
                  across the lifestyle upto 30%.
                </p>
              </div>
              <div className="column-qa">
                <img
                  alt="process"
                  id="NTU5OjExMw==-1"
                  src={process}
                />
                <h3>High Resiliency</h3>
                <p>
                  Operational state is more stable and secure and changes are
                  systematically auditable.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="brand-section-2">
          <div className="auto-container">
            <div className="ms-service-title tech-title">
              {/* <p>TECHNICAL EXPERTISE</p> */}
              <h2 className="home-heading-two">Tools And Technology Stacks</h2>
            </div>
            <div className="tech-web-app">
              <ul className="web-apps--logo">
                <li>
                  <img
                    alt="amazon_cloudfront"
                    id="Njk3OjM2-1"
                    src={amazon_cloudfront}
                  />
                </li>
                <li>
                  <img
                    alt="amazon_webseries"
                    id="Njk5OjM2-1"
                    src={amazon_webseries}
                  />
                </li>
                <li>
                  <img
                    alt="ansible"
                    id="NzAxOjQw-1"
                    src={ansible}
                  />
                </li>
                <li>
                  <img
                    alt="astra_zeneca"
                    id="NzAyOjEyMg==-1"
                    src={astra_zeneca}
                  />
                </li>
                <li>
                  <img
                    alt="aws_ecs"
                    id="NzA0OjEyNg==-1"
                    src={aws_ecs}
                  />
                </li>
                <li>
                  <img
                    alt="azure"
                    id="NzA3OjM3-1"
                    src={azure}
                  />
                </li>
                <li>
                  <img
                    alt="chef"
                    id="NzA4OjEyNg==-1"
                    src={chef}
                  />
                </li>
                <li>
                  <img
                    alt="data_dog"
                    id="NzExOjQz-1"
                    src={data_dog}
                  />
                </li>
                <li>
                  <img
                    alt="docker"
                    id="NzEzOjM2-1"
                    src={docker}
                  />
                </li>
                <li>
                  <img
                    alt="google_cloud"
                    id="NzE0OjEyNg==-1"
                    src={google_cloud}
                  />
                </li>
                <li>
                  <img
                    alt="kubernetes"
                    id="NzE2OjEyNA==-1"
                    src={kubernetes}
                  />
                </li>
                <li>
                  <img
                    alt="new_relic"
                    id="NzE5OjM3-1"
                    src={new_relic}
                  />
                </li>
                <li>
                  <img
                    alt="puppet"
                    id="NzIxOjM5-1"
                    src={puppet}
                  />
                </li>
                <li>
                  <img
                    alt="splunk"
                    id="NzIzOjM5-1"
                    src={splunk}
                  />
                </li>
              </ul>
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
