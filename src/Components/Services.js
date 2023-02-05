import React from "react";
import Footer from "./Footer";
import Header from "./header";

import professional from '../assets/images/resource/professional.png';
import business7 from '../assets/images/resource/business-7.png';
import business8 from '../assets/images/resource/business-8.png';
import business9 from '../assets/images/resource/business-9.png';
import business10 from '../assets/images/resource/business-10.png';
import process1 from '../assets/images/resource/process-1.png';
import process2 from '../assets/images/resource/process-2.png';
import process3 from '../assets/images/resource/process-3.png';
import process4 from '../assets/images/resource/process-4.png';
import business1 from '../assets/images/resource/business-1.png';
import business2 from '../assets/images/resource/business-2.png';
import business3 from '../assets/images/resource/business-3.png';
import business4 from '../assets/images/resource/business-4.png';
import business5 from '../assets/images/resource/business-5.png';
import business6 from '../assets/images/resource/business-6.png';
// custom-software-development-services
export default function Services() {
  return (
    <>
      <div className="page-wrapper">
        <Header />
        <section className="page-title-section">
          <div className="auto-container">
            <div className="content-boxed">
              <div className="inner-box">
                <div className="title">Services</div>
                <h2>
                  We provide truly prominent <br /> IT solutions.
                </h2>
                <div className="text">
                  We can quickly turn your ideas into cost-effective precision
                  parts and components <br /> that deliver for your most
                  demanding applications.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="professional-section">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <h2>
                    Our IT Professionals <br /> ready to give you service.
                  </h2>
                  <div className="text">
                    <p>
                      From Web’s earliest days, our business has been built on
                      the principles of fairness, integrity, and respect for
                      people.{" "}
                    </p>
                    <p>
                      Lorem ipsum was popularized in the 1960s with Letraset's
                      dry-transfer sheets, and later entered the digital world
                      via Aldus PageMaker
                    </p>
                  </div>
                </div>
              </div>

              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="image titlt" data-tilt data-tilt-max="4">
                    <img src={professional} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="business-section-two">
          <div className="auto-container">
            <div className="sec-title centered">
              <h2>
                Here are some of <br /> solutions suiting your business needs.
              </h2>
              <div className="text">
                Choose your coach training based on the program offerings, your
                instinct, <br /> We are different from a traditional IT staffing
                agency
              </div>
            </div>
            <div className="inner-container">
              <div className="row clearfix">
                <div className="business-block-two col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-box">
                    <div className="content">
                      <div className="icon">
                        <img src={business7} alt="" />
                      </div>
                      <div className="code"></div>
                      <h3>
                        <a href="case-detail.html">Software Development</a>
                      </h3>
                      <div className="text">
                        Create complex enterprise software, ensure reliable
                        software integration, modernise your legacy system.
                      </div>
                      <a className="explore" href="case-detail.html">
                        Explore More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="business-block-two col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-box">
                    <div className="content">
                      <div className="icon">
                        <img src={business8} alt="" />
                      </div>
                      <div className="code"></div>
                      <h3>
                        <a href="case-detail.html">Web Development</a>
                      </h3>
                      <div className="text">
                        Create complex enterprise software, ensure reliable
                        software integration, modernise your legacy system.
                      </div>
                      <a className="explore" href="case-detail.html">
                        Explore More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="business-block-two col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-box">
                    <div className="content">
                      <div className="icon">
                        <img src={business9} alt="" />
                      </div>
                      <div className="code"></div>
                      <h3>
                        <a href="case-detail.html">Product & Design</a>
                      </h3>
                      <div className="text">
                        Create complex enterprise software, ensure reliable
                        software integration, modernise your legacy system.
                      </div>
                      <a className="explore" href="case-detail.html">
                        Explore More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="business-block-two col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-box">
                    <div className="content">
                      <div className="icon">
                        <img src={business10} alt="" />
                      </div>
                      <div className="code"></div>
                      <h3>
                        <a href="case-detail.html">Analytic Solutions</a>
                      </h3>
                      <div className="text">
                        Create complex enterprise software, ensure reliable
                        software integration, modernise your legacy system.
                      </div>
                      <a className="explore" href="case-detail.html">
                        Explore More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="process-section style-two">
          <div className="auto-container">
            <div className="sec-title centered">
              <div className="title">Services</div>
              <h2>IT Solutions and Technology Startup</h2>
            </div>
            <div className="row clearfix">
              <div className="process-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <img src={process1} alt="" />
                  </div>
                  <h3>
                    <a href="case-detail.html">Desktop Computing</a>
                  </h3>
                  <div className="text">
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>
              </div>

              <div className="process-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <img src={process2} alt="" />
                  </div>
                  <h3>
                    <a href="case-detail.html">Web Development</a>
                  </h3>
                  <div className="text">
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>
              </div>

              <div className="process-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <img src={process3} alt="" />
                  </div>
                  <h3>
                    <a href="case-detail.html">IT Management</a>
                  </h3>
                  <div className="text">
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>
              </div>

              <div className="process-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <img src={process4} alt="" />
                  </div>
                  <h3>
                    <a href="case-detail.html">Data Security</a>
                  </h3>
                  <div className="text">
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="business-section style-two">
          <div className="auto-container">
            <div className="sec-title centered">
              <h2>
                Here are some of solutions suiting <br /> your business needs.
              </h2>
              <div className="text">
                Choose your coach training based on the program offerings, your
                instinct, <br /> We are different from a traditional IT staffing
                agency
              </div>
            </div>
            <div className="row clearfix">
              <div className="business-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <div className="color-circle"></div>
                    <img src={business1} alt="" />
                  </div>
                  <h3>
                    <a href="case-detail.html">Software Development</a>
                  </h3>
                  <div className="text">
                    Create complex enterprise software, ensure reliable software
                    integration, modernise your legacy system.
                  </div>
                  <a className="explore" href="case-detail.html">
                    Explore More
                  </a>
                </div>
              </div>

              <div className="business-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <div className="color-circle"></div>
                    <img src={business2} alt="" />
                  </div>
                  <h3>
                    <a href="case-detail.html">Software Development</a>
                  </h3>
                  <div className="text">
                    Create complex enterprise software, ensure reliable software
                    integration, modernise your legacy system.
                  </div>
                  <a className="explore" href="case-detail.html">
                    Explore More
                  </a>
                </div>
              </div>

              <div className="business-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <div className="color-circle"></div>
                    <img src={business3} alt="" />
                  </div>
                  <h3>
                    <a href="case-detail.html">Product Design</a>
                  </h3>
                  <div className="text">
                    Create complex enterprise software, ensure reliable software
                    integration, modernise your legacy system.
                  </div>
                  <a className="explore" href="case-detail.html">
                    Explore More
                  </a>
                </div>
              </div>

              <div className="business-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <div className="color-circle"></div>
                    <img src={business4} alt="" />
                  </div>
                  <h3>
                    <a href="case-detail.html">Analytic Solutions</a>
                  </h3>
                  <div className="text">
                    Create complex enterprise software, ensure reliable software
                    integration, modernise your legacy system.
                  </div>
                  <a className="explore" href="case-detail.html">
                    Explore More
                  </a>
                </div>
              </div>

              <div className="business-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <div className="color-circle"></div>
                    <img src={business5} alt="" />
                  </div>
                  <h3>
                    <a href="case-detail.html">Internet Marketing</a>
                  </h3>
                  <div className="text">
                    Create complex enterprise software, ensure reliable software
                    integration, modernise your legacy system.
                  </div>
                  <a className="explore" href="case-detail.html">
                    Explore More
                  </a>
                </div>
              </div>

              <div className="business-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <div className="color-circle"></div>
                    <img src={business6} alt="" />
                  </div>
                  <h3>
                    <a href="case-detail.html">IT Strategy Consultancy</a>
                  </h3>
                  <div className="text">
                    Create complex enterprise software, ensure reliable software
                    integration, modernise your legacy system.
                  </div>
                  <a className="explore" href="case-detail.html">
                    Explore More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="newsletter-section">
          <div className="auto-container">
            <div className="inner-container">
              <div className="row clearfix">
                <div className="form-column col-lg-7 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="title-box">
                      <h2>Signup to our newsletter</h2>
                      <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed <br /> do eiusmod tempor incididunt{" "}
                      </div>
                    </div>
                    <div className="newsletter-form">
                      <form method="post" action="contact.html">
                        <div className="form-group">
                          <span className="icon fa fa-envelope-o"></span>
                          <input
                            type="email"
                            name="email"
                            value=""
                            placeholder="Enter your eamil address"
                            required
                          />
                          <button
                            type="submit"
                            className="flaticon-next-2 submit-btn"
                          ></button>
                        </div>
                      </form>
                    </div>
                    <div className="member">
                      Already member <a href="services.html#">Sign in</a>
                    </div>
                  </div>
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
