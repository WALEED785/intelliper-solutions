import React from "react";
import Footer from "./Footer";
import Header from "./header";
import map from '../assets/images/icons/map.png'
import discuss from '../assets/images/resource/discuss.png'

export default function ContactUS() {
  return (
    <div class="page-wrapper">
      <Header />
      <section class="page-title-section style-five">
        <div class="left-color-layer"></div>
        <div class="right-color-layer"></div>
        <div class="auto-container">
          <div class="content-boxed">
            <div class="inner-box">
              {/* <div class="title">Contact</div> */}
              <h2>Leave us a little info</h2>
              <div class="text">
                Leave us a little info, and we’ll be in touch. exercitation
                ullamco laboris nisi ut aliquip ex ea <br /> commodo consequat.{" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="contact-page-section">
        <div class="auto-container">
          <div class="inner-container">
            <div class="row clearfix">
              <div class="info-block col-lg-4 col-md-12 col-sm-12">
                <div class="inner-column">
                  <ul class="list">
                    <li>
                      <span class="icon">
                        <img src={map} alt="" />
                      </span>
                      <strong>Location</strong>
                      605 Abdul Haque Rd, Block H-3 Johar Town, Lahore
                    </li>
                    <li>
                      <span class="icon"></span>
                      <strong>Email</strong>
                      <a style={{textDecoration: "none"}} href="mailto:intelliper@gmail.com">
                        intelliper@gmail.com
                      </a>
                    </li>
                    <li>
                      <span class="icon"></span>
                      <strong>Phone</strong>
                      {/* <a href="tel:+8801-648-101-51">+8801 648 101 51</a> */}
                      <a style={{textDecoration: "none"}} href="tel:+92-324-11-63-049"> +92 324 11 63 049</a>
                    </li>
                    <li>
                      <strong>Social</strong>
                      <a class="fa fa-linkedin"></a>
                      <a class="fa fa-envelope"></a>
                      <a class="fa fa-skype"></a>
                      <a class="fa fa-whatsapp"></a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="form-block col-lg-8 col-md-12 col-sm-12">
                <div class="inner-column">
                  <div class="title-box">
                    <h3>Send a message</h3>
                    <div class="text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut blandit <br /> arcu in pretium.
                    </div>
                  </div>

                  <div class="contact-form">
                    <form
                      method="post"
                      action="https://themazine.com/html/Esonit/Esonit/sendemail.php"
                      id="contact-form"
                    >
                      <div class="row clearfix">
                        <div className="form-group col-lg-12 col-md-6 col-sm-12">
                          <select>
                            <option value="">How can we help you?</option>
                            <option value="Mobile App Development">
                              Mobile App Development
                            </option>
                            <option value="Enterprise Software Development">
                              Enterprise Software Development
                            </option>
                            <option value="Web Development">
                              Web Development
                            </option>
                            <option value="Dedicated Teams">
                              Dedicated Teams
                            </option>
                            <option value="IT Consulting">IT Consulting</option>
                            <option value="Internet of Things">
                              Internet of Things
                            </option>
                            <option value="Blockchain">Blockchain</option>
                            <option value="Augmented Reality">
                              Augmented Reality
                            </option>
                            <option value="Artificial Intelligence">
                              Artificial Intelligence
                            </option>
                            <option value="Cloud Computing">
                              Cloud Computing
                            </option>
                            <option value="FinTech">FinTech</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div class="form-group col-lg-6 col-md-6 col-sm-12">
                          <input
                            type="text"
                            name="username"
                            placeholder="Name"
                            required
                          />
                        </div>

                        <div class="form-group col-lg-6 col-md-6 col-sm-12">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                          />
                        </div>

                        <div class="form-group col-lg-6 col-md-6 col-sm-12">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            required
                          />
                        </div>

                        <div class="form-group col-lg-6 col-md-6 col-sm-12">
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required
                          />
                        </div>

                        <div class="form-group col-lg-12 col-md-12 col-sm-12">
                          <textarea
                            name="message"
                            placeholder="message"
                          ></textarea>
                        </div>

                        <div class="form-group col-lg-12 col-md-12 col-sm-12">
                          <button
                            class="theme-btn btn-style-one"
                            type="submit"
                            name="submit-form"
                          >
                            Submit Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
