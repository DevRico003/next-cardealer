import React, { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import Link from "next/link";
SwiperCore.use([ Autoplay, EffectFade, Navigation]);

function index() {
  const settings = useMemo(()=>{
    return {
      slidesPerView: 3,
      speed: 1500,
      spaceBetween: 25,
      loop: true,
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".next-6",
        prevEl: ".prev-6",
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
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1400: {
          slidesPerView: 3
        },
      }
    }
  })
  return (
    <div className="home2-testimonial-section mb-100">
      <div className="container">
        <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
          <div className="col-lg-12 d-flex align-items-end justify-content-between gap-3 flex-wrap">
            <div className="section-title-2">
              <h2>Our Customer Reviews</h2>
              <p>Here are some of the featured cars in different categories</p>
            </div>      
            <div className="review-and-btn d-flex flex-wrap align-items-center gap-sm-5 gap-3">
              <div className="rating">
                <a href="#">
                  <div className="review-top">
                    <div className="logo">
                      <img src="assets/img/home2/icon/trustpilot-logo3.svg" alt="" />
                    </div>
                    <div className="star">
                      <img src="assets/img/home1/icon/trustpilot-star.svg" alt="" />
                    </div>
                  </div>
                  <div className="content">
                    <ul>
                      <li>Trust Rating <span>5.0</span></li>
                      <li><span>2348</span> Reviews</li>
                    </ul>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>   
        <div className="row wow fadeInUp" data-wow-delay="300ms">
          <div className="col-lg-12 mb-40">
            <Swiper {...settings} className="swiper customer-feedback-slider4">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="feedback-card">
                    <div className="feedback-top">
                      <div className="stat-area">
                        <img src="assets/img/home1/icon/trustpilot-star.svg" alt="" />
                      </div>
                      <div className="services">
                        <span>Trusted Company</span>
                      </div>
                    </div>
                    <p><strong>Drivco-Agency</strong> customer feedback is an invaluable source of
                      information that can help businesses improve their offerings and provide
                      better experiences.</p>
                    <div className="author-name">
                      <h6>Jhon Abraham,</h6>
                      <span>25 minutes ago</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="feedback-card">
                    <div className="feedback-top">
                      <div className="stat-area">
                        <img src="assets/img/home1/icon/trustpilot-star.svg" alt="" />
                      </div>
                      <div className="services">
                        <span>Trusted Company</span>
                      </div>
                    </div>
                    <p><strong>Drivco-Agency</strong> customer feedback is an invaluable source of
                      information that can help businesses improve their offerings and provide
                      better experiences.</p>
                    <div className="author-name">
                      <h6>S. Rahman,</h6>
                      <span>15 hours ago</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="feedback-card">
                    <div className="feedback-top">
                      <div className="stat-area">
                        <img src="assets/img/home1/icon/trustpilot-star.svg" alt="" />
                      </div>
                      <div className="services">
                        <span>Trusted Company</span>
                      </div>
                    </div>
                    <p><strong>Drivco-Agency</strong> customer feedback is an invaluable source of
                      information that can help businesses improve their offerings and provide
                      better experiences.</p>
                    <div className="author-name">
                      <h6>MGA Nahian,</h6>
                      <span>2 days ago</span>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="slider-btn-pagination">
              <div className="slider-btn prev-6"><i className="bi bi-arrow-left" /></div>
              <div className="pagination pagination8" />
              <div className="slider-btn next-6"><i className="bi bi-arrow-right" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default index