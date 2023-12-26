import React, { useMemo } from "react";
import Link from "next/link";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);
import MainLayout from '../layout/MainLayout'

function BlogDetailsPage() {
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
        <div className="blog-details-page pt-100 mb-100">
            <div className="container">
                <div className="row g-lg-4 gy-5">
                <div className="col-lg-8">
                    <div className="post-thumb">
                    <img src="assets/img/inner-page/blog-st-01.png" alt="" />
                    <div className="date">
                        <Link legacyBehavior href="/blog-standard"><a>Buying Advice</a></Link>
                    </div>
                    </div>
                    <h3 className="post-title">The Car Enthusiast: Exploring the World of Cars and Driving.</h3>
                    <div className="author-area">
                    <div className="author-img">
                        <img src="assets/img/home1/author-02.png" alt="" />
                    </div>
                    <div className="author-content">
                        <h6>Mulish Kary</h6>
                        <Link legacyBehavior href="/blog-standard"><a>Posted on -  03 April, 2023</a></Link>
                    </div>
                    </div>
                    <p>Welcome to "The Car Enthusiast: Exploring the World of Cars and Driving." In this captivating journey, we delve into the fascinating realm of automobiles, catering to both seasoned enthusiasts and curious newcomers. From the history of iconic vehicles to the latest advancements in automotive technology, this exploration will leave you with a deeper appreciation for cars and the art of driving.</p>
                    <p>"The Car Enthusiast: Exploring the World of Cars and Driving" takes you on a captivating journey through the history, design, engineering, and future of automobiles. Whether you're a lifelong car lover or simply intrigued by the world of cars, this exploration will leave you with a deepened understanding and appreciation for the artistry, innovation, and joy that cars and driving bring to our lives.</p>
                    <blockquote> 
                    <div className="quoat-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width={27} height={18} viewBox="0 0 27 18">
                        <path d="M21.6832 6.05443L21.4534 6.62147L22.0549 6.73371C24.6453 7.21714 26.5 9.46982 26.5 12.0337C26.5 13.573 25.8343 15.0529 24.6667 16.09C23.4982 17.1192 21.9207 17.6286 20.3329 17.4722C17.4907 17.1844 15.2846 14.6588 15.3404 11.7032C15.4201 7.67759 16.8945 5.07458 18.6289 3.38578C20.3761 1.68459 22.4158 0.884497 23.6452 0.531618L23.6591 0.527628L23.6728 0.52284C23.7152 0.507954 23.7704 0.5 23.8713 0.5C24.1425 0.5 24.3799 0.624329 24.5265 0.85037L24.5277 0.852289C24.7128 1.13485 24.6857 1.4981 24.4524 1.75822L24.4523 1.75827C23.2163 3.13698 22.2806 4.57999 21.6832 6.05443Z" />
                        <path d="M7.84136 6.05442L7.61159 6.62147L8.21303 6.73371C10.8035 7.21714 12.6582 9.46983 12.6582 12.0337C12.6582 13.573 11.9925 15.0529 10.8249 16.09C9.65615 17.1194 8.07865 17.6285 6.50008 17.4722C3.67976 17.1842 1.49865 14.7207 1.49865 11.8126V11.6985C1.57946 7.67556 3.05336 5.07393 4.7871 3.38579C6.53424 1.6846 8.574 0.884504 9.8034 0.531628L9.81731 0.527636L9.83096 0.522848C9.8734 0.507959 9.92859 0.500008 10.0294 0.500008C10.3007 0.500008 10.5381 0.624359 10.6846 0.850338L10.6859 0.852327C10.871 1.13488 10.8439 1.49811 10.6106 1.75823L10.6105 1.75828C9.37446 3.13698 8.43881 4.57999 7.84136 6.05442Z" />
                        </svg>
                    </div>
                    <svg className="vector" xmlns="http://www.w3.org/2000/svg" height={95} viewBox="0 0 15 95">
                        <path d="M0 26.0484V21.4517L15 36.7742V41.3709L0 26.0484Z" />
                        <path d="M0 36.774V32.1772L15 47.4998V52.0965L0 36.774Z" />
                        <path d="M0 4.59676V0L15 15.3225V19.9193L0 4.59676Z" />
                        <path d="M0 15.3223V10.7256L15 26.0481V30.6449L0 15.3223Z" />
                        <path d="M0 47.5001V42.9033L15 58.2258V62.8226L0 47.5001Z" />
                        <path d="M0 58.2247V53.6279L15 68.9504V73.5472L0 58.2247Z" />
                        <path d="M0 68.9512V64.3545L15 79.677V84.2738L0 68.9512Z" />
                        <path d="M0 79.6773V75.0806L15 90.4031V94.9998L0 79.6773Z" />
                    </svg>
                    <p>We denounce with righteous indignation and dislike men who are so great  demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot . <span>Rakhab Uddin</span></p>
                    </blockquote>
                    <div className="row g-4 mb-20">
                    <div className="col-sm-6">
                        <div className="blog-dt-img">
                        <img className="img-fluid" src="assets/img/inner-page/log-dt-img1.png" alt="" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="blog-dt-img">
                        <img className="img-fluid" src="assets/img/inner-page/log-dt-img2.png" alt="" />
                        </div>
                    </div>
                    </div>
                    <p>Whether you're a lifelong car lover or simply intrigued by the world of cars, this exploration will leave you with a deepened understanding and appreciation for the artistry, innovation, and joy that cars and driving bring to our lives.</p>
                    <div className="blog-tag-social-area">
                    <div className="bolg-tag">
                        <h6>Tag:</h6>
                        <ul>
                        <li><Link legacyBehavior href="/blog-standard"><a>Brand Car,</a></Link></li>
                        <li><Link legacyBehavior href="/blog-standard"><a>Driving,</a></Link></li>
                        <li><Link legacyBehavior href="/blog-standard"><a>Car Service,</a></Link></li>
                        <li><Link legacyBehavior href="/blog-standard"><a>Car Advice</a></Link></li>
                        </ul>
                    </div>
                    <div className="social-area">
                        <h6>Share:</h6>
                        <ul className="social-link d-flex align-items-center">
                        <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                        <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                        <li><a href="https://www.pinterest.com/"><i className="bx bxl-linkedin" /></a></li>
                        <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="row mb-100">
                    <div className="col-lg-12">
                        <div className="details-navigation">
                        <div className="single-navigation">
                            <Link legacyBehavior href="/blog-details">
                                <a  className="arrow">
                                    <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                                    </svg>
                                </a>
                            </Link>
                            <div className="content">
                            <Link legacyBehavior href="/blog-details"><a>Prev Post</a></Link>
                            <h6><Link legacyBehavior href="/blog-details"><a>The Car Enthusiast: Exploring the World of Cars and Driving</a></Link></h6>
                            </div>
                        </div>
                        <div className="single-navigation two text-end">
                            <div className="content">
                            <Link legacyBehavior href="/blog-details"><a>Next Post</a></Link>
                            <h6><Link legacyBehavior href="/blog-details"><a>The Car Enthusiast: Exploring the World of Cars and Driving</a></Link></h6>
                            </div>
                            <Link legacyBehavior href="/blog-details">
                                <a  className="arrow">
                                    <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                                    </svg>
                                </a>
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="comment-area">
                        <div className="comment-title">
                        <h4>Comments (03)</h4>
                        <div className="dash" />
                        </div>
                        <ul className="comment">
                        <li>
                            <div className="single-comment-area">
                            <div className="author-img">
                                <img src="assets/img/inner-page/comment-author-01.png" alt="" />
                            </div>
                            <div className="comment-content">
                                <div className="author-name-deg">
                                <h6>Mr. Bowmik Haldar,</h6>
                                <span>05 June, 2023</span>
                                </div>
                                <p>However, here are some well-regarded car dealerships known for their customer service, inventory, and overall reputation. It's always a good idea to research and read reviews specific...</p>
                                <div className="replay-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width={14} height={11} viewBox="0 0 14 11">
                                    <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                                </svg>
                                Reply (02)
                                </div>
                            </div>
                            </div>
                            <ul className="comment-replay">
                            <li>
                                <div className="single-comment-area">
                                <div className="author-img">
                                    <img src="assets/img/inner-page/comment-author-02.png" alt="" />
                                </div>
                                <div className="comment-content">
                                    <div className="author-name-deg">
                                    <h6>Jacoline Juie,</h6>
                                    <span>05 June, 2023</span>
                                    </div>
                                    <p>However, here are some well-regarded car dealerships known for their customer service, inventory, and overall reputation. It's always a good idea to research and read reviews specific...</p>
                                    <div className="replay-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={14} height={11} viewBox="0 0 14 11">
                                        <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                                    </svg>
                                    Reply
                                    </div>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="single-comment-area">
                                <div className="author-img">
                                    <img src="assets/img/inner-page/comment-author-03.png" alt="" />
                                </div>
                                <div className="comment-content">
                                    <div className="author-name-deg">
                                    <h6>Robert Smith,</h6>
                                    <span>05 June, 2023</span>
                                    </div>
                                    <p>However, here are some well-regarded car dealerships known for their customer service, inventory, and overall reputation. It's always a good idea to research and read reviews specific...</p>
                                    <div className="replay-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={14} height={11} viewBox="0 0 14 11">
                                        <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                                    </svg>
                                    Reply
                                    </div>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </li>
                        <li>
                            <div className="single-comment-area">
                            <div className="author-img">
                                <img src="assets/img/inner-page/comment-author-04.png" alt="" />
                            </div>
                            <div className="comment-content">
                                <div className="author-name-deg">
                                <h6>Srileka Panday,</h6>
                                <span>05 June, 2023</span>
                                </div>
                                <p>However, here are some well-regarded car dealerships known for their customer service, inventory, and overall reputation. It's always a good idea to research and read reviews specific...</p>
                                <div className="replay-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width={14} height={11} viewBox="0 0 14 11">
                                    <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                                </svg>
                                Reply (02)
                                </div>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="single-comment-area">
                            <div className="author-img">
                                <img src="assets/img/inner-page/comment-author-05.png" alt="" />
                            </div>
                            <div className="comment-content">
                                <div className="author-name-deg">
                                <h6>Mr. Bowmik Haldar,</h6>
                                <span>05 June, 2023</span>
                                </div>
                                <p>However, here are some well-regarded car dealerships known for their customer service, inventory, and overall reputation. It's always a good idea to research and read reviews specific...</p>
                                <div className="replay-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width={14} height={11} viewBox="0 0 14 11">
                                    <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                                </svg>
                                Reply (02)
                                </div>
                            </div>
                            </div>
                        </li>
                        </ul>
                        <div className="inquiry-form mt-100">
                        <div className="title">
                            <h4>Leave Your Comment:</h4>
                        </div>
                        <form>
                            <div className="row">
                            <div className="col-md-6">
                                <div className="form-inner mb-30">
                                <label>Your Name* :</label>
                                <input type="text" placeholder="Jackson Mile" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-inner mb-30">
                                <label>Your Email* :</label>
                                <input type="email" placeholder="example@gamil.com" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-inner mb-30">
                                <label className="containerss">
                                    <input type="checkbox" />
                                    <span className="checkmark" />
                                    <span className="text">Please save my name, email address for the next time I comment. </span>
                                </label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-inner mb-30">
                                <label>Your Message :</label>
                                <textarea placeholder="Write Something..." defaultValue={""} />
                                </div>
                            </div>
                            </div>
                            <div className="form-inner">
                            <button className="primary-btn3" type="submit">
                                Post Comment
                            </button>
                            </div>
                        </form>
                        </div>
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
                                                <a href="/blog-details"><img src="assets/img/inner-page/blog-st-02.png" alt="image" /></a>
                                            </div>
                                            <div className="wc">
                                                <a href="/blog-standard"><a className="date">May 18, 2023</a></a>
                                                <h6><a href="/blog-details"><a>The Environmental Impact of Cars and How to Minimize It.</a></a></h6>
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
                                    <a href="#">Rental</a>
                                    <a href="#">Hyundai</a>
                                    <a href="#">Driving</a>
                                    <a href="#">Compare</a>
                                    <a href="#">Buying</a>
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

export default BlogDetailsPage