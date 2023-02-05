import React from "react";
import Footer from "../Footer";
import Header from "../header";

import service10 from "../../assets/images/resource/service-10.png";
import img1 from '../../assets/images/cloud_icons/cm-thunder-icon.svg';
import img2 from '../../assets/images/cloud_icons/cm-dollar-icon.svg';
import img3 from '../../assets/images/cloud_icons/cm-group-icon.svg';
import img4 from '../../assets/images/cloud_icons/cm-clock-icon.svg';
import aws from '../../assets/images/cloud_icons/cm-aws-icon.svg';
import azure from '../../assets/images/cloud_icons/cm-azure-icon.svg';
import google from '../../assets/images/cloud_icons/cm-google-cloud.svg';
import engine from '../../assets/images/cloud_icons/app-engine-icon.svg';
import yard from '../../assets/images/cloud_icons/engine-yard-icon.svg';
import heroku from '../../assets/images/cloud_icons/heroku-icon.svg';
import suit from '../../assets/images/cloud_icons/cm-g-suite-icon.svg';
import office from '../../assets/images/cloud_icons/cm-office-365-icon.svg';
import salesforce from '../../assets/images/cloud_icons/cm-salesforce-icon.svg';
import iso from '../../assets/images/cloud_icons/cm-iso-icon.svg';
import soc from '../../assets/images/cloud_icons/cm-soc-icon.svg';
import fed from '../../assets/images/cloud_icons/cm-fed-ramp-icon.svg';
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

export default function CloudMigrationServices() {
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
                    Cloud Migrations
                  </p>
                  <h2>Migrate & Protect Your Data With Cloud Migration</h2>
                  <div class="text">
                    Optimize your migration needs with intelliper solve secure &
                    cost-effective cloud migration services.
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

        <section class="stat-section cloudm-wrap">
          <div class="container">
            <div class="stat-title">
              <h2 class="home-heading-two">Why Cloud Migration with intellipe?</h2>
            </div>
            <div class="stat-wrapper">
              <div class="stat-row">
                <div class="stat-card c1">
                  <img
                    alt="Swift Migration"
                    src={img1}
                  />
                  <h2 class="head">Swift Migration</h2>
                  <p>
                    With intelliper solution's swift migration services, now you can get to
                    your new cloud infrastructure faster and start realizing
                    your ROI right away.
                  </p>
                </div>
                <div class="stat-card c2">
                  <img
                    alt="Cost Effective"
                    src={img2}
                  />
                  <h2 class="head">Cost Effective</h2>
                  <p>
                    Now cut your total cost of ownership by three times and also
                    get a free pre-migration assessments by shifting to cloud
                    infrastructure.
                  </p>
                </div>
              </div>
              <div class="stat-row">
                <div class="stat-card c3">
                  <img
                    alt="Secure"
                    src={img3}
                  />
                  <h2 class="head">Secure</h2>
                  <p>
                    We make sure that you have encrypted file transfers chain of
                    custody of files and audit trails for easy reporting.
                  </p>
                </div>
                <div class="stat-card c4">
                  <img
                    alt="clock"
                    src={img4}
                  />
                  <h2 class="head">Easy &amp; Flexible Deployment</h2>
                  <p>
                    Our qualified cloud professionals make your cloud migration
                    process easy and flexible along with unlimited scalibility.
                    Any file. Any platform. Any vendor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="cm-process nitro-offscreen">
          <div class="container">
            <div class="cm-process-title">
              <h2 class="home-heading-two">Our Process </h2>
            </div>
            <div class="cm-row">
              <div class="cm-column  line">
                <span>1</span> <h3>Goals &amp; Portfolio Analysis</h3>
                <ul>
                  <li>Strategize cloud migration goals and priorities</li>
                  <li>
                    Discover and identify on-prremise applications &amp;
                    servers.
                  </li>
                  <li>Perform Application portfolio analysis.</li>
                </ul>
              </div>
              <div class="cm-column line">
                <span>2</span> <h3>Planning &amp; Strategy</h3>
                <ul>
                  <li>
                    Develop a decision criteria about which applications must be
                    moved.
                  </li>
                  <li>
                    Cost and saving analysis across management and support
                    parameters.
                  </li>
                  <li>Decision criteria for laaS PasS, SaaS</li>
                </ul>
              </div>
              <div class="cm-column">
                <span>3</span> <h3>Migration &amp; Optimization</h3>
                <ul>
                  <li>Setup and execute migration procedures</li>
                  <li>
                    Install additional utilities for business continuity and
                    secuity
                  </li>
                  <li>Optimize the whole migration governance and process.</li>
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

        <section class="nitro-offscreen">
          <div class="container cm-modals">
            <div class="modal-title">
              <h2 class="home-heading-two">Our Cloud Based Models</h2>
            </div>
            <div class="modal-cards">
              <div class="card">
                <h3>laaS</h3>
                <p>
                  laaS provides access to computing resources such as
                  server,storage and networking using their own platforms within
                  a service provider infrastructure.
                </p>
                <span>Key Features</span>
                <p>
                  Best for companies that do not mind hosting their applications
                  using third party data centers.
                </p>
                <div class="img-wrap">
                  <img
                    alt="AWS"
                    src={aws}
                  />
                  <img
                    alt="GOOGLE Cloud"
                    src={google}
                  />
                  <img
                    alt="AZURE"
                    src={azure}
                  />
                </div>
              </div>
              <div class="card">
                <h3>PaaS</h3>
                <p>
                  A model offering users with a cloud environment in which they
                  can develop, manage and deliver applications by reducing their
                  ready to market timmings.
                </p>
                <span>Key Features</span>
                <p>
                  Enables users to use a suite of prebuilt tools to develop,
                  customize and test their own applications.
                </p>
                <div class="img-wrap">
                  <img
                    alt="ENGINE"
                    src={engine}
                  />
                  <img
                    alt="ENGINE YARD"
                    src={yard}
                  />
                  <img
                    alt="HEROKU"
                    src={heroku}
                  />
                </div>
              </div>
              <div class="card">
                <h3>SaaS</h3>
                <p>
                  This model offers users with the access to a cloud-based
                  software. All the applications reside on a remote cloud
                  network accessed through a web or API.
                </p>
                <span>Key Features</span>
                <p>
                  Ideal for the companies that want to go for a monthly/yearly
                  subscriptions based cloud service model.
                </p>
                <div class="img-wrap">
                  <img
                    alt="office 365"
                    src={office}
                  />
                  <img
                    alt="salesforce"
                    src={salesforce}
                  />
                  <img
                    alt="g suite"
                    src={suit}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="nitro-offscreen">
          <div class="container cm-awards">
            <div class="award-title">
              {" "}
              <h2 class="home-heading-two">
                Ensure Compliance With Various Industrial Revolutions{" "}
              </h2>
            </div>{" "}
            <div class="awards-imgs">
              {" "}
              <img
                alt="ISO Icon"
                src={iso}
              />
              <img
                alt="SOC Icon"
                src={soc}
              />
              <img
                alt="Fed Ramp Icon"
                src={fed}
              />{" "}
            </div>{" "}
          </div>{" "}
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
                    <img src={coachr} alt="" />
                  </div>
                  <h3>
                    <Link
                      to="/case-studies"
                      style={{ textDecoration: "none", color: "black"  }}
                    >
                      Coachr
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="case-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <div className="color-circle"></div>
                    <img src={distropro} alt="" />
                  </div>
                  <h3>
                    <Link
                      to="/case-studies"
                      style={{ textDecoration: "none", color: "black"  }}
                    >
                      Distro Pro
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
