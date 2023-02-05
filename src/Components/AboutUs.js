import React from "react";
import Footer from "./Footer";
import Header from "./header";
import keep_promises from "../assets/images/aboutUs/keep-promises--icon.svg";
import new_jhanda from "../assets/images/aboutUs/new-jhanda.svg";
import be_empathetic from "../assets/images/aboutUs/be-empathetic--icon.svg";
import be_curious from "../assets/images/aboutUs/be-curious--icon.svg";
import support_maintenance from "../assets/images/aboutUs/support-maintenance--icon.svg";
import service_discovry from "../assets/images/aboutUs/service-discovry-workshop.svg";
import cyber_security from "../assets/images/aboutUs/cyber-security--icon.svg";
import service_ui from "../assets/images/aboutUs/service-ui-ux.svg";
import service_custom from "../assets/images/aboutUs/service-custom-software.svg";
import service_dedicated from "../assets/images/aboutUs/service-dedicated-teams.svg";
import salesforce from "../assets/images/aboutUs/service-salesforce.svg";
import microsoft_dynamics from "../assets/images/aboutUs/microsoft-dynamics--icon.svg";
import aws from "../assets/images/aboutUs/aws--icon.svg";
import mulesoft from "../assets/images/aboutUs/mulesoft--icon.svg";
import iot from "../assets/images/aboutUs/iot--icon.svg";
import big_data from "../assets/images/aboutUs/big-data--icon.svg";
import blockchain from "../assets/images/aboutUs/blockchain--icon.svg";
import ar_vr from "../assets/images/aboutUs/ar-vr--icon.svg";
import machine_learning from "../assets/images/aboutUs/machine-learning--icon.svg";
import doopley from "../assets/images/aboutUs/doopley--icon.webp";
import nestle from "../assets/images/aboutUs/nestle--icon.webp";
import nokia from "../assets/images/aboutUs/nokia--icon.webp";
import ivillage from "../assets/images/aboutUs/ivillage--icon.webp";
import ivillageciti from "../assets/images/aboutUs/citi--icon.webp";
import barclays from "../assets/images/aboutUs/barclays--icon.webp";
import sterlin from "../assets/images/aboutUs/sterlin--icon.webp";
import groupon from "../assets/images/aboutUs/groupon--icon.webp";
import wuxinextcode from "../assets/images/aboutUs/wuxinextcode--icon.webp";
import consert from "../assets/images/aboutUs/consert--icon.webp";
import lumatax from "../assets/images/aboutUs/lumatax--icon.webp";
import abb from "../assets/images/aboutUs/abb--icon.webp";
import telenor from "../assets/images/aboutUs/telenor--icon.webp";
import skerne from "../assets/images/aboutUs/skerne-kessler--icon.webp";
import honeywell from "../assets/images/aboutUs/honeywell--icon.webp";
import profile_pic from "../assets/images/aboutUs/profile-pic.png";
import award from "../assets/images/aboutUs/award-winner--iconn.svg";
import competence from "../assets/images/aboutUs/competence--iconn.svg";
import xp from "../assets/images/aboutUs/xp-engineers--icon.svg";
import year from "../assets/images/aboutUs/10-years-xp--icon.svg";
import quotes_ceo from "../assets/images/aboutUs/quotes-ceo.svg";
import img1 from "../assets/images/aboutUs/1.png";
import img2 from "../assets/images/aboutUs/2.png";
import img3 from "../assets/images/aboutUs/3.png";

