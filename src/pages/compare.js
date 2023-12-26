import React, { useEffect, useMemo, useRef, useState } from "react";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Autoplay, Navigation]);
import Link from "next/link";
import MainLayout from '../layout/MainLayout'
import SelectComponent from "../utils/SelectComponent";
import Testimonial from '../components/Home1/Teatimonial/index'
function ComparePage() {
    const [isSticky, setIsSticky] = useState(false);
    const compateCareSettingsSlide = useMemo(()=>{
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
                nextEl: ".next-3",
                prevEl: ".prev-3",
            },

            breakpoints: {
                280: {
                    slidesPerView: 1,
                },
                386: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 2,
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
        })
    const carColorSlide = useMemo(()=>{
        return {
            speed: 1500,
            spaceBetween: 40,
            autoplay: {
                delay: 2500, // Autoplay duration in milliseconds
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".next-2",
                prevEl: ".prev-2",
            },
    
            breakpoints: {
                280: {
                    slidesPerView: 1,
                },
                420: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 2,
                },
                1400: {
                    slidesPerView: 2
                },
            }  
        }
    })

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY >= 600) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const modelOption = ["C-Class-2020","C-Class-2021","C-Class-2022","C-Class-2023"]
    const carConditionOption = ["Newest","Older"]


  return (
    <MainLayout>
        <div className="compare-page pt-100 mb-100">
            <div className="container">
                <div className="row g-4 mb-50">
                <div className="col-lg-4">
                    <div className="product-upload-area text-center">
                    <div className="upload-area">
                        <i className="bi bi-plus" />
                    </div>
                    <div className="comparea-content">
                        <h6>Add to  Compare</h6>
                        <p><Link legacyBehavior href="/single-brand-category"><a>24,342</a></Link> Available Compare Cars</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="uploded-product-group">
                    <div className="row g-4">
                        <div className="col-md-6">
                        <div className="product-card style-2 compare">
                            <div className="close-btn">
                            <i className="bi bi-x" />
                            </div>
                            <div className="product-img">
                            <img src="assets/img/home1/product-img-12.png" alt="image" />
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
                            <div className="change-model">
                                <SelectComponent options={modelOption} placeholder="change car model"/>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="product-card style-2 compare">
                            <div className="close-btn">
                            <i className="bi bi-x" />
                            </div>
                            <div className="product-img">
                            <img src="assets/img/home1/product-img-13.png" alt="image" />
                            </div>
                            <div className="product-content">
                            <div className="content-top">
                                <div className="price-and-title">
                                <h5 className="price">$896564.00</h5>
                                <h5><a href="#">Benz AMG GT C-Class-2023</a></h5>
                                </div>
                                <div className="company-logo">
                                <img src="assets/img/home1/icon/mercedes-01.svg" alt="" />
                                </div>
                            </div>
                            <div className="change-model">
                            <SelectComponent options={modelOption} placeholder="change car model"/>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row mb-50">
                <div className="col-lg-12 position-relative">
                <div className={`car-details-menu ${isSticky? "sticky":""}` }>
                    <nav id="navbar-example2" className="navbar">
                        <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link" href="#car-info">Car Info</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#engine">Engine</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#performance">Performance</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#comfort">Comfort</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#safety">Safety</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#car-color">Color</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#faqs">FAQ’s</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#qus-ans">Question &amp; Answer</a>
                        </li>
                        </ul>
                    </nav>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-12">
                    <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset={0} className="scrollspy-example" tabIndex={0}>
                    <div className="single-compare mb-50" id="car-info">
                        <div className="section-title mb-20">
                        <h5>Summary</h5>
                        </div>
                        <div className="table-wrapper">
                        <table className="eg-table compare-table">
                            <thead>
                            <tr>
                                <th>Basic Info</th>
                                <th>Tesla Model S</th>
                                <th>Benz AMG GT</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Brand Name</td>
                                <td>Tesla Model </td>
                                <td>Mercedes-Benz </td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td>$60,321.00</td>
                                <td>$54,321.00</td>
                            </tr>
                            <tr>
                                <td>Engine Speed</td>
                                <td>35,533 cc</td>
                                <td>34,563 cc</td>
                            </tr>
                            <tr>
                                <td>Body Type</td>
                                <td>Hatchback</td>
                                <td>Convertible</td>
                            </tr>
                            <tr>
                                <td>Max. Power</td>
                                <td>142 kw 7000 rpm</td>
                                <td>140 kw 7000 rpm</td>
                            </tr>
                            <tr>
                                <td>Mileage</td>
                                <td>6,378 miles</td>
                                <td>6,7053 miles</td>
                            </tr>
                            <tr>
                                <td>Steering</td>
                                <td>Left</td>
                                <td>Right</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <div className="single-compare mb-50" id="engine">
                        <div className="section-title mb-20">
                        <h5>Engine</h5>
                        </div>
                        <div className="table-wrapper">
                        <table className="eg-table compare-table">
                            <tbody>
                            <tr>
                                <td>Engine Type</td>
                                <td>1.55 L Petrol Engine</td>
                                <td>1.5 L Gas Engine</td>
                            </tr>
                            <tr>
                                <td>No Of Cylinders</td>
                                <td>04</td>
                                <td>04</td>
                            </tr>
                            <tr>
                                <td>Engine Speed</td>
                                <td>35,533 cc</td>
                                <td>34,563 cc</td>
                            </tr>
                            <tr>
                                <td>Transmission</td>
                                <td>Manual</td>
                                <td>Automatic</td>
                            </tr>
                            <tr>
                                <td>Max. Power</td>
                                <td>142 kw 7000 rpm</td>
                                <td>140 kw 7000 rpm</td>
                            </tr>
                            <tr>
                                <td>Gear Box</td>
                                <td>8 Speed</td>
                                <td>8 Speed</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <div className="single-compare mb-50" id="performance">
                        <div className="section-title mb-20">
                        <h5>Performance</h5>
                        </div>
                        <div className="table-wrapper">
                        <table className="eg-table compare-table">
                            <tbody>
                            <tr>
                                <td>Braking (80-0 kmph)</td>
                                <td>00</td>
                                <td>40 Meters</td>
                            </tr>
                            <tr>
                                <td>Fuel Type</td>
                                <td>Petrol</td>
                                <td>Gasoline</td>
                            </tr>
                            <tr>
                                <td>Fuel Capacity</td>
                                <td>40 Liters</td>
                                <td>40 Liters</td>
                            </tr>
                            <tr>
                                <td>Mileage</td>
                                <td>140 kw 7000 rpm</td>
                                <td>142 kw 7000 rpm</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <div className="single-compare mb-50" id="comfort">
                        <div className="section-title mb-20">
                        <h5>Comfort</h5>
                        </div>
                        <div className="table-wrapper">
                        <table className="eg-table compare-table">
                            <tbody>
                            <tr>
                                <td>Connectivity</td>
                                <td>Apple CarPlay</td>
                                <td>Apple CarPlay</td>
                            </tr>
                            <tr>
                                <td>USB Charger</td>
                                <td>Rear</td>
                                <td>Rear</td>
                            </tr>
                            <tr>
                                <td>Air Conditioner</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Parking Sensor</td>
                                <td>Yes</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>Automatic Climate Control</td>
                                <td>No</td>
                                <td>Rear</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <div className="single-compare mb-50" id="safety">
                        <div className="section-title mb-20">
                        <h5>Safety</h5>
                        </div>
                        <div className="table-wrapper">
                        <table className="eg-table compare-table">
                            <tbody>
                            <tr>
                                <td>Seat Belts</td>
                                <td><i className="bi bi-check2" /></td>
                                <td><i className="bi bi-check2" /></td>
                            </tr>
                            <tr>
                                <td>360 Degree Camera</td>
                                <td><i className="bi bi-check2" /></td>
                                <td><i className="bi bi-check2" /></td>
                            </tr>
                            <tr>
                                <td>No.of Airbags</td>
                                <td>05</td>
                                <td>05</td>
                            </tr>
                            <tr>
                                <td>Head-up Display</td>
                                <td><i className="bi bi-check2" /></td>
                                <td><i className="bi bi-check2" /></td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <div className="single-compare mb-50" id="car-color">
                        <div className="car-colors">
                        <div className="title-and-slider-btn mb-25">
                            <div className="section-title">
                            <h5>Car Colors</h5>
                            </div>
                            <div className="slider-btn-group2">
                            <div className="slider-btn prev-2">
                                <svg width={7} height={13} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                                </svg>
                            </div>
                            <div className="slider-btn next-2">
                                <svg width={7} height={13} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                                </svg>
                            </div>
                            </div>
                        </div>
                        <Swiper {...carColorSlide} className="swiper car-color-slider">
                            <div className="swiper-wrapper">
                            <SwiperSlide className="swiper-slide">
                                <div className="car-color-wrap">
                                <div className="car-img">
                                    <img src="assets/img/inner-page/color-car-01.png" alt="" />
                                </div>
                                <div className="content">
                                    <h6>Lamborghini Murciélago (Black)</h6>
                                </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="car-color-wrap">
                                <div className="car-img">
                                    <img src="assets/img/inner-page/color-car-02.png" alt="" />
                                </div>
                                <div className="content">
                                    <h6>Lamborghini Murciélago (Blue)</h6>
                                </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="car-color-wrap">
                                <div className="car-img">
                                    <img src="assets/img/inner-page/color-car-03.png" alt="" />
                                </div>
                                <div className="content">
                                    <h6>Lamborghini Murciélago (Pink)</h6>
                                </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="car-color-wrap">
                                <div className="car-img">
                                    <img src="assets/img/inner-page/color-car-04.png" alt="" />
                                </div>
                                <div className="content">
                                    <h6>Lamborghini Murciélago (Orange)</h6>
                                </div>
                                </div>
                            </SwiperSlide>
                            </div>
                        </Swiper>
                        </div>
                    </div>
                    <div className="single-compare mb-50" id="faqs">
                        <div className="faq-area">
                        <div className="section-title mb-25">
                            <h5>FAQ’s &amp; Latest Answer</h5>
                        </div>
                        <div className="faq-wrap">
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h5 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    How often should I get my car serviced?
                                </button>
                                </h5>
                                <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">It's always a good idea to research and read
                                    reviews specific to the dealership you're interested in, as
                                    experiences can vary even within the same dealership chain.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h5 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    How often should I change my car's oil?
                                </button>
                                </h5>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">It's always a good idea to research and read
                                    reviews specific to the dealership you're interested in, as
                                    experiences can vary even within the same dealership chain.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h5 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    What type of fuel should I use for my car?
                                </button>
                                </h5>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">It's always a good idea to research and read
                                    reviews specific to the dealership you're interested in, as
                                    experiences can vary even within the same dealership chain.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h5 className="accordion-header" id="flush-headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    What is the recommended tire pressure for my car?
                                </button>
                                </h5>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">It's always a good idea to research and read
                                    reviews specific to the dealership you're interested in, as
                                    experiences can vary even within the same dealership chain.</div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="single-compare mb-50" id="qus-ans">
                        <div className="user-qustion-area">
                        <div className="section-title-and-filter mb-30">
                            <div className="section-title">
                            <h5>Latest User Question</h5>
                            </div>
                            <div className="filter-atra">
                            <h6>Filter By:</h6>
                            <form>
                                <div className="form-inner">
                                <SelectComponent options={carConditionOption} placeholder="car conditon select"/>
                                </div>
                            </form>
                            </div>
                        </div>
                        <div className="text-input-area mb-40">
                            <form>
                            <div className="form-inner">
                                <textarea placeholder="Ask your question..." defaultValue={""} />
                                <button type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
                                    <path d="M13.8697 0.129409C13.9314 0.191213 13.9736 0.269783 13.991 0.355362C14.0085 0.44094 14.0004 0.529754 13.9678 0.610771L8.78063 13.5781C8.73492 13.6923 8.65859 13.7917 8.56003 13.8653C8.46148 13.9389 8.34453 13.9839 8.22206 13.9954C8.09958 14.0068 7.97633 13.9842 7.86586 13.9301C7.75539 13.876 7.66199 13.7924 7.59594 13.6887L4.76304 9.23607L0.310438 6.40316C0.206426 6.33718 0.122663 6.24375 0.0683925 6.13318C0.0141218 6.02261 -0.00854707 5.89919 0.00288719 5.77655C0.0143215 5.65391 0.0594144 5.53681 0.13319 5.43817C0.206966 5.33954 0.306557 5.2632 0.420973 5.21759L13.3883 0.0322452C13.4694 -0.000369522 13.5582 -0.00846329 13.6437 0.00896931C13.7293 0.0264019 13.8079 0.0685926 13.8697 0.1303V0.129409ZM5.65267 8.97578L8.11385 12.8427L12.3329 2.29554L5.65267 8.97578ZM11.7027 1.66531L1.1555 5.88436L5.02333 8.34466L11.7027 1.66531Z" />
                                </svg>       
                                </button>
                            </div>
                            </form>
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
                        <div className="load-moer-btn">
                            <a className="primary-btn3" href="#">Load More Question</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div className="compare-car-section mb-100">
            <div className="container-xl container-fluid">
                <div className="row mb-60 wow fadeInUp" data-wow-delay="200ms">
                <div className="col-lg-12">
                    <div className="section-title1">
                    <span>Best Car Collection</span>
                    <h2>Compare Car With Brand</h2>
                    </div>
                </div>
                </div>
                <div className="modal compare-modal fade" id="compareModal01" tabIndex={-1} aria-labelledby="compareModal01Label" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="compareModal01Label">Comparision</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x" /></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                        <div className="col-lg-12">
                            <div className="compare-top">
                            <div className="single-car">
                                <div className="car-img">
                                <img src="assets/img/home1/compare-md-01.png" alt="car" />
                                </div>
                                <div className="content text-center">
                                <h6 className="title"><a href="#">Mercedes-Benz C-Class-2023</a></h6>
                                <h6 className="price">$68, 219.000</h6>
                                </div>
                            </div>
                            <div className="vs">
                                <span>VS</span>
                            </div>
                            <div className="single-car">
                                <div className="car-img">
                                <img src="assets/img/home1/compare-md-02.png" alt="car" />
                                </div>
                                <div className="content text-center">
                                <h6 className="title"><a href="#">Jeep Grand Cherokee-2023</a></h6>
                                <h6 className="price">$78, 729.000</h6>
                                </div>
                            </div>
                            </div>
                            <div className="compare-btm">
                            <div className="table-wrapper">
                                <table className="eg-table">
                                <thead>
                                    <tr>
                                    <th>SUV</th>
                                    <th>TOYOTA</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td><strong>Engine Speed:</strong> 34,563 cc</td>
                                    <td><strong>Engine Speed:</strong> 35,533 cc</td>
                                    </tr>
                                    <tr>
                                    <td><strong>Body Type:</strong> Convertible</td>
                                    <td><strong>Body Type:</strong> Hatchback</td>
                                    </tr>
                                    <tr>
                                    <td><strong>Max. Power:</strong> 140 kw 7000 rpm</td>
                                    <td><strong>Max. Power:</strong> 142 kw 7000 rpm</td>
                                    </tr>
                                    <tr>
                                    <td><strong>Steering:</strong> Right</td>
                                    <td><strong>Steering:</strong> Left</td>
                                    </tr>
                                    <tr>
                                    <td><strong>Engine Type:</strong> 1.5 L Gas Engine</td>
                                    <td><strong>Engine Type:</strong> 1.55 L Petrol Engine</td>
                                    </tr>
                                    <tr>
                                    <td><strong>No Of Cylinders:</strong> 04</td>
                                    <td><strong>No Of Cylinders:</strong> 04</td>
                                    </tr>
                                    <tr>
                                    <td><strong>Transmission:</strong> Automatic</td>
                                    <td><strong>Transmission:</strong> Manual</td>
                                    </tr>
                                    <tr>
                                    <td><strong>Fuel Type:</strong> Petrol</td>
                                    <td><strong>Fuel Type:</strong> Gasoline</td>
                                    </tr>
                                    <tr>
                                    <td><Link legacyBehavior href="/car-deatils"><a className="primary-btn2">View Details</a></Link></td>
                                    <td><Link legacyBehavior href="/car-deatils"><a className="primary-btn2">View Details</a></Link></td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row mb-40 wow fadeInUp" data-wow-delay="300ms">
                <div className="col-lg-12">
                    <Swiper {...compateCareSettingsSlide} className="swiper compare-car-slider">
                    <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                        <div className="single-compare-card">
                            <div className="compare-top">
                            <div className="single-car">
                                <div className="car-img">
                                <img src="assets/img/home1/cc-suv.png" alt="car" />
                                </div>
                                <div className="content text-center">
                                <span>(SUV)</span>
                                <h6 className="title"><a href="#">Kia Optima</a></h6>
                                <h6 className="price">$68, 219.000</h6>
                                </div>
                            </div>
                            <div className="vs">
                                <span>VS</span>
                            </div>
                            <div className="single-car">
                                <div className="car-img">
                                <img src="assets/img/home1/cc-toyota.png" alt="car" />
                                </div>
                                <div className="content text-center">
                                <span>(Toyota)</span>
                                <h6 className="title"><a href="#">T. Camry</a></h6>
                                <h6 className="price">$78, 729.000</h6>
                                </div>
                            </div>
                            </div>
                            <div className="compare-btm">
                            <button type="button" className="primary-btn2" data-bs-toggle="modal" data-bs-target="#compareModal01">Compare SUV &amp; Toyota</button>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                        <div className="single-compare-card">
                            <div className="compare-top">
                            <div className="single-car">
                                <div className="car-img">
                                <img src="assets/img/home1/cc-sucuki.png" alt="car" />
                                </div>
                                <div className="content text-center">
                                <span>(Suzuki)</span>
                                <h6 className="title"><a href="#">Nissan 120</a></h6>
                                <h6 className="price">$70, 219.000</h6>
                                </div>
                            </div>
                            <div className="vs">
                                <span>VS</span>
                            </div>
                            <div className="single-car">
                                <div className="car-img">
                                <img src="assets/img/home1/cc-tesla.png" alt="car" />
                                </div>
                                <div className="content text-center">
                                <span>(Tesla)</span>
                                <h6 className="title"><a href="#">Tesla SS</a></h6>
                                <h6 className="price">$78, 729.000</h6>
                                </div>
                            </div>
                            </div>
                            <div className="compare-btm">
                            <button type="button" className="primary-btn2" data-bs-toggle="modal" data-bs-target="#compareModal01">Compare Suzuki &amp; Tesla</button>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                        <div className="single-compare-card">
                            <div className="compare-top">
                            <div className="single-car">
                                <div className="car-img">
                                <img src="assets/img/home1/cc-merceds.png" alt="car" />
                                </div>
                                <div className="content text-center">
                                <span>(Mercedes)</span>
                                <h6 className="title"><a href="#">Subaru 46</a></h6>
                                <h6 className="price">$90, 319.000</h6>
                                </div>
                            </div>
                            <div className="vs">
                                <span>VS</span>
                            </div>
                            <div className="single-car">
                                <div className="car-img">
                                <img src="assets/img/home1/cc-bmw.png" alt="car" />
                                </div>
                                <div className="content text-center">
                                <span>(BMW)</span>
                                <h6 className="title"><a href="#">Porsche 11</a></h6>
                                <h6 className="price">$93, 740.000</h6>
                                </div>
                            </div>
                            </div>
                            <div className="compare-btm">
                            <button type="button" className="primary-btn2" data-bs-toggle="modal" data-bs-target="#compareModal01">Compare Mercedes &amp; BMW</button>
                            </div>
                        </div>
                        </SwiperSlide>
                    </div>
                    </Swiper>
                </div>
                </div>
                <div className="row ">
                <div className="col-lg-12 divider">
                    <div className="slider-btn-group style-2 justify-content-md-between justify-content-center">
                    <div className="slider-btn prev-3 d-md-flex d-none">
                        <svg width={11} height={19} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                        </svg>
                    </div>
                    <div className="view-btn-area">
                        <p>There are Trending Car Available</p>
                        <a className="view-btn" href="#">View More</a>
                    </div>
                    <div className="slider-btn next-3 d-md-flex d-none">
                        <svg width={11} height={19} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                        </svg>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="toprated-used-cars mb-100">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <div className="title">
                    <h4>Top Rated Used Cars For Sale</h4>
                    </div>
                    <div className="brand-list">
                    <ul>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Mitsubishi <span>(1,234)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Mazda <span>(2,365)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Land Rover <span>(7,562)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Volkswagen <span>(1,638)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Mercedes-Benz <span>(8,556)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Suzuki <span>(4,772)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Isuzu <span>(9,676)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Volvo <span>(3,763)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Honda <span>(2,432)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Hyundai <span>(22,463)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Nissan <span>(1,873)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>SsangYong <span>(277 )</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Peugeot <span>(7,382)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Kia <span>(532)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Maserati <span>(675)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Bentley <span>(5,645)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Holden <span>(11,324)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Haval <span>(6,676)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>SKODA <span>(4,453)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Porsche <span>(3,754)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Subaru <span>(1,754)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Tesla <span>(9,442)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Mahindra <span>(3,766)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Lamborghini <span>(6,834)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Mitsubishi <span>(432)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Mazda <span>(5,334)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Bentley <span>(5,645)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Holden <span>(11,324)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Haval <span>(6,676)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>SKODA <span>(4,453)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Porsche <span>(3,754)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Subaru <span>(1,754)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Tesla <span>(9,442)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Mahindra <span>(3,766)</span></a></Link></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <Testimonial/>
    </MainLayout>
  )
}

export default ComparePage