import React from "react";
import Footer from "../Footer";
import Header from "../header";

import service10 from "../../assets/images/resource/service-10.png";
import img1 from '../../assets/images/cyber_icons/cs-certificate--icon.svg';
import img2 from '../../assets/images/cyber_icons/cs-examination--icon.svg';
import img3 from '../../assets/images/cyber_icons/cs-knowledge--icon.svg';
import img4 from '../../assets/images/cyber_icons/cs-security--icon.svg';
import img5 from '../../assets/images/cyber_icons/sf-process--shape.svg';
import img6 from '../../assets/images/cyber_icons/cs-risk-knowledge--icon.svg';
import img7 from '../../assets/images/cyber_icons/cs-bug--icon.svg';
import img8 from '../../assets/images/cyber_icons/cs-compliance--icon.svg';
import ms from '../../assets/images/cyber_icons/crt-ms-certified.svg';
import eh from '../../assets/images/cyber_icons/crt-eh.svg';
import ecppt from '../../assets/images/cyber_icons/crt-ecppt-gold.svg';
import crisc from '../../assets/images/cyber_icons/crt-crisc.svg';
import cissp from '../../assets/images/cyber_icons/crt-cissp.svg';
import cism from '../../assets/images/cyber_icons/crt-cism.svg';
import cisa from '../../assets/images/cyber_icons/crt-cisa.svg';
import cgeit from '../../assets/images/cyber_icons/crt-cgeit.svg';
import os from '../../assets/images/cyber_icons/crt-os.svg';
import sophos from '../../assets/images/cyber_icons/sophos.svg';
import trustwave from '../../assets/images/cyber_icons/trustwave.svg';
import verisign from '../../assets/images/cyber_icons/verisign.svg';
import symantec from '../../assets/images/cyber_icons/symantec.svg';
import sslstore from '../../assets/images/cyber_icons/sslstore.svg';
import devicelock from '../../assets/images/cyber_icons/devicelock.svg';
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