export default function AboutUs() {
  return (
    <>
      <div className="page-wrapper">
        <Header />

        <section>
          <div class="services-banner company--banner">
            <div class="container main-wrapper company--wrapper">
              <div class="banner-img-left">
                <img
                  alt="About Us"
                  src={img1}
                />
              </div>
              <div class="content-wrapper company-content-wrap">
                <h1 class="title csd-title">
                  Delivering Exceptional Technology Solutions
                </h1>
                <h2 class="comp--txt text">
                  intelliper Solutions is a leading software development company located in
                  Lahore, Pakistan. We are committed to develop innovative
                  software solutions for leading enterprises in the world,
                  helping them grow their businesses using latest technology
                  solutions.
                </h2>
              </div>
              <div class="banner-img-right">
                <div class="small-circle-img">
                  <img
                    alt="banner-img"
                    src={img2}
                  />
                </div>
                <div class="large-circle-img">
                  <img
                    alt="banner-img"
                    src={img3}
                  />
              </div>
              </div>
            </div>
            <div class="banner-tech-stats">
              <div class="stats-inr-bnr">
                <ul>
                  <li>
                    <p class="about-tech-stacks-count">7+</p>
                    <p class="about-techs-title">Years In Business</p>
                  </li>
                  <li>
                    <p class="about-tech-stacks-count">200+</p>
                    <p class="about-techs-title">Clients Trust Us</p>
                  </li>
                  <li>
                    <p class="about-tech-stacks-count">30+</p>
                    <p class="about-techs-title">Industries Explored</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section class="stat-section cloudm-wrap ovceo-wrapper">
          <div class="container">
            <div class="ovceo--inr-wrap">
              <div class="ovceo--figure">
                <img
                  alt="CEO"
                  src={profile_pic}
                />
              </div>
              <div class="ovceo--content">
                <img
                  alt="quote"
                  src={quotes_ceo}
                />
                <h2 class="home-heading-two heading-read">Our Vision</h2>
                <p class="vision-description">
                  Our vision is to spread the power of technology across the
                  globe. We want to help companies grow their businesses through
                  innovative software solutions and digital transformation using
                  latest technological approaches.
                </p>
                <p class="ceo-name-designation">
                  MUNEEB ALI - Founder &amp; CEO
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="stat-section cloudm-wrap our-core-wrapper nitro-offscreen">
          <div class="container">
            <div class="stat-title cv--heading">
              <h2 class="home-heading-two">Our Core Values</h2>
              <p class="ocv--txt">
                From The Last Ten Years, We Have Been Building Great Software
                Products For Our Clients.
              </p>
            </div>
            <div class="stat-wrapper">
              <div class="stat-row">
                <div class="stat-card c1">
                  <img alt="Be Curious" src={be_curious} />
                  <h2 class="head">Be Curious</h2>
                  <p>
                    Learning never stops. Open your eyes and look around, the
                    more curious you are, the more possibilities you will open
                    throughout your lifetime.
                  </p>
                </div>
                <div class="stat-card c2">
                  <img alt="Be Empathetic" src={be_empathetic} />
                  <h2 class="head">Be Empathetic</h2>
                  <p>
                    We believe in the unique human ability to understand and
                    relate to others. Empathy helps us create more collaborative
                    and respectful workspaces.
                  </p>
                </div>
                <div class="stat-card c3">
                  <img alt="Take Ownership" src={new_jhanda} />
                  <h2 class="head">Take Ownership</h2>
                  <p>
                    We have established a culture of personal accountability,
                    where our employees possess the freedom and the courage to
                    take initiatives.
                  </p>
                </div>
                <div class="stat-card c4">
                  <img alt="Keep Promises" src={keep_promises} />
                  <h2 class="head">Keep Promises</h2>
                  <p>
                    We believe that trust is the key in all our relationships
                    and we take pride in delivering with Quality, precision and
                    integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="service-section nitro-offscreen">
          <div class="container">
            <div class="offer-title business-class-title">
              <div class="offer-title">
                <p>What We Do</p>
              </div>
              <h2 class="home-heading-two">Solve your toughest challenges</h2>
            </div>
            <nav class="wwd-nav-tabs">
              <ul class="wwd-nav-listing">
                <li class="wwd-nav-list ">
                  <button type="button" class="tablink wwd-nav-list-active">
                    <span>Software Development</span>
                  </button>
                </li>
              </ul>
            </nav>
            <div class="business-cards wwd-cards-grid" id="tab1">
              <div class="single-services-card">
                <div class="single-service">
                  <img alt="Custom Software Development" src={service_custom} />
                  <h3>Custom Software Development</h3>
                  <p>
                    We work with small to mid-sized companies to build
                    customized software solutions.
                  </p>
                </div>
              </div>
              <div class="single-services-card">
                <div class="single-service">
                  <img alt="Dedicated Teams" src={service_dedicated} />
                  <h3>Dedicated Teams</h3>
                  <p>
                    We grow your team using our development resources and
                    recruitment capabilities.
                  </p>
                </div>
              </div>
              <div class="single-services-card">
                <div class="single-service">
                  <img alt="UI/UX Design" src={service_ui} />
                  <h3>UI/UX Design</h3>
                  <p>
                    Our team of experienced product designers &amp; developers
                    help you build successful digital products.
                  </p>
                </div>
              </div>
              <div class="single-services-card">
                <div class="single-service">
                  <img alt="Cyber Security" src={cyber_security} />
                  <h3>Cyber Security</h3>
                  <p>
                    We provide information security solutions to protect your
                    business and customers.
                  </p>
                </div>
              </div>
              <div class="single-services-card">
                <div class="single-service">
                  <img alt="Discovery Workshop" src={service_discovry} />
                  <h3>Discovery Workshop</h3>
                  <p>
                    2 weeks collaborative workshop to define your idea from
                    business perspectives.
                  </p>
                </div>
              </div>
              <div class="single-services-card">
                <div class="single-service">
                  <img
                    alt="Support &amp; Maintenance"
                    src={support_maintenance}
                  />
                  <h3>Support &amp; Maintenance</h3>
                  <p>
                    SLA based platform support with different maintenance plans
                    to avoid any downtime.
                  </p>
                </div>
              </div>
            </div>
            <nav class="wwd-nav-tabs">
              <ul class="wwd-nav-listing">
                <li class="wwd-nav-list">
                  <button type="button" class="tablink wwd-nav-list-active">
                    <span>Enterprise Solutions</span>
                  </button>
                </li>
              </ul>
            </nav>
            <div class="business-cards wwd-cards-grid">
              <div class="single-services-card">
                <div class="single-service">
                  <img alt="Salesforce" src={salesforce} />
                  <h3>Salesforce</h3>
                  <p>
                    Track business prospects, potential leads and everything
                    related to your business in One Integrated CRM.
                  </p>
                </div>
              </div>
              <div class="single-services-card">
                <div class="single-service">
                  <img alt="Microsoft Dynamics" src={microsoft_dynamics} />
                  <h3>Microsoft Dynamics</h3>
                  <p>
                    We provide customized solutions that precisely cater to
                    specific client requirements.
                  </p>
                </div>
              </div>
              <div class="single-services-card">
                <div class="single-service">
                  <img alt="AWS" src={aws} />
                  <h3>AWS</h3>
                  <p>
                    Have access to your data 24/7 with increased security by
                    deploying your data on AWS servers.
                  </p>
                </div>
              </div>
              <div class="single-services-card">
                <div class="single-service">
                  <img alt="MuleSoft" src={mulesoft} />
                  <h3>MuleSoft</h3>
                  <p>
                    Our team has extensive expertise in customizing and
                    integrating third party systems with MuleSoft.
                  </p>
                </div>
              </div>
            </div>
            <nav class="wwd-nav-tabs">
              <ul class="wwd-nav-listing">
                <li class="wwd-nav-list">
                  <button type="button" class="tablink wwd-nav-list-active">
                    <span>Emerging Technologies</span>
                  </button>
                </li>
              </ul>
            </nav>
            <div class="business-cards wwd-cards-grid">
              <div class="single-services-card">
                <div class="single-service">
                  <img alt="Machine Learning" src={machine_learning} />
                  <h3>Machine Learning</h3>
                  <p>
                    Employ machine learning to gain competitive edge &amp; serve
                    your customers beyond expectations.
                  </p>
                </div>
              </div>
              <div class="single-services-card">
                <div class="single-service">
                  <img alt="AR/VR" src={ar_vr} />
                  <h3>AR/VR</h3>
                  <p>
                    Our team specializes in engaging AR/ VR experiences for
                    companies looking to stay ahead of the game.
                  </p>
                </div>
              </div>
              <div class="single-services-card">
                <div class="single-service">
                  <img alt="Blockchain" src={blockchain} />
                  <h3>Blockchain</h3>
                  <p>
                    We offer customized Blockchain solutions and ICO services
                    for your business security.
                  </p>
                </div>
              </div>
              <div class="single-services-card">
                <div class="single-service">
                  <img alt="Internet of Things" src={iot} />
                  <h3>Internet of Things</h3>
                  <p>
                    Our domain expertise provide a seamless IoT portfolio that
                    connects people, process and technology.
                  </p>
                </div>
              </div>
              <div class="single-services-card">
                <div class="single-service">
                  <img alt="Big Data" src={big_data} />
                  <h3>Big Data</h3>
                  <p>
                    We help organizations adopt data driven insights and
                    automated reporting for faster decision making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="rtt-section nitro-offscreen">
          <div class="container text-btn">
            <h2 class="home-heading-two">
              Ready <span>to</span> start your project?
            </h2>
            <a href="#cta-dark" class="custo-btn" id="stylebtn">
              Let's Talk <i class="la la-arrow-right"></i>
            </a>
          </div>
        </section>
        <section class="service-section wmuae--section nitro-offscreen">
          <div class="container wmuae--container">
            <div class="offer-title wmuae--heading">
              <h2 class="home-heading-two heading-read">
                what makes us <span>an</span> expert
              </h2>
            </div>
            <div class="wmuae--wrapper">
              <ul class="wmuae--grid-listing">
                <li>
                  <div class="wmuae--inner--grid">
                    <div class="wmuae--figure">
                      <img
                        alt="10-years"
                        src={year}
                      />
                    </div>
                    <div class="wmuae--content">
                      <h3 class="wmuae--inr--title">7+ Years of Experience</h3>
                      <p class="wmuae--txt">
                        We’ve evolved over a period of 13 years acquiring skills
                        and expertise by designing, developing and deploying the
                        smartest solutions for the world’s leading companies.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="wmuae--inner--grid">
                    <div class="wmuae--figure">
                      <img
                        alt="xp-engineers"
                        src={xp}
                      />
                    </div>
                    <div class="wmuae--content">
                      <h3 class="wmuae--inr--title">
                        50 + of the World’s Best Engineers
                      </h3>
                      <p class="wmuae--txt">
                        With a workforce of 350+ forwarding thinking engineers
                        who are experts at the latest programming languages, we
                        are passionately equipped to transform the business of
                        our next customer.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="wmuae--inner--grid">
                    <div class="wmuae--figure">
                      <img
                        alt="Hard-Core Competence"
                        src={competence}
                      />
                    </div>
                    <div class="wmuae--content">
                      <h3 class="wmuae--inr--title">Hardcore Competence</h3>
                      <p class="wmuae--txt">
                        Relentlessly pursuing solutions where others fail, we’ve
                        served in the most diverse set of vertical spectrums.
                        Our development heritage of over a decade has given us
                        expertise to solve any product development challenge in
                        any industry.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="wmuae--inner--grid">
                    <div class="wmuae--figure">
                      <img
                        alt="Multiple Awards Winner"
                        src={award}
                      />
                    </div>
                    <div class="wmuae--content">
                      <h3 class="wmuae--inr--title">Multiple Awards Winner</h3>
                      <p class="wmuae--txt">
                        Being the tech-zealots that we are, our passion has been
                        recognized on various fronts. We’re the ‘Fastest Growing
                        IT Company in the Region’ and are considered the ‘Best
                        IT Consulting Company’ for providing exceptional
                        services.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section style={{marginBottom: "40px"}}>          
          <div class=" ms-service orc--section">
            <div class="ms-service-title orc--heading">
              
              <div class="offer-title" style={{marginTop: "40px"}}>
                
                <p>Our Clients</p>
              </div>
              <h2 class="home-heading-two">
                From Startups <span>to the</span> Fortune 500
              </h2>
            </div>
            <div class="tech-web-app orc-web--logos">
              
              <ul class="web-apps--logo">
                <li>
                  <img
                    alt="nodejs"
                    src={honeywell}
                  />
                </li>
                <li>
                  <img
                    alt="python"
                    src={abb}
                  />
                </li>
                <li>
                  <img
                    alt="sql server"
                    src={wuxinextcode}
                  />
                </li>
                <li>
                  <img
                    alt="php"
                    src={barclays}
                  />
                </li>
                <li>
                  <img
                    alt="react"
                    src={nokia}
                  />
                </li>
                <li>
                  <img
                    alt="mongodb"
                    src={skerne}
                  />
                </li>
                <li>
                  <img
                    alt="mysql"
                    src={lumatax}
                  />
                </li>
                <li>
                  <img
                    alt="ruby on rails"
                    src={groupon}
                  />
                </li>
                <li>
                  <img
                    alt="oracle"
                    src={ivillageciti}
                  />
                </li>
                <li>
                  <img
                    alt="html5"
                    src={nestle}
                  />
                </li>
                <li>
                  <img
                    alt="java"
                    src={telenor}
                  />
                </li>
                <li>
                  <img
                    alt="angular"
                    src={consert}
                  />
                </li>
                <li>
                  <img
                    alt="cassandra"
                    src={sterlin}
                  />
                </li>
                <li>
                  <img
                    alt="Wordpress"
                    src={ivillage}
                  />
                </li>
                <li>
                  <img
                    alt="c icon"
s                    src={doopley}
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
