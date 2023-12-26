import React, { useMemo } from "react";
import Link from "next/link";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);
import MainLayout from '../layout/MainLayout'


function BlogStandardPage() {
    const settings = useMemo(()=>{
        return {
            speed: 1500,
            spaceBetween: 24,
            autoplay: {
                delay: 2500, // Autoplay duration in milliseconds
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".next-51",
                prevEl: ".prev-51",
            },
        }
    })
  return (
    <MainLayout>
        <div className="blog-standard-page pt-100 mb-100">
            <div className="container">
                <div className="row g-lg-4 gy-5">
                <div className="col-lg-8">
                    <div className="news-card2 mb-50">
                    <div className="news-img">
                        <Link legacyBehavior href="/blog-details"><a><img src="assets/img/inner-page/blog-st-01.png" alt="" /></a></Link>
                        <div className="date">
                        <Link legacyBehavior href="/blog-standard"><a>Buying Advice</a></Link>
                        </div>
                    </div>
                    <div className="content">
                        <h4><Link legacyBehavior href="/blog-details"><a>The Car Enthusiast: Exploring the World of Cars and Driving.</a></Link></h4>
                        <p>"The Car Enthusiast: Exploring the World of Cars and Driving." In this captivating journey, we delve into the fascinating realm of automobiles.</p>
                        <div className="news-btm d-flex align-items-center justify-content-between">
                        <div className="author-area">
                            <div className="author-img">
                            <img src="assets/img/home1/author-02.png" alt="" />
                            </div>
                            <div className="author-content">
                            <h6>Mulish Kary</h6>
                            <Link legacyBehavior href="/blog-standard"><a>Posted on -  03 April, 2023</a></Link>
                            </div>
                        </div>
                        <Link legacyBehavior href="/blog-details"><a className="view-btn">Read More</a></Link>
                        </div>
                    </div>
                    </div>
                    <div className="news-card2 mb-50">
                    <div className="news-img">
                        <Link legacyBehavior href="/blog-details"><a><img src="assets/img/inner-page/blog-st-01.png" alt="" /></a></Link>
                        <div className="date">
                        <Link legacyBehavior href="/blog-standard"><a>Buying Advice</a></Link>
                        </div>
                    </div>
                    <div className="content">
                        <h4><Link legacyBehavior href="/blog-details"><a>The Best Car Brands for Performance and Reliability.</a></Link></h4>
                        <p>"The Car Enthusiast: Exploring the World of Cars and Driving." In this captivating journey, we delve into the fascinating realm of automobiles.</p>
                        <div className="news-btm d-flex align-items-center justify-content-between">
                        <div className="author-area">
                            <div className="author-img">
                            <img src="assets/img/home1/author-02.png" alt="" />
                            </div>
                            <div className="author-content">
                            <h6>Mulish Kary</h6>
                            <Link legacyBehavior href="/blog-standard"><a>Posted on -  03 April, 2023</a></Link>
                            </div>
                        </div>
                        <Link legacyBehavior href="/blog-details"><a className="view-btn">Read More</a></Link>
                        </div>
                    </div>
                    </div>
                    <div className="news-card2 mb-50">
                    <div className="news-img">
                        <Link legacyBehavior href="/blog-details"><a><img src="assets/img/inner-page/blog-st-01.png" alt="" /></a></Link>
                        <div className="date">
                        <Link legacyBehavior href="/blog-standard"><a>Buying Advice</a></Link>
                        </div>
                    </div>
                    <div className="content">
                        <h4><Link legacyBehavior href="/blog-details"><a>The Environmental Impact of Cars and How to Minimize It.</a></Link></h4>
                        <p>"The Car Enthusiast: Exploring the World of Cars and Driving." In this captivating journey, we delve into the fascinating realm of automobiles.</p>
                        <div className="news-btm d-flex align-items-center justify-content-between">
                        <div className="author-area">
                            <div className="author-img">
                            <img src="assets/img/home1/author-02.png" alt="" />
                            </div>
                            <div className="author-content">
                            <h6>Mulish Kary</h6>
                            <Link legacyBehavior href="/blog-standard"><a>Posted on -  03 April, 2023</a></Link>
                            </div>
                        </div>
                        <Link legacyBehavior href="/blog-details"><a  className="view-btn">Read More</a></Link>
                        </div>
                    </div>
                    </div>
                    <div className="news-card2 mb-40">
                    <div className="news-img">
                        <Link legacyBehavior href="/blog-details"><a><img src="assets/img/inner-page/blog-st-01.png" alt="" /></a></Link>
                        <div className="date">
                        <Link legacyBehavior href="/blog-standard"><a>Buying Advice</a></Link>
                        </div>
                    </div>
                    <div className="content">
                        <h4><Link legacyBehavior href="/blog-details"><a>The Environmental Impact of Cars and How to Minimize It.</a></Link></h4>
                        <p>"The Car Enthusiast: Exploring the World of Cars and Driving." In this captivating journey, we delve into the fascinating realm of automobiles.</p>
                        <div className="news-btm d-flex align-items-center justify-content-between">
                        <div className="author-area">
                            <div className="author-img">
                            <img src="assets/img/home1/author-02.png" alt="" />
                            </div>
                            <div className="author-content">
                            <h6>Mulish Kary</h6>
                            <Link legacyBehavior href="/blog-standard"><a>Posted on -  03 April, 2023</a></Link>
                            </div>
                        </div>
                        <Link legacyBehavior href="/blog-details"><a className="view-btn">Read More</a></Link>
                        </div>
                    </div>
                    </div>
                    <div className="pagination-and-next-prev">
                    <div className="pagination">
                        <ul>
                        <li className="active"><a href="#">01</a></li>
                        <li><a href="#">02</a></li>
                        <li><a href="#">03</a></li>
                        <li><a href="#">04</a></li>
                        <li><a href="#">05</a></li>
                        </ul>
                    </div>
                    <div className="next-prev-btn">
                        <ul>
                        <li>
                            <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width={7} height={14} viewBox="0 0 7 14">
                                <path d="M0 7.00008L7 0L2.54545 7.00008L7 14L0 7.00008Z" />
                            </svg> Prev
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            Next
                            <svg xmlns="http://www.w3.org/2000/svg" width={7} height={14} viewBox="0 0 7 14">
                                <path d="M7 7.00008L0 0L4.45455 7.00008L0 14L7 7.00008Z" />
                            </svg> 
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="blog-sidebar mb-50">
                    <div className="single-widgets widget_egns_categoris mb-20">
                        <div className="widget-title mb-20">
                        <h6>Category</h6>
                        </div>
                        <ul className="wp-block-categoris-cloud">
                        <li><Link legacyBehavior href="/blog-standard"><a><span>Car Servicing</span> <span className="number-of-categoris">(30)</span></a></Link></li>
                        <li><Link legacyBehavior href="/blog-standard"><a><span>Car Buying Advice</span> <span className="number-of-categoris">(18)</span> </a></Link></li>
                        <li><Link legacyBehavior href="/blog-standard"><a><span>Car Rental</span> <span className="number-of-categoris">(21)</span></a></Link></li>
                        <li><Link legacyBehavior href="/blog-standard"><a><span>Driving</span> <span className="number-of-categoris">(25)</span></a></Link></li>
                        <li><Link legacyBehavior href="/blog-standard"><a><span>Brand Car</span> <span className="number-of-categoris">(29)</span></a></Link></li>
                        <li><Link legacyBehavior href="/blog-standard"><a><span>Tata</span> <span className="number-of-categoris">(2,554)</span></a></Link></li>
                        <li><Link legacyBehavior href="/blog-standard"><a><span>Hyundai</span> <span className="number-of-categoris">(1,556)</span></a></Link></li>
                        </ul>
                    </div>
                    <div className="single-widgets widget_egns_recent_post mb-20">
                        <div className="widget-title blog-title mb-20">
                        <h6>Recent Blog</h6>
                        <div className="slider-btn-group2 d-flex align-items-center justify-content-between">
                            <div className="slider-btn prev-51">
                            <svg width={7} height={12} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                            </svg>
                            </div>
                            <div className="slider-btn next-51">
                            <svg width={7} height={12} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                            </svg>
                            </div>
                        </div>
                        </div>
                        <div className="recent-post-wraper">
                        <Swiper {...settings} className="swiper recent-post-sidebar-slider">
                            <div className="swiper-wrapper">
                            <SwiperSlide className="swiper-slide">
                                <div className="widget-cnt">
                                <div className="wi">
                                    <Link legacyBehavior href="/blog-details"><a><img src="assets/img/inner-page/blog-st-01.png" alt="image" /></a></Link>
                                </div>
                                <div className="wc">
                                    <Link legacyBehavior href="/blog-standard"><a className="date">May 18, 2023</a></Link>
                                    <h6><Link legacyBehavior href="/blog-details"><a>The Environmental Impact of Cars and How to Minimize It.</a></Link></h6>
                                </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="widget-cnt">
                                <div className="wi">
                                    <Link legacyBehavior href="/blog-details"><img src="assets/img/inner-page/blog-st-02.png" alt="image" /></Link>
                                </div>
                                <div className="wc">
                                    <Link legacyBehavior href="/blog-standard"><a className="date">May 18, 2023</a></Link>
                                    <h6><Link legacyBehavior href="/blog-details"><a>The Environmental Impact of Cars and How to Minimize It.</a></Link></h6>
                                </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="widget-cnt">
                                <div className="wi">
                                    <Link legacyBehavior href="/blog-details"><a><img src="assets/img/inner-page/blog-st-03.png" alt="image" /></a></Link>
                                </div>
                                <div className="wc">
                                    <Link legacyBehavior  href="/blog-standard"><a className="date">May 18, 2023</a></Link>
                                    <h6><Link legacyBehavior href="/blog-details"><a>The Environmental Impact of Cars and How to Minimize It.</a></Link></h6>
                                </div>
                                </div>
                            </SwiperSlide>
                            </div>
                        </Swiper>
                        </div>
                    </div>
                    <div className="single-widgets widget_egns_tag">
                        <div className="widget-title mb-20">
                        <h6>Popular Tags</h6>
                        </div>
                        <p className="wp-block-tag-cloud">
                        <Link legacyBehavior href="/blog-standard"><a>Car Advice</a></Link>
                        <Link legacyBehavior href="/blog-standard"><a>Rental</a></Link>
                        <Link legacyBehavior href="/blog-standard"><a>Hyundai</a></Link>
                        <Link legacyBehavior href="/blog-standard"><a>Driving</a></Link>
                        <Link legacyBehavior href="/blog-standard"><a>Compare</a></Link>
                        <Link legacyBehavior href="/blog-standard"><a>Buying</a></Link>
                        <Link legacyBehavior href="/car-deatils"><a>Toyota</a></Link>
                        <a href="#">Audi</a>
                        <a href="#">Service</a>
                        </p>
                    </div>
                    </div>
                    <div className="single-widgets sidebar-banner">
                    <div className="product-content">
                        <div className="text">
                        <h4><a href="#">Mercedes-Benz <span>( Model-S13)</span></a></h4>
                        <h6>For Summer Offer</h6>
                        </div>
                        <div className="offer-batch">
                        <h3>30%</h3>
                        <span>Discount</span>
                        </div>
                    </div>
                    <div className="product-img">
                        <img src="assets/img/inner-page/sb-banner-img.png" alt="" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </MainLayout>
  )
}

export default BlogStandardPage