import React, { useMemo } from 'react'
import Link from 'next/link';
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

function index() {
    const settings = useMemo(()=>{
        return {
            slidesPerView: "auto",
        speed: 1500,
        spaceBetween: 10,
        loop: true,
        centeredSlides: true,
        roundLengths: true,
        parallax: true,
        effect: 'fade',
        navigation: false,
        fadeEffect: {
            crossFade: true,
        },
		autoplay: {
			delay: 3000, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-7",
			prevEl: ".prev-7",
		},
        }
    },[])
    
  return (
    <div className="home2-compare-area mb-100">
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
                            <td><Link legacyBehavior href="/car-deatils"><a className="primary-btn2" >View Details</a></Link></td>
                            <td><Link legacyBehavior href="/car-deatils"><a className="primary-btn2" >View Details</a></Link></td>
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
      <div className="container-fluid">
        <Swiper {...settings} className="swiper home2-compare-slider">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="row">
                <div className="col-xl-4 d-xl-flex d-none align-items-center wow zoomIn" data-wow-delay="200ms">
                  <div className="car-img left">
                    <img src="assets/img/home2/compire-left.png" alt="" />
                  </div>
                </div>
                <div className="col-xl-4 wow fadeInUp" data-wow-delay="400ms">
                  <div className="compare-content">
                    <div className="section-title-2 text-center">
                      <h2>Comparing Car With Brand</h2>
                      <p>Car servicing is the regular maintenance and inspection of a vehicle to ensure that it is operating safely and efficiently.</p>
                    </div>
                    <div className="compare-wrap">
                      <div className="compare-left">
                        <span>(Mercedes)</span>
                        <h6><Link legacyBehavior href="/car-deatils"><a>Nissan Altima  S-2023</a></Link></h6>
                        <div className="price">
                          <strong>$90, 319.000</strong>
                        </div>
                      </div>
                      <div className="divider" />
                      <div className="compare-right">
                        <span>(BMW)</span>
                        <h6><Link legacyBehavior href="/car-deatils"><a>Chevrolet Silverado</a></Link></h6>
                        <div className="price">
                          <strong>$93, 740.000</strong>
                        </div>
                      </div>
                    </div>
                    <div className="compare-btm">
                      <button type="button" className="primary-btn2" data-bs-toggle="modal" data-bs-target="#compareModal01">Comparing Cars</button>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 d-xl-flex d-none align-items-center justify-content-lg-end wow zoomIn" data-wow-delay="300ms">
                  <div className="car-img right">
                    <img src="assets/img/home2/compire-right.png" alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="row">
                <div className="col-xl-4 d-xl-flex d-none align-items-center wow zoomIn" data-wow-delay="200ms">
                  <div className="car-img left">
                    <img src="assets/img/home1/compare-md-01.png" alt="" />
                  </div>
                </div>
                <div className="col-xl-4 wow fadeInUp" data-wow-delay="400ms">
                  <div className="compare-content">
                    <div className="section-title-2 text-center">
                      <h2>Comparing Car With Brand</h2>
                      <p>Car servicing is the regular maintenance and inspection of a vehicle to ensure that it is operating safely and efficiently.</p>
                    </div>
                    <div className="compare-wrap">
                      <div className="compare-left">
                        <span>(Mercedes)</span>
                        <h6><Link legacyBehavior href="/car-deatils"><a>Nissan Altima  S-2023</a></Link></h6>
                        <div className="price">
                          <strong>$90, 319.000</strong>
                        </div>
                      </div>
                      <div className="divider" />
                      <div className="compare-right">
                        <span>(BMW)</span>
                        <h6><Link legacyBehavior href="/car-deatils"><a>Chevrolet Silverado</a></Link></h6>
                        <div className="price">
                          <strong>$93, 740.000</strong>
                        </div>
                      </div>
                    </div>
                    <div className="compare-btm">
                      <button type="button" className="primary-btn2" data-bs-toggle="modal" data-bs-target="#compareModal01">Comparing Cars</button>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 d-xl-flex d-none align-items-center justify-content-lg-end wow zoomIn" data-wow-delay="300ms">
                  <div className="car-img right">
                    <img src="assets/img/home1/compare-md-02.png" alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
        <div className="row wow fadeInUp" data-wow-delay="300ms">
          <div className="slider-btn-group2">
            <div className="slider-btn prev-7">
              <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
              </svg>
            </div>
            <div className="swiper-scrollbar" />
            <div className="slider-btn next-7">
              <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
              </svg>
            </div>
          </div> 
        </div>
      </div>
    </div>

  )
}

export default index