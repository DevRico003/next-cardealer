import React, { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import Link from "next/link";
SwiperCore.use([ Autoplay, EffectFade, Navigation]);

function index() {
  const settings = useMemo(()=>{
    return {
      speed: 1500,
      spaceBetween: 25,
      autoplay: {
        delay: 3000, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".next-11",
        prevEl: ".prev-11",
      },
      pagination: {
        el: ".pagination11",
        clickable: "true",
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
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 3
        },
      }
    }
  },[])

  return (
    <div className="home4-upcomming-car-section mb-100">
      <div className="modal signUp-modal fade" id="alartModal01" tabIndex={-1} aria-labelledby="alartModal01Label" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="alartModal01Label">Get Notify For Upcoming Car</h4>
              <p>If you need to set up email want to receive notifications</p>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x" /></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row g-4">
                  <div className="col-md-12">
                    <div className="form-inner">
                      <label>Full Name*</label>
                      <input type="text" placeholder="Daniel" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner">
                      <label>Location*</label>
                      <input type="text" placeholder="Type location" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner">
                      <label>Phone Number*</label>
                      <input type="email" placeholder="+91- 245 *** ****" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-inner">
                      <label>Type email*</label>
                      <input type="email" placeholder="Enter your email address" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-inner">
                      <button className="primary-btn2" type="submit">Submit Now</button>
                    </div>
                  </div>
                </div>
                <div className="terms-conditon two">
                  <p>Your notify instantly by email when new car will launch.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
          <div className="col-lg-12 d-flex align-items-end justify-content-between gap-3 flex-wrap">
            <div className="section-title-2">
              <h2>Top Upcoming Car</h2>
              <p>To get the most accurate and up-to-date information.</p>
            </div>    
            <div className="explore-more-btn">
              <Link legacyBehavior href="/car-deatils"><a>Explore More <i className="bi bi-arrow-right" /></a></Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 mb-40 wow fadeInUp" data-wow-delay="300ms">
            <Swiper {...settings} className="swiper home4-latest-car-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="product-card4 style-2">
                    <div className="product-img">
                      <a href="#" className="fav">
                        <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                          </path>
                        </svg>
                      </a>
                          
                      <div className="swiper product-img-slider">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <img src="assets/img/home4/letest-car1.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="assets/img/home4/letest-car1.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="assets/img/home4/letest-car1.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="assets/img/home4/letest-car1.png" alt="image" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-content">
                      <h6><Link legacyBehavior href="/car-deatils"><a>Tesla Model S-2023</a></Link></h6>
                      <div className="exp-date">
                        <p>Expected Launched  <span>02 April, 2023</span></p>
                      </div>
                      <ul className="features">
                        <li>
                          <img src="assets/img/home4/icon/miles.svg" alt="" />
                          2500 miles
                        </li>
                        <li>
                          <img src="assets/img/home4/icon/fuel.svg" alt="" />
                          Petrol + Gas
                        </li>
                        <li>
                          <img src="assets/img/home4/icon/electric.svg" alt="" />
                          Electric
                        </li>
                      </ul>
                      <div className="button-and-price">
                        <button type="button" className="primary-btn3" data-bs-toggle="modal" data-bs-target="#alartModal01">
                          <svg xmlns="http://www.w3.org/2000/svg" width={13} height={14} viewBox="0 0 13 14">
                            <path d="M10.9778 7.18763V5.87891C10.9778 3.96971 9.63702 2.35154 7.80001 1.82301V1.23047C7.80001 0.551988 7.21684 0 6.50002 0C5.7832 0 5.20003 0.551988 5.20003 1.23047V1.82301C3.36299 2.35154 2.02226 3.96968 2.02226 5.87891V7.18763C2.02226 8.86468 1.3469 10.4549 0.120605 11.6653C0.0618066 11.7234 0.0223205 11.7965 0.00705533 11.8755C-0.00820982 11.9546 0.00141928 12.0362 0.0347455 12.1102C0.0680718 12.1841 0.123625 12.2472 0.1945 12.2915C0.265375 12.3358 0.348445 12.3594 0.433383 12.3594H4.37696C4.57825 13.2943 5.4537 14 6.50002 14C7.54637 14 8.42176 13.2943 8.62308 12.3594H12.5667C12.6516 12.3594 12.7346 12.3358 12.8055 12.2914C12.8764 12.2471 12.9319 12.1841 12.9653 12.1101C12.9986 12.0362 13.0082 11.9546 12.9929 11.8755C12.9777 11.7965 12.9382 11.7234 12.8794 11.6653C11.6531 10.4549 10.9778 8.86465 10.9778 7.18763ZM6.06669 1.23047C6.06669 1.00431 6.26108 0.820312 6.50002 0.820312C6.73896 0.820312 6.93335 1.00431 6.93335 1.23047V1.66053C6.79073 1.64752 6.6462 1.64062 6.50002 1.64062C6.35384 1.64062 6.20931 1.64752 6.06669 1.66053V1.23047ZM6.50002 13.1797C5.9351 13.1797 5.45344 12.8368 5.27456 12.3594H7.72548C7.5466 12.8368 7.06494 13.1797 6.50002 13.1797ZM1.36736 11.5391C2.35422 10.2869 2.88893 8.77166 2.88893 7.18763V5.87891C2.88893 3.99424 4.50886 2.46094 6.50002 2.46094C8.49118 2.46094 10.1111 3.99424 10.1111 5.87891V7.18763C10.1111 8.77166 10.6458 10.2869 11.6327 11.5391H1.36736ZM12.1333 5.87891C12.1333 6.10542 12.3273 6.28906 12.5667 6.28906C12.806 6.28906 13 6.10542 13 5.87891C13 4.23555 12.3239 2.69054 11.0962 1.52852C10.927 1.36836 10.6526 1.36834 10.4834 1.52852C10.3141 1.6887 10.3141 1.94838 10.4834 2.10856C11.5474 3.11566 12.1333 4.45465 12.1333 5.87891ZM0.433383 6.28906C0.672698 6.28906 0.866714 6.10542 0.866714 5.87891C0.866714 4.45468 1.45269 3.11568 2.51667 2.10859C2.6859 1.94841 2.6859 1.68872 2.51667 1.52854C2.34746 1.36836 2.07308 1.36836 1.90385 1.52854C0.676164 2.69057 5.22303e-05 4.23555 5.22303e-05 5.87891C5.22303e-05 6.10542 0.194069 6.28906 0.433383 6.28906Z" />
                          </svg>Alert Me                 
                        </button>
                        <div className="price-area">
                          <span>Excellent Price</span>
                          <h6>$15,539.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>           
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="product-card4 style-2">
                    <div className="product-img">
                      <a href="#" className="fav">
                        <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                          </path>
                        </svg>
                      </a>
                          
                      <div className="swiper product-img-slider">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <img src="assets/img/home4/letest-car2.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="assets/img/home4/letest-car2.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="assets/img/home4/letest-car2.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="assets/img/home4/letest-car2.png" alt="image" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-content">
                      <h6><Link legacyBehavior href="/car-deatils"><a>Tesla Model S-2023</a></Link></h6>
                      <div className="exp-date">
                        <p>Expected Launched  <span>02 April, 2023</span></p>
                      </div>
                      <ul className="features">
                        <li>
                          <img src="assets/img/home4/icon/miles.svg" alt="" />
                          2500 miles
                        </li>
                        <li>
                          <img src="assets/img/home4/icon/fuel.svg" alt="" />
                          Petrol + Gas
                        </li>
                        <li>
                          <img src="assets/img/home4/icon/electric.svg" alt="" />
                          Electric
                        </li>
                      </ul>
                      <div className="button-and-price">
                        <button type="button" className="primary-btn3" data-bs-toggle="modal" data-bs-target="#alartModal01">
                          <svg xmlns="http://www.w3.org/2000/svg" width={13} height={14} viewBox="0 0 13 14">
                            <path d="M10.9778 7.18763V5.87891C10.9778 3.96971 9.63702 2.35154 7.80001 1.82301V1.23047C7.80001 0.551988 7.21684 0 6.50002 0C5.7832 0 5.20003 0.551988 5.20003 1.23047V1.82301C3.36299 2.35154 2.02226 3.96968 2.02226 5.87891V7.18763C2.02226 8.86468 1.3469 10.4549 0.120605 11.6653C0.0618066 11.7234 0.0223205 11.7965 0.00705533 11.8755C-0.00820982 11.9546 0.00141928 12.0362 0.0347455 12.1102C0.0680718 12.1841 0.123625 12.2472 0.1945 12.2915C0.265375 12.3358 0.348445 12.3594 0.433383 12.3594H4.37696C4.57825 13.2943 5.4537 14 6.50002 14C7.54637 14 8.42176 13.2943 8.62308 12.3594H12.5667C12.6516 12.3594 12.7346 12.3358 12.8055 12.2914C12.8764 12.2471 12.9319 12.1841 12.9653 12.1101C12.9986 12.0362 13.0082 11.9546 12.9929 11.8755C12.9777 11.7965 12.9382 11.7234 12.8794 11.6653C11.6531 10.4549 10.9778 8.86465 10.9778 7.18763ZM6.06669 1.23047C6.06669 1.00431 6.26108 0.820312 6.50002 0.820312C6.73896 0.820312 6.93335 1.00431 6.93335 1.23047V1.66053C6.79073 1.64752 6.6462 1.64062 6.50002 1.64062C6.35384 1.64062 6.20931 1.64752 6.06669 1.66053V1.23047ZM6.50002 13.1797C5.9351 13.1797 5.45344 12.8368 5.27456 12.3594H7.72548C7.5466 12.8368 7.06494 13.1797 6.50002 13.1797ZM1.36736 11.5391C2.35422 10.2869 2.88893 8.77166 2.88893 7.18763V5.87891C2.88893 3.99424 4.50886 2.46094 6.50002 2.46094C8.49118 2.46094 10.1111 3.99424 10.1111 5.87891V7.18763C10.1111 8.77166 10.6458 10.2869 11.6327 11.5391H1.36736ZM12.1333 5.87891C12.1333 6.10542 12.3273 6.28906 12.5667 6.28906C12.806 6.28906 13 6.10542 13 5.87891C13 4.23555 12.3239 2.69054 11.0962 1.52852C10.927 1.36836 10.6526 1.36834 10.4834 1.52852C10.3141 1.6887 10.3141 1.94838 10.4834 2.10856C11.5474 3.11566 12.1333 4.45465 12.1333 5.87891ZM0.433383 6.28906C0.672698 6.28906 0.866714 6.10542 0.866714 5.87891C0.866714 4.45468 1.45269 3.11568 2.51667 2.10859C2.6859 1.94841 2.6859 1.68872 2.51667 1.52854C2.34746 1.36836 2.07308 1.36836 1.90385 1.52854C0.676164 2.69057 5.22303e-05 4.23555 5.22303e-05 5.87891C5.22303e-05 6.10542 0.194069 6.28906 0.433383 6.28906Z" />
                          </svg>Alert Me                 
                        </button>
                        <div className="price-area">
                          <span>Excellent Price</span>
                          <h6>$15,539.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>           
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="product-card4 style-2">
                    <div className="product-img">
                      <a href="#" className="fav">
                        <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                          </path>
                        </svg>
                      </a>
                          
                      <div className="swiper product-img-slider">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <img src="assets/img/home4/letest-car3.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="assets/img/home4/letest-car3.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="assets/img/home4/letest-car3.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="assets/img/home4/letest-car3.png" alt="image" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-content">
                      <h6><Link legacyBehavior href="/car-deatils"><a>Tesla Model S-2023</a></Link></h6>
                      <div className="exp-date">
                        <p>Expected Launched  <span>02 April, 2023</span></p>
                      </div>
                      <ul className="features">
                        <li>
                          <img src="assets/img/home4/icon/miles.svg" alt="" />
                          2500 miles
                        </li>
                        <li>
                          <img src="assets/img/home4/icon/fuel.svg" alt="" />
                          Petrol + Gas
                        </li>
                        <li>
                          <img src="assets/img/home4/icon/electric.svg" alt="" />
                          Electric
                        </li>
                      </ul>
                      <div className="button-and-price">
                        <button type="button" className="primary-btn3" data-bs-toggle="modal" data-bs-target="#alartModal01">
                          <svg xmlns="http://www.w3.org/2000/svg" width={13} height={14} viewBox="0 0 13 14">
                            <path d="M10.9778 7.18763V5.87891C10.9778 3.96971 9.63702 2.35154 7.80001 1.82301V1.23047C7.80001 0.551988 7.21684 0 6.50002 0C5.7832 0 5.20003 0.551988 5.20003 1.23047V1.82301C3.36299 2.35154 2.02226 3.96968 2.02226 5.87891V7.18763C2.02226 8.86468 1.3469 10.4549 0.120605 11.6653C0.0618066 11.7234 0.0223205 11.7965 0.00705533 11.8755C-0.00820982 11.9546 0.00141928 12.0362 0.0347455 12.1102C0.0680718 12.1841 0.123625 12.2472 0.1945 12.2915C0.265375 12.3358 0.348445 12.3594 0.433383 12.3594H4.37696C4.57825 13.2943 5.4537 14 6.50002 14C7.54637 14 8.42176 13.2943 8.62308 12.3594H12.5667C12.6516 12.3594 12.7346 12.3358 12.8055 12.2914C12.8764 12.2471 12.9319 12.1841 12.9653 12.1101C12.9986 12.0362 13.0082 11.9546 12.9929 11.8755C12.9777 11.7965 12.9382 11.7234 12.8794 11.6653C11.6531 10.4549 10.9778 8.86465 10.9778 7.18763ZM6.06669 1.23047C6.06669 1.00431 6.26108 0.820312 6.50002 0.820312C6.73896 0.820312 6.93335 1.00431 6.93335 1.23047V1.66053C6.79073 1.64752 6.6462 1.64062 6.50002 1.64062C6.35384 1.64062 6.20931 1.64752 6.06669 1.66053V1.23047ZM6.50002 13.1797C5.9351 13.1797 5.45344 12.8368 5.27456 12.3594H7.72548C7.5466 12.8368 7.06494 13.1797 6.50002 13.1797ZM1.36736 11.5391C2.35422 10.2869 2.88893 8.77166 2.88893 7.18763V5.87891C2.88893 3.99424 4.50886 2.46094 6.50002 2.46094C8.49118 2.46094 10.1111 3.99424 10.1111 5.87891V7.18763C10.1111 8.77166 10.6458 10.2869 11.6327 11.5391H1.36736ZM12.1333 5.87891C12.1333 6.10542 12.3273 6.28906 12.5667 6.28906C12.806 6.28906 13 6.10542 13 5.87891C13 4.23555 12.3239 2.69054 11.0962 1.52852C10.927 1.36836 10.6526 1.36834 10.4834 1.52852C10.3141 1.6887 10.3141 1.94838 10.4834 2.10856C11.5474 3.11566 12.1333 4.45465 12.1333 5.87891ZM0.433383 6.28906C0.672698 6.28906 0.866714 6.10542 0.866714 5.87891C0.866714 4.45468 1.45269 3.11568 2.51667 2.10859C2.6859 1.94841 2.6859 1.68872 2.51667 1.52854C2.34746 1.36836 2.07308 1.36836 1.90385 1.52854C0.676164 2.69057 5.22303e-05 4.23555 5.22303e-05 5.87891C5.22303e-05 6.10542 0.194069 6.28906 0.433383 6.28906Z" />
                          </svg>Alert Me                 
                        </button>
                        <div className="price-area">
                          <span>Excellent Price</span>
                          <h6>$15,539.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>           
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="product-card4 style-2">
                    <div className="product-img">
                      <a href="#" className="fav">
                        <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                          </path>
                        </svg>
                      </a>
                          
                      <div className="swiper product-img-slider">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <img src="assets/img/home4/letest-car1.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="assets/img/home4/letest-car1.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="assets/img/home4/letest-car1.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="assets/img/home4/letest-car1.png" alt="image" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-content">
                      <h6><Link legacyBehavior href="/car-deatils"><a>Tesla Model S-2023</a></Link></h6>
                      <div className="exp-date">
                        <p>Expected Launched  <span>02 April, 2023</span></p>
                      </div>
                      <ul className="features">
                        <li>
                          <img src="assets/img/home4/icon/miles.svg" alt="" />
                          2500 miles
                        </li>
                        <li>
                          <img src="assets/img/home4/icon/fuel.svg" alt="" />
                          Petrol + Gas
                        </li>
                        <li>
                          <img src="assets/img/home4/icon/electric.svg" alt="" />
                          Electric
                        </li>
                      </ul>
                      <div className="button-and-price">
                        <button type="button" className="primary-btn3" data-bs-toggle="modal" data-bs-target="#alartModal01">
                          <svg xmlns="http://www.w3.org/2000/svg" width={13} height={14} viewBox="0 0 13 14">
                            <path d="M10.9778 7.18763V5.87891C10.9778 3.96971 9.63702 2.35154 7.80001 1.82301V1.23047C7.80001 0.551988 7.21684 0 6.50002 0C5.7832 0 5.20003 0.551988 5.20003 1.23047V1.82301C3.36299 2.35154 2.02226 3.96968 2.02226 5.87891V7.18763C2.02226 8.86468 1.3469 10.4549 0.120605 11.6653C0.0618066 11.7234 0.0223205 11.7965 0.00705533 11.8755C-0.00820982 11.9546 0.00141928 12.0362 0.0347455 12.1102C0.0680718 12.1841 0.123625 12.2472 0.1945 12.2915C0.265375 12.3358 0.348445 12.3594 0.433383 12.3594H4.37696C4.57825 13.2943 5.4537 14 6.50002 14C7.54637 14 8.42176 13.2943 8.62308 12.3594H12.5667C12.6516 12.3594 12.7346 12.3358 12.8055 12.2914C12.8764 12.2471 12.9319 12.1841 12.9653 12.1101C12.9986 12.0362 13.0082 11.9546 12.9929 11.8755C12.9777 11.7965 12.9382 11.7234 12.8794 11.6653C11.6531 10.4549 10.9778 8.86465 10.9778 7.18763ZM6.06669 1.23047C6.06669 1.00431 6.26108 0.820312 6.50002 0.820312C6.73896 0.820312 6.93335 1.00431 6.93335 1.23047V1.66053C6.79073 1.64752 6.6462 1.64062 6.50002 1.64062C6.35384 1.64062 6.20931 1.64752 6.06669 1.66053V1.23047ZM6.50002 13.1797C5.9351 13.1797 5.45344 12.8368 5.27456 12.3594H7.72548C7.5466 12.8368 7.06494 13.1797 6.50002 13.1797ZM1.36736 11.5391C2.35422 10.2869 2.88893 8.77166 2.88893 7.18763V5.87891C2.88893 3.99424 4.50886 2.46094 6.50002 2.46094C8.49118 2.46094 10.1111 3.99424 10.1111 5.87891V7.18763C10.1111 8.77166 10.6458 10.2869 11.6327 11.5391H1.36736ZM12.1333 5.87891C12.1333 6.10542 12.3273 6.28906 12.5667 6.28906C12.806 6.28906 13 6.10542 13 5.87891C13 4.23555 12.3239 2.69054 11.0962 1.52852C10.927 1.36836 10.6526 1.36834 10.4834 1.52852C10.3141 1.6887 10.3141 1.94838 10.4834 2.10856C11.5474 3.11566 12.1333 4.45465 12.1333 5.87891ZM0.433383 6.28906C0.672698 6.28906 0.866714 6.10542 0.866714 5.87891C0.866714 4.45468 1.45269 3.11568 2.51667 2.10859C2.6859 1.94841 2.6859 1.68872 2.51667 1.52854C2.34746 1.36836 2.07308 1.36836 1.90385 1.52854C0.676164 2.69057 5.22303e-05 4.23555 5.22303e-05 5.87891C5.22303e-05 6.10542 0.194069 6.28906 0.433383 6.28906Z" />
                          </svg>Alert Me                 
                        </button>
                        <div className="price-area">
                          <span>Excellent Price</span>
                          <h6>$15,539.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>           
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="product-card4 style-2">
                    <div className="product-img">
                      <a href="#" className="fav">
                        <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                          </path>
                        </svg>
                      </a>
                          
                      <div className="swiper product-img-slider">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <img src="assets/img/home4/letest-car2.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="assets/img/home4/letest-car2.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="assets/img/home4/letest-car2.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="assets/img/home4/letest-car2.png" alt="image" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-content">
                      <h6><Link legacyBehavior href="/car-deatils"><a>Tesla Model S-2023</a></Link></h6>
                      <div className="exp-date">
                        <p>Expected Launched  <span>02 April, 2023</span></p>
                      </div>
                      <ul className="features">
                        <li>
                          <img src="assets/img/home4/icon/miles.svg" alt="" />
                          2500 miles
                        </li>
                        <li>
                          <img src="assets/img/home4/icon/fuel.svg" alt="" />
                          Petrol + Gas
                        </li>
                        <li>
                          <img src="assets/img/home4/icon/electric.svg" alt="" />
                          Electric
                        </li>
                      </ul>
                      <div className="button-and-price">
                        <button type="button" className="primary-btn3" data-bs-toggle="modal" data-bs-target="#alartModal01">
                          <svg xmlns="http://www.w3.org/2000/svg" width={13} height={14} viewBox="0 0 13 14">
                            <path d="M10.9778 7.18763V5.87891C10.9778 3.96971 9.63702 2.35154 7.80001 1.82301V1.23047C7.80001 0.551988 7.21684 0 6.50002 0C5.7832 0 5.20003 0.551988 5.20003 1.23047V1.82301C3.36299 2.35154 2.02226 3.96968 2.02226 5.87891V7.18763C2.02226 8.86468 1.3469 10.4549 0.120605 11.6653C0.0618066 11.7234 0.0223205 11.7965 0.00705533 11.8755C-0.00820982 11.9546 0.00141928 12.0362 0.0347455 12.1102C0.0680718 12.1841 0.123625 12.2472 0.1945 12.2915C0.265375 12.3358 0.348445 12.3594 0.433383 12.3594H4.37696C4.57825 13.2943 5.4537 14 6.50002 14C7.54637 14 8.42176 13.2943 8.62308 12.3594H12.5667C12.6516 12.3594 12.7346 12.3358 12.8055 12.2914C12.8764 12.2471 12.9319 12.1841 12.9653 12.1101C12.9986 12.0362 13.0082 11.9546 12.9929 11.8755C12.9777 11.7965 12.9382 11.7234 12.8794 11.6653C11.6531 10.4549 10.9778 8.86465 10.9778 7.18763ZM6.06669 1.23047C6.06669 1.00431 6.26108 0.820312 6.50002 0.820312C6.73896 0.820312 6.93335 1.00431 6.93335 1.23047V1.66053C6.79073 1.64752 6.6462 1.64062 6.50002 1.64062C6.35384 1.64062 6.20931 1.64752 6.06669 1.66053V1.23047ZM6.50002 13.1797C5.9351 13.1797 5.45344 12.8368 5.27456 12.3594H7.72548C7.5466 12.8368 7.06494 13.1797 6.50002 13.1797ZM1.36736 11.5391C2.35422 10.2869 2.88893 8.77166 2.88893 7.18763V5.87891C2.88893 3.99424 4.50886 2.46094 6.50002 2.46094C8.49118 2.46094 10.1111 3.99424 10.1111 5.87891V7.18763C10.1111 8.77166 10.6458 10.2869 11.6327 11.5391H1.36736ZM12.1333 5.87891C12.1333 6.10542 12.3273 6.28906 12.5667 6.28906C12.806 6.28906 13 6.10542 13 5.87891C13 4.23555 12.3239 2.69054 11.0962 1.52852C10.927 1.36836 10.6526 1.36834 10.4834 1.52852C10.3141 1.6887 10.3141 1.94838 10.4834 2.10856C11.5474 3.11566 12.1333 4.45465 12.1333 5.87891ZM0.433383 6.28906C0.672698 6.28906 0.866714 6.10542 0.866714 5.87891C0.866714 4.45468 1.45269 3.11568 2.51667 2.10859C2.6859 1.94841 2.6859 1.68872 2.51667 1.52854C2.34746 1.36836 2.07308 1.36836 1.90385 1.52854C0.676164 2.69057 5.22303e-05 4.23555 5.22303e-05 5.87891C5.22303e-05 6.10542 0.194069 6.28906 0.433383 6.28906Z" />
                          </svg>Alert Me                 
                        </button>
                        <div className="price-area">
                          <span>Excellent Price</span>
                          <h6>$15,539.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>           
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="product-card4 style-2">
                    <div className="product-img">
                      <a href="#" className="fav">
                        <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                          </path>
                        </svg>
                      </a>
                          
                      <div className="swiper product-img-slider">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <img src="assets/img/home4/letest-car3.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="assets/img/home4/letest-car3.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="assets/img/home4/letest-car3.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="assets/img/home4/letest-car3.png" alt="image" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-content">
                      <h6><Link legacyBehavior href="/car-deatils"><a>Tesla Model S-2023</a></Link></h6>
                      <div className="exp-date">
                        <p>Expected Launched  <span>02 April, 2023</span></p>
                      </div>
                      <ul className="features">
                        <li>
                          <img src="assets/img/home4/icon/miles.svg" alt="" />
                          2500 miles
                        </li>
                        <li>
                          <img src="assets/img/home4/icon/fuel.svg" alt="" />
                          Petrol + Gas
                        </li>
                        <li>
                          <img src="assets/img/home4/icon/electric.svg" alt="" />
                          Electric
                        </li>
                      </ul>
                      <div className="button-and-price">
                        <button type="button" className="primary-btn3" data-bs-toggle="modal" data-bs-target="#alartModal01">
                          <svg xmlns="http://www.w3.org/2000/svg" width={13} height={14} viewBox="0 0 13 14">
                            <path d="M10.9778 7.18763V5.87891C10.9778 3.96971 9.63702 2.35154 7.80001 1.82301V1.23047C7.80001 0.551988 7.21684 0 6.50002 0C5.7832 0 5.20003 0.551988 5.20003 1.23047V1.82301C3.36299 2.35154 2.02226 3.96968 2.02226 5.87891V7.18763C2.02226 8.86468 1.3469 10.4549 0.120605 11.6653C0.0618066 11.7234 0.0223205 11.7965 0.00705533 11.8755C-0.00820982 11.9546 0.00141928 12.0362 0.0347455 12.1102C0.0680718 12.1841 0.123625 12.2472 0.1945 12.2915C0.265375 12.3358 0.348445 12.3594 0.433383 12.3594H4.37696C4.57825 13.2943 5.4537 14 6.50002 14C7.54637 14 8.42176 13.2943 8.62308 12.3594H12.5667C12.6516 12.3594 12.7346 12.3358 12.8055 12.2914C12.8764 12.2471 12.9319 12.1841 12.9653 12.1101C12.9986 12.0362 13.0082 11.9546 12.9929 11.8755C12.9777 11.7965 12.9382 11.7234 12.8794 11.6653C11.6531 10.4549 10.9778 8.86465 10.9778 7.18763ZM6.06669 1.23047C6.06669 1.00431 6.26108 0.820312 6.50002 0.820312C6.73896 0.820312 6.93335 1.00431 6.93335 1.23047V1.66053C6.79073 1.64752 6.6462 1.64062 6.50002 1.64062C6.35384 1.64062 6.20931 1.64752 6.06669 1.66053V1.23047ZM6.50002 13.1797C5.9351 13.1797 5.45344 12.8368 5.27456 12.3594H7.72548C7.5466 12.8368 7.06494 13.1797 6.50002 13.1797ZM1.36736 11.5391C2.35422 10.2869 2.88893 8.77166 2.88893 7.18763V5.87891C2.88893 3.99424 4.50886 2.46094 6.50002 2.46094C8.49118 2.46094 10.1111 3.99424 10.1111 5.87891V7.18763C10.1111 8.77166 10.6458 10.2869 11.6327 11.5391H1.36736ZM12.1333 5.87891C12.1333 6.10542 12.3273 6.28906 12.5667 6.28906C12.806 6.28906 13 6.10542 13 5.87891C13 4.23555 12.3239 2.69054 11.0962 1.52852C10.927 1.36836 10.6526 1.36834 10.4834 1.52852C10.3141 1.6887 10.3141 1.94838 10.4834 2.10856C11.5474 3.11566 12.1333 4.45465 12.1333 5.87891ZM0.433383 6.28906C0.672698 6.28906 0.866714 6.10542 0.866714 5.87891C0.866714 4.45468 1.45269 3.11568 2.51667 2.10859C2.6859 1.94841 2.6859 1.68872 2.51667 1.52854C2.34746 1.36836 2.07308 1.36836 1.90385 1.52854C0.676164 2.69057 5.22303e-05 4.23555 5.22303e-05 5.87891C5.22303e-05 6.10542 0.194069 6.28906 0.433383 6.28906Z" />
                          </svg>Alert Me                 
                        </button>
                        <div className="price-area">
                          <span>Excellent Price</span>
                          <h6>$15,539.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>           
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          <div className="col-lg-12 d-flex justify-content-center wow fadeInUp" data-wow-delay="400ms">
            <div className="slider-btn-pagination">
              <div className="slider-btn prev-11"><i className="bi bi-arrow-left" /></div>
              <div className="pagination pagination11" />
              <div className="slider-btn next-11"><i className="bi bi-arrow-right" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default index