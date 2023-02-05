import React from "react";
import Footer from "../Footer";
import Header from "../header";

import service10 from "../../assets/images/resource/service-10.png";
import tracking from "../../assets/images/AR_VR/vr-tracking.svg";
import service from "../../assets/images/AR_VR/vr-service.svg";
import arkit from "../../assets/images/AR_VR/vr-arkit.svg";
import arcore from "../../assets/images/AR_VR/vr-arcore.svg";
import unity from "../../assets/images/AR_VR/vr-unity.svg";
import mixedr from "../../assets/images/AR_VR/mr.svg";
import ar from "../../assets/images/AR_VR/ar.svg";
import vr from "../../assets/images/AR_VR/vr.svg";
import metaverse from "../../assets/images/AR_VR/metaverse.svg";
import uiux from "../../assets/images/AR_VR/uiux.svg";
import modeling from "../../assets/images/AR_VR/modeling.svg";
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

export default function ARVRServices() {
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
                    Augmented & Virtual Reality
                  </p>
                  <h2>We can make your dreams become reality</h2>
                  <div class="text">
                    We provide you the most innovative technologies to offer the
                    best-ever immersive experiences.
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

        <section class="section-spacing ">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <h2>
                  Explore the
                  <span class="color-primary text-capitalize">
                    Creative Side of Technology
                  </span>
                </h2>
                <p class="caption mb-4 text-capitalize">
                  We will help you with:
                </p>
              </div>
            </div>
            <div class="row g-3">
              <div class="col-md-6 col-lg-4">
                <div class="card p-2 with-shape">
                  <div class="card-icon mb-2">
                    <img src={ar} />
                  </div>
                  <h4>Augmented Reality</h4>
                  <p class="mb-0">
                    We offer real-world enhancements with digital twins and
                    visual overlays enabling countless business opportunities
                    across all industries.
                  </p>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="card p-2 with-shape">
                  <div class="card-icon mb-2">
                    <img src={vr} />
                  </div>
                  <h4>Virtual Reality</h4>
                  <p class="mb-0">
                    We provide VR solutions with gamification features for a
                    variety of training, education, and collaboration
                    applications.
                  </p>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="card p-2 with-shape">
                  <div class="card-icon mb-2">
                    <img src={mixedr} />
                  </div>
                  <h4>Mixed Reality</h4>
                  <p class="mb-0">
                    We'll help you merge physical and digital environments,
                    people, and virtual beings to create novel
                    human-computer-environment interactions.
                  </p>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="card p-2 with-shape">
                  <div class="card-icon mb-2">
                    <img src={modeling} />
                  </div>
                  <h4>3D Modelling &amp; Animation</h4>
                  <p class="mb-0">
                    With 3D designs that create immersive AR/VR, our talented
                    artists bring your concepts to life.
                  </p>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="card p-2 with-shape">
                  <div class="card-icon mb-2">
                    <img src={uiux} />
                  </div>
                  <h4>UI/UX Development</h4>
                  <p class="mb-0">
                    We offer UI/UX design services to create one-of-a-kind user
                    and consumer experiences.
                  </p>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="card p-2 with-shape">
                  <div class="card-icon mb-2">
                    <img src={metaverse} />
                  </div>
                  <h4>Metaverse Platform</h4>
                  <p class="mb-0">
                    We develop metaverse solutions that allow users to connect
                    and engage in a unified virtual space. We create hybrid
                    enterprise ecosystems using AR, VR, and MR.
                  </p>
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

        <section class="vr-section nitro-offscreen">
          <div class="container">
            <div class="vr-title">
              <p>VR Solutions</p>
              <h2 class="home-heading-two">
                Our experienced engineers are well versed with multiple tech
                stacks to build effective, versatile web applications
              </h2>
            </div>
            <div class="vr-service-logo">
              <img alt="UNITY" src={unity} />
              <img alt="VR" src={service} />
              <img alt="IMAGE TRACKING" src={tracking} />
              <img alt="ARKIT" src={arkit} /> <img alt="ARCore" src={arcore} />
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
