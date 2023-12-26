
import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

function index() {
    const slideSetting = useMemo(()=>{
        return {
            slidesPerView:"auto",
            loop:true,
            speed: 1500,
            spaceBetween: 25,
            autoplay: {
                delay: 2500, // Autoplay duration in milliseconds
            },
            navigation: {
                nextEl: ".next-1",
                prevEl: ".prev-1",
            },

            breakpoints: {
                280: {
                    slidesPerView: 1,
                },
                420: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                },
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 24,
                },
                1400: {
                    slidesPerView: 6
                },
            }
            }
    })
  return (
    <div className="home6-brand-section mb-100 pb-90 pt-90">
      <div className="container">
        <div className="row mb-60 wow fadeInUp" data-wow-delay="200ms">
          <div className="col-lg-12 d-flex align-items-end justify-content-between flex-wrap gap-4">
            <div className="section-title-2">
              <h2>Brand Category</h2>
              <p>To get the most accurate and up-to-date information.</p>
            </div>
            <div className="slider-btn-group2 style-6">
              <div className="slider-btn prev-1">
                <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                </svg>
              </div>
              <div className="slider-btn next-1">
                <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                </svg>
              </div>
            </div> 
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 mb-50 wow fadeInUp" data-wow-delay="300ms">
            <Swiper {...slideSetting} className="swiper home6-brand-category-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <Link legacyBehavior href="/single-brand-category">
                    <a className="car-category text-center">
                    <div className="icon">
                      <img src="assets/img/home2/icon/suzuki.svg" alt="" />
                    </div>
                    <div className="content">
                      <h6>Suzuki Car</h6>
                      <span>(5463)</span>
                    </div>
                    </a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                <Link legacyBehavior href="/single-brand-category">
                    <a className="car-category text-center">
                    <div className="icon">
                      <img src="assets/img/home2/icon/tata.svg" alt="" />
                    </div>
                    <div className="content">
                      <h6>TATA Car</h6>
                      <span>(5463)</span>
                    </div>
                  </a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                <Link legacyBehavior href="/single-brand-category">
                    <a className="car-category text-center">
                    <div className="icon">
                      <img src="assets/img/home2/icon/toyota.svg" alt="" />
                    </div>
                    <div className="content">
                      <h6>Toyota</h6>
                      <span>(5463)</span>
                    </div>
                  </a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                <Link legacyBehavior href="/single-brand-category">
                    <a className="car-category text-center">
                    <div className="icon">
                      <img src="assets/img/home2/icon/tesla.svg" alt="" />
                    </div>
                    <div className="content">
                      <h6>Tesla Car</h6>
                      <span>(5463)</span>
                    </div>
                  </a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <a href="#" className="car-category text-center">
                    <div className="icon">
                      <img src="assets/img/home2/icon/mazda.svg" alt="" />
                    </div>
                    <div className="content">
                      <h6>Mazda</h6>
                      <span>(5463)</span>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                <Link legacyBehavior href="/single-brand-category">
                    <a className="car-category text-center">
                    <div className="icon">
                      <img src="assets/img/home2/icon/mercedes.svg" alt="" />
                    </div>
                    <div className="content">
                      <h6>Mercedes</h6>
                      <span>(5463)</span>
                    </div>
                  </a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                <Link legacyBehavior href="/single-brand-category">
                    <a className="car-category text-center">
                    <div className="icon">
                      <img src="assets/img/home2/icon/ferarri.svg" alt="" />
                    </div>
                    <div className="content">
                      <h6>Ferrari</h6>
                      <span>(5463)</span>
                    </div>
                  </a>
                  </Link>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          <div className="col-lg-12">
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
          </div>
        </div>
      </div>
    </div>

  )
}

export default index