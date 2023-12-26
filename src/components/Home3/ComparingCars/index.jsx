import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
SwiperCore.use([ Autoplay, EffectFade, Navigation, Pagination]);
function index() {
    const settings = useMemo(()=>{
        return {
            slidesPerView: "auto",
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
  return (
    <div className="home3-compare-section mb-100 pt-90 pb-90">
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
      <div className="container">
        <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
          <div className="col-lg-12 d-flex align-items-end justify-content-between gap-3 flex-wrap">
            <div className="section-title-2">
              <h2>Comparing Cars</h2>
              <p>Here are some of the featured cars in different categories</p>
            </div>      
            <div className="slider-btn-group2">
              <div className="slider-btn prev-3">
                <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                </svg>
              </div>
              <div className="slider-btn  next-3">
                <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                </svg>
              </div>
            </div> 
          </div>
        </div> 
        <div className="row wow fadeInUp" data-wow-delay="300ms">
          <div className="col-lg-12">
            <Swiper {...settings} className="swiper compare-car-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="home3-compare">
                    <div className="compare-img">
                      <div className="single-img">
                        <img src="assets/img/home3/tesla2.png" alt="" />
                      </div>
                      <div className="single-img">
                        <img src="assets/img/home3/bmw2.png" alt="" />
                      </div>
                      <span>VS</span>
                    </div>
                    <div className="compare-content">
                      <div className="content-top">
                        <div className="single-content text-center">
                          <div className="brand">
                            <Link legacyBehavior href="/single-brand-category"><a>(Tesla)</a></Link>
                          </div>
                          <h6><Link legacyBehavior href="/car-deatils"><a>Tesla Model S</a></Link></h6>
                          <div className="price">
                            <h6>$70, 219.000</h6>
                          </div>
                        </div>
                        <div className="single-content text-center">
                          <div className="brand">
                            <Link legacyBehavior href="/single-brand-category"><a>(BMW)</a></Link>
                          </div>
                          <h6><Link legacyBehavior href="/car-deatils"><a>BMW 3 Series </a></Link></h6>
                          <div className="price">
                            <h6>$70, 219.000</h6>
                          </div>
                        </div>
                      </div>
                      <button type="button" className="primary-btn3" data-bs-toggle="modal" data-bs-target="#compareModal01">Compare Car <i className="bi bi-arrow-right" /></button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="home3-compare">
                    <div className="compare-img">
                      <div className="single-img">
                        <img src="assets/img/home3/mazda2.png" alt="" />
                      </div>
                      <div className="single-img">
                        <img src="assets/img/home3/suzuki2.png" alt="" />
                      </div>
                      <span>VS</span>
                    </div>
                    <div className="compare-content">
                      <div className="content-top">
                        <div className="single-content text-center">
                          <div className="brand">
                            <Link legacyBehavior href="/single-brand-category"><a>(Mazda)</a></Link>
                          </div>
                          <h6><Link legacyBehavior href="/car-deatils"><a>Mazda CX-5</a></Link></h6>
                          <div className="price">
                            <h6>$59, 249.000</h6>
                          </div>
                        </div>
                        <div className="single-content text-center">
                          <div className="brand">
                            <Link legacyBehavior href="/single-brand-category"><a>(Suzuki)</a></Link>
                          </div>
                          <h6><Link legacyBehavior href="/car-deatils"><a>Suzuki S10</a></Link></h6>
                          <div className="price">
                            <h6>$73, 219.000</h6>
                          </div>
                        </div>
                      </div>
                      <button type="button" className="primary-btn3" data-bs-toggle="modal" data-bs-target="#compareModal01">Compare Car <i className="bi bi-arrow-right" /></button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="home3-compare">
                    <div className="compare-img">
                      <div className="single-img">
                        <img src="assets/img/home3/hyunday2.png" alt="" />
                      </div>
                      <div className="single-img">
                        <img src="assets/img/home3/jeep2.png" alt="" />
                      </div>
                      <span>VS</span>
                    </div>
                    <div className="compare-content">
                      <div className="content-top">
                        <div className="single-content text-center">
                          <div className="brand">
                            <Link legacyBehavior href="/single-brand-category"><a>(Hyunda)</a></Link>
                          </div>
                          <h6><Link legacyBehavior href="/car-deatils"><a>Hyundai</a></Link></h6>
                          <div className="price">
                            <h6>$37, 219.000</h6>
                          </div>
                        </div>
                        <div className="single-content text-center">
                          <div className="brand">
                            <Link legacyBehavior href="/single-brand-categor"><a>(Jeep)</a></Link>
                          </div>
                          <h6><Link legacyBehavior href="/car-deatils"><a>Jeep Grand</a></Link></h6>
                          <div className="price">
                            <h6>$58, 219.000</h6>
                          </div>
                        </div>
                      </div>
                      <button type="button" className="primary-btn3" data-bs-toggle="modal" data-bs-target="#compareModal01">Compare Car <i className="bi bi-arrow-right" /></button>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>

  )
}

export default index