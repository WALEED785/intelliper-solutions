import React from "react";
import Footer from "../Footer";
import Header from "../header";

import service10 from "../../assets/images/resource/service-10.png";
import tran from "../../assets/images/data_science_icons/ai-tran--icon.svg";
import model from "../../assets/images/data_science_icons/ai-model--icon.svg";
import big_data from "../../assets/images/data_science_icons/ai-big-data--icon.svg";
import integration from "../../assets/images/data_science_icons/integration--icon.svg";
import edge from "../../assets/images/data_science_icons/edge-ai--icon.svg";
import lcm from "../../assets/images/data_science_icons/lcm-ai--icon.svg";
import machine from "../../assets/images/data_science_icons/machine-learning--icon.svg";
import deep from "../../assets/images/data_science_icons/deep-learning--icon.svg";
import vision from "../../assets/images/data_science_icons/computer-vision--icon.svg";
import processing from "../../assets/images/data_science_icons/nl-processing--icon.svg";
import optimization from "../../assets/images/data_science_icons/optimization--icon.svg";
import nvedia from "../../assets/images/data_science_icons/da-nvedia--logo.svg";
import amazon from "../../assets/images/data_science_icons/da-amazon-ml--logo.svg";
import azure from "../../assets/images/data_science_icons/da-azure-ml--logo.svg";
import chartio from "../../assets/images/data_science_icons/da-chartio--logo.svg";
import docker from "../../assets/images/data_science_icons/da-docker--logo.svg";
import java from "../../assets/images/data_science_icons/da-java--logo.svg";
import kubernetes from "../../assets/images/data_science_icons/da-kubernetes--logo.svg";
import msql from "../../assets/images/data_science_icons/da-msql--logo.svg";
import nosql from "../../assets/images/data_science_icons/da-nosql--logo.svg";
import tensorflow from "../../assets/images/data_science_icons/da-tensorflow--logo.svg";
import python from "../../assets/images/data_science_icons/da-python--logo.svg";
import pytorch from "../../assets/images/data_science_icons/da-pytorch--logo.svg";
import qlik from "../../assets/images/data_science_icons/da-qlik--logo.svg";
import r from "../../assets/images/data_science_icons/da-r--logo.svg";
import r_studio from "../../assets/images/data_science_icons/da-r-studio--logo.svg";
import s from "../../assets/images/data_science_icons/da-s-learn--logo.svg";
import spark from "../../assets/images/data_science_icons/da-spark--logo.svg";
import tableau from "../../assets/images/data_science_icons/da-tableau--logo.svg";
import fitr from "../../assets/images/case-study/fitr-training.png";
import circlepod from "../../assets/images/case-study/circlepod.png";
import coachr from "../../assets/images/case-study/coachr.png";
import hardassetsalliance from "../../assets/images/case-study/hardassetsalliance.png";
import proctorgallagher from "../../assets/images/case-study/proctorgallagher_2.png";
import taskrabbit from "../../assets/images/case-study/taskrabbit.png";
import wayfair from "../../assets/images/case-study/wayfair.png";
import distropro from "../../assets/images/case-study/distropro.png";
import predictionstrike from "../../assets/images/case-study/predictionstrike.png";

import { Link } from "react-router-dom";
import { mode } from "@chakra-ui/theme-tools";

