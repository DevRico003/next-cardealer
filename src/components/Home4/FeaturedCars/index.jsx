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
			nextEl: ".next-12",
			prevEl: ".prev-12",
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
    <div className="home4-featured-car-area mb-100">
      <div className="container">
        <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
          <div className="col-lg-12 d-flex align-items-end justify-content-between gap-3 flex-wrap">
            <div className="section-title-2">
              <h2>Featured Cars</h2>
              <p>To get the most accurate and up-to-date information.</p>
            </div>    
            <div className="explore-more-btn">
              <Link legacyBehavior href="/car-deatils"><a>Explore More <i className="bi bi-arrow-right" /></a></Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 mb-40 wow fadeInUp" data-wow-delay="300ms">
            <Swiper {...settings} className="swiper home4-featured-car-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="product-card4">
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
                        </div>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="location">
                        <a href="#"><i className="bi bi-geo-alt" /> Panama City</a>
                      </div>
                      <h6><Link legacyBehavior href="/car-deatils"><a>Tesla Model S-2023</a></Link></h6>
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
                        <Link legacyBehavior href="/car-deatils"><a className="primary-btn3">View Details</a></Link>
                        <div className="price-area">
                          <span>Great Price</span>
                          <h6>$4,564.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>           
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="product-card4">
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
                        </div>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="location">
                        <a href="#"><i className="bi bi-geo-alt" /> Panama City</a>
                      </div>
                      <h6><Link legacyBehavior href="/car-deatils"><a>Hyundai Sonata-2022</a></Link></h6>
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
                        <Link legacyBehavior href="/car-deatils"><a className="primary-btn3">View Details</a></Link>
                        <div className="price-area">
                          <span>Great Price</span>
                          <h6>$4,564.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>           
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="product-card4">
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
                        </div>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="location">
                        <a href="#"><i className="bi bi-geo-alt" /> Panama City</a>
                      </div>
                      <h6><Link legacyBehavior href="/car-deatils"><a>BMW 3 Series-2023</a></Link></h6>
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
                        <Link legacyBehavior href="/car-deatils"><a className="primary-btn3">View Details</a></Link>
                        <div className="price-area">
                          <span>Great Price</span>
                          <h6>$4,564.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>           
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="product-card4">
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
                        </div>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="location">
                        <a href="#"><i className="bi bi-geo-alt" /> Panama City</a>
                      </div>
                      <h6><Link legacyBehavior href="/car-deatils"><a>Jeep Wrangler-2023</a></Link></h6>
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
                        <Link legacyBehavior href="/car-deatils"><a className="primary-btn3">View Details</a></Link>
                        <div className="price-area">
                          <span>Great Price</span>
                          <h6>$4,564.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>           
                </SwiperSlide>
                <SwiperSlide className="swiper-slide"> 
                  <div className="product-card4">
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
                        </div>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="location">
                        <a href="#"><i className="bi bi-geo-alt" /> Panama City</a>
                      </div>
                      <h6><Link legacyBehavior href="/car-deatils"><a>BMW 3 Series-2023</a></Link></h6>
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
                        <Link legacyBehavior href="/car-deatils"><a className="primary-btn3">View Details</a></Link>
                        <div className="price-area">
                          <span>Great Price</span>
                          <h6>$4,564.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>           
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="product-card4">
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
                        </div>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="location">
                        <a href="#"><i className="bi bi-geo-alt" /> Panama City</a>
                      </div>
                      <h6><Link legacyBehavior href="/car-deatils"><a>Kia Telluride-2023</a></Link></h6>
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
                        <Link legacyBehavior href="/car-deatils"><a className="primary-btn3">View Details</a></Link>
                        <div className="price-area">
                          <span>Great Price</span>
                          <h6>$4,564.00</h6>
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
              <div className="slider-btn prev-12"><i className="bi bi-arrow-left" /></div>
              <div className="pagination pagination12" />
              <div className="slider-btn next-12"><i className="bi bi-arrow-right" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default index