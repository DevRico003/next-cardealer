import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([ Autoplay, EffectFade, Navigation, Pagination]);

function index() {
    const settings = useMemo(()=>{
        return {   
              speed: 1500,
              spaceBetween: 30,
              slidesPerView: "auto",
              loop: true,
              autoplay: {
                delay: 3000, // Autoplay duration in milliseconds
                disableOnInteraction: false,
              },
              navigation: {
                nextEl: ".next-10",
                prevEl: ".prev-10",
              },
              }
         })
  return (
    <div className="home3-testimonial-area mb-100">
      <ul className="sm-img-group">
        <li><img src="assets/img/home3/home3-testi-01.png" alt="" /></li>
        <li><img src="assets/img/home3/home3-testi-02.png" alt="" /></li>
        <li><img src="assets/img/home3/home3-testi-03.png" alt="" /></li>
        <li><img src="assets/img/home3/home3-testi-04.png" alt="" /></li>
        <li><img src="assets/img/home3/home3-testi-05.png" alt="" /></li>
        <li><img src="assets/img/home3/home3-testi-06.png" alt="" /></li>
      </ul>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Swiper {...settings} className="swiper testimonial-slider3">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-wrap text-center">
                    <div className="author-image-area">
                      <div className="quat">
                        <img src="assets/img/home3/icon/quat.svg" alt="" />
                      </div>
                      <img src="assets/img/home3/home3-testi-main-01.png" alt="" />
                    </div>
                    <div className="review">
                      <div className="star">
                        <img src="assets/img/home1/icon/trustpilot-star.svg" alt="" />
                      </div>
                      <h6>Trusted Company</h6>
                    </div>
                    <div className="content">
                      <p>"Drivco Agency actively encourage customers to leave reviews to help promote their products and services and to build trust with potential customers."</p>
                    </div>
                    <div className="author-name">
                      <h5>Jhon Abraham</h5>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
            <div className="slider-btn-group2">
              <div className="slider-btn prev-10">
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
              <div className="slider-btn  next-10">
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

export default index