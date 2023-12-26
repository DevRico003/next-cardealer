import React, { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import SelectComponent from "@/src/utils/SelectComponent";
import Link from "next/link";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

function index() {
  const [activeIndex, setActiveIndex] = useState(0);
  const price = ["1 - 5 lakh","3 - 7 lakh","5 - 8 lakh","7 - 10 lakh","8 - 15 lakh"]
  const model = ["RS e tron GTzsd","RS e tron GTzsd"]
  const conditions = ["New Car","Old Car"]

    const handleSlideClick = (index) => {
      setActiveIndex(index);
    };
    const selideSettings = useMemo(()=>{
        return{
            slidesPerView: 3,
            speed: 1500,
            spaceBetween: 15,

            loop: false,
            autoplay: false,
            navigation: {
              nextEl: ".next-10",
              prevEl: ".prev-10",
            },
                }
            })
    const swiperSlideItems = [
        {
          iconSrc: 'assets/img/home4/icon/check.svg',
          iconAlt: 'Check Icon',
          categoryIconSrc: 'assets/img/home4/icon/truck.svg',
          categoryIconAlt: 'Truck Icon',
          category: 'Truck',
        },
        {
          iconSrc: 'assets/img/home4/icon/check.svg',
          iconAlt: 'Check Icon',
          categoryIconSrc: "assets/img/home4/icon/suv's.svg",
          categoryIconAlt: 'SUV’s',
          category: 'SUV’s',
        },
        {
            iconSrc: 'assets/img/home4/icon/check.svg',
            iconAlt: 'Check Icon',
            categoryIconSrc: 'assets/img/home4/icon/truck.svg',
            categoryIconAlt: 'Truck Icon',
            category: 'Truck',
          },
          {
            iconSrc: 'assets/img/home4/icon/check.svg',
            iconAlt: 'Check Icon',
            categoryIconSrc: "assets/img/home4/icon/suv's.svg",
            categoryIconAlt: 'SUV’s',
            category: 'SUV’s',
          },
          {
              iconSrc: 'assets/img/home4/icon/check.svg',
              iconAlt: 'Check Icon',
              categoryIconSrc: 'assets/img/home4/icon/truck.svg',
              categoryIconAlt: 'Truck Icon',
              category: 'Truck',
            },
        // Add more items as required
      ];
      
  return (
    <div className="home3-available-car pt-100 mb-100">
      <div className="container">
        <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms" style={{visibility: 'visible', animationDelay: '200ms'}}>
          <div className="col-lg-12">
            <div className="section-title-2 text-center">
              <h2>Available Car in Drivco</h2>
              <p>To get the most accurate and up-to-date information.</p>
            </div>   
          </div>
        </div>
        <div className="row gy-5">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="300ms">
            <div className="sub-title two">
              <h5>1. Brand Category</h5>
            </div>
            <div className="row row-cols-lg-3 row-cols-md-4 row-cols-sm-3 row-cols-2 g-4 justify-content-center">
              <div className="col">
                <Link legacyBehavior href="/single-brand-category">
                  <a  className="car-category text-center">
                    <div className="icon">
                      <img src="assets/img/home2/icon/suzuki.svg" alt="" />
                    </div>
                    <div className="content">
                      <h6>Available Cars</h6>
                      <span>(5463)</span>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="col">
                <Link legacyBehavior href="/single-brand-category">
                  <a className="car-category text-center">
                    <div className="icon">
                      <img src="assets/img/home2/icon/toyota.svg" alt="" />
                    </div>
                    <div className="content">
                      <h6>Available Cars</h6>
                      <span>(5463)</span>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="col">
                <Link legacyBehavior href="/single-brand-category">
                  <a className="car-category text-center">
                  <div className="icon">
                    <img src="assets/img/home2/icon/tesla.svg" alt="" />
                  </div>
                  <div className="content">
                    <h6>Available Cars</h6>
                    <span>(5463)</span>
                  </div>
                  </a>
                </Link>
              </div>
              <div className="col">
                <Link legacyBehavior href="/single-brand-category" className="car-category text-center">
                  <a className="car-category text-center">
                  <div className="icon">
                    <img src="assets/img/home2/icon/mazda.svg" alt="" />
                  </div>
                  <div className="content">
                    <h6>Available Cars</h6>
                    <span>(5463)</span>
                  </div>
                  </a>
                </Link>
              </div>
              <div className="col">
                <Link legacyBehavior href="/single-brand-category">
                  <a className="car-category text-center">
                  <div className="icon">
                    <img src="assets/img/home2/icon/audi.svg" alt="" />
                  </div>
                  <div className="content">
                    <h6>Available Cars</h6>
                    <span>(5463)</span>
                  </div>
                  </a>
                </Link>
              </div>
              <div className="col">
                <Link legacyBehavior href="/single-brand-category">
                  <a className="car-category text-center">
                  <div className="icon">
                    <img src="assets/img/home2/icon/tata.svg" alt="" />
                  </div>
                  <div className="content">
                    <h6>Available Cars</h6>
                    <span>(5463)</span>
                  </div>
                  </a>
                </Link>
              </div>
              <div className="col">
                <Link legacyBehavior href="/single-brand-category">
                  <a className="car-category text-center">
                  <div className="icon">
                    <img src="assets/img/home2/icon/mercedes.svg" alt="" />
                  </div>
                  <div className="content">
                    <h6>Available Cars</h6>
                    <span>(5463)</span>
                  </div>
                  </a>
                </Link>
              </div>
              <div className="col">
                <Link legacyBehavior href="/single-brand-category">
                <a className="car-category text-center">
                  <div className="icon">
                    <img src="assets/img/home2/icon/mitsubidhi.svg" alt="" />
                  </div>
                  <div className="content">
                    <h6>Available Cars</h6>
                    <span>(5463)</span>
                  </div>
                </a>
                </Link>
              </div>
              <div className="col">
                <Link legacyBehavior href="/single-brand-category">
                <a className="car-category text-center">
                  <div className="icon">
                    <img src="assets/img/home2/icon/nissan.svg" alt="" />
                  </div>
                  <div className="content">
                    <h6>Available Cars</h6>
                    <span>(5463)</span>
                  </div>
                </a>
                </Link>
              </div>
            </div>
            <div className="explore-btn">
              <Link legacyBehavior href="/brand-category"><a>Explore All Category <i className="bi bi-arrow-right" /></a></Link>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="400ms">
            <div className="sub-title mb-20">
              <h5>2. Search Area</h5>
            </div>
            <div className="car-filter-area">
              <h4>Find Your Dream Car</h4>
              <form>
                <div className="row">
                  <div className="col-lg-12 mb-15">
                    <div className="form-inner">
                      <div className="d-flex justify-content-between align-items-center">
                        <label>What kinds of car do you want?*</label>
                        <div className="slider-btn d-flex align-items-center gap-3">
                          <div className="prev-10"><i className="bi bi-chevron-left" /></div>
                          <div className="next-10"><i className="bi bi-chevron-right" /></div>
                        </div>
                      </div>
                      <Swiper {...selideSettings} className="swiper categoty-filter-slider">
                        <div className="swiper-wrapper">
                        {swiperSlideItems.map((item, index) => (
                          <SwiperSlide
                            key={index}
                            className={`swiper-slide select-wrap ${activeIndex === index ? 'selected' : ''}`}
                            onClick={() => handleSlideClick(index)}
                          >
                            <div className="single-category">
                              <div className="check-icon">
                                <img src={item.iconSrc} alt={item.iconAlt} />
                              </div>
                              <div className="icon">
                                <img src={item.categoryIconSrc} alt={item.categoryIconAlt} />
                              </div>
                              <h6>{item.category}</h6>
                            </div>
                          </SwiperSlide>
                        ))}
                        </div>
                      </Swiper>
                    </div>
                  </div>
                  <div className="col-md-6 mb-15">
                    <div className="form-inner">
                      <label>Car Conditions*</label>
                      <SelectComponent options={conditions} customClass="s-example-basic-single" placeholder="select Conditions"/>
                    
                    </div>
                  </div>
                  <div className="col-md-6 mb-15">
                    <div className="form-inner">
                      <label>Model*</label>
                      <SelectComponent options={model} customClass="s-example-basic-single" placeholder="select model"/>
                    
                    </div>
                  </div>
                  <div className="col-lg-12 mb-30">
                    <div className="form-inner">
                      <label>Select Budget <span>(Optiona)</span></label>
                      <SelectComponent options={price} customClass="s-example-basic-single" placeholder="Ex: 1 - 5 lakh"/>
                      
                    </div>
                  </div>
                  <div className="col-lg-12 mb-10">
                    <div className="form-inner last">
                      <button className="primary-btn1" type="submit">SEARCH 12463 VEHICLES</button>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="advanced-btn">
                      <button type="button" data-bs-toggle="modal" data-bs-target="#adSearchModal01">
                        Advanced Filter
                        <svg width={13} height={10} viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.48336 0V8.0272L4.16668 7.36221L4.91394 8.09055L2.95489 10L0.99585 8.09055L1.74311 7.36221L2.42642 8.0272V0H3.48336ZM8.23961 7.72638V8.75657H5.59725V7.72638H8.23961ZM9.82502 5.15092V6.18111H5.59725V5.15092H9.82502ZM11.4104 2.57546V3.60565H5.59725V2.57546H11.4104ZM12.9958 0V1.03018H5.59725V0H12.9958Z" />
                        </svg>                 
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default index