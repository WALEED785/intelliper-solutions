import React from "react";
import Footer from "./Footer";
import Header from "./header";

import service10 from "../assets/images/resource/service-10.png";
import scope_creep from "../assets/images/discovery_icons/scope-creep.svg";
import concrete_requirements from "../assets/images/discovery_icons/concrete-requirements.svg";
import data_visualize from "../assets/images/discovery_icons/data-visualize.svg";
import stakeholder from "../assets/images/discovery_icons/stakeholder.svg";
import validate_idea from "../assets/images/discovery_icons/validate-idea.svg";
import valuable_resources from "../assets/images/discovery_icons/valuable-resources.svg";

import meeting_img_dw from "../assets/images/discovery_icons/meeting--img-dw.webp";
import stakeholders_img_dw from "../assets/images/discovery_icons/stakeholders--img-dw.webp";
import rapid_prototype_dw from "../assets/images/discovery_icons/rapid-prototype-dw.gif";
import final_presentation_dw from "../assets/images/discovery_icons/final-presentation-dw.gif";
import integration_img_dw from "../assets/images/discovery_icons/integration--img-dw.webp";
import challenge_img_dw from "../assets/images/discovery_icons/challenge--img-dw.webp";

import user_stories from "../assets/images/discovery_icons/user-stories.svg";
import prototype from "../assets/images/discovery_icons/prototype.svg";
import technical_evaluation from "../assets/images/discovery_icons/technical-evaluation.svg";
import plan from "../assets/images/discovery_icons/plan.svg";
import { Link } from "react-router-dom";

