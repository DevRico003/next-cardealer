import Link from 'next/link';
import React, { useState } from 'react'
import Marquee from "react-fast-marquee";
function index() {
    const [activeIndex, setActiveIndex] = useState(1);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(1); // Set back to 1 for initial first item active
  };

  return (
    <div className="shop-car-parts-section pt-90 pb-90 mb-100">
      <div className="text-slider wow fadeInUp" data-wow-delay="200ms">
        <h2 className="marquee_text">
        <Marquee>
          SHOP NOW
          <img src="assets/img/home1/icon/text-slider-vec.svg" alt="" />
          SHOP CART
          <img src="assets/img/home1/icon/text-slider-vec.svg" alt="" />
          SHOP NOW
          <img src="assets/img/home1/icon/text-slider-vec.svg" alt="" />
          SHOP CART
          <img src="assets/img/home1/icon/text-slider-vec.svg" alt="" />
          SHOP NOW
          <img src="assets/img/home1/icon/text-slider-vec.svg" alt="" />
          SHOP CART
          <img src="assets/img/home1/icon/text-slider-vec.svg" alt="" />
          SHOP NOW
          <img src="assets/img/home1/icon/text-slider-vec.svg" alt="" />
          SHOP CART
          <img src="assets/img/home1/icon/text-slider-vec.svg" alt="" />
          SHOP NOW
          <img src="assets/img/home1/icon/text-slider-vec.svg" alt="" />
          SHOP CART
          <img src="assets/img/home1/icon/text-slider-vec.svg" alt="" />
          SHOP NOW
          <img src="assets/img/home1/icon/text-slider-vec.svg" alt="" />
          SHOP CART
          <img src="assets/img/home1/icon/text-slider-vec.svg" alt="" />
          SHOP NOW
          <img src="assets/img/home1/icon/text-slider-vec.svg" alt="" />
          SHOP CART
          <img src="assets/img/home1/icon/text-slider-vec.svg" alt="" />
          SHOP NOW
          <img src="assets/img/home1/icon/text-slider-vec.svg" alt="" />
          SHOP CART
          <img src="assets/img/home1/icon/text-slider-vec.svg" alt="" />
          </Marquee>
        </h2>
      </div>
      <div className="container-fluid">
        <div className="row g-lg-4 gy-5" >
          <div className="col-lg-4 wow fadeInUp" data-wow-delay="200ms">
            <div className="section-title1">
              <h2>Do Your Need <br />
                Any Parts Of The Car ?</h2>
              <Link legacyBehavior href="/shop"><a className="primary-btn2" ><i className="bi bi-cart2" /> Go to Shop Page</a></Link>
            </div>
          </div>
          <div className="col-lg-4 wow zoomIn" onMouseLeave={handleMouseLeave} data-wow-delay="400ms">
            <div className="shop-big-img" >
              <img src="assets/img/home1/shop-main-img.png" alt="" />
              <ul>
                <li onMouseEnter={(index) => handleMouseEnter(1)}
                className={activeIndex === 1 ? 'active' : ''}>
                  <div className="dot-main">
                    <div className="promo-video">
                      <div className="waves-block">
                        <div className="waves wave-1" />
                        <div className="waves wave-2" />
                        <div className="waves wave-3" />
                      </div>
                    </div>
                  </div>
                  <div className="shop-card">
                    <div className="shop-img">
                      <img src="assets/img/home1/shop-img-1.png" alt="" />
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
                      <div className="star">
                        <ul>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-half" /></li>
                        </ul>
                        <span>(4.5)</span>
                      </div>
                      <h6><a href="#"><span>Steering Rack</span> Advance Auto Parts is a retailer.</a>
                      </h6>
                      <div className="content-btm">
                        <div className="price">
                          <h6>$234.00</h6>
                        </div>
                        <a className="primary-btn2" href="#">Add to cart</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li onMouseEnter={() => handleMouseEnter(2)}
                className={activeIndex === 2 ? 'active' : ''}>
                  <div className="dot-main left">
                    <div className="promo-video">
                      <div className="waves-block">
                        <div className="waves wave-1" />
                        <div className="waves wave-2" />
                        <div className="waves wave-3" />
                      </div>
                    </div>
                  </div>
                  <div className="shop-card left">
                    <div className="shop-img">
                      <img src="assets/img/home1/shop-img-1.png" alt="" />
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
                      <div className="star">
                        <ul>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-half" /></li>
                        </ul>
                        <span>(4.5)</span>
                      </div>
                      <h6><a href="#"><span>Steering Rack</span> Advance Auto Parts is a retailer.</a>
                      </h6>
                      <div className="content-btm">
                        <div className="price">
                          <h6>$234.00</h6>
                        </div>
                        <a className="primary-btn2" href="#">Add to cart</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li onMouseEnter={() => handleMouseEnter(3)}
                className={activeIndex === 3 ? 'active' : ''}>
                  <div className="dot-main">
                    <div className="promo-video">
                      <div className="waves-block">
                        <div className="waves wave-1" />
                        <div className="waves wave-2" />
                        <div className="waves wave-3" />
                      </div>
                    </div>
                  </div>
                  <div className="shop-card">
                    <div className="shop-img">
                      <img src="assets/img/home1/shop-img-1.png" alt="" />
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
                      <div className="star">
                        <ul>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-half" /></li>
                        </ul>
                        <span>(4.5)</span>
                      </div>
                      <h6><a href="#"><span>Steering Rack</span> Advance Auto Parts is a retailer.</a>
                      </h6>
                      <div className="content-btm">
                        <div className="price">
                          <h6>$234.00</h6>
                        </div>
                        <a className="primary-btn2" href="#">Add to cart</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li onMouseEnter={() => handleMouseEnter(4)}
                className={activeIndex === 4 ? 'active' : ''}>
                  <div className="dot-main">
                    <div className="promo-video">
                      <div className="waves-block">
                        <div className="waves wave-1" />
                        <div className="waves wave-2" />
                        <div className="waves wave-3" />
                      </div>
                    </div>
                  </div>
                  <div className="shop-card">
                    <div className="shop-img">
                      <img src="assets/img/home1/shop-img-1.png" alt="" />
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
                      <div className="star">
                        <ul>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-half" /></li>
                        </ul>
                        <span>(4.5)</span>
                      </div>
                      <h6><a href="#"><span>Steering Rack</span> Advance Auto Parts is a retailer.</a>
                      </h6>
                      <div className="content-btm">
                        <div className="price">
                          <h6>$234.00</h6>
                        </div>
                        <a className="primary-btn2" href="#">Add to cart</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li onMouseEnter={() => handleMouseEnter(5)}
                className={activeIndex === 5 ? 'active' : ''}>
                  <div className="dot-main left">
                    <div className="promo-video">
                      <div className="waves-block">
                        <div className="waves wave-1" />
                        <div className="waves wave-2" />
                        <div className="waves wave-3" />
                      </div>
                    </div>
                  </div>
                  <div className="shop-card left">
                    <div className="shop-img">
                      <img src="assets/img/home1/shop-img-1.png" alt="" />
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
                      <div className="star">
                        <ul>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-half" /></li>
                        </ul>
                        <span>(4.5)</span>
                      </div>
                      <h6><a href="#"><span>Steering Rack</span> Advance Auto Parts is a retailer.</a>
                      </h6>
                      <div className="content-btm">
                        <div className="price">
                          <h6>$234.00</h6>
                        </div>
                        <a className="primary-btn2" href="#">Add to cart</a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 d-flex align-items-end wow fadeInUp" data-wow-delay="300ms">
            <div className="shop-right-content">
              <p>Advance Auto Parts is a retailer of automotive aftermarket parts, tools,
                and accessories. The company offers a comprehensive range of products,
                including batteries, brakes, engine parts, suspension and steering, and more.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default index