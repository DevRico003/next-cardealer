
import React, { useMemo } from "react";
import Link from "next/link";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Marquee from "react-fast-marquee";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

function index() {
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
        <div className="row wow fadeInUp" data-wow-delay="400ms">
          <div className="col-lg-12">
            <div className="sub-title">
              <h6>Our Trusted Partners</h6>
              <div className="dash" />
            </div>
            <div className="partner-slider">
              <h2 className="marquee_text2">
                  <Marquee autoFill="true">
                <img src="assets/img/home1/company-logo-01.png" alt="" />
                <img src="assets/img/home1/company-logo-02.png" alt="" />
                <img src="assets/img/home1/company-logo-03.png" alt="" />
                <img src="assets/img/home1/company-logo-04.png" alt="" />
                <img src="assets/img/home1/company-logo-05.png" alt="" />
                <img src="assets/img/home1/company-logo-06.png" alt="" />
                <img src="assets/img/home1/company-logo-01.png" alt="" />
                <img src="assets/img/home1/company-logo-02.png" alt="" />
                <img src="assets/img/home1/company-logo-03.png" alt="" />
                <img src="assets/img/home1/company-logo-04.png" alt="" />
                <img src="assets/img/home1/company-logo-05.png" alt="" />
                <img src="assets/img/home1/company-logo-06.png" alt="" />
                <img src="assets/img/home1/company-logo-01.png" alt="" />
                <img src="assets/img/home1/company-logo-02.png" alt="" />
                <img src="assets/img/home1/company-logo-03.png" alt="" />
                <img src="assets/img/home1/company-logo-04.png" alt="" />
                <img src="assets/img/home1/company-logo-05.png" alt="" />
                <img src="assets/img/home1/company-logo-06.png" alt="" />
                <img src="assets/img/home1/company-logo-01.png" alt="" />
                <img src="assets/img/home1/company-logo-02.png" alt="" />
                <img src="assets/img/home1/company-logo-03.png" alt="" />
                <img src="assets/img/home1/company-logo-04.png" alt="" />
                <img src="assets/img/home1/company-logo-05.png" alt="" />
                <img src="assets/img/home1/company-logo-06.png" alt="" />
                </Marquee>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  

  )
}

export default index