export default function CyberSecurityServices() {
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
                    Cyber Security Solutions
                  </p>
                  <h2>Cyber Security Solutions to protect your business</h2>
                  <div class="text">
                    Robust security strategies to support your digital
                    infrastructure.
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

        <section style={{ padding: "60px 0px" }}>
          <div class="container ms-service cybers1">
            <div class="ms-service-title">
              <h2 class="home-heading-two heading-read">What we offer</h2>
            </div>
            <div class="serv-row">
              <div class="ms-serv">
                <div class="ms-serv-img">
                  <img
                    alt="certificate"
                    src={img1}
                  />
                </div>
                <div class="ms-serv-text">
                  <h3>IT Security Auditing &amp; Compliance</h3>
                  <p>
                    Detect risks, reduce losses and protect confidential data
                    with our specialized security procedures. Our range of
                    products like SSL certificates, Perimeter Network till End
                    Point security, IDS / IPS and SIEM / SOAR help avoid theft
                    of your intellectual property.
                  </p>
                </div>
              </div>
              <div class="ms-serv">
                <div class="ms-serv-img">
                  <img
                    alt="knowledge"
                    src={img3}
                  />
                </div>
                <div class="ms-serv-text">
                  <h3>IT Security Trainings</h3>
                  <p>
                    Safeguard your IT infrastructure against potential data
                    breaches and cyberattacks with our IT Security courses. We
                    offer the most popular ones like CEH, CISA, CISM, CISSP that
                    build knowledge and ensure business resilience -
                    facilitating your long-term strategic plan.
                  </p>
                </div>
              </div>
              <div class="ms-serv">
                <div class="ms-serv-img">
                  <img
                    alt="examination"
                    src={img2}
                  />
                </div>
                <div class="ms-serv-text">
                  <h3>Technical Security Assessment Services</h3>
                  <p>
                    We provide a comprehensive evaluation of your current
                    security architecture, pointing out potential
                    vulnerabilities and threats, by using insights that identify
                    the weaknesses in your information lifeblood.
                  </p>
                </div>
              </div>
              <div class="ms-serv">
                <div class="ms-serv-img">
                  <img
                    alt="security"
                    src={img4}
                  />
                </div>
                <div class="ms-serv-text">
                  <h3>IT Security Solution Deployment Services</h3>
                  <p>
                    Our consulting services make it easy to ensure compliance
                    with multiple standards and security policies. Our expert
                    security control implementation and solutions revolve around
                    PCI-DSS, GDPR, SOC and many others.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="sf-proc-section">
          <div class="container">
            <div class="sf-proc-title">
              <h2 class="home-heading-two">Our Process</h2>
            </div>
            <div class="sf-proc-wrapper">
              <div class="side-img">
                <img
                  alt="Shape"
                  src={img5}
                />
              </div>
              <div class="sf-cards">
                <div class="sf-card">
                  <div class="sf-card-number">1</div>
                  <div class="sf-card-text">
                    <h3>Analysis</h3>
                    <p>
                      Our IT consulting advisors undertake a comprehensive
                      assessment of your existing organizational assets,
                      products and systems; understanding their vulnerabilities.
                    </p>
                  </div>
                </div>
                <div class="sf-card">
                  <div class="sf-card-number">2</div>
                  <div class="sf-card-text">
                    <h3>Strategy</h3>
                    <p>
                      This in-depth analysis enables us to identify potential
                      threats and suggest solutions that are in sync with the
                      innovative trends and technologies in the security field.
                    </p>
                  </div>
                </div>
                <div class="sf-card">
                  <div class="sf-card-number">3</div>
                  <div class="sf-card-text">
                    <h3>Implementation</h3>
                    <p>
                      Working alongside you, our security experts ensure that
                      new processes, policies and systems get adopted so that
                      dangers are eliminated and efficiency is boosted.
                    </p>
                  </div>
                </div>
                <div class="sf-card">
                  <div class="sf-card-number">4</div>
                  <div class="sf-card-text">
                    <h3>Reporting</h3>
                    <p>
                      Our security experts provide you with on-going performance
                      reporting and suggestions for further improvement so that
                      your business always stays protected.
                    </p>
                  </div>
                </div>
              </div>
              <div class="side-img">
                <img
                  alt="Shape"
                  src={img5}
                />
              </div>
            </div>
            <div class="sf-proc-btn">
              <a href="#cta-dark" class="custo-btn" id="stylebtn">
                Get Started <i class="la la-arrow-right"></i>
              </a>
            </div>
          </div>
        </section>
        <section class="service-section cybers2">
          <div class="container">
            <div class="offer-title">
              <p>WHY intelliper solution's?</p>
              <h2 class="home-heading-two heading-read">
                Stop threats. Prove compliance. Grow your business.
              </h2>
            </div>
            <div class="offer-cards cyber-c">
              <div class="card">
                <img
                  alt="risk knowledge"
                  src={img6}
                />
                <h3>Deep cyber risk knowledge</h3>
                <p>
                intelliper solution's dedicated Cyber Underwriters &amp; Risk Engineers stay
                  up to date with evolving risks to help you protect your
                  business and build cyber resilience.
                </p>
              </div>
              <div class="card">
                <img
                  alt="bug"
                  src={img7}
                />
                <h3>Unrivaled Hunting</h3>
                <p>
                  Proactive identification and addressing of threats,
                  vulnerabilities, and other security issues means that we take
                  care of threats before they even occur.
                </p>
              </div>
              <div class="card">
                <img
                  alt="compliance"
                  src={img8}
                />
                <h3>Certifications and Compliance</h3>
                <p>
                  We strictly adhere to technology certifications and industry
                  compliance which is critical to maintaining a robust and
                  reliable security profile.
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

        <section>
           
          <div class="certif-wrap">
            <div class="left-certf">
               
              <div class="left-wrap">
                 
                <div class="title">
                   
                  <h2 class="home-heading-two heading-read">
                    Our personnel certifications
                  </h2> 
                </div> 
                <div class="logo-cont">
                   
                  <ul>
                     
                    <li>
                      <img
                        alt="CGEIT"
                        src={cgeit}
                      />
                    </li> 
                    <li>
                      <img
                        alt="CRISC"
                        src={crisc}
                      />
                    </li> 
                    <li>
                      <img
                        alt="CISM"
                        src={cism}
                      />
                    </li> 
                    <li>
                      <img
                        alt="CISA"
                        src={cisa}
                      />
                    </li>
                    <li>
                      <img
                        alt="CISSP"
                        src={cissp}
                      />
                    </li>
                    <li>
                      <img
                        alt="OFFENSIVE"
                        src={os}
                      />
                    </li> 
                    <li>
                      <img
                        alt="MICROSOFT"
                        src={ms}
                      />
                    </li>
                    <li>
                      <img
                        alt="ETHICAL HACKER"
                        src={eh}
                      />
                    </li>
                    <li>
                      <img
                        alt="CPPT GOLD"
                        src={ecppt}
                      />
                    </li>
                  </ul> 
                </div> 
              </div> 
            </div> 
            <div class="right-certf">
               
              <div class="right-wrap">
                 
                <div class="title">
                   
                  <h2 class="home-heading-two heading-read">
                    Our technology partnerships
                  </h2> 
                </div> 
                <div class="logo-cont">
                   
                  <ul>
                    <li>
                      <img
                        alt="SYMANTEC"
                        src={symantec}
                      />
                    </li>
                    <li>
                      <img
                        alt="VeriSign"
                        src={verisign}
                      />
                    </li>
                    <li>
                      <img
                        alt="SHOPHOS"
                        src={sophos}
                      />
                    </li>
                    <li>
                      <img
                        alt="DEVICE LOCK"
                        src={devicelock}
                      />
                    </li>
                    <li>
                      <img
                        alt="TRUST WAVE"
                        src={trustwave}
                      />
                    </li>
                    <li>
                      <img
                        alt="sslstore"
                        src={sslstore}
                      />
                    </li> 
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
              
              
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
