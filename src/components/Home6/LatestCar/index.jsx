import React, { useEffect, useMemo, useRef } from "react";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Pagination, Autoplay, Navigation]);
import { latestCar } from "../../../data/data";
import Link from "next/link";

const index = () => {
  const slideSetting = useMemo(() => {
    return {
      slidesPerView: 1,
      speed: 1500,
      grabCursor: true,
   
     
      spaceBetween: 10,
      loop: true,
      autoplay: false,
    };
  });
  // Group cars by category
  const carsByCategory = latestCar.reduce((acc, car) => {
    const categorySlug = car.category.slug;
    if (!acc[categorySlug]) {
      acc[categorySlug] = [];
    }
    acc[categorySlug].push(car);
    return acc;
  }, {});

  const categorySlugs = Object.keys(carsByCategory);

  // Function to generate a unique ID and class for each Swiper instance
  const generateSwiperId = (categorySlug, carIndex) => {
    const swiperId = `swiper-${categorySlug}-${carIndex}`;
    return { swiperId, navClass: `product-nav-${categorySlug}-${carIndex}` };
  };

  // Refs to store Swiper instances
  const swiperRefs = useRef([]);

  useEffect(() => {
    // Initialize Swiper instances when component mounts
    swiperRefs.current.forEach((swiper, index) => {
      const { swiperId, navClass } = generateSwiperId(
        categorySlugs[index],
        index
      );
      const nextEl = document.querySelector(`.${navClass} .product-stand-next`);
      const prevEl = document.querySelector(`.${navClass} .product-stand-prev`);

      swiper.navigation.init();
      swiper.navigation.update();
      swiper.params.navigation.nextEl = nextEl;
      swiper.params.navigation.prevEl = prevEl;
    });
  }, []);

  return (
    <div className="home6-letest-car-section mb-100">
      <div className="container">
        <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
          <div className="col-lg-12">
            <div className="section-title-2">
              <h2>Letest Car</h2>
              <p>To get the most accurate and up-to-date information.</p>
            </div>
          </div>
        </div>
        <div className="row mb-40 wow fadeInUp" data-wow-delay="300ms">
          <div className="col-lg-12">
            <div className="home6-filter-area d-flex align-items-center justify-content-between">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                {categorySlugs.map((categorySlug, index) => {
                  console.log(index);
                  return   <li
                  className="nav-item"
                  role="presentation"
                  key={categorySlug}
                >
                  <button
                    className={`nav-link ${index === 0 ? "active" : ""}`}
                    id={`${categorySlug}-tab`}
                    data-bs-toggle="tab"
                    data-bs-target={`#${categorySlug}`}
                    type="button"
                    role="tab"
                    aria-controls={categorySlug}
                    aria-selected={index === 0}
                  >
                    {carsByCategory[categorySlug][0].category.name}
                  </button>
                </li>
                } )}
              </ul>
              <div className="explore-btn">
                <Link legacyBehavior  href="/car-listing-left-sidebar">
                  <a className="explore-btn2 two">
                  Explore More <i className="bi bi-arrow-right-short"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="tab-content" id="myTabContent">
              {categorySlugs.map((categorySlug, index) => (
                <div
                  className={`tab-pane fade ${
                    index === 0 ? "show active" : ""
                  }`}
                  id={categorySlug}
                  role="tabpanel"
                  aria-labelledby={`${categorySlug}-tab`}
                  key={categorySlug}
                >
                  <div className="row g-4">
                    {carsByCategory[categorySlug].map((car, carIndex) => {
                      const { swiperId, navClass } = generateSwiperId(
                        categorySlug,
                        carIndex
                      );
                      return (
                        <div
                          className="col-lg-4 col-md-6  wow fadeInUp"
                          data-wow-delay="200ms"
                          key={car.id}
                        >
                          <div className="product-card4 style-3">
                            <div className="product-img">
                              <a href="#" className="fav">
                                <svg
                                  width={14}
                                  height={13}
                                  viewBox="0 0 14 14"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z"></path>
                                </svg>
                              </a>
                              <div className={`slider-btn-group ${navClass}`}>
                                <div className="product-stand-next swiper-arrow">
                                  <svg
                                    width={8}
                                    height={13}
                                    viewBox="0 0 8 13"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                                  </svg>
                                </div>
                                <div className="product-stand-prev swiper-arrow">
                                  <svg
                                    width={8}
                                    height={13}
                                    viewBox="0 0 8 13"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                                  </svg>
                                </div>
                              </div>
                              <Swiper
                                {...slideSetting}
                                className={`swiper product-img-slider ${swiperId}`}
                                navigation={{
                                  nextEl: `.${navClass} .product-stand-next`,
                                  prevEl: `.${navClass} .product-stand-prev`,
                                }}
                                onSwiper={(swiper) =>
                                  (swiperRefs.current[carIndex] = swiper)
                                }
                              >
                                {car.images.map((imageUrl, imageIndex) => (
                                  <SwiperSlide
                                    className="swiper-slide"
                                    key={`${car.id}-img-${imageIndex}`}
                                  >
                                    <img
                                      src={imageUrl}
                                      alt={`Car ${car.id} - Image ${
                                        imageIndex + 1
                                      }`}
                                    />
                                  </SwiperSlide>
                                ))}
                              </Swiper>
                            </div>
                            <div className="product-content">
                              <div className="location">
                                <a href="#">
                                  <i className="bi bi-geo-alt" /> {car.location}
                                </a>
                              </div>
                              <h6>
                                <Link legacyBehavior href="car-deatils"><a>{car.carModel}</a></Link>
                              </h6>
                              <ul className="features">
                                <li>
                                  <img
                                    src="assets/img/home4/icon/miles.svg"
                                    alt=""
                                  />
                                  {car.mileage}
                                </li>
                                <li>
                                  <img
                                    src="assets/img/home4/icon/fuel.svg"
                                    alt=""
                                  />
                                  {car.fuelTypes.join(" + ")}
                                </li>
                                {car.isElectric && (
                                  <li>
                                    <img
                                      src="assets/img/home4/icon/electric.svg"
                                      alt=""
                                    />
                                    Electric
                                  </li>
                                )}
                              </ul>
                              <div className="button-and-price">
                                <Link legacyBehavior href="/car-deatils">
                                  <a className="primary-btn7">
                                  View Details
                                  </a>
                                </Link>
                                <div className="price-area">
                                  <span>{car.priceCategory}</span>
                                  <h6>${car.price}</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
