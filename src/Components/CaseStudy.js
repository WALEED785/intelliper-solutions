import React from "react";
import Footer from "./Footer";
import Header from "./header";

import case14 from "../assets/images/resource/case-14.jpg";
import case1 from "../assets/images/case-study/Prediction Strike_1.jpg";
// import case1Logo from '../assets/images/case-study/PredictionStrike-white.webp'
import case2 from "../assets/images/case-study/hardAssets.png";
import case3 from "../assets/images/case-study/distro.png";
import case4 from "../assets/images/case-study/proctor-gallagher.png";
import case1IMG from "../assets/images/case-study/case1IMG.png";
import case2IMG from "../assets/images/case-study/case2IMG.png";
import case3IMG from "../assets/images/case-study/case3IMG.png";
import case4IMG from "../assets/images/case-study/case4IMG.png";
import case5IMG from "../assets/images/case-study/case5IMG.png";
import case6IMG from "../assets/images/case-study/case6IMG.png";
import case7IMG from "../assets/images/case-study/case7IMG.png";
import case8IMG from "../assets/images/case-study/case8IMG.png";
import case9IMG from "../assets/images/case-study/case9IMG.png";
import case1Logo from "../assets/images/case-study/case1Logo.png";
import case3Logo from "../assets/images/case-study/case3Logo.png";
import case5Logo from "../assets/images/case-study/case5Logo.png";
import case9Logo from "../assets/images/case-study/case9Logo.png";
import case15 from "../assets/images/resource/case-15.jpg";
import case16 from "../assets/images/resource/case-16.jpg";
import case17 from "../assets/images/resource/case-17.jpg";
import case18 from "../assets/images/resource/case-18.jpg";
import service1 from "../assets/images/resource/service-1.png";
import service2 from "../assets/images/resource/service-2.png";
import service3 from "../assets/images/resource/service-3.png";

