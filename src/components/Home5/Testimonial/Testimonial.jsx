import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);


function Testimonial() {
    const slideSettings = useMemo(()=>{
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
    <div className="home5-testimonial-section pt-90 pb-90 mb-100">
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
          <div className="col-lg-12">
            <Swiper {...slideSettings} className="swiper customer-feedback-slider2 wow fadeInUp" data-wow-delay="300ms">
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
                        <img src="assets/img/home1/icon/trustpilot-star.svg" alt="" />
                      </div>
                      <div className="services">
                        <span>Great Service!</span>
                      </div>
                    </div>
                    <p>Drivco-Agency customer feedback is an invaluable source of
                      information that can help businesses improve their offerings and provide
                      better experiences.</p>
                    <div className="author-name">
                      <h6>S Rahman</h6>
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
                        <span>Easy to Buy</span>
                      </div>
                    </div>
                    <p>Drivco-Agency customer feedback is an invaluable source of
                      information that can help businesses improve their offerings and provide
                      better experiences.</p>
                    <div className="author-name">
                      <h6>MGA Nahian</h6>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
            <div className="slider-btn-group2 pt-50 wow fadeInUp" data-wow-delay="400ms">
              <div className="slider-btn prev-6 d-lg-flex d-none">
                <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                </svg>
              </div>
              <div className="trustpilot-review">
                <strong>Excellent!</strong>
                <img src="assets/img/home1/icon/trustpilot-star2.svg" alt="" />
                <p>5.0 Rating out of <strong>5.0</strong> based on <a href="#"><strong>&nbsp;245354&nbsp;</strong>
                    reviews</a></p>
                <img src="assets/img/home1/icon/trustpilot-logo.svg" alt="" />
              </div>
              <div className="slider-btn next-6 d-lg-flex d-none">
                <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                </svg>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>

  )
}

export default Testimonial