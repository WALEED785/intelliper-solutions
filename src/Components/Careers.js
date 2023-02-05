import React from "react";
import Footer from "./Footer";
import Header from "./header";
import career from '../assets/images/resource/career.png'
import service1 from '../assets/images/resource/service-1.png'
import service2 from '../assets/images/resource/service-2.png'
import service3 from '../assets/images/resource/service-3.png'

function Careers() {
  return (
    <>
      <div className="page-wrapper">
        <Header />
        <section className="careers-title-section">
          <div className="auto-container">
            <div className="upper-box">
              <div className="inner-box">
                {/* <div className="title">Careers</div> */}
                <h1>
                  Do you want to work with us? <br /> Then send your cv
                </h1>
              </div>
            </div>
            <div className="lower-box">
              <div className="row clearfix">
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h2>
                      Come on to work with us! Find your place in our
                      magnificent team.
                    </h2>
                    <div className="text">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                  </div>
                </div>
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image">
                      <img src={career} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="careers-section">
          <div className="auto-container">
            <div className="career-block">
              <div className="inner-box">
                <div className="content">
                  <div className="title">Full time</div>
                  <h4>
                    <a href="#" style={{textDecoration: "none"}}>Business Development Manager</a>
                  </h4>
                  <div className="text">
                    This position is about growth and we are looking for an
                    outstanding employee who will be interested in establishing
                    long-term relationships with potential clients all over the
                    world.
                  </div>
                  <div className="btn-box">
                    <a href="#" className="theme-btn btn-style-one" style={{textDecoration: "none"}}>
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="career-block">
              <div className="inner-box">
                <div className="content">
                  <div className="title">Full time</div>
                  <h4>
                    <a href="#" style={{textDecoration: "none"}}>Middle Project Manager</a>
                  </h4>
                  <div className="text">
                    This position is about growth and we are looking for an
                    outstanding employee who will be interested in establishing
                    long-term relationships with potential clients all over the
                    world.
                  </div>
                  <div className="btn-box">
                    <a href="#" className="theme-btn btn-style-one" style={{textDecoration: "none"}}>
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="career-block">
              <div className="inner-box">
                <div className="content">
                  <div className="title">Full time</div>
                  <h4>
                    <a href="#" style={{textDecoration: "none"}}>IT Desktop Support</a>
                  </h4>
                  <div className="text">
                    This position is about growth and we are looking for an
                    outstanding employee who will be interested in establishing
                    long-term relationships with potential clients all over the
                    world.
                  </div>
                  <div className="btn-box">
                    <a href="#" className="theme-btn btn-style-one" style={{textDecoration: "none"}}>
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="career-block">
              <div className="inner-box">
                <div className="content">
                  <div className="title">Full time</div>
                  <h4>
                    <a href="#" style={{textDecoration: "none"}}>IT Operations Specialist</a>
                  </h4>
                  <div className="text">
                    This position is about growth and we are looking for an
                    outstanding employee who will be interested in establishing
                    long-term relationships with potential clients all over the
                    world.
                  </div>
                  <div className="btn-box">
                    <a href="#" className="theme-btn btn-style-one" style={{textDecoration: "none"}}>
                      Apply Now
                    </a>
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

export default Careers;