export default function DataScienceConsultingServices() {
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
                    Data Science & AI
                  </p>
                  <h2>
                    Drive strategic Business Decisions through Data Science
                  </h2>
                  <div class="text">
                    Strategizing and Engineering your AI Transformation
                    initiatives.
                  </div>
                  <Link
                    to="/contact"
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
          <div class="container">
            <div class="offer-title">
              <h2 class="home-heading-two">Services We Offer</h2>
            </div>
            <div class="offer-cards">
              <div class="card">
                <img alt="AI Model Development" src={model} />
                <h3>AI Model Development</h3>
                <p>
                  Development of custom AI Models using Machine Learning and
                  Deep Learning Techniques.
                </p>
              </div>
              <div class="card">
                <img alt="Big Data Solutions" src={big_data} />
                <h3>Big Data Solutions</h3>
                <p>
                  Design, development, and deployment of Big Data Solutions
                  driven by Artificial Intelligence.
                </p>
              </div>
              <div class="card">
                <img alt="Edge AI" src={edge} />
                <h3>Edge AI</h3>
                <p>
                  A Cloud native, Edge first approach to maintain efficiency and
                  real-time performance.
                </p>
              </div>
              <div class="card">
                <img alt="Lifecycle Management" src={lcm} />
                <h3>Lifecycle Management for AI Systems</h3>
                <p>
                  Defining a systematic approach to operationalize AI by
                  implementing end-to-end AI Lifecycle Management.
                </p>
              </div>
              <div class="card">
                <img alt="Integration" src={integration} />
                <h3>Integration</h3>
                <p>
                  Linking systems through integrations with AI ready platforms
                  to make better, more robust software.
                </p>
              </div>
              <div class="card">
                <img alt="AI Transformation" src={tran} />
                <h3>AI Transformation</h3>
                <p>
                  Defining a business case, opportunities, and development
                  roadmap to guide you through your AI Transformation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="offer-section nitro-offscreen">
          <div class="container">
            <div class="offer-title">
              <h2 class="home-heading-two">Our Expertise </h2>
            </div>
            <div class="offer-cards">
              <div class="card">
                <img alt="Machine Learning" src={machine} />
                <h3>Machine Learning</h3>
                <p>
                  Developing robust ML models to help you achieve ideal results
                  and optimized performance.
                </p>
              </div>
              <div class="card">
                <img alt="Deep Learning" src={deep} />
                <h3>Deep Learning</h3>
                <p>
                  We use Deep Learning’s intrinsic Self learning properties to
                  help you achieve better results every time.
                </p>
              </div>
              <div class="card">
                <img alt="Computer Vision" src={vision} />
                <h3>Computer Vision</h3>
                <p>
                  Our Robust Computer Vision models enable your systems to
                  analyze and understand their environments.
                </p>
              </div>
              <div class="card">
                <img alt="Natural Language Processing" src={processing} />
                <h3>Natural Language Processing</h3>
                <p>
                  We provide your software with the tools to understand and
                  respond to natural languages.
                </p>
              </div>
              <div class="card">
                <img alt="Optimization" src={optimization} />
                <h3>Optimization</h3>
                <p>
                  Our Engineers help you train your AI models by optimizing
                  parameters to help you achieve desired results.
                </p>
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

        <section class="service-section data-section nitro-offscreen lazyloaded">
          <div class="container">
            <div class="ds-process-section">
              <div class="process-title">
                <h2 class="home-heading-two heading-read">Our Process</h2>
              </div>
              <div class="process-cention">
                <ul>
                  <li>
                    <h5>Scoping</h5>
                    <p>
                      Our AI Thought Leaders help you understand your business
                      problem and once we ascertain there is a fit for Machine
                      Learning, we work in collaboration to chalk out a pathway,
                      and list down the requirements.
                    </p>
                  </li>
                  <li>
                    <h5>Migration</h5>
                    <p>
                      Our Engineers take your business cases and workflows from
                      your legacy systems and map them onto modern AI based
                      Software to give you better results.
                    </p>
                  </li>
                  <li>
                    <h5>Architecture &amp; Design</h5>
                    <p>
                      We design new AI based platforms based around your
                      business &amp; use cases to help maximize re-usability and
                      add flexibility to your core workflows.
                    </p>
                  </li>
                  <li>
                    <h5>Model Development</h5>
                    <p>
                      We run hundreds of experiments in parallel to developing a
                      machine learning model. A model is the backbone of a
                      machine learning system and can predict future trends or
                      read the text or images.
                    </p>
                  </li>
                  <li>
                    <h5>Platform Implementation</h5>
                    <p>
                      We connect the model with a RESTFUL API or a front-end
                      application, developing all necessary features in an
                      intuitive interface for users to access the model.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="iot-features nitro-offscreen">
          <div class="container">
            <div class="ms-service-title">
              <h2 class="home-heading-two">Tech Stacks</h2>
            </div>
            <div class="iot-features-img">
              <img
                alt="spark"
                src={spark}
              />
              <img
                alt="python"
                src={python}
              />
              <img
                alt="R"
                src={r}
              />
              <img
                alt="pytorch"
                src={pytorch}
              />
              <img
                alt="learn"
                src={s}
              />
              <img
                alt="tableau"
                src={tableau}
              />
              <img
                alt="qlik"
                src={qlik}
              />
              <img
                alt="chartio"
                src={chartio}
              />
              <img
                alt="studio"
                src={r_studio}
              />
              <img
                alt="docker"
                src={docker}
              />
              <img
                alt="java"
                src={java}
              />
              <img
                alt="amazon"
                src={amazon}
              />
              <img
                alt="tensorflow"
                src={tensorflow}
              />
              <img
                alt="azure ml"
                src={azure}
              />
              <img
                alt="kubernetes"
                src={kubernetes}
              />
              <img
                alt="nvedia"
                src={nvedia}
              />
              <img
                alt="msql"
                src={msql}
              />
              <img
                alt="nosql"
                src={nosql}
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
