import React from "react";
import Footer from "../Footer";
import Header from "../header";

import service10 from "../../assets/images/resource/service-10.png";
import aws from '../../assets/images/awz/aws-sec-img.svg'
import img1 from '../../assets/images/awz/aws-consulting--icon.svg'
import img2 from '../../assets/images/awz/aws-computing--icon.svg'
import img3 from '../../assets/images/awz/aws-integration--icon.svg'
import img4 from '../../assets/images/awz/aws-backend--icon.svg'
import img5 from '../../assets/images/awz/aws-scaling--icon.svg'
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

export default function AWSConsultingServices() {
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
                    Amazon Web Services
                  </p>
                  <h2>We help you move your business to AWS cloud</h2>
                  <div class="text">
                    We provide you reliable, scalable, and inexpensive cloud
                    computing services to scale your businesses.
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

        <section>
          {" "}
          <div class="container aws-wrap">
            {" "}
            <div class="img-aws">
              <img
                alt="AWS"
                src={aws}
              />
            </div>{" "}
            <div class="text-aws">
              {" "}
              <p class="sub-aws">WHY US?</p>{" "}
              <h2 class="home-heading-two ">AWS At intelliper Solution</h2>{" "}
              <p class="body-text">
                Amazon Web Services is a cloud computing platform with extended
                functionalities as it introduces the concoction of Platform as a
                Service, Infrastructure as a Service and Software as a Service.
              </p>{" "}
              <p class="body-text">
              intelliper Solution specializes in building web &amp; mobile applications
                using AWS. Our certified developers build secure, scalable and
                high-performance applications. We deliver innovative solutions
                and transform complex experiences into products that customers
                love.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section class="offer-section nitro-offscreen">
          {" "}
          <div class="container">
            {" "}
            <div class="offer-title">
              {" "}
              <h2 class="home-heading-two">What We Offer You</h2>{" "}
            </div>{" "}
            <div class="offer-cards">
              {" "}
              <div class="card">
                <img
                  alt="Consulting"
                  src={img1}
                />
                <h3>Consulting</h3>{" "}
                <p>
                  Our AWS consultants take an overall view of your business
                  landscape and provide you with a fully scoped and budgeted
                  solution architecture.
                </p>{" "}
              </div>{" "}
              <div class="card">
                <img
                  alt="Implementation"
                  src={img2}
                />
                <h3>Implementation</h3>{" "}
                <p>
                  We have hands-on experience in developing, implementing &amp;
                  migrating apps on leading cloud platforms to help you scale
                  your business.
                </p>{" "}
              </div>{" "}
              <div class="card">
                <img
                  alt="Integrations"
                  src={img3}
                />
                <h3>Integrations</h3>{" "}
                <p>
                  From integrating apps with AWS hosted data sources, to
                  connecting multiple complex enterprise scale solutions, we do
                  it all.
                </p>{" "}
              </div>{" "}
              <div class="card">
                <img
                  alt="Backend Development"
                  src={img4}
                />{" "}
                <h3>Backend Development</h3>{" "}
                <p>
                  We help mobile and web app developers build and scale their
                  solutions through AWS based integrated backend.
                </p>{" "}
              </div>{" "}
              <div class="card">
                <img
                  alt="Scaling"
                  src={img5}
                />{" "}
                <h3>Scaling</h3>{" "}
                <p>
                  We can help scale your backend to handle growing application
                  usage, to avoid downtime, resulting in efficient business
                  operations.
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
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
                    <img src={fitr} alt="" />
                  </div>
                  <h3>
                    <Link
                      to="/case-studies"
                      style={{ textDecoration: "none", color: "black"  }}
                    >
                      Fitr Pro
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
