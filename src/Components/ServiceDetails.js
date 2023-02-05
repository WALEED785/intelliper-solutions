import React from 'react'
import Footer from './Footer'
import Header from './header'

import service10 from '../assets/images/resource/service-10.png'
import design1 from '../assets/images/resource/design-1.png'
import design2 from '../assets/images/resource/design-2.png'
import icon1 from '../assets/images/resource/brand-icon-1.png'
import icon2 from '../assets/images/resource/brand-icon-2.png'
import icon3 from '../assets/images/resource/brand-icon-3.png'
import icon4 from '../assets/images/resource/brand-icon-4.png'
import program from '../assets/images/resource/program.png'
import service1 from '../assets/images/resource/service-1.png'
import service2 from '../assets/images/resource/service-2.png'
import service3 from '../assets/images/resource/service-3.png'

export default function ServiceDetails() {
  return (
    <>
        <div class="page-wrapper">
 	<Header/>
     <section class="banner-section-five">
         <div class="auto-container">
             <div class="row clearfix">
                 <div class="content-column col-lg-6 col-md-12 col-sm-12">
                     <div class="inner-column">
                         <h2>Website Design & <br /> Build Experts</h2>
                         <div class="text">We are Australia highest rated Search Marketing, Creative IT agency on australia in 2021.</div>
                         <a href="contact.html" class="proposal-btn theme-btn">Get a Proposal</a>
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
     <section class="designing-section">
         <div class="auto-container">
         
             <div class="design-block style-one">
                 <div class="row clearfix">
                     
                     <div class="image-column col-lg-6 col-md-12 col-sm-12">
                         <div class="inner-column">
                             <div class="image titlt" data-tilt data-tilt-max="4">
                                 <img src={design1} alt="" />
                             </div>
                         </div>
                     </div>
                     
                     <div class="content-column col-lg-6 col-md-12 col-sm-12">
                         <div class="inner-column">
                             <h3>Website Design</h3>
                             <div class="text">
                                 <p>Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
                                 <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence  structures, to generate there are many variations of passages </p>
                             </div>
                         </div>
                     </div>
                     
                 </div>
             </div>
             
             <div class="design-block">
                 <div class="row clearfix">
                     
                     <div class="content-column col-lg-6 col-md-12 col-sm-12">
                         <div class="inner-column">
                             <h3>Website Development</h3>
                             <div class="text">
                                 <p>Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
                                 <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence  structures, to generate there are many variations of passages </p>
                             </div>
                         </div>
                     </div>
                     
                     <div class="image-column col-lg-6 col-md-12 col-sm-12">
                         <div class="inner-column">
                             <div class="image titlt" data-tilt data-tilt-max="4">
                                 <img src={design2} alt="" />
                             </div>
                         </div>
                     </div>
                     
                 </div>
             </div>
             
         </div>
     </section>
     <section class="brand-section">
         
         <div class="auto-container">
             <div class="row clearfix">
                 <div class="title-column col-lg-6 col-md-12 col-sm-12">
                     <div class="inner-column">
                         <h2>With on-brand, conversion focused graphic design woven throughout your marketing efforts, you will:</h2>
                         <div class="bold-text">Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</div>
                         <div class="text">It uses a dictionary of over 200 Latin words, with a handful of model sentence structures, to generate there are many variations of passages sentence </div>
                     </div>
                 </div>
                 
                 <div class="blocks-column col-lg-6 col-md-12 col-sm-12">
                     <div class="inner-column">
                         <div class="blocks-outer">
                         
                             <div class="design-block">
                                 <div class="inner-box">
                                     <div class="icon"><img src={icon1} alt="" /></div>
                                     <h3>Responsive Design</h3>
                                     <div class="text">Strategy, assets, and guidelines to develop and maintain cohesive brand identity.</div>
                                 </div>
                             </div>
                             
                             <div class="design-block">
                                 <div class="inner-box">
                                     <div class="icon"><img src={icon2} alt="" /></div>
                                     <h3>Product Design</h3>
                                     <div class="text">Strategy, assets, and guidelines to develop and maintain cohesive brand identity.</div>
                                 </div>
                             </div>
                             
                             <div class="design-block">
                                 <div class="inner-box">
                                     <div class="icon"><img src={icon3} alt="" /></div>
                                     <h3>Web Programming</h3>
                                     <div class="text">Strategy, assets, and guidelines to develop and maintain cohesive brand identity.</div>
                                 </div>
                             </div>
                             
                             <div class="design-block">
                                 <div class="inner-box">
                                     <div class="icon"><img src={icon4} alt="" /></div>
                                     <h3>Email Creative</h3>
                                     <div class="text">Strategy, assets, and guidelines to develop and maintain cohesive brand identity.</div>
                                 </div>
                             </div>
                             
                         </div>
                     </div>
                 </div>
                 
             </div>
         </div>
     </section>
     <section class="program-section">
         <div class="auto-container">
         
             <div class="upper-box">
                 <div class="row clearfix">
                 
                     <div class="title-column col-lg-6 col-md-12 col-sm-12">
                         <div class="inner-column">
                             <h3>Programs of work include:</h3>
                             <ul class="program-list">
                                 <li>Audience Research</li>
                                 <li>User Behavioural Research</li>
                                 <li>Customer Journey Mapping</li>
                                 <li>Information Architecture</li>
                                 <li>Interactive Prototyping</li>
                                 <li>User Testing</li>
                                 <li>Speed improvements</li>
                             </ul>
                         </div>
                     </div>
                     
                     <div class="image-column col-lg-6 col-md-12 col-sm-12">
                         <div class="inner-column">
                             <div class="image">
                                 <img src={program} alt="" />
                             </div>
                         </div>
                     </div>
                     
                 </div>
             </div>
             <div class="lower-box">
                 <div class="color-one"></div>
                 <div class="color-two"></div>
                 <div class="row clearfix">
                 
                     <div class="counter-column col-lg-6 col-md-12 col-sm-12">
                         <div class="inner-column">
                             <div class="row clearfix">
                                 <div class="column col-lg-6 col-md-6 col-md-12">
                                     <h2>10+</h2>
                                     <div class="text">Weeks to get a live app in customers’ hands</div>
                                 </div>
                                 <div class="column col-lg-6 col-md-6 col-md-12">
                                     <h2>100%</h2>
                                     <div class="text">Control of purchase journey for M&S customers</div>
                                 </div>
                             </div>
                         </div>
                     </div>
                     
                     <div class="quote-column col-lg-6 col-md-12 col-sm-12">
                         <div class="inner-column">
                             <div class="quote-icon flaticon-quote-1"></div>
                             <div class="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</div>
                             <div class="designation">Strategy Director, Software Agency</div>
                         </div>
                     </div>
                     
                 </div>
             </div>
         </div>
     </section>
     <section class="services-section">
         <div class="auto-container">
             <div class="sec-title">
                 <h2>See some more services below</h2>
             </div>
             <div class="row clearfix">
             
                 <div class="service-block col-lg-4 col-md-6 col-sm-12">
                     <div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                         <h3><a href="case-detail.html">IT Strategy and Consultancy</a></h3>
                         <div class="icon">
                             <img src={service1} alt="" />
                         </div>
                         <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                         <a href="case-detail.html" class="read-more">Read More <span class="fa fa-angle-right"></span></a>
                     </div>
                 </div>
                 
                 <div class="service-block col-lg-4 col-md-6 col-sm-12">
                     <div class="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                         <h3><a href="case-detail.html">World Class <br /> Support</a></h3>
                         <div class="icon">
                             <img src={service2} alt="" />
                         </div>
                         <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                         <a href="case-detail.html" class="read-more">Read More <span class="fa fa-angle-right"></span></a>
                     </div>
                 </div>
                 
                 <div class="service-block col-lg-4 col-md-6 col-sm-12">
                     <div class="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                         <h3><a href="case-detail.html">IT Management Data <br /> Services</a></h3>
                         <div class="icon">
                             <img src={service3} alt="" />
                         </div>
                         <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                         <a href="case-detail.html" class="read-more">Read More <span class="fa fa-angle-right"></span></a>
                     </div>
                 </div>
                 
             </div>
         </div>
     </section>
     <section class="newsletter-section style-two">
         <div class="auto-container">
             <div class="inner-container">
                 <div class="form-column">
                     <div class="inner-column">
                         <div class="title-box">
                             <h2>Signup to our newsletter</h2>
                             <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt </div>
                         </div>
                         <div class="newsletter-form">
                             <form method="post" action="contact.html">
                                 <div class="form-group">
                                     <span class="icon fa fa-envelope-o"></span>
                                     <input type="email" name="email" value="" placeholder="Enter your eamil address" required/>
                                     <button type="submit" class="flaticon-next-2 submit-btn"></button>
                                 </div>
                             </form>
                         </div>
                         <div class="member">Already member <a href="service-detail.html#">Sign in</a></div>
                     </div>
                 </div>
                 
             </div>
         </div>
     </section>
     <Footer/>
     
 </div>
    </>
  )
}
