import React from "react";
import MainLayout from "../layout/MainLayout";
import OfferCategoryFiler from "../utils/OfferCategoryFiler";
import SelectComponent from "../utils/SelectComponent";
import CustomarFeedback from "../utils/CustomarFeedback";
import Link from 'next/link'
function Shoppage() {
  return (
    <MainLayout>
      <OfferCategoryFiler />
        <div className="product-page mb-100">
            <div className="container">
                <div className="row mb-40">
                <div className="col-lg-12">
                    <div className="show-item-and-filte">
                    <p>Showing <strong>60</strong> results of <strong>1,245</strong> car parts</p>
                    <div className="filter-atra">
                        <h6>Filter By:</h6>
                        <form>
                        <div className="form-inner">
                            <SelectComponent options={['Popular','Newest','Older']} placeholder="select product " />
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row g-xl-4 gy-5">
                <div className="col-xl-3">
                    <div className="product-sidebar">
                    <div className="product-widget mb-20">
                        <div className="check-box-item">
                        <h6 className="product-widget-title mb-20">Product Category</h6>
                        <div className="checkbox-container">
                            <ul className="wp-block-categoris-cloud">
                            <li><Link legacyBehavior href="/shop"><a className="active"><span>Car Servicing</span> <span className="number-of-categoris">(30)</span></a></Link></li>
                            <li><Link legacyBehavior href="/shop"><a className="active"><span>Car Buying Advice</span> <span className="number-of-categoris">(18)</span> </a></Link></li>
                            <li><Link legacyBehavior href="/shop"><a className="active"><span>Car Rental</span> <span className="number-of-categoris">(21)</span></a></Link></li>
                            <li><Link legacyBehavior href="/shop"><a className="active"><span>Driving</span> <span className="number-of-categoris">(25)</span></a></Link></li>
                            <li><Link legacyBehavior href="/shop"><a className="active"><span>Brand Car</span> <span className="number-of-categoris">(29)</span></a></Link></li>
                            <li><Link legacyBehavior href="/shop"><a className="active"><span>Tata</span> <span className="number-of-categoris">(2,554)</span></a></Link></li>
                            <li><Link legacyBehavior href="/shop"><a className="active"><span>Hyundai</span> <span className="number-of-categoris">(1,556)</span></a></Link></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="product-widget mb-20">
                        <div className="check-box-item">
                        <h6 className="product-widget-title mb-25">Price</h6>
                        <div className="range-wrapper">
                            <div className="slider-wrapper">
                            <div id="eg-range-slider" />
                            </div> 
                            <div className="valus">
                            <div className="min-value">
                                <span>$</span>
                                <input type="text" className="from" defaultValue={200} />
                            </div>
                            <div className="min-value">
                                <span>$</span>
                                <input type="text" className="to" defaultValue={2000} />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="product-widget mb-20">
                        <div className="check-box-item">
                        <h6 className="product-widget-title mb-20">Product Ratings</h6>
                        <div className="checkbox-container">
                            <ul>
                            <li>
                                <label className="containerss">
                                <input type="checkbox" />
                                <span className="checkmark" />
                                <span className="stars">
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />          
                                    <a href="#" className="review-no">(4.0)</a>
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="containerss">
                                <input type="checkbox" />
                                <span className="checkmark" />
                                <span className="stars">
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-half" />        
                                    <a href="#" className="review-no">(3.5)</a>
                                </span>
                                </label>
                            </li>                   
                            <li>
                                <label className="containerss">
                                <input type="checkbox" />
                                <span className="checkmark" />
                                <span className="stars">
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <a href="#" className="review-no">(3.0)</a>
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="containerss">
                                <input type="checkbox" />
                                <span className="checkmark" />
                                <span className="stars">
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-half" />
                                    <a href="#" className="review-no">(2.5)</a>
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="containerss">
                                <input type="checkbox" />
                                <span className="checkmark" />
                                <span className="stars">
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <a href="#" className="review-no">(2.0)</a>
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="containerss">
                                <input type="checkbox" />
                                <span className="checkmark" />
                                <span className="stars">
                                    <i className="bi bi-star-fill" />
                                    <a href="#" className="review-no">(1.0)</a>
                                </span>
                                </label>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="product-widget">
                        <div className="check-box-item">
                        <h6 className="product-widget-title mb-20">Recent Products</h6>
                        <ul className="recent-product-list">
                            <li className="recent-product">
                            <div className="product-img">
                                <img src="assets/img/inner-page/recent-prodect-img-01.png" alt="" />
                            </div>
                            <div className="content">
                                <div className="price">
                                <h6>$214.00</h6>
                                </div>
                                <h6><Link legacyBehavior href="/product-details"><a>Steering Rack Advance Auto Parts.</a></Link></h6>
                            </div>
                            </li>
                            <li className="recent-product">
                            <div className="product-img">
                                <img src="assets/img/inner-page/recent-prodect-img-02.png" alt="" />
                            </div>
                            <div className="content">
                                <div className="price">
                                <h6>$214.00</h6>
                                </div>
                                <h6><Link legacyBehavior href="/product-details"><a>New Oil Filter Fit For Ys400.</a></Link></h6>
                            </div>
                            </li>
                            <li className="recent-product">
                            <div className="product-img">
                                <img src="assets/img/inner-page/recent-prodect-img-03.png" alt="" />
                            </div>
                            <div className="content">
                                <div className="price">
                                <h6>$214.00</h6>
                                </div>
                                <h6><Link legacyBehavior href="/product-details"><a>Tech master Carbon ceramic brakes.</a></Link></h6>
                            </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-xl-9">
                    <div className="row g-4 mb-40">
                    <div className="col-lg-4">
                        <div className="shop-card2">
                        <div className="shop-img">
                            <img src="assets/img/inner-page/Product-01.png" alt="" />
                            <div className="offer-batch">
                            <span>-20%</span>
                            </div>
                            <a href="#" className="fav">
                            <svg width={12} height={11} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                                </path>
                            </svg>
                            </a>
                        </div>
                        <div className="content">
                            <div className="cart-btn">
                            <a className="primary-btn2" href="#">Add to cart</a>
                            </div>
                            <div className="star">
                            <ul>
                                <li className="active"><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-half" /></li>
                            </ul>
                            <span>(4.5)</span>
                            </div>
                            <h6><Link legacyBehavior href="/product-details"><a>Steering Rack Advance Auto Parts is a retailer.</a></Link>
                            </h6>
                            <div className="content-btm">
                            <div className="price">
                                <h6>$214.00 <del>$234.00</del></h6>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="shop-card2">
                        <div className="shop-img">
                            <img src="assets/img/inner-page/Product-02.png" alt="" />
                            <div className="offer-batch">
                            <span>-20%</span>
                            </div>
                            <a href="#" className="fav">
                            <svg width={12} height={11} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                                </path>
                            </svg>
                            </a>
                        </div>
                        <div className="content">
                            <div className="cart-btn">
                            <a className="primary-btn2" href="#">Add to cart</a>
                            </div>
                            <div className="star">
                            <ul>
                                <li className="active"><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-half" /></li>
                            </ul>
                            <span>(4.5)</span>
                            </div>
                            <h6><Link legacyBehavior href="/product-details"><a>Jekit 355*32mm assembled brake disks.</a></Link>
                            </h6>
                            <div className="content-btm">
                            <div className="price">
                                <h6>$214.00 <del>$234.00</del></h6>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="shop-card2">
                        <div className="shop-img">
                            <img src="assets/img/inner-page/Product-03.png" alt="" />
                            <div className="offer-batch">
                            <span>-20%</span>
                            </div>
                            <a href="#" className="fav">
                            <svg width={12} height={11} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                                </path>
                            </svg>
                            </a>
                        </div>
                        <div className="content">
                            <div className="cart-btn">
                            <a className="primary-btn2" href="#">Add to cart</a>
                            </div>
                            <div className="star">
                            <ul>
                                <li className="active"><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-half" /></li>
                            </ul>
                            <span>(4.5)</span>
                            </div>
                            <h6><Link legacyBehavior href="/product-details"><a>Pump Water Audi Seat Skoda Vw Skf Vkpc 81620.</a></Link>
                            </h6>
                            <div className="content-btm">
                            <div className="price">
                                <h6>$214.00 <del>$234.00</del></h6>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="shop-card2">
                        <div className="shop-img">
                            <img src="assets/img/inner-page/Product-04.png" alt="" />
                            <div className="offer-batch">
                            <span>-20%</span>
                            </div>
                            <a href="#" className="fav">
                            <svg width={12} height={11} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                                </path>
                            </svg>
                            </a>
                        </div>
                        <div className="content">
                            <div className="cart-btn">
                            <a className="primary-btn2" href="#">Add to cart</a>
                            </div>
                            <div className="star">
                            <ul>
                                <li className="active"><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-half" /></li>
                            </ul>
                            <span>(4.5)</span>
                            </div>
                            <h6><Link legacyBehavior href="/product-details"><a>CNR spark plug Motorcycle Engine Parts Spark Plug</a></Link>
                            </h6>
                            <div className="content-btm">
                            <div className="price">
                                <h6>$214.00 <del>$234.00</del></h6>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="shop-card2">
                        <div className="shop-img">
                            <img src="assets/img/inner-page/Product-05.png" alt="" />
                            <div className="offer-batch">
                            <span>-20%</span>
                            </div>
                            <a href="#" className="fav">
                            <svg width={12} height={11} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                                </path>
                            </svg>
                            </a>
                        </div>
                        <div className="content">
                            <div className="cart-btn">
                            <a className="primary-btn2" href="#">Add to cart</a>
                            </div>
                            <div className="star">
                            <ul>
                                <li className="active"><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-half" /></li>
                            </ul>
                            <span>(4.5)</span>
                            </div>
                            <h6><Link legacyBehavior href="/product-details"><a>Tech master New Brand Carbon ceramic brakes.</a></Link>
                            </h6>
                            <div className="content-btm">
                            <div className="price">
                                <h6>$214.00 <del>$234.00</del></h6>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="shop-card2">
                        <div className="shop-img">
                            <img src="assets/img/inner-page/Product-06.png" alt="" />
                            <div className="offer-batch">
                            <span>-20%</span>
                            </div>
                            <a href="#" className="fav">
                            <svg width={12} height={11} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                                </path>
                            </svg>
                            </a>
                        </div>
                        <div className="content">
                            <div className="cart-btn">
                            <a className="primary-btn2" href="#">Add to cart</a>
                            </div>
                            <div className="star">
                            <ul>
                                <li className="active"><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-half" /></li>
                            </ul>
                            <span>(4.5)</span>
                            </div>
                            <h6><Link legacyBehavior href="/product-details"><a>WJB WA512187 - Rear Wheel Hub Bearing Assembly.</a></Link>
                            </h6>
                            <div className="content-btm">
                            <div className="price">
                                <h6>$214.00 <del>$234.00</del></h6>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="shop-card2">
                        <div className="shop-img">
                            <img src="assets/img/inner-page/Product-07.png" alt="" />
                            <div className="offer-batch">
                            <span>-20%</span>
                            </div>
                            <a href="#" className="fav">
                            <svg width={12} height={11} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                                </path>
                            </svg>
                            </a>
                        </div>
                        <div className="content">
                            <div className="cart-btn">
                            <a className="primary-btn2" href="#">Add to cart</a>
                            </div>
                            <div className="star">
                            <ul>
                                <li className="active"><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-half" /></li>
                            </ul>
                            <span>(4.5)</span>
                            </div>
                            <h6><Link legacyBehavior href="/product-details"><a>Comficent_GB Car Turbo Air Freshener Turbo Car.</a></Link>
                            </h6>
                            <div className="content-btm">
                            <div className="price">
                                <h6>$214.00 <del>$234.00</del></h6>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="shop-card2">
                        <div className="shop-img">
                            <img src="assets/img/inner-page/Product-08.png" alt="" />
                            <div className="offer-batch">
                            <span>-20%</span>
                            </div>
                            <a href="#" className="fav">
                            <svg width={12} height={11} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                                </path>
                            </svg>
                            </a>
                        </div>
                        <div className="content">
                            <div className="cart-btn">
                            <a className="primary-btn2" href="#">Add to cart</a>
                            </div>
                            <div className="star">
                            <ul>
                                <li className="active"><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-half" /></li>
                            </ul>
                            <span>(4.5)</span>
                            </div>
                            <h6><Link legacyBehavior href="/product-details"><a>New Oil Filter Fit For Ys400 Ys700 Msu 500 Utv700.</a></Link>
                            </h6>
                            <div className="content-btm">
                            <div className="price">
                                <h6>$214.00 <del>$234.00</del></h6>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="shop-card2">
                        <div className="shop-img">
                            <img src="assets/img/inner-page/Product-09.png" alt="" />
                            <div className="offer-batch">
                            <span>-20%</span>
                            </div>
                            <a href="#" className="fav">
                            <svg width={12} height={11} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                                </path>
                            </svg>
                            </a>
                        </div>
                        <div className="content">
                            <div className="cart-btn">
                            <a className="primary-btn2" href="#">Add to cart</a>
                            </div>
                            <div className="star">
                            <ul>
                                <li className="active"><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-half" /></li>
                            </ul>
                            <span>(4.5)</span>
                            </div>
                            <h6><Link legacyBehavior href="/product-details"><a>CNBF Dlying Auto Parts Brake Disc Rotor.</a></Link>
                            </h6>
                            <div className="content-btm">
                            <div className="price">
                                <h6>$214.00 <del>$234.00</del></h6>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-lg-12">
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
                    </div>
                </div>
                </div>
            </div>
        </div>
        <CustomarFeedback/> 
    </MainLayout>
  );
}

export default Shoppage;
