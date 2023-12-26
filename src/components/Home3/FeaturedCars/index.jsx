import React from 'react'
import Link from 'next/link'

function index() {
  return (
    <div className="home3-featured-car-area pt-90 pb-90 mb-100">
      <div className="container">
        <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
          <div className="col-lg-12 d-flex align-items-end justify-content-between gap-3 flex-lg-nowrap flex-wrap">
            <div className="section-title-2">
              <h2>Featured Cars</h2>
              <p>Here are some of the featured cars in different categories</p>
            </div>      
            <div className="tab-and-btn">
              <ul className="nav nav-tabs" id="myTab5" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="used-car-tab" data-bs-toggle="tab" data-bs-target="#used-car" type="button" role="tab" aria-controls="used-car" aria-selected="true">Used Car</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="new-car-tab" data-bs-toggle="tab" data-bs-target="#new-car" type="button" role="tab" aria-controls="new-car" aria-selected="false">New Car</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="auction-car-tab" data-bs-toggle="tab" data-bs-target="#auction-car" type="button" role="tab" aria-controls="auction-car" aria-selected="false">Auction Car</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row wow fadeInUp" data-wow-delay="300ms">
          <div className="col-lg-12">
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="used-car" role="tabpanel" aria-labelledby="used-car-tab">
                <div className="row g-lg-4 gy-5 justify-content-center">
                  <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="200ms">
                    <div className="product-card3">
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
                              <img src="assets/img/home3/home3-feature-img1.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img1.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img1.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img1.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="price-location">
                          <div className="price">
                            <strong>$7,656.00</strong>
                          </div>
                          <div className="location">
                            <a href="#"><i className="bi bi-geo-alt" /> Panama City</a>
                          </div>
                        </div>
                        <h5><Link legacyBehavior href="/car-deatils"><a>Jeep Grand Cherokee-2022</a></Link></h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
                    <div className="product-card3">
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
                              <img src="assets/img/home3/home3-feature-img2.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img2.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img3.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img4.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="price-location">
                          <div className="price">
                            <strong>$7,656.00</strong>
                          </div>
                          <div className="location">
                            <a href="#"><i className="bi bi-geo-alt" /> Panama City</a>
                          </div>
                        </div>
                        <h5><Link legacyBehavior href="/car-deatils"><a>Hyundai Sonata-2022</a></Link></h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="400ms">
                    <div className="product-card3">
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
                              <img src="assets/img/home3/home3-feature-img3.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img3.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img3.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img3.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="price-location">
                          <div className="price">
                            <strong>$7,656.00</strong>
                          </div>
                          <div className="location">
                            <a href="#"><i className="bi bi-geo-alt" /> Panama City</a>
                          </div>
                        </div>
                        <h5><Link legacyBehavior href="/car-deatils"><a>Tesla Model S-2023</a></Link></h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="500ms">
                    <div className="product-card3">
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
                              <img src="assets/img/home3/home3-feature-img4.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img4.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img4.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img4.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="price-location">
                          <div className="price">
                            <strong>$7,656.00</strong>
                          </div>
                          <div className="location">
                            <a href="#"><i className="bi bi-geo-alt" /> Panama City</a>
                          </div>
                        </div>
                        <h5><Link legacyBehavior href="/car-deatils"><a>Nissan Altima S-2023</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="new-car" role="tabpanel" aria-labelledby="new-car-tab">
                <div className="row g-lg-4 gy-5 justify-content-center">
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="product-card3">
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
                              <img src="assets/img/home3/home3-feature-img1.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img1.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img1.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img1.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="price-location">
                          <div className="price">
                            <strong>$7,656.00</strong>
                          </div>
                          <div className="location">
                            <a href="#"><i className="bi bi-geo-alt" /> Panama City</a>
                          </div>
                        </div>
                        <h5><Link legacyBehavior href="/car-deatils"><a>Jeep Grand Cherokee-2022</a></Link></h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="product-card3">
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
                              <img src="assets/img/home3/home3-feature-img2.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img2.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img3.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img4.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="price-location">
                          <div className="price">
                            <strong>$7,656.00</strong>
                          </div>
                          <div className="location">
                            <a href="#"><i className="bi bi-geo-alt" /> Panama City</a>
                          </div>
                        </div>
                        <h5><Link legacyBehavior href="/car-deatils"><a>Hyundai Sonata-2022</a></Link></h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="product-card3">
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
                              <img src="assets/img/home3/home3-feature-img3.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img3.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img3.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img3.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="price-location">
                          <div className="price">
                            <strong>$7,656.00</strong>
                          </div>
                          <div className="location">
                            <a href="#"><i className="bi bi-geo-alt" /> Panama City</a>
                          </div>
                        </div>
                        <h5><Link legacyBehavior href="/car-deatils"><a>Tesla Model S-2023</a></Link></h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="product-card3">
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
                              <img src="assets/img/home3/home3-feature-img4.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img4.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img4.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img4.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="price-location">
                          <div className="price">
                            <strong>$7,656.00</strong>
                          </div>
                          <div className="location">
                            <a href="#"><i className="bi bi-geo-alt" /> Panama City</a>
                          </div>
                        </div>
                        <h5><Link legacyBehavior href="/car-deatils"><a>Nissan Altima S-2023</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="auction-car" role="tabpanel" aria-labelledby="auction-car-tab">
                <div className="row g-lg-4 gy-5 justify-content-center">
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="product-card3">
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
                              <img src="assets/img/home3/home3-feature-img1.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img1.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img1.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img1.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="price-location">
                          <div className="price">
                            <strong>$7,656.00</strong>
                          </div>
                          <div className="location">
                            <a href="#"><i className="bi bi-geo-alt" /> Panama City</a>
                          </div>
                        </div>
                        <h5><Link legacyBehavior href="/car-auction-details"><a>Jeep Grand Cherokee-2022</a></Link></h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="product-card3">
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
                              <img src="assets/img/home3/home3-feature-img2.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img2.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img3.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img4.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="price-location">
                          <div className="price">
                            <strong>$7,656.00</strong>
                          </div>
                          <div className="location">
                            <a href="#"><i className="bi bi-geo-alt" /> Panama City</a>
                          </div>
                        </div>
                        <h5><Link legacyBehavior href="/car-auction-details"><a>Hyundai Sonata-2022</a></Link></h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="product-card3">
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
                              <img src="assets/img/home3/home3-feature-img3.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img3.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img3.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img3.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="price-location">
                          <div className="price">
                            <strong>$7,656.00</strong>
                          </div>
                          <div className="location">
                            <a href="#"><i className="bi bi-geo-alt" /> Panama City</a>
                          </div>
                        </div>
                        <h5><Link legacyBehavior href="/car-auction-details"><a>Tesla Model S-2023</a></Link></h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="product-card3">
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
                              <img src="assets/img/home3/home3-feature-img4.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img4.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img4.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="assets/img/home3/home3-feature-img4.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="price-location">
                          <div className="price">
                            <strong>$7,656.00</strong>
                          </div>
                          <div className="location">
                            <a href="#"><i className="bi bi-geo-alt" /> Panama City</a>
                          </div>
                        </div>
                        <h5><Link legacyBehavior href="/car-deatils"><a>Nissan Altima S-2023</a></Link></h5>
                      </div>
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