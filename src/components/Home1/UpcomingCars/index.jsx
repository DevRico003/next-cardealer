import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
SwiperCore.use([ Autoplay, EffectFade, Navigation]);

function index() {
    const slideSetting = useMemo(()=>{
        return {
            slidesPerView: 3,
            speed: 1500,
            spaceBetween: 25,
            // autoplay: {
            // 	delay: 2500, // Autoplay duration in milliseconds
            // 	disableOnInteraction: false,
            // },
            navigation: {
                nextEl: ".next-2",
                prevEl: ".prev-2",
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
                    spaceBetween: 24,
                },
                1400: {
                    slidesPerView: 3
                },
            }
        }
    },[])
  return (
    <div className="upcoming-car-area mb-100">
        <div className="modal signUp-modal fade" id="alartModal01" tabIndex={-1} aria-hidden="true">
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
        <div className="row mb-60 wow fadeInUp" data-wow-delay="200ms">
            <div className="col-lg-12">
            <div className="section-title1">
                <span>On The Way</span>
                <h2>Upcoming Cars</h2>
            </div>
            </div>
        </div>
        <div className="row mb-40 wow fadeInUp" data-wow-delay="300ms">
            <div className="col-lg-12">
            <Swiper {...slideSetting} className="swiper upcoming-car-slider">
                <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                    <div className="product-card style-2">
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
                            <img src="assets/img/home1/product-img-11.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                            <img src="assets/img/home1/product-img-11.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                            <img src="assets/img/home1/product-img-11.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                            <img src="assets/img/home1/product-img-11.png" alt="image" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="product-content">
                        <div className="content-top">
                        <div className="price-and-title">
                            <h5 className="price">$785454.00</h5>
                            <h5><Link legacyBehavior href="/car-deatils"><a>Toyota Camry-2023</a></Link></h5>
                        </div>
                        <div className="company-logo">
                            <img src="assets/img/home1/icon/toyota-01.svg" alt="" />
                        </div>
                        </div>
                        <div className="launch-date">
                        <p>Expected Launch <span>02 June, 2023</span></p>
                        </div>
                        <div className="launch-btn">
                        <button type="button" className="primary-btn1" data-bs-toggle="modal" data-bs-target="#alartModal01">
                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.4311 12.759C15.417 11.4291 16 9.78265 16 8C16 3.58169 12.4182 0 8 0C3.58169 0 0 3.58169 0 8C0 12.4182 3.58169 16 8 16C10.3181 16 12.4058 15.0141 13.867 13.4387C14.0673 13.2226 14.2556 12.9957 14.4311 12.759ZM13.9875 12C14.7533 10.8559 15.1999 9.48009 15.1999 8C15.1999 4.02355 11.9764 0.799983 7.99991 0.799983C4.02355 0.799983 0.799983 4.02355 0.799983 8C0.799983 9.48017 1.24658 10.8559 2.01245 12C2.97866 10.5566 4.45301 9.48194 6.17961 9.03214C5.34594 8.45444 4.79998 7.49102 4.79998 6.39995C4.79998 4.63266 6.23271 3.19993 8 3.19993C9.76729 3.19993 11.2 4.63266 11.2 6.39995C11.2 7.49093 10.654 8.45444 9.82039 9.03206C11.5469 9.48194 13.0213 10.5565 13.9875 12ZM13.4722 12.6793C12.3495 10.8331 10.3188 9.59997 8.00008 9.59997C5.68126 9.59997 3.65049 10.8331 2.52776 12.6794C3.84829 14.2222 5.80992 15.2 8 15.2C10.1901 15.2 12.1517 14.2222 13.4722 12.6793ZM8 8.79998C9.32551 8.79998 10.4 7.72554 10.4 6.39995C10.4 5.07444 9.32559 3.99992 8 3.99992C6.6744 3.99992 5.59997 5.07452 5.59997 6.40003C5.59997 7.72554 6.67449 8.79998 8 8.79998Z" />
                            </svg> Notify Me When Launch                  
                        </button>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="product-card style-2">
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
                            <img src="assets/img/home1/product-img-12.png" alt="image" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="product-content">
                        <div className="content-top">
                        <div className="price-and-title">
                            <h5 className="price">$896564.00</h5>
                            <h5><Link legacyBehavior href="/car-deatils"><a>Tesla Model S-2023</a></Link></h5>
                        </div>
                        <div className="company-logo">
                            <img src="assets/img/home1/icon/tesla-01.svg" alt="" />
                        </div>
                        </div>
                        <div className="launch-date">
                        <p>Expected Launch <span>05 June, 2023</span></p>
                        </div>
                        <div className="launch-btn">
                        <button type="button" className="primary-btn1" data-bs-toggle="modal" data-bs-target="#alartModal01">
                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.4311 12.759C15.417 11.4291 16 9.78265 16 8C16 3.58169 12.4182 0 8 0C3.58169 0 0 3.58169 0 8C0 12.4182 3.58169 16 8 16C10.3181 16 12.4058 15.0141 13.867 13.4387C14.0673 13.2226 14.2556 12.9957 14.4311 12.759ZM13.9875 12C14.7533 10.8559 15.1999 9.48009 15.1999 8C15.1999 4.02355 11.9764 0.799983 7.99991 0.799983C4.02355 0.799983 0.799983 4.02355 0.799983 8C0.799983 9.48017 1.24658 10.8559 2.01245 12C2.97866 10.5566 4.45301 9.48194 6.17961 9.03214C5.34594 8.45444 4.79998 7.49102 4.79998 6.39995C4.79998 4.63266 6.23271 3.19993 8 3.19993C9.76729 3.19993 11.2 4.63266 11.2 6.39995C11.2 7.49093 10.654 8.45444 9.82039 9.03206C11.5469 9.48194 13.0213 10.5565 13.9875 12ZM13.4722 12.6793C12.3495 10.8331 10.3188 9.59997 8.00008 9.59997C5.68126 9.59997 3.65049 10.8331 2.52776 12.6794C3.84829 14.2222 5.80992 15.2 8 15.2C10.1901 15.2 12.1517 14.2222 13.4722 12.6793ZM8 8.79998C9.32551 8.79998 10.4 7.72554 10.4 6.39995C10.4 5.07444 9.32559 3.99992 8 3.99992C6.6744 3.99992 5.59997 5.07452 5.59997 6.40003C5.59997 7.72554 6.67449 8.79998 8 8.79998Z" />
                            </svg> Notify Me When Launch                  
                        </button>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="product-card style-2">
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
                            <img src="assets/img/home1/product-img-13.png" alt="image" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="product-content">
                        <div className="content-top">
                        <div className="price-and-title">
                            <h5 className="price">$64423.00</h5>
                            <h5><Link legacyBehavior href="/car-deatils"><a>Nissan Altima S-2023</a></Link></h5>
                        </div>
                        <div className="company-logo">
                            <img src="assets/img/home1/icon/suzuki-1.svg" alt="" />
                        </div>
                        </div>
                        <div className="launch-date">
                        <p>Expected Launch <span>08 June, 2023</span></p>
                        </div>
                        <div className="launch-btn">
                        <button type="button" className="primary-btn1" data-bs-toggle="modal" data-bs-target="#alartModal01">
                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.4311 12.759C15.417 11.4291 16 9.78265 16 8C16 3.58169 12.4182 0 8 0C3.58169 0 0 3.58169 0 8C0 12.4182 3.58169 16 8 16C10.3181 16 12.4058 15.0141 13.867 13.4387C14.0673 13.2226 14.2556 12.9957 14.4311 12.759ZM13.9875 12C14.7533 10.8559 15.1999 9.48009 15.1999 8C15.1999 4.02355 11.9764 0.799983 7.99991 0.799983C4.02355 0.799983 0.799983 4.02355 0.799983 8C0.799983 9.48017 1.24658 10.8559 2.01245 12C2.97866 10.5566 4.45301 9.48194 6.17961 9.03214C5.34594 8.45444 4.79998 7.49102 4.79998 6.39995C4.79998 4.63266 6.23271 3.19993 8 3.19993C9.76729 3.19993 11.2 4.63266 11.2 6.39995C11.2 7.49093 10.654 8.45444 9.82039 9.03206C11.5469 9.48194 13.0213 10.5565 13.9875 12ZM13.4722 12.6793C12.3495 10.8331 10.3188 9.59997 8.00008 9.59997C5.68126 9.59997 3.65049 10.8331 2.52776 12.6794C3.84829 14.2222 5.80992 15.2 8 15.2C10.1901 15.2 12.1517 14.2222 13.4722 12.6793ZM8 8.79998C9.32551 8.79998 10.4 7.72554 10.4 6.39995C10.4 5.07444 9.32559 3.99992 8 3.99992C6.6744 3.99992 5.59997 5.07452 5.59997 6.40003C5.59997 7.72554 6.67449 8.79998 8 8.79998Z" />
                            </svg> Notify Me When Launch                  
                        </button>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="product-card style-2">
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
                            <img src="assets/img/home1/product-img-12.png" alt="image" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="product-content">
                        <div className="content-top">
                        <div className="price-and-title">
                            <h5 className="price">$896564.00</h5>
                            <h5><Link legacyBehavior href="/car-deatils"><a>Tesla Model S-2023</a></Link></h5>
                        </div>
                        <div className="company-logo">
                            <img src="assets/img/home1/icon/tesla-01.svg" alt="" />
                        </div>
                        </div>
                        <div className="launch-date">
                        <p>Expected Launch <span>05 June, 2023</span></p>
                        </div>
                        <div className="launch-btn">
                        <button type="button" className="primary-btn1" data-bs-toggle="modal" data-bs-target="#alartModal01">
                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.4311 12.759C15.417 11.4291 16 9.78265 16 8C16 3.58169 12.4182 0 8 0C3.58169 0 0 3.58169 0 8C0 12.4182 3.58169 16 8 16C10.3181 16 12.4058 15.0141 13.867 13.4387C14.0673 13.2226 14.2556 12.9957 14.4311 12.759ZM13.9875 12C14.7533 10.8559 15.1999 9.48009 15.1999 8C15.1999 4.02355 11.9764 0.799983 7.99991 0.799983C4.02355 0.799983 0.799983 4.02355 0.799983 8C0.799983 9.48017 1.24658 10.8559 2.01245 12C2.97866 10.5566 4.45301 9.48194 6.17961 9.03214C5.34594 8.45444 4.79998 7.49102 4.79998 6.39995C4.79998 4.63266 6.23271 3.19993 8 3.19993C9.76729 3.19993 11.2 4.63266 11.2 6.39995C11.2 7.49093 10.654 8.45444 9.82039 9.03206C11.5469 9.48194 13.0213 10.5565 13.9875 12ZM13.4722 12.6793C12.3495 10.8331 10.3188 9.59997 8.00008 9.59997C5.68126 9.59997 3.65049 10.8331 2.52776 12.6794C3.84829 14.2222 5.80992 15.2 8 15.2C10.1901 15.2 12.1517 14.2222 13.4722 12.6793ZM8 8.79998C9.32551 8.79998 10.4 7.72554 10.4 6.39995C10.4 5.07444 9.32559 3.99992 8 3.99992C6.6744 3.99992 5.59997 5.07452 5.59997 6.40003C5.59997 7.72554 6.67449 8.79998 8 8.79998Z" />
                            </svg> Notify Me When Launch                  
                        </button>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="product-card style-2">
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
                            <img src="assets/img/home1/product-img-11.png" alt="image" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="product-content">
                        <div className="content-top">
                        <div className="price-and-title">
                            <h5 className="price">$785454.00</h5>
                            <h5><Link legacyBehavior href="/car-deatils"><a>Toyota Camry-2023</a></Link></h5>
                        </div>
                        <div className="company-logo">
                            <img src="assets/img/home1/icon/toyota-01.svg" alt="" />
                        </div>
                        </div>
                        <div className="launch-date">
                        <p>Expected Launch <span>02 June, 2023</span></p>
                        </div>
                        <div className="launch-btn">
                        <button type="button" className="primary-btn1" data-bs-toggle="modal" data-bs-target="#alartModal01">
                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.4311 12.759C15.417 11.4291 16 9.78265 16 8C16 3.58169 12.4182 0 8 0C3.58169 0 0 3.58169 0 8C0 12.4182 3.58169 16 8 16C10.3181 16 12.4058 15.0141 13.867 13.4387C14.0673 13.2226 14.2556 12.9957 14.4311 12.759ZM13.9875 12C14.7533 10.8559 15.1999 9.48009 15.1999 8C15.1999 4.02355 11.9764 0.799983 7.99991 0.799983C4.02355 0.799983 0.799983 4.02355 0.799983 8C0.799983 9.48017 1.24658 10.8559 2.01245 12C2.97866 10.5566 4.45301 9.48194 6.17961 9.03214C5.34594 8.45444 4.79998 7.49102 4.79998 6.39995C4.79998 4.63266 6.23271 3.19993 8 3.19993C9.76729 3.19993 11.2 4.63266 11.2 6.39995C11.2 7.49093 10.654 8.45444 9.82039 9.03206C11.5469 9.48194 13.0213 10.5565 13.9875 12ZM13.4722 12.6793C12.3495 10.8331 10.3188 9.59997 8.00008 9.59997C5.68126 9.59997 3.65049 10.8331 2.52776 12.6794C3.84829 14.2222 5.80992 15.2 8 15.2C10.1901 15.2 12.1517 14.2222 13.4722 12.6793ZM8 8.79998C9.32551 8.79998 10.4 7.72554 10.4 6.39995C10.4 5.07444 9.32559 3.99992 8 3.99992C6.6744 3.99992 5.59997 5.07452 5.59997 6.40003C5.59997 7.72554 6.67449 8.79998 8 8.79998Z" />
                            </svg> Notify Me When Launch                  
                        </button>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="product-card style-2">
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
                            <img src="assets/img/home1/product-img-12.png" alt="image" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="product-content">
                        <div className="content-top">
                        <div className="price-and-title">
                            <h5 className="price">$896564.00</h5>
                            <h5><Link legacyBehavior href="/car-deatils"><a>Tesla Model S-2023</a></Link></h5>
                        </div>
                        <div className="company-logo">
                            <img src="assets/img/home1/icon/tesla-01.svg" alt="" />
                        </div>
                        </div>
                        <div className="launch-date">
                        <p>Expected Launch <span>05 June, 2023</span></p>
                        </div>
                        <div className="launch-btn">
                        <button type="button" className="primary-btn1" data-bs-toggle="modal" data-bs-target="#alartModal01">
                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.4311 12.759C15.417 11.4291 16 9.78265 16 8C16 3.58169 12.4182 0 8 0C3.58169 0 0 3.58169 0 8C0 12.4182 3.58169 16 8 16C10.3181 16 12.4058 15.0141 13.867 13.4387C14.0673 13.2226 14.2556 12.9957 14.4311 12.759ZM13.9875 12C14.7533 10.8559 15.1999 9.48009 15.1999 8C15.1999 4.02355 11.9764 0.799983 7.99991 0.799983C4.02355 0.799983 0.799983 4.02355 0.799983 8C0.799983 9.48017 1.24658 10.8559 2.01245 12C2.97866 10.5566 4.45301 9.48194 6.17961 9.03214C5.34594 8.45444 4.79998 7.49102 4.79998 6.39995C4.79998 4.63266 6.23271 3.19993 8 3.19993C9.76729 3.19993 11.2 4.63266 11.2 6.39995C11.2 7.49093 10.654 8.45444 9.82039 9.03206C11.5469 9.48194 13.0213 10.5565 13.9875 12ZM13.4722 12.6793C12.3495 10.8331 10.3188 9.59997 8.00008 9.59997C5.68126 9.59997 3.65049 10.8331 2.52776 12.6794C3.84829 14.2222 5.80992 15.2 8 15.2C10.1901 15.2 12.1517 14.2222 13.4722 12.6793ZM8 8.79998C9.32551 8.79998 10.4 7.72554 10.4 6.39995C10.4 5.07444 9.32559 3.99992 8 3.99992C6.6744 3.99992 5.59997 5.07452 5.59997 6.40003C5.59997 7.72554 6.67449 8.79998 8 8.79998Z" />
                            </svg> Notify Me When Launch                  
                        </button>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="product-card style-2">
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
                            <img src="assets/img/home1/product-img-13.png" alt="image" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="product-content">
                        <div className="content-top">
                        <div className="price-and-title">
                            <h5 className="price">$64423.00</h5>
                            <h5><Link legacyBehavior href="/car-deatils"><a>Nissan Altima S-2023</a></Link></h5>
                        </div>
                        <div className="company-logo">
                            <img src="assets/img/home1/icon/suzuki-1.svg" alt="" />
                        </div>
                        </div>
                        <div className="launch-date">
                        <p>Expected Launch <span>08 June, 2023</span></p>
                        </div>
                        <div className="launch-btn">
                        <button type="button" className="primary-btn1" data-bs-toggle="modal" data-bs-target="#alartModal01">
                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.4311 12.759C15.417 11.4291 16 9.78265 16 8C16 3.58169 12.4182 0 8 0C3.58169 0 0 3.58169 0 8C0 12.4182 3.58169 16 8 16C10.3181 16 12.4058 15.0141 13.867 13.4387C14.0673 13.2226 14.2556 12.9957 14.4311 12.759ZM13.9875 12C14.7533 10.8559 15.1999 9.48009 15.1999 8C15.1999 4.02355 11.9764 0.799983 7.99991 0.799983C4.02355 0.799983 0.799983 4.02355 0.799983 8C0.799983 9.48017 1.24658 10.8559 2.01245 12C2.97866 10.5566 4.45301 9.48194 6.17961 9.03214C5.34594 8.45444 4.79998 7.49102 4.79998 6.39995C4.79998 4.63266 6.23271 3.19993 8 3.19993C9.76729 3.19993 11.2 4.63266 11.2 6.39995C11.2 7.49093 10.654 8.45444 9.82039 9.03206C11.5469 9.48194 13.0213 10.5565 13.9875 12ZM13.4722 12.6793C12.3495 10.8331 10.3188 9.59997 8.00008 9.59997C5.68126 9.59997 3.65049 10.8331 2.52776 12.6794C3.84829 14.2222 5.80992 15.2 8 15.2C10.1901 15.2 12.1517 14.2222 13.4722 12.6793ZM8 8.79998C9.32551 8.79998 10.4 7.72554 10.4 6.39995C10.4 5.07444 9.32559 3.99992 8 3.99992C6.6744 3.99992 5.59997 5.07452 5.59997 6.40003C5.59997 7.72554 6.67449 8.79998 8 8.79998Z" />
                            </svg> Notify Me When Launch                  
                        </button>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="product-card style-2">
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
                            <img src="assets/img/home1/product-img-12.png" alt="image" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="product-content">
                        <div className="content-top">
                        <div className="price-and-title">
                            <h5 className="price">$896564.00</h5>
                            <h5><Link legacyBehavior href="/car-deatils"><a>Tesla Model S-2023</a></Link></h5>
                        </div>
                        <div className="company-logo">
                            <img src="assets/img/home1/icon/tesla-01.svg" alt="" />
                        </div>
                        </div>
                        <div className="launch-date">
                        <p>Expected Launch <span>05 June, 2023</span></p>
                        </div>
                        <div className="launch-btn">
                        <button type="button" className="primary-btn1" data-bs-toggle="modal" data-bs-target="#alartModal01">
                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.4311 12.759C15.417 11.4291 16 9.78265 16 8C16 3.58169 12.4182 0 8 0C3.58169 0 0 3.58169 0 8C0 12.4182 3.58169 16 8 16C10.3181 16 12.4058 15.0141 13.867 13.4387C14.0673 13.2226 14.2556 12.9957 14.4311 12.759ZM13.9875 12C14.7533 10.8559 15.1999 9.48009 15.1999 8C15.1999 4.02355 11.9764 0.799983 7.99991 0.799983C4.02355 0.799983 0.799983 4.02355 0.799983 8C0.799983 9.48017 1.24658 10.8559 2.01245 12C2.97866 10.5566 4.45301 9.48194 6.17961 9.03214C5.34594 8.45444 4.79998 7.49102 4.79998 6.39995C4.79998 4.63266 6.23271 3.19993 8 3.19993C9.76729 3.19993 11.2 4.63266 11.2 6.39995C11.2 7.49093 10.654 8.45444 9.82039 9.03206C11.5469 9.48194 13.0213 10.5565 13.9875 12ZM13.4722 12.6793C12.3495 10.8331 10.3188 9.59997 8.00008 9.59997C5.68126 9.59997 3.65049 10.8331 2.52776 12.6794C3.84829 14.2222 5.80992 15.2 8 15.2C10.1901 15.2 12.1517 14.2222 13.4722 12.6793ZM8 8.79998C9.32551 8.79998 10.4 7.72554 10.4 6.39995C10.4 5.07444 9.32559 3.99992 8 3.99992C6.6744 3.99992 5.59997 5.07452 5.59997 6.40003C5.59997 7.72554 6.67449 8.79998 8 8.79998Z" />
                            </svg> Notify Me When Launch                  
                        </button>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                </div>
            </Swiper>
            </div>
        </div>
        <div className="row wow fadeInUp" data-wow-delay="400ms">
            <div className="col-lg-12 divider">
            <div className="slider-btn-group style-2 justify-content-md-between justify-content-center">
                <div className="slider-btn prev-2 d-md-flex d-none">
                <svg width={11} height={19} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                </svg>
                </div>
                <div className="view-btn-area">
                <p>There will be 100+ Upcoming Car</p>
                <Link legacyBehavior href="/single-brand-category"><a className="view-btn">View More</a></Link>
                </div>
                <div className="slider-btn next-2 d-md-flex d-none">
                <svg width={11} height={19} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
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