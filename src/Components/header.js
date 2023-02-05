import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { Col, Container, Dropdown, NavDropdown, Row } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <header className="main-header">
        <div className="header-upper">
          <div className="auto-container clearfix">
            <div className="pull-left logo-box">
              <div className="logo">
                <Link to='/'>
                  <img src={logo} alt="Site Logo" title="" />
                </Link>
              </div>
            </div>

            <div className="nav-outer clearfix">
              <div className="mobile-nav-toggler">
                <span className="icon flaticon-menu"></span>
              </div>
              <nav className="main-menu navbar-expand-md">
                <div className="navbar-header">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>

                <div
                  className="navbar-collapse collapse clearfix"
                  id="navbarSupportedContent"
                >
                  <ul className="navigation clearfix">
                    {/* <li className="current">
                        <Link to="/" style={{ textDecoration: "none"}}>Home</Link>
                    </li> */}
                    <li className="dropdown">
                      <a>Services</a>
                      <ul>
                        <li>
                          <Link to="/custome-software" style={{ textDecoration: "none"}}>Custom Software Development</Link>
                        </li>
                        <li>
                          <Link to="/web-development-software" style={{ textDecoration: "none"}}>Web App Development</Link>
                        </li>
                        <li>
                          <Link to="/mobile-app-development-software" style={{ textDecoration: "none"}}>Mobile App Development</Link>
                        </li>
                        <li>
                          <Link to="/ui-ux-services" style={{ textDecoration: "none"}}>UI/UX Design</Link>
                        </li>
                        <li>
                          <Link to="/quality-assurance-and-testing-services" style={{ textDecoration: "none"}}>QA & Testing</Link>
                        </li>
                        <li>
                          <Link to="/embedded-software-development" style={{ textDecoration: "none"}}>Embedded Software Development Services</Link>
                        </li>
                        <li>
                          <Link to="/devops-services" style={{ textDecoration: "none"}}>DevOps</Link>
                        </li>
                        <li>
                          <Link to="/discovery-workshop-services" style={{ textDecoration: "none"}}>Discovery Workshop</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a>Solutions</a>
                      <ul>
                        <li>
                          <Link to="/sales-force-consulting" style={{ textDecoration: "none"}}>Salesforce</Link>
                        </li>
                        <li>
                          <Link to="/servicenow-consulting-services" style={{ textDecoration: "none"}}>ServiceNow</Link>
                        </li>
                        <li>
                          <Link to="/mulesoft-consulting-services" style={{ textDecoration: "none"}}>MuleSoft</Link>
                        </li>
                        <li>
                          <Link to="/aws-consulting-services" style={{ textDecoration: "none"}}>AWS</Link>
                        </li>
                        <li>
                          <Link to="/cyber-security-services" style={{ textDecoration: "none"}}>Cyber Security</Link>
                        </li>
                        <li>
                          <Link to="/business-process-outsourcing-services" style={{ textDecoration: "none"}}>BPO</Link>
                        </li>
                        <li>
                          <Link to="/cloud-migration-services" style={{ textDecoration: "none"}}>Cloud Migration</Link>
                        </li>
                        <li>
                          <Link to="/shopify-development-services" style={{ textDecoration: "none"}}>Shopify</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a>Emerging Technologies</a>
                      <ul>
                        <li>
                          <Link to="/data-science-consulting-services" style={{ textDecoration: "none"}}>Data Science & AI</Link>
                        </li>
                        <li>
                          <Link to="/blockchain-consulting-services" style={{ textDecoration: "none"}}>Blockchain</Link>
                        </li>
                        <li>
                          <Link to="/internet-of-things-iot-services" style={{ textDecoration: "none"}}>Internet of Things</Link>
                        </li>
                        <li>
                          <Link to="/augmented-reality-virtual-reality-services" style={{ textDecoration: "none"}}>AR/VR</Link>
                        </li>
                        <li>
                          <Link to="/robotic-process-automation-services" style={{ textDecoration: "none"}}>Robotic Process Automation</Link>
                        </li>
                        <li>
                          <Link to="/e-learning-software-development-services" style={{ textDecoration: "none"}}>E-learning</Link>
                        </li>
                        <li>
                          <Link to="/healthcare-software-development-services" style={{ textDecoration: "none"}}>Healthcare</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to='/case-studies' style={{ textDecoration: "none"}}>Case Studies</Link>
                    </li>
                    <li className="current dropdown">
                      <a>Company</a>
                      <ul>
                        <li>
                          <Link to="/about" style={{ textDecoration: "none"}}>About Us</Link>
                        </li>
                        <li>
                          <Link to="/careers" style={{ textDecoration: "none"}}>Careers</Link>
                        </li>
                        {/* <li>
                          <Link to="/choose-us" style={{ textDecoration: "none"}}>Why Choose Us</Link>
                        </li> */}
                      </ul>
                    </li>
                    <li>
                        <Link to="/contact" style={{ textDecoration: "none"}}>Contact</Link>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="outer-box clearfix">
                <div className="btn-box">
                <Link to='/contact' style={{ textDecoration: "none"}} className="btn-style-one theme-btn">
                    <span className="txt">
                      <i className="flaticon-call"></i>Book a Call
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-header">
          <div className="auto-container clearfix">
            <div className="logo pull-left">
              <a href="index.html" title="">
                <img src={logo} alt="" title="" />
              </a>
            </div>
            <div className="pull-right">
              <nav className="main-menu"></nav>
              <div className="outer-box clearfix">
                <div className="btn-box">
                  <a href="contact.html" className="btn-style-one theme-btn">
                    <span className="txt">
                      <i className="flaticon-padlock"></i>Book a Call
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-menu">
          <div className="menu-backdrop"></div>
          <div className="close-btn">
            <span className="icon flaticon-multiply"></span>
          </div>

          <nav className="menu-box">
            <div className="nav-logo">
              <a href="index.html">
                <img src={logo} alt="" title="" />
              </a>
            </div>
            <div className="menu-outer"></div>
          </nav>
        </div>
      </header>
    </div>
  );
}