export default function CaseStudy() {
  return (
    <>
      <div class="page-wrapper">
        <Header />

        <section class="page-title-section style-four">
          <div class="auto-container">
            <div class="content-boxed">
              <div class="inner-box">
                {/* <div class="title">Case Studies</div> */}
                <h2>
                  Here are our popular <br /> Case studies
                </h2>
                <div class="text">
                  We can quickly turn your ideas into cost-effective precision
                  parts and components <br /> that deliver for your most
                  demanding applications.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="case-studio-section-two">
          <div class="auto-container">
            <div class="sec-title centered">
              <h2>
                We have helped 200+ companies progress <br /> with tech
                solutions
              </h2>
              <div class="text">
                The support we provide starts with our experience helping you
                select the right solution.
              </div>
            </div>

            <div class="case-block-three">
              <div class="inner-box">
                <div class="row clearfix">
                  <div class="content-column col-lg-6 col-md-12 col-sm-12">
                    <div class="content">
                      <div class="title">
                        {/* <svg width="50" height="58" viewBox="0 0 70 78" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M62 24.286v29.393a2 2 0 01-1.008 1.737l-25 14.285a2 2 0 01-1.984 0l-25-14.285A2 2 0 018 53.679V24.286a2 2 0 011.008-1.737l25-14.285a2 2 0 011.984 0l25 14.285A2 2 0 0162 24.286zm-62 0a10 10 0 015.039-8.683l25-14.285a10 10 0 019.922 0l25 14.285A10 10 0 0170 24.286v29.393a10 10 0 01-5.039 8.683l-25 14.285a10 10 0 01-9.922 0l-25-14.285A10 10 0 010 53.679V24.286zm43.598-4.062a1.226 1.226 0 00-2.045-1.258L23.47 38.226a1.793 1.793 0 00.694 2.913l6.46 2.351a1.794 1.794 0 011.072 2.3L27.05 58.553a1.225 1.225 0 002.045 1.258l18.083-19.26a1.794 1.794 0 00-.694-2.913l-6.46-2.351a1.794 1.794 0 01-1.072-2.3l4.646-12.764z" fill="url(#small-logo_svg__paint0_linear)"></path><defs><linearGradient id="small-logo_svg__paint0_linear" x1="25" y1="33.087" x2="37.17" y2="80.903" gradientUnits="userSpaceOnUse"><stop stop-color="#FFD600"></stop><stop offset="1" stop-color="#FFB800"></stop></linearGradient></defs></svg>
                      Prediction Strike */}
                        <img src={case1Logo} />
                      </div>
                      <h3>
                        Prediction Strike is a new take on sports investing: a
                        stock market for professional athletes.
                      </h3>
                      <a
                        style={{ textDecoration: "none" }}
                        href="https://www.predictionstrike.com/"
                        class="btn-style-one theme-btn"
                      >
                        Explore WebAPP
                      </a>

                      <a
                        style={{ textDecoration: "none", marginLeft: "10px" }}
                        href="https://play.google.com/store/apps/details?id=com.predictionstrike&pli=1"
                        class="btn-style-one theme-btn"
                      >
                        Explore MobileAPP
                      </a>
                    </div>
                  </div>
                  <div class="image-column col-lg-6 col-md-12 col-sm-12">
                    <div class="image">
                      <a href="#">
                        <img src={case1IMG} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="case-block-three">
              <div class="inner-box">
                <div class="row clearfix">
                  <div class="image-column col-lg-6 col-md-12 col-sm-12">
                    <div class="image">
                      <a href="#">
                        <img src={case2IMG} alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="content-column col-lg-6 col-md-12 col-sm-12">
                    <div class="content">
                      <div class="title">
                        <img src={case2} alt="hard-Assets" />{" "}
                      </div>
                      <h3>
                        Investors who own gold have earned higher overall
                        returns than those who don't. Learn why Hard Assets
                        Alliance is the new standard in gold.
                      </h3>
                      <a
                        href="https://hardassetsalliance.com/"
                        class="btn-style-one theme-btn"
                        style={{ textDecoration: "none", marginRight: "10px" }}
                      >
                        Explore WebApp
                      </a>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.haamobileapplication"
                        class="btn-style-one theme-btn"
                        style={{ textDecoration: "none" }}
                      >
                        Explore MobileAPP
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="case-block-three">
              <div class="inner-box">
                <div class="row clearfix">
                  <div class="content-column col-lg-6 col-md-12 col-sm-12">
                    <div class="content">
                      <div class="title">
                        <img src={case3Logo} />
                      </div>
                      <h3>
                        <a href="#" style={{ textDecoration: "none" }}>
                          Distro Pro is a nexus where high-end studio design,
                          acoustic treatment and isolation, custom monitor
                          systems.
                        </a>
                      </h3>
                      <a
                        href="https://distroproaudio.com/"
                        class="btn-style-one theme-btn"
                        style={{ textDecoration: "none" }}
                      >
                        Explore WebAPP
                      </a>
                    </div>
                  </div>
                  <div class="image-column col-lg-6 col-md-12 col-sm-12">
                    <div class="image">
                      <img src={case3IMG} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="case-block-three">
              <div class="inner-box">
                <div class="row clearfix">
                  <div class="image-column col-lg-6 col-md-12 col-sm-12">
                    <div class="image">
                      <a href="#">
                        <img src={case4IMG} alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="content-column col-lg-6 col-md-12 col-sm-12">
                    <div class="content">
                      <div class="title">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          id="Lag_1"
                          data-name="Lag 1"
                          viewBox="0 0 105.14 119.69"
                        >
                          <defs></defs>
                          <path
                            class="cls-1"
                            d="M228.18,358.22c3.54,1.85,7,3.89,10.43,5.87,4,2.32,8.13,4.51,12.17,6.8q5.53,3.14,11,6.38a2.36,2.36,0,0,0,2.84,0c2.14-1.37,4.39-2.59,6.76-4l-7.78-4.6q-10.06-5.91-20.14-11.82-7.22-4.25-14.4-8.53l-.91-.52q0-19.15,0-38.32a2.89,2.89,0,0,1,1.19-2.75c2.19-1.37,4.36-2.76,6.57-4.1,1-.6.9.17.9.8v36.91c0,.36,0,.72,0,1.07,0,3.72-.32,2.68,2.55,4.32,4.29,2.33,8.5,4.82,12.75,7.25,4.54,2.59,9.08,5.17,13.61,7.79s9,5.27,13.55,7.91a1,1,0,0,0,1.21,0l12.72-7.48c7.09-4.18,14.17-8.38,21.27-12.54,6-3.53,12.09-7,18.14-10.53a1.29,1.29,0,0,0,.16-.17c.57.08.51.52.51.91,0,3,0,6,0,9a2,2,0,0,1-1,1.63l-17.5,9.82q-12.27,6.88-24.51,13.8c-4.08,2.29-8.18,4.55-12.25,6.86q-6.58,3.71-13.14,7.49a2.47,2.47,0,0,1-2.78,0q-9-5.35-18-10.68-7.87-4.65-15.76-9.25c-.25-.14-.2-1.88-.21-2.82C228.15,362.52,228.18,360.37,228.18,358.22Z"
                            transform="translate(-228.14 -277.41)"
                          ></path>
                          <path
                            class="cls-1"
                            d="M328.47,304.33l3.41,1.81c.71.38.72.75.05,1.2q-3.3,2.24-6.58,4.49c-.9.87-1.79.55-2.69,0-2-1.05-4-2.08-6-3.15-3.8-2.07-7.58-4.17-11.38-6.24-2.74-1.49-5.5-2.93-8.23-4.45a1.28,1.28,0,0,0-1.49.06c-6.05,3.43-12.13,6.81-18.18,10.23-4.46,2.51-8.89,5.08-13.33,7.63-.92.52-1.31.33-1.32-.71,0-2.48,0-5,0-7.44a1.69,1.69,0,0,1,.88-1.59c5.08-3,10.18-5.94,15.27-8.93q8.4-4.94,16.77-9.93a2.26,2.26,0,0,1,2.55-.05q7.51,4.33,15.07,8.59c4.79,2.7,9.61,5.36,14.41,8A5.28,5.28,0,0,0,328.47,304.33Z"
                            transform="translate(-228.14 -277.41)"
                          ></path>
                          <path
                            class="cls-1"
                            d="M279.2,277.48a3.27,3.27,0,0,1,1.49,0l6.19,4.1c.23.15.47.3.69.46.64.46.38.83-.15,1.12q-6.54,3.54-13.09,7.08c-4.27,2.33-8.52,4.7-12.78,7.05-2.65,1.46-5.28,3-8,4.31a1.93,1.93,0,0,0-1.21,2q0,17.86,0,35.72v.72c0,1.19-.26,1.37-1.34.91-1.63-.68-3.24-1.42-4.85-2.13-.32-.17-.59-.26-1-.44-.86-.38-.86-.71-.86-1.35V298.2a1.85,1.85,0,0,1,1.05-1.72l4.83-2.7c.23-.18.52-.26.76-.43,4.2-2.39,8.39-4.8,12.61-7.18,4.63-2.61,9.28-5.19,13.91-7.8A7.4,7.4,0,0,1,279.2,277.48Z"
                            transform="translate(-228.14 -277.41)"
                          ></path>
                          <path
                            class="cls-1"
                            d="M290.54,311.35l7-4.3a1.39,1.39,0,0,1,1.57,0c3.61,2.22,7.22,4.46,10.84,6.67,1.67,1,3.36,2,5.05,3,.7.41.73.73,0,1.17-2.27,1.41-4.53,2.85-6.79,4.28a1.56,1.56,0,0,1-1.78-.14c-4.1-2.49-8.21-4.95-12.31-7.43-1.14-.69-2.27-1.41-3.4-2.11C290.25,312.22,290,311.85,290.54,311.35Z"
                            transform="translate(-228.14 -277.41)"
                          ></path>
                          <path
                            class="cls-1"
                            d="M282.38,396.75a2.74,2.74,0,0,1-2.65,0l-6.93-3.66c-.78-.76.12-.84.47-1.14l12.06-6.86,7.35-4.22a9.45,9.45,0,0,0,1-.47l10.05-5.71c4.94-2.79,9.89-5.57,14.83-8.38,4.74-2.69,9.47-5.42,14.21-8.12a1.19,1.19,0,0,1,.47-.07c0,2.89,0,5.78.06,8.66a1.79,1.79,0,0,1-.53,1.15c-2.74,1.53-5.48,3.05-8.21,4.6q-6.39,3.66-12.76,7.34l-3.46,2c-.89.55-1.81,1.06-2.69,1.62-3.55,1.84-7.07,3.76-10.52,5.79Q288.75,393,282.38,396.75Z"
                            transform="translate(-228.14 -277.41)"
                          ></path>
                          <path
                            class="cls-1"
                            d="M314.72,368.48"
                            transform="translate(-228.14 -277.41)"
                          ></path>
                        </svg>
                        Coachr
                      </div>
                      <h3>
                        Our platform is built for speed. Replace messy
                        excel-sheets and repetitive tasks with an intelligent
                        workflow.
                      </h3>
                      <a
                        href="https://www.coachr.io/"
                        class="btn-style-one theme-btn"
                        style={{ textDecoration: "none" }}
                      >
                        Explore WebAPP
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="case-block-three">
              <div class="inner-box">
                <div class="row clearfix">
                  <div class="content-column col-lg-6 col-md-12 col-sm-12">
                    <div class="content">
                      <div class="title">
                        <img src={case5Logo} />
                      </div>
                      <h3>
                        The Proctor Gallagher Institute is dedicated to waking
                        the world up so more people can reach their potential
                        through shifting paradigms.
                      </h3>
                      <a
                        href="https://www.proctorgallagherinstitute.com/"
                        class="btn-style-one theme-btn"
                        style={{ textDecoration: "none" }}
                      >
                        Explore WebAPP
                      </a>
                    </div>
                  </div>
                  <div class="image-column col-lg-6 col-md-12 col-sm-12">
                    <div class="image">
                      <a href="#">
                        <img src={case5IMG} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="case-block-three">
              <div class="inner-box">
                <div class="row clearfix">
                  <div class="image-column col-lg-6 col-md-12 col-sm-12">
                    <div class="image">
                      <a href="#">
                        <img src={case6IMG} alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="content-column col-lg-6 col-md-12 col-sm-12">
                    <div class="content">
                      <div class="title">
                        <svg
                          class="nav-StoreLogo-svg"
                          viewBox="0 0 1299.3 285"
                          width="200px"
                          height="50px"
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                        >
                          <title>Wayfair</title>
                          <path
                            fill="#7f187f"
                            d="M456 69.18h-57.2a9.43 9.43 0 00-9.42 9.42v12.78a6.28 6.28 0 006.29 6.1h9.43a.86.86 0 01.71.36 1.16 1.16 0 01.16 1L383.58 166a1.17 1.17 0 01-1.11.65.82.82 0 01-.86-.65l-33.45-90.82v-.05a6.35 6.35 0 00-5.44-3.93h-20.2a6.36 6.36 0 00-5.52 3.88v.05L283.55 166a.85.85 0 01-.88.71 1.17 1.17 0 01-1.11-.65l-22.4-67.21a1.13 1.13 0 01.18-1 .83.83 0 01.7-.36h9.44a6.28 6.28 0 006.29-6.1V78.6a9.43 9.43 0 00-9.43-9.42h-57.2a6.22 6.22 0 00-5.09 2.62 5.92 5.92 0 00-.9 5.27c.81 2.33 1.77 5.14 2.74 8s1.9 5.61 2.77 8.12a6.18 6.18 0 005.79 4.27h9.63c.22 0 .71 0 1.13.77L269.58 229a6.16 6.16 0 005.79 4.29h13.76a6.2 6.2 0 005.77-4c12.25-35.38 35.62-102.8 36.54-105.1a1.15 1.15 0 011.13-.86 1.12 1.12 0 011.11.78c.94 2.38 24.32 69.8 36.55 105.13a6.22 6.22 0 005.79 4.08h13.75a6.17 6.17 0 005.8-4.3l44.36-130.77c.43-.77.92-.77 1.14-.77h9.63a6.16 6.16 0 005.77-4.23c.87-2.53 1.83-5.35 2.76-8.1 1-2.9 1.95-5.74 2.75-8.06a5.86 5.86 0 00-.89-5.29 6.21 6.21 0 00-5.09-2.62zM1125.6 206.94h-10.42a3 3 0 01-2.94-2.95V75.07a4.19 4.19 0 00-4.33-4.12h-30.26a4.49 4.49 0 00-3.34 1.57c-1.58 2-9.44 11.79-12.58 15.72a4.25 4.25 0 003.14 6.88h3.93a3.16 3.16 0 013 2.95V203.6a4.73 4.73 0 01-.8 2.4c-3.35 4.32-10.62 13.36-14.15 17.88a4.27 4.27 0 003.14 7.08H1113a3.73 3.73 0 003-1.18l12.38-15.53c2.72-3.18.76-7.31-2.78-7.31z"
                          ></path>
                          <circle
                            fill="#7f187f"
                            cx="1091.8"
                            cy="30.85"
                            r="22.8"
                          ></circle>
                          <path
                            fill="#7f187f"
                            d="M1292.45 84.31c0-2.16-1.18-4.32-4.13-4.32H1283v14h2v-5.16h1.77l3.54 5.11h2.36l-3.74-5.31c2.54-.19 3.52-2.36 3.52-4.32zm-7.45 2.55v-5.11h3.54a2.27 2.27 0 012.16 2.56 2.3 2.3 0 01-2.36 2.55z"
                          ></path>
                          <path
                            fill="#7f187f"
                            d="M1287.34 74.88a12 12 0 1012 12 12 12 0 00-12-12zm0 22.2a10.15 10.15 0 01-10.22-10.22 10 10 0 0110.22-10.22 10.22 10.22 0 110 20.44zM605.36 207.53c-8.84.39-13.17-3.73-13.17-13.76v-72.32c0-31.64-26.53-51.68-56.4-51.68-46.38 0-63.08 22-65 46.57a4.28 4.28 0 004.32 4.52h22.8a4.26 4.26 0 004.13-3.93c1.18-12.77 9.82-22.2 24.17-22.2 15.92 0 25.55 8 25.55 26.33v15.72h-8.25c-28.5 0-48.15 3.74-61.32 12s-19.85 23.58-19.85 41.47c0 13.16 4.52 24 13.56 32.62s19.65 12.38 33.61 12.38a54.84 54.84 0 0024-5.5 80.09 80.09 0 0020.24-13 3 3 0 014.72.78c6.49 11.4 13.56 15.14 27.12 15.14 12.19 0 18.08-11.4 23.39-18.28 1.88-2.73-.28-7.06-3.62-6.86zm-53.45-11.59h-.2c0 1-1.57 2.35-2.16 2.94a57.57 57.57 0 01-12.19 7.86 29.56 29.56 0 01-12.58 2.36c-6.28 0-12.57-2.36-16.7-6.88a24.3 24.3 0 01-6.29-16.9c0-9.43 3.54-15.72 10.61-20.44S531.07 158 545 158h6.88zM1040.11 207.53c-8.84.39-13.17-3.73-13.17-13.76v-72.32c0-31.64-26.53-51.68-56.4-51.68-46.38 0-63.08 22-65 46.57a4.28 4.28 0 004.33 4.52h22.79a4.26 4.26 0 004.13-3.93c1.18-12.77 9.83-22.2 24.17-22.2 15.92 0 25.55 8 25.55 26.33v15.72h-8.25c-28.5 0-48.15 3.74-61.32 12S897 172.35 897 190.24c0 13.16 4.52 24 13.56 32.62s19.65 12.38 33.61 12.38a54.84 54.84 0 0024-5.5 80.31 80.31 0 0020.25-13 3 3 0 014.71.78c6.49 11.4 13.56 15.14 27.12 15.14 12.19 0 18.08-11.4 23.39-18.28 1.97-2.72-.19-7.05-3.53-6.85zm-53.45-11.59h-.2c0 1-1.57 2.35-2.16 2.94a57.57 57.57 0 01-12.19 7.86 29.54 29.54 0 01-12.57 2.36c-6.29 0-12.58-2.36-16.71-6.88a24.3 24.3 0 01-6.29-16.9c0-9.43 3.54-15.72 10.62-20.44s18.66-6.88 32.62-6.88h6.88zM1255.62 70.38c-2.11-1.12-7.41-1.62-12-1.62-7.45 0-13.31 1-18.44 3.19l-.41.18a32.31 32.31 0 00-5.51 3.17 73.16 73.16 0 00-17.16 14.8s-2.21 1.66-2.59-1.14V74.62a4.3 4.3 0 00-4.24-4.24h-30.45a4 4 0 00-3.13 1.51s-9.55 11.94-12.69 16c-1.86 2.38-.73 6.91 3.34 6.91h3.8a3.05 3.05 0 013 3v106a4.15 4.15 0 01-.7 2.36c-3 3.69-10.61 13.28-14.33 18a4.26 4.26 0 003.26 6.87H1213a4.24 4.24 0 004.24-4.24V211a4.24 4.24 0 00-4.24-4.24h-10.42a3 3 0 01-3-3v-61.68c1.2-29.34 18.7-38.3 27.11-40.92l1.21-.35.33-.09a28.82 28.82 0 017-.93c10 0 13.72 1.5 19.16 2.89 2.26.58 4.24-1.9 4.24-4.24v-24c-.04-1.85-1.53-3.27-3.01-4.06zM898.3 71h-47.64a3 3 0 01-2.95-3V44.41c0-11.39 5.9-22.79 18.08-22.79 13.76 0 15.92 11.59 16.51 20.44a4.43 4.43 0 004.13 4.12h19.65a4.1 4.1 0 003.92-4.12C909.62 12.58 891 0 860.88 0c-18.28 0-30.26 5.7-39.3 16.7S808 39.9 808 61.9v5.9a3 3 0 01-2.95 3l-81.28.2a4.19 4.19 0 00-4.33 4.12V91a4.36 4.36 0 004.33 4.32h8.72a3 3 0 012.75 4.13s-22.4 52.08-31.44 72.91a3 3 0 01-5.5 0c-9.24-21-31.84-72.91-31.84-72.91a3 3 0 012.75-4.13h6.09a4.36 4.36 0 004.35-4.32V75.07a4.19 4.19 0 00-4.33-4.07h-73.5a4.29 4.29 0 00-3.73 6.29c2.16 3.92 7.07 13.16 8.45 15.91a4.31 4.31 0 003.54 2.16h14.15a3 3 0 012.77 1.72s52.27 117.41 54.24 121.54a22.59 22.59 0 01-.05 16.27c-2.4 9.59-18.51 26.76-27.37 23.71-6.14-2.12-6.93-13.18-14.19-14.59a7 7 0 00-4 .47c-1.27.49-13.15 15.76-15.76 18.44a4.54 4.54 0 000 5.7c6.52 6.68 17.44 15.72 33.15 16.31 19.36.79 38.52-1.8 56.15-35.41 0 0 56.3-137.57 63-152.44a3.17 3.17 0 012.83-1.57h29.71a3 3 0 013 2.95v105.73a3.77 3.77 0 01-.78 2.36c-3.54 4.52-10.62 13.36-14.15 17.88a4.21 4.21 0 003.34 6.88h66.42a4.37 4.37 0 004.33-4.32v-15.73a4.37 4.37 0 00-4.33-4.32h-11.4a3 3 0 01-2.94-2.95V98.26a3 3 0 012.94-3h35.06a4.46 4.46 0 003.34-1.57c2.95-3.93 9-11.79 12.19-15.92A4.26 4.26 0 00898.3 71z"
                          ></path>
                          <path
                            d="M181.58 121.82l-11.46-43.26a4.2 4.2 0 00-3-3l-43.23-11.44a4.2 4.2 0 00-4 1.09l-29 29 60.65 60.64 29-29a4.17 4.17 0 001.04-4.03z"
                            fill="#57c377"
                          ></path>
                          <path
                            d="M.14 187.88l11.47 43.24a4.2 4.2 0 003 3l43.25 11.47a4.22 4.22 0 004-1.09l29-29-60.63-60.67-29 29a4.19 4.19 0 00-1.09 4.05z"
                            fill="#ffc600"
                          ></path>
                          <path
                            d="M57.83 64.11L14.58 75.57a4.2 4.2 0 00-3 3L.14 121.79a4.19 4.19 0 001.09 4l29 29L90.87 94.2l-29-29a4.19 4.19 0 00-4.04-1.09z"
                            fill="#92da4d"
                          ></path>
                          <path
                            d="M180.09 183.42l-28.57-28.58-60.65 60.64 28.58 28.58a5.22 5.22 0 005 1.36l42.11-11.17a5.2 5.2 0 003.7-3.7l11.17-42.1a5.23 5.23 0 00-1.34-5.03z"
                            fill="#a77ad7"
                          ></path>
                          <path
                            fill="#7f187f"
                            d="M90.87 94.2l-60.64 60.63 60.64 60.65 60.65-60.64L90.87 94.2z"
                          ></path>
                        </svg>
                      </div>
                      <h3>
                        Wayfair Makes it Easy to Shop Sustainably with Largest
                        Selection of Sustainability Certifications for Home
                      </h3>
                      <a
                        href="https://www.aboutwayfair.com/"
                        class="btn-style-one theme-btn"
                        style={{ textDecoration: "none" }}
                      >
                        Explore WebAPP
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="case-block-three">
              <div class="inner-box">
                <div class="row clearfix">
                  <div class="content-column col-lg-6 col-md-12 col-sm-12">
                    <div class="content">
                      <div class="title">FITR Pro</div>
                      <h3>
                        Your BRAND. Our ELITE Coaching software. Add custom
                        branding in a few simple steps to harness the power of
                        Fitr using your own unique identity.
                      </h3>
                      <a
                        href="https://get.fitr.training/"
                        class="btn-style-one theme-btn"
                        style={{ textDecoration: "none", marginRight: "10px" }}
                      >
                        Explore WebAPP
                      </a>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.fitr_training.client"
                        class="btn-style-one theme-btn"
                        style={{ textDecoration: "none" }}
                      >
                        Explore MobileAPP
                      </a>
                    </div>
                  </div>
                  <div class="image-column col-lg-6 col-md-12 col-sm-12">
                    <div class="image">
                      <a href="#">
                        <img src={case7IMG} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="case-block-three">
              <div class="inner-box">
                <div class="row clearfix">
                  <div class="image-column col-lg-6 col-md-12 col-sm-12">
                    <div class="image">
                      <a href="#">
                        <img src={case8IMG} alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="content-column col-lg-6 col-md-12 col-sm-12">
                    <div class="content">
                      <div class="title">taskrabbit</div>
                      <h3>
                        Revolutionizing Everyday Work <br />
                        Everyday work is important, but it’s also time
                        consuming.
                      </h3>
                      <a
                        href="https://www.taskrabbit.com/"
                        class="btn-style-one theme-btn"
                        style={{ textDecoration: "none", marginRight: "10px" }}
                      >
                        Explore WebAPP
                      </a>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.taskrabbit.droid.consumer&utm_source=website&utm_medium=button&utm_campaign=app-android"
                        class="btn-style-one theme-btn"
                        style={{ textDecoration: "none" }}
                      >
                        Explore MobileAPP
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="case-block-three">
              <div class="inner-box">
                <div class="row clearfix">
                  <div class="content-column col-lg-6 col-md-12 col-sm-12">
                    <div class="content">
                      <div class="title">
                        <img src={case9Logo} style={{ height: "90px" }} />
                      </div>
                      <h3>
                        Enabling Fast, Accurate & Reliable COVID-19 Testing
                        Across The Globe
                      </h3>
                      <br />
                      <a
                        href="https://circlepod.co/en-hk/"
                        class="btn-style-one theme-btn"
                        style={{ textDecoration: "none", marginRight: "10px" }}
                      >
                        Explore WebAPP
                      </a>
                      <a
                        href="https://circlepod.co/en-hk/https://play.google.com/store/apps/details?id=com.prenetics.circle.pod"
                        class="btn-style-one theme-btn"
                        style={{ textDecoration: "none" }}
                      >
                        Explore MobileAPP
                      </a>
                    </div>
                  </div>
                  <div class="image-column col-lg-6 col-md-12 col-sm-12">
                    <div class="image">
                      <a href="#">
                        <img src={case9IMG} alt="" />
                      </a>
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