export default function DiscoveryWorkshopServices() {
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
                    Discovery Workshop Services
                  </p>
                  <h2>Discovering your goals</h2>
                  <div class="text">
                    Intelliper discovery workshop is a collaborative session
                    where we help you with Idea Validation, Requirements
                    Engineering, and Product Visualization.
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
              <p>BENEFITS</p>
              <h2 className="home-heading-two">
                Intelliper's Discovery Workshop Helps You
              </h2>
            </div>
            <div className="offer-cards">
              <div className="card">
                <img
                  alt="validate idea"
                  id="NTI4OjM5-1"
                  src={validate_idea}
                />
                <h3>Validate Your Idea</h3>
                <p>
                  Helping you understand the pros and cons associated with your
                  idea.
                </p>
              </div>
              <div className="card">
                <img
                  alt="concrete requirements"
                  id="NTM0OjQ3-1"
                  src={concrete_requirements}
                />
                <h3>Build concrete Requirements</h3>
                <p>
                  Defining key objectives, and deciding on the features you
                  desire in your new software product.
                </p>
              </div>
              <div className="card">
                <img
                  alt="stakeholder"
                  id="NTM5OjEyMw==-1"
                  src={stakeholder}
                />
                <h3>Involve Stakeholders</h3>
                <p>
                  Aligning stakeholders and end users from day one to get higher
                  adaptability post deployment.
                </p>
              </div>
              <div className="card">
                <img
                  alt="Visualize"
                  id="NTQ0OjEyNA==-1"
                  src={data_visualize}
                />
                <h3>Visualize your Idea</h3>
                <p>
                  Developing rapid prototypes to help you see how your new
                  project will look and behave.
                </p>
              </div>
              <div className="card">
                <img
                  alt="valuable-resources"
                  id="NTUwOjQ0-1"
                  src={valuable_resources}
                />
                <h3>Save valuable Resources</h3>
                <p>
                  Defining cost estimates for desired features up front, so you
                  don't go over budget on your project.
                </p>
              </div>
              <div className="card">
                <img
                  alt="scope-creep"
                  id="NTU2OjEyMw==-1"
                  src={scope_creep}
                />
                <h3>Prevent Scope Creep</h3>
                <p>
                  Setting requirements before development to prevent scope creep
                  and avoid delays on delivery.
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
              {/* <p>TECHNICAL EXPERTISE</p> */}
              <h2 className="home-heading-two">How It Works</h2>
            </div>
            <div className="dw-section-wrap">
              <div className="dw-text">
                <p className="dw-step">Step 1</p>
                <h2 className="dw-head">Introductory Meeting</h2>
                <p className="dw-steptext">
                  Session is attended by all involved stakeholders to brainstorm
                  & expand on the idea.
                </p>
              </div>
              <div className="dw-img">
                <img
                  alt="meeting"
                  id="NTg0OjExOA==-1"
                  src={meeting_img_dw}
                />
              </div>
            </div>
            <div className="dw-section-wrap">
              <div className="dw-text">
                <p className="dw-step">Step 2</p>
                <h2 className="dw-head">Stakeholder Interview</h2>
                <p className="dw-steptext">
                Interviews conducted with key stakeholders and team to identify objectives for projects.
                </p>
              </div>
              <div className="dw-img">
                <img
                  alt="stakeholders_img_dw"
                  id="NTg0OjExOA==-1"
                  src={stakeholders_img_dw}
                />
              </div>
            </div>
            <div className="dw-section-wrap">
              <div className="dw-text">
                <p className="dw-step">Step 3</p>
                <h2 className="dw-head">Rapid Prototyping</h2>
                <p className="dw-steptext">
                  intelliper solutions Business Analysts & UI/UX team develop a clickable prototype for you.
                </p>
              </div>
              <div className="dw-img">
                <img
                  alt="rapid_prototype_dw"
                  id="NTg0OjExOA==-1"
                  src={rapid_prototype_dw}
                />
              </div>
            </div>
            <div className="dw-section-wrap">
              <div className="dw-text">
                <p className="dw-step">Step 4</p>
                <h2 className="dw-head">Integration Requirements</h2>
                <p className="dw-steptext">
                  We establish an understanding of your existing setup & its integration requirements.
                </p>
              </div>
              <div className="dw-img">
                <img
                  alt="integration_img_dw"
                  id="NTg0OjExOA==-1"
                  src={integration_img_dw}
                />
              </div>
            </div>
            <div className="dw-section-wrap">
              <div className="dw-text">
                <p className="dw-step">Step 5</p>
                <h2 className="dw-head">Challenges Identification</h2>
                <p className="dw-steptext">
                  High risk items identified to predict potential challenges & prepare their solutions.
                </p>
              </div>
              <div className="dw-img">
                <img
                  alt="challenge_img_dw"
                  id="NTg0OjExOA==-1"
                  src={challenge_img_dw}
                />
              </div>
            </div>
            <div className="dw-section-wrap">
              <div className="dw-text">
                <p className="dw-step">Step 6</p>
                <h2 className="dw-head">Final Presentation</h2>
                <p className="dw-steptext">
                  Presentation includes product development roadmaps, along- side cost and time estimates.
                </p>
              </div>
              <div className="dw-img">
                <img
                  alt="challenge_img_dw"
                  id="NTg0OjExOA==-1"
                  src={final_presentation_dw}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="brand-section-3">
          <div className="auto-container">
            <div className="ms-service-title tech-title">
              {/* <p>TECHNICAL EXPERTISE</p> */}
              <h2 className="home-heading-two">What You Get</h2>
            </div>
            <div className="dw-cards">
              <div className="dw-card dw1">
                <img
                  alt="user-stories"
                  id="NjU1OjM4-1"
                  src={user_stories}
                />
                <h4>Requirements Document</h4>
                <p>
                  A detailed document highlighting your goals for the project,
                  and the features you require.
                </p>
              </div>
              <div className="dw-card">
                <img
                  alt="prototype"
                  id="NjYwOjEyMg==-1"
                  src={prototype}
                />
                <h4>Technical Evaluation</h4>
                <p>
                  Identifying technical challenges and crafting the best
                  possible solutions to achieve your business goals.
                </p>
              </div>
              <div className="dw-card">
                <img
                  alt="technical-evaluation"
                  id="NjY3OjQ2-1"
                  src={technical_evaluation}
                />
                <h4>Clickable prototype</h4>
                <p>
                  Visualization of your idea in the form of a clickable
                  prototype that works on the platforms of your choice.
                </p>
              </div>
              <div className="dw-card">
                <img
                  alt="plan"
                  id="NjczOjExMg==-1"
                  src={plan}
                />
                <h4>Project Plan</h4>
                <p>
                  Defining schedules for development, and providing cost
                  estimates based on defined requirements.
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

        <Footer />
      </div>
    </>
  );
}
