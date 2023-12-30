import React, { useMemo, useState } from "react";
import Marquee from "react-fast-marquee";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";
import 'node_modules/react-modal-video/css/modal-video.css';
import ModalVideo from 'react-modal-video';
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);
import MainLayout from '../layout/MainLayout'


function About() {
  const [isOpen, setOpen] = useState(false);
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
  const images = [
    {
      id: 1,
      imageBig: "assets/img/inner-page/gallery-01.png",
    }
    ,
    {
      id: 2,
      imageBig: "assets/img/inner-page/gallery-02.png",
    }
    ,
    {
      id: 3,
      imageBig: "assets/img/inner-page/gallery-03.png",
    }
    ,
    {
      id:4,
      imageBig: "assets/img/inner-page/gallery-04.png",
    },
    {
      id:5,
      imageBig: "assets/img/inner-page/gallery-05.png",
    }
    ,
    {
      id: 6,
      imageBig: "assets/img/inner-page/gallery-06.png",
    }
  ]
  const slideSettings = useMemo(()=>{
    return {
        slidesPerView: "auto",
        speed: 1500,
        spaceBetween: 25,
        loop: true,
        autoplay: {
            delay: 2500, // Autoplay duration in milliseconds
        },
        navigation: {
            nextEl: ".next-4",
            prevEl: ".prev-4",
        },

        breakpoints: {
            280: {
                slidesPerView: 1,
            },
            386: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            1400: {
                slidesPerView: 2
            },
        }
        }
})
  return (
    <MainLayout>
        <div className="welcome-banner-section pb-100 pt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="welcome-wrap text-center">
                  <div className="section-title1 text-center wow fadeInUp" data-wow-delay="200ms">
                    <span>(Since-1994)</span>
                    <h2>Welcome To Drivco</h2>
                  </div>
                  <div className="welcome-content wow fadeInUp" data-wow-delay="300ms">
                    <p>We're passionate car agency<br /> 
                      we're thrilled to have you join our community of automotive enthusiasts and professionals. Whether you're a passionate driver, a car owner, or someone who loves all things automotive, you've come to the right place.At Drivco, we strive to create a space where people can connect, share knowledge, and explore the exciting world of automobiles. From discussing the latest car models and technologies to sharing driving tips and tricks, we're here to fuel your love for everything on wheels.Feel free to ask any questions you have, seek advice, or simply engage in friendly conversations with fellow members. Our community is full of experts and enthusiasts who are eager to share their insights and experiences.
                      Buckle up and enjoy your journey with Drivco!</p>
                  </div>
                  <div className="author-area wow fadeInUp" data-wow-delay="400ms">
                    <img src="assets/img/inner-page/signature.svg" alt="" />
                    <h6>Natrison Mongla</h6>
                    <span>(CEO &amp; Founder)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="why-choose-area pt-90 pb-90 mb-100">
          <div className="container">
            <div className="row mb-60 wow fadeInUp" data-wow-delay="200ms">
              <div className="col-lg-12 d-flex justify-content-center">
                <div className="section-title1 text-center">
                  <span>Best Car Agency</span>
                  <h2>Why Only Choose Drivco</h2>
                </div>
              </div>
            </div>
            <div className="row mb-50 g-4 justify-content-center">
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                <div className="choose-card">
                  <div className="choose-top">
                    <div className="choose-icon">
                      <img src="assets/img/home1/icon/affordable.svg" alt="" />
                    </div>
                    <h5><span>Affordable</span> Price</h5>
                  </div>
                  <p>An affordable price for a luxury car may be significantly higher than an affordable price for
                    a budget car...</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                <div className="choose-card">
                  <div className="choose-top">
                    <div className="choose-icon">
                      <img src="assets/img/home1/icon/guarantee.svg" alt="" />
                    </div>
                    <h5>Money Back <span>Guarantee</span></h5>
                  </div>
                  <p>Some may offer a full refund with no questions asked, others may require the customer to
                    provide...</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                <div className="choose-card">
                  <div className="choose-top">
                    <div className="choose-icon">
                      <img src="assets/img/home1/icon/warranty.svg" alt="" />
                    </div>
                    <h5>8 Month <span>Warranty</span></h5>
                  </div>
                  <p>During this 8-month period, if the product fails to function properly due to a defect or
                    malfunction...</p>
                </div>
              </div>
            </div>
            <div className="our-activetis">
              <div className="row justify-content-center g-lg-4 gy-5">
                <div className="col-lg-3 col-sm-4 col-sm-6 divider d-flex justify-content-lg-start justify-content-sm-center wow fadeInUp" data-wow-delay="200ms">
                  <div className="single-activiti">
                    <div className="icon">
                      <img src="assets/img/home1/icon/av-car.svg" alt="" />
                    </div>
                    <div className="content">
                      <div className="number">
                        <h5 className="counter">600</h5>
                        <span>K+</span>
                      </div>
                      <p>Car Available</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-4 col-sm-6 divider d-flex justify-content-sm-center wow fadeInUp" data-wow-delay="300ms">
                  <div className="single-activiti">
                    <div className="icon">
                      <img src="assets/img/home1/icon/sold-car.svg" alt="" />
                    </div>
                    <div className="content">
                      <div className="number">
                        <h5 className="counter">400</h5>
                        <span>K+</span>
                      </div>
                      <p>Car Sold</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-4 col-sm-6 divider d-flex justify-content-sm-center wow fadeInUp" data-wow-delay="400ms">
                  <div className="single-activiti">
                    <div className="icon">
                      <img src="assets/img/home1/icon/use-car.svg" alt="" />
                    </div>
                    <div className="content">
                      <div className="number">
                        <h5 className="counter">200</h5>
                        <span>K+</span>
                      </div>
                      <p>Used Cars</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-4 col-sm-6 d-flex justify-content-lg-end justify-content-sm-center wow fadeInUp" data-wow-delay="500ms">
                  <div className="single-activiti">
                    <div className="icon">
                      <img src="assets/img/home1/icon/happy-customar.svg" alt="" />
                    </div>
                    <div className="content">
                      <div className="number">
                        <h5 className="counter">98.50</h5>
                        <span>%</span>
                      </div>
                      <p>Customer Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row wow fadeInUp" data-wow-delay="200ms">
              <div className="col-lg-12 d-flex justify-content-center">
                <div className="trustpilot-review">
                  <strong>Excellent!</strong>
                  <img src="assets/img/home1/icon/trustpilot-star2.svg" alt="" />
                  <p>5.0 Rating out of <strong>5.0</strong> based on <a href="#"><strong>&nbsp;245354&nbsp;</strong>
                      reviews</a></p>
                  <img src="assets/img/home1/icon/trustpilot-logo.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="drivco-gallery mb-100">
          <div className="container">
            <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
              <div className="col-lg-12">
                <div className="section-title1 text-center">
                  <h2>Drivco Gallery</h2>
                </div>
              </div>
            </div>
            <div className="row g-4 mb-50">
              <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="gallery-item">
                  <img className="img-fluid" src="assets/img/inner-page/gallery-01.png" alt="gallery"  onClick={() =>setOpenimg({ openingState: true, openingIndex: 0 })}/>
                
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 d-flex align-items-end wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div className="gallery-item">
                  <img className="img-fluid" onClick={() =>setOpenimg({ openingState: true, openingIndex: 1 })} src="assets/img/inner-page/gallery-02.png" alt="gallery" />
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                <div className="gallery-item">
                  <img className="img-fluid" onClick={() =>setOpenimg({ openingState: true, openingIndex: 2 })}  src="assets/img/inner-page/gallery-03.png" alt="gallery" />
                  
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="500ms" data-wow-duration="1500ms">
                <div className="gallery-item">
                  <img className="img-fluid" onClick={() =>setOpenimg({ openingState: true, openingIndex: 3 })}  src="assets/img/inner-page/gallery-04.png" alt="gallery" />
                
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 d-flex align-items-start wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                <div className="gallery-item">
                  <img className="img-fluid" onClick={() =>setOpenimg({ openingState: true, openingIndex: 4 })}  src="assets/img/inner-page/gallery-05.png" alt="gallery" />
                
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="700ms" data-wow-duration="1500ms">
                <div className="gallery-item">
                  <img className="img-fluid" onClick={() =>setOpenimg({ openingState: true, openingIndex: 5 })}  src="assets/img/inner-page/gallery-06.png" alt="gallery" />
            
                </div>
              </div>
            </div>
            <div className="row wow fadeInUp" data-wow-delay="200ms">
              <div className="col-lg-12 d-flex justify-content-center">
                <div className="view-more-btn">
                  <a className="primary-btn3" href="#">View More</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="how-it-work-section mb-100">
          <div className="container">
            <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
              <div className="col-lg-12 d-flex align-items-end justify-content-between gap-3 flex-wrap">
                <div className="section-title-2">
                  <h2>How Does It Work</h2>
                  <p>Here are some of the featured cars in different categories</p>
                </div>      
                <div className="video-btn">
                  <a onClick={() => setOpen(true)}  className="video-popup"><i className="bi bi-play-circle" /> Watch video</a>
                </div> 
              </div>
            </div>
            <div className="row wow fadeInUp" data-wow-delay="300ms">
              <div className="col-lg-12">
                <div className="work-process-group">
                  <div className="row justify-content-center g-lg-0 gy-5">
                    <div className="col-lg-3 col-sm-6">
                      <div className="single-work-process text-center">
                        <div className="step">
                          <span>01</span>
                        </div>
                        <div className="icon">
                          <img src="assets/img/home2/icon/loaction.svg" alt="" />
                        </div>
                        <div className="content">
                          <h6>Choose Any where</h6>
                          <p>Car servicing is the regular maintenance and inspection of a vehicle to ensure.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="single-work-process text-center">
                        <div className="step">
                          <span>02</span>
                        </div>
                        <div className="icon">
                          <img src="assets/img/home2/icon/contact.svg" alt="" />
                        </div>
                        <div className="content">
                          <h6>Contact With Us</h6>
                          <p>Car servicing is the regular maintenance and inspection of a vehicle to ensure.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="single-work-process text-center">
                        <div className="step">
                          <span>03</span>
                        </div>
                        <div className="icon">
                          <img src="assets/img/home2/icon/pay.svg" alt="" />
                        </div>
                        <div className="content">
                          <h6>Pay For The Car</h6>
                          <p>Car servicing is the regular maintenance and inspection of a vehicle to ensure.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="single-work-process text-center">
                        <div className="step">
                          <span>04</span>
                        </div>
                        <div className="icon">
                          <img src="assets/img/home2/icon/recieve.svg" alt="" />
                        </div>
                        <div className="content">
                          <h6>Recieve The Car</h6>
                          <p>Car servicing is the regular maintenance and inspection of a vehicle to ensure.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row wow fadeInUp" data-wow-delay="400ms">
              <div className="col-lg-12 d-flex justify-content-center">
                <div className="trustpilot-review">
                  <strong>Excellent!</strong>
                  <img src="assets/img/home1/icon/trustpilot-star2.svg" alt="" />
                  <p>5.0 Rating out of <strong>5.0</strong> based on <a href="#"><strong>&nbsp;245354&nbsp;</strong>
                      reviews</a></p>
                  <img src="assets/img/home1/icon/trustpilot-logo.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="customar-feedback-area mb-100">
          <div className="container">
            <div className="row mb-60 wow fadeInUp" data-wow-delay="200ms">
              <div className="col-lg-12">
                <div className="section-title1">
                  <span>Customer Feedback</span>
                  <h2>What Our Customers Are Saying</h2>
                </div>
              </div>
            </div>
            <div className="row g-4 mb-100">
              <div className="col-lg-3 wow fadeInUp" data-wow-delay="200ms">
                <div className="customer-feedback-left">
                  <div className="trustpilot">
                    <h5>Excellent!</h5>
                    <img className="star" src="assets/img/home1/icon/trustpilot-star3.svg" alt="" />
                    <span>Based On <strong>2348</strong> Reviews</span>
                    <img className="logo" src="assets/img/home1/icon/trustpilot-log3.svg" alt="" />
                  </div>
                  <div className="google">
                    <img className="logo" src="assets/img/home1/icon/google3.svg" alt="" />
                    <div className="star">
                      <ul>
                        <li className="active"><i className="bi bi-star-fill" /></li>
                        <li><i className="bi bi-star-fill" /></li>
                        <li><i className="bi bi-star-fill" /></li>
                        <li><i className="bi bi-star-fill" /></li>
                        <li className><i className="bi bi-star-half" /></li>
                      </ul>
                    </div>
                    <span>Based On <strong>1448</strong> Reviews</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 wow fadeInUp" data-wow-delay="200ms">
                <div className="customer-feedback-right">
                  <Swiper {...slideSettings} className="swiper customer-feedback-slider mb-40">
                    <div className="swiper-wrapper">
                      <SwiperSlide className="swiper-slide">
                        <div className="feedback-card">
                          <div className="feedback-top">
                            <div className="stat-area">
                              <div className="star">
                                <ul>
                                  <li className="active"><i className="bi bi-star-fill" /></li>
                                  <li><i className="bi bi-star-fill" /></li>
                                  <li><i className="bi bi-star-fill" /></li>
                                  <li><i className="bi bi-star-fill" /></li>
                                  <li className><i className="bi bi-star-half" /></li>
                                </ul>
                              </div>
                              <span>Great Services!</span>
                            </div>
                            <div className="logo">
                              <img src="assets/img/home1/icon/google3.svg" alt="" />
                            </div>
                          </div>
                          <p>Drivco-Agency to the actively encourage customers to leave
                            reviews to the help promote their products and services.”</p>
                          <div className="author-name">
                            <h6>Nowry Jahan</h6>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="feedback-card">
                          <div className="feedback-top">
                            <div className="stat-area">
                              <img src="assets/img/home1/icon/trustpilot-star.svg" alt="" />
                              <span>Trusted Company</span>
                            </div>
                            <div className="logo">
                              <img src="assets/img/home1/icon/trustpilot-log3.svg" alt="" />
                            </div>
                          </div>
                          <p>Drivco-Agency customer feedback is an invaluable source of
                            information that can help businesses improve their offerings and provide
                            better experiences.</p>
                          <div className="author-name">
                            <h6>Jhon Abraham</h6>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="feedback-card">
                          <div className="feedback-top">
                            <div className="stat-area">
                              <div className="star">
                                <ul>
                                  <li className="active"><i className="bi bi-star-fill" /></li>
                                  <li><i className="bi bi-star-fill" /></li>
                                  <li><i className="bi bi-star-fill" /></li>
                                  <li><i className="bi bi-star-fill" /></li>
                                  <li className><i className="bi bi-star-half" /></li>
                                </ul>
                              </div>
                              <span>Great Services!</span>
                            </div>
                            <div className="logo">
                              <img src="assets/img/home1/icon/google3.svg" alt="" />
                            </div>
                          </div>
                          <p>Drivco-Agency to the actively encourage customers to leave
                            reviews to the help promote their products and services.”</p>
                          <div className="author-name">
                            <h6>Nowry Jahan</h6>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="feedback-card">
                          <div className="feedback-top">
                            <div className="stat-area">
                              <img src="assets/img/home1/icon/trustpilot-star.svg" alt="" />
                              <span>Trusted Company</span>
                            </div>
                            <div className="logo">
                              <img src="assets/img/home1/icon/trustpilot-log3.svg" alt="" />
                            </div>
                          </div>
                          <p>Drivco-Agency customer feedback is an invaluable source of
                            information that can help businesses improve their offerings and provide
                            better experiences.</p>
                          <div className="author-name">
                            <h6>Jhon Abraham</h6>
                          </div>
                        </div>
                      </SwiperSlide>
                    </div>
                  </Swiper>
                  <div className="row ">
                    <div className="col-lg-12 divider">
                      <div className="slider-btn-group style-2 justify-content-md-between justify-content-center">
                        <div className="slider-btn prev-4 d-md-flex d-none">
                          <svg width={11} height={19} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                          </svg>
                        </div>
                        <div className="view-btn-area">
                          <p>Thousand of People Reviews to Us</p>
                          <Link legacyBehavior  href="/customer-review"><a className="view-btn">View All Review</a></Link>
                        </div>
                        <div className="slider-btn next-4 d-md-flex d-none">
                          <svg width={11} height={19} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <React.Fragment>
            <ModalVideo
              channel="youtube"
              youtube={{ mute: 0, autoplay: 0 }}
              isOpen={isOpen}
              videoId="L61p2uyiMSo"
              onClose={() => setOpen(false)} 
            />
          </React.Fragment>
        </div>

        <Lightbox
            className="img-fluid"
            open={isOpenimg.openingState}
            plugins={[Fullscreen]}
            index={isOpenimg.openingIndex}
            close={() => setOpenimg(false)}
            styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
            slides={images.map(function (elem) {
              return { src: elem.imageBig };
            })}
          />
    </MainLayout>
  )
}

export default About
