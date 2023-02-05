import React from "react";
import Footer from "../Footer";
import Header from "../header";

import service10 from "../../assets/images/resource/service-10.png";
import automation from '../../assets/images/shopify/shopify-automation.svg'
import backend from '../../assets/images/shopify/shopify-backend.svg'
import integration from '../../assets/images/shopify/shopify-integration--icon.svg'
import programming from '../../assets/images/shopify/shopify-programming.svg'
import settings from '../../assets/images/shopify/shopify-settings.svg'
import template from '../../assets/images/shopify/shopify-template-change.svg'
import support from '../../assets/images/shopify/shopify-support.svg'
import shape from '../../assets/images/shopify/sf-process--shape.svg'
import security from '../../assets/images/shopify/shopify-cyber-security.svg'
import group from '../../assets/images/shopify/shopify-group.svg'
import mobile from '../../assets/images/shopify/shopify-mobile--icon.svg'
import pen from '../../assets/images/shopify/shopify-pen.svg'
import signals from '../../assets/images/shopify/shopify-signals.svg'
import Vector from '../../assets/images/shopify/shopify-Vector.svg'
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

export default function ShopifyDevelopmentServices() {
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
                    Shopify Development Services
                  </p>
                  <h2>We develop quality Shopify Solutions</h2>
                  <div class="text">
                    Hire the Top Shopify Development Company in USA to bring
                    your online store to life
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

        <section class="service-section">
          <div class="container">
            {" "}
            <div class="offer-title">
              <h2 class="home-heading-two">Our Shopify Services</h2>{" "}
            </div>{" "}
            <div class="offer-cards">
              {" "}
              <div class="card">
                {" "}
                <img
                  alt="Settings"
                  src={settings}
                />
                <h3>Shopify Store Setup Services</h3>{" "}
                <p>
                  Get your online storefront up and running quickly by
                  leveraging our Shopify theme libraries. We provide Shopify
                  store setup services to help you launch your Shopify website
                  quickly.
                </p>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <img
                  alt="Template Change"
                  src={template}
                />
                <h3>Themes &amp; Customization Services</h3>{" "}
                <p>
                  Make your Shopify store stand out from the crowd with a high
                  quality user experience. intelliper solution's has expert Shopify designers to
                  ensure that your Shopify store is visually appealing on mobile
                  and web.{" "}
                </p>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <img
                  alt="Integration"
                  src={integration}
                />
                <h3>Shopify Integration Services</h3>{" "}
                <p>
                  Integrate third party components and platforms with Shopify to
                  provide a seamless experience. Our Shopify integration
                  services help make your ecommerce software versatile and
                  adaptable.
                </p>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <img
                  alt="Backend"
                  src={backend}                />
                <h3>Custom Development Services</h3>{" "}
                <p>
                  We build custom Shopify websites to add any additional
                  functionality that you require in your store. Our Shopify
                  website development services cater to all your E-Commerce
                  development needs.
                </p>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <img
                  alt="Programming"
                  src={programming}
                />
                <h3>Shopify Plus Development Services</h3>{" "}
                <p>
                  We help enterprises develop their E-Commerce platforms which
                  can handle over 10,000 transactions per minute. Our Shopify
                  developers understand enterprise expectations and always
                  deliver on them.
                </p>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <img
                  alt="Automation"
                  src={automation}
                />
                <h3>Shopify Migration Services</h3>{" "}
                <p>
                  Whether you are moving to Shopify from a physical store or an
                  online platform, we have got you covered. Our expert Shopify
                  developers cater to all your Shopify migration needs.
                </p>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <img
                  alt="Support"
                  src={support}
                />
                <h3>Maintenance and Support Services</h3>{" "}
                <p>
                  We help you ensure zero business loss by keeping your online
                  store running smoothly. Our Shopify support and maintenance
                  services keep your shopify website health and bug free.
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

        <section class="sf-proc-section nitro-offscreen">
          <div class="container sf-proc-title">
            {" "}
            <h2 class="home-heading-two">Our Process</h2>{" "}
          </div>
          <div class="sf-proc-wrapper">
            {" "}
            <div class="side-img">
              <img
                alt="Process Shape"
                src={shape}
              />
            </div>{" "}
            <div class="sf-cards">
              {" "}
              <div class="sf-card">
                {" "}
                <div class="sf-card-number">1</div>{" "}
                <div class="sf-card-text">
                  {" "}
                  <h3>Discovery</h3>{" "}
                  <p>
                    This stage of the process is aimed at identifying your
                    e-commerce needs and defining functional and non-functional
                    specifications for your Shopify app
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div class="sf-card">
                {" "}
                <div class="sf-card-number">2</div>{" "}
                <div class="sf-card-text">
                  {" "}
                  <h3>Shopify Prototyping and Design</h3>{" "}
                  <p>
                    Our Shopify designers build prototypes for your online store
                    to help you visualize what your Shopify store will look like
                    when it is complete.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div class="sf-card">
                {" "}
                <div class="sf-card-number">3</div>{" "}
                <div class="sf-card-text">
                  {" "}
                  <h3>Shopify Development</h3>{" "}
                  <p>
                    We develop your Shopify / Shopify Plus ecommerce store based
                    on agreed upon requirements and ensure that your product
                    meets the highest quality standards.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div class="sf-card">
                {" "}
                <div class="sf-card-number">4</div>{" "}
                <div class="sf-card-text">
                  {" "}
                  <h3>Migration and Launch</h3>{" "}
                  <p>
                    Once your Shopify app is developed and ready, we help you
                    migrate your existing store data to your Shopify store, and
                    stand with you through launch.
                  </p>{" "}
                </div>{" "}
              </div>
              <div class="sf-card">
                {" "}
                <div class="sf-card-number">5</div>{" "}
                <div class="sf-card-text">
                  {" "}
                  <h3>Hypercare and Support</h3>{" "}
                  <p>
                    When your new Shopify app has been developed and live, our
                    engineers stay engaged with you to ensure that everything
                    keeps running smoothly.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="side-img">
              {" "}
              <img
                alt="Process Shape"
                src={shape}
              />
            </div>{" "}
          </div>{" "}
          <div class="sf-proc-btn">
            {" "}
            <a href="#cta-dark" class="service-btn" id="getstarted-btn">
              Get Started <i class="la la-arrow-right"></i>
            </a>{" "}
          </div>{" "}
        </section>
        <section class="stat-section nitro-offscreen">
          {" "}
          <div class="container">
            {" "}
            <div class="stat-title">
              {" "}
              <h2 class="home-heading-two">
                Why Choose intelliper solution's for E-commerce Development
              </h2>{" "}
            </div>{" "}
            <div class="stat-wrapper">
              {" "}
              <div class="stat-row">
                {" "}
                <div class="stat-card c1">
                  {" "}
                  <h2>12</h2> <p>Years of E-commerce Experience</p>{" "}
                </div>{" "}
                <div class="stat-card c2">
                  {" "}
                  <h2>80+</h2> <p>Shopify certified Experts</p>{" "}
                </div>{" "}
              </div>{" "}
              <div class="stat-row">
                {" "}
                <div class="stat-card c3">
                  {" "}
                  <h2>53</h2> <p>E-commerce Platforms Delivered</p>{" "}
                </div>{" "}
                <div class="stat-card c4">
                  {" "}
                  <h2>30M+</h2> <p>In Annual Online Sale</p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>

        <section class="service-section nitro-offscreen">
          {" "}
          <div class="container">
            <div class="offer-title">
              {" "}
              <h2 class="home-heading-two">
                Advantages of choosing intelliper solution's as your shopify partner
              </h2>{" "}
            </div>{" "}
            <div class="offer-cards">
              {" "}
              <div class="card">
                <img
                  alt="Shopify Group"
                  src={group}
                />
                <h3>Top Shopify Developers</h3>{" "}
                <p>
                  Our Shopify development team is highly experienced in
                  providing top quality shopify services to our clients, with
                  several resources who have been working with Shopify since its
                  inception.
                </p>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <img
                  alt="Mobile"
                  src={mobile}
                />
                <h3>Mobile First Approach</h3>{" "}
                <p>
                  More than half of the ecommerce sales are made on mobile
                  devices, so we make sure that the shopify experiences we
                  deliver are responsive and visually appealing on mobile
                  devices.
                </p>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <img
                  alt="Time"
                  src={Vector}
                />
                <h3>Short Time to Market</h3>{" "}
                <p>
                  Our Shopify development team fully understands the importance
                  of timely launches, and we go above and beyond to ensure that
                  you meet your ecommerce store launch deadlines.
                </p>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <img
                  alt="Signals"
                  src={signals}
                />
                <h3>Technically Diverse Teams</h3>{" "}
                <p>
                  We boast upon the number of technologies we work with, and
                  this helps us develop fully integrated Shopify stores that
                  work seamlessly with other platforms.
                </p>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <img
                  alt="Pen"
                  src={pen}
                />
                <h3>Shopify Design Expertise</h3>{" "}
                <p>
                  We have Dedicated Shopify UI/UX Engineers who are expert in
                  ergonomics of ecommerce stores. They help us develop Shopify
                  products that consumers find pleasing to use.
                </p>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <img
                  alt="Cyber Security"
                  src={security}
                />
                <h3>Cyber Security Guarenteed</h3>{" "}
                <p>
                  By leveraging our ecommerce cybersecurity expertise and
                  Shopify's secure architecture, our Shopify developers deliver
                  products that are reliable and secure from day one.
                </p>{" "}
              </div>{" "}
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
              </div><div className="case-block col-lg-4 col-md-6 col-sm-12">
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
              
              
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
