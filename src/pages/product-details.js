import Link from "next/link";
import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);
import MainLayout from "../layout/MainLayout";

function ProductDetailsPage() {
  const productSlide2 = useMemo(() => {
    return {
      speed: 1500,
      spaceBetween: 24,
      autoplay: {
        delay: 2000, // Autoplay duration in milliseconds
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
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    };
  });
  const productSlide1 = useMemo(() => {
    return {
      speed: 1500,
      spaceBetween: 24,
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
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    };
  });
  return (
    <MainLayout>
      <div className="product-details-page pt-100 mb-100">
        <div className="container">
          <div className="row g-lg-4 gy-5 mb-90">
            <div className="col-lg-6">
              <div
                className="tab-content tab-content1 mb-30"
                id="v-pills-tabContent"
              >
                <div
                  className="tab-pane fade active show"
                  id="v-pills-img1"
                  role="tabpanel"
                  aria-labelledby="v-pills-img1-tab"
                >
                  <img
                    className="img-fluid"
                    src="assets/img/inner-page/shop-big-01.png"
                    alt=""
                  />
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-img2"
                  role="tabpanel"
                  aria-labelledby="v-pills-img2-tab"
                >
                  <img
                    className="img-fluid"
                    src="assets/img/inner-page/shop-big-01.png"
                    alt=""
                  />
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-img3"
                  role="tabpanel"
                  aria-labelledby="v-pills-img3-tab"
                >
                  <img
                    className="img-fluid"
                    src="assets/img/inner-page/shop-big-01.png"
                    alt=""
                  />
                </div>
              </div>
              <div
                className="nav nav1 nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link active"
                  id="v-pills-img1-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-img1"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-img1"
                  aria-selected="true"
                >
                  <img src="assets/img/inner-page/shop-sm-01.png" alt="" />
                </button>
                <button
                  className="nav-link"
                  id="v-pills-img2-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-img2"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-img2"
                  aria-selected="false"
                >
                  <img src="assets/img/inner-page/shop-sm-01.png" alt="" />
                </button>
                <button
                  className="nav-link"
                  id="v-pills-img3-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-img3"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-img3"
                  aria-selected="false"
                >
                  <img src="assets/img/inner-page/shop-sm-01.png" alt="" />
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product-details-content">
                <ul className="product-review2 d-flex flex-row align-items-center mb-25">
                  <li>
                    <i className="bi bi-star-fill" />
                  </li>
                  <li>
                    <i className="bi bi-star-fill" />
                  </li>
                  <li>
                    <i className="bi bi-star-fill" />
                  </li>
                  <li>
                    <i className="bi bi-star-fill" />
                  </li>
                  <li>
                    <i className="bi bi-star-half" />
                  </li>
                  <li>
                    <a href="#" className="review-no">
                      (4.5)
                    </a>
                  </li>
                </ul>
                <h4>
                  Steering system (steering wheel, steering column, power
                  steering pump)
                </h4>
                <p>
                  This is not an exhaustive list, but it covers many of the
                  major components found in a typical car.
                </p>
                <div className="price-tag">
                  <h5>
                    $214.00 <del>$234.00</del>
                  </h5>
                </div>
                <div className="product-quantity d-flex align-items-center justify-content-start">
                  <div className="quantity">
                    <a className="quantity__minus">
                      <span>
                        <i className="bi bi-dash" />
                      </span>
                    </a>
                    <input
                      name="quantity"
                      type="text"
                      className="quantity__input"
                      defaultValue={1}
                    />
                    <a className="quantity__plus">
                      <span>
                        <i className="bi bi-plus" />
                      </span>
                    </a>
                  </div>
                  <Link legacyBehavior href="/cart">
                    <a className="primary-btn3">Add To Cart</a>
                  </Link>
                  <a href="#" className="fav">
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 14 14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z"></path>
                    </svg>
                  </a>
                </div>
                <ul className="aditional-info">
                  <li>
                    <span>SKU:</span> D32-5H23
                  </li>
                  <li>
                    <span>Category:</span>{" "}
                    <Link legacyBehavior href="/shop">
                      <a>Car steering</a>
                    </Link>
                  </li>
                  <li>
                    <span>Tags:</span>{" "}
                    <Link legacyBehavior href="/product-details">
                      <a>Nissan,</a>
                    </Link>{" "}
                    <Link legacyBehavior href="/product-details">
                      <a>Steering,</a>
                    </Link>{" "}
                    <Link legacyBehavior href="/product-details">
                      <a>parts</a>
                    </Link>
                  </li>
                  <li>
                    <span>Share:</span>
                    <ul className="social-icons">
                      <li>
                        <a href="https://www.facebook.com/">
                          <i className="bx bxl-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/">
                          <i className="bx bxl-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/">
                          <i className="bx bxl-instagram-alt" />
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row mb-90">
            <div className="col-lg-12">
              <div
                className="nav nav2 nav  nav-pills"
                id="v-pills-tab2"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link active"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="false"
                >
                  Product Details
                </button>
                <button
                  className="nav-link"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="true"
                >
                  Customer Reviews
                </button>
                <button
                  className="nav-link"
                  id="v-pills-common-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-common"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-common"
                  aria-selected="true"
                >
                  Specification
                </button>
              </div>
              <div
                className="tab-content tab-content2"
                id="v-pills-tabContent2"
              >
                <div
                  className="tab-pane fade active show"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div className="description">
                    <p>
                      The steering system in a vehicle is responsible for
                      allowing the driver to control the direction of the
                      vehicle's movement. It consists of several components,
                      including the steering wheel, steering column, and power
                      steering pump. It's worth noting that there are different
                      types of steering systems used in vehicles, including
                      rack-and-pinion and recirculating ball steering systems.
                      While the basic principles remain the same, the specific
                      design and components may vary between different vehicle
                      models and manufacturers.
                    </p>
                    <ul>
                      <li>
                        <strong>Steering Wheel:</strong> The steering wheel is
                        the part of the steering system that the driver directly
                        interacts with. It is typically a circular device that
                        the driver uses to turn the front wheels of the vehicle.
                        The steering wheel is connected to the steering column.
                      </li>
                      <li>
                        <strong>Steering Column:</strong> The steering column is
                        a shaft-like structure that connects the steering wheel
                        to the steering gear or rack. It serves as a pathway for
                        transferring the driver's input from the steering wheel
                        to the steering gear.
                      </li>
                      <li>
                        <strong>Power Steering Pump:</strong> In modern
                        vehicles, many steering systems are equipped with power
                        steering, which assists the driver in turning the wheels
                        with less effort. The power steering pump is a hydraulic
                        pump
                      </li>
                    </ul>
                    <p>
                      When the driver turns the steering wheel, the movement is
                      transmitted through the steering column to the steering
                      gear or rack. The steering gear or rack converts the
                      rotational motion of the steering wheel into linear
                      motion, which ultimately controls the movement of the
                      vehicle's front wheels. If power steering is present, the
                      power steering pump helps apply hydraulic pressure to
                      assist in turning the wheels.
                    </p>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <div className="reviews-area">
                    <div className="row g-lg-4 gy-5">
                      <div className="col-lg-7">
                        <div className="number-of-review">
                          <h4>Review (03) :</h4>
                        </div>
                        <div className="review-list-area">
                          <ul className="comment">
                            <li>
                              <div className="single-comment-area">
                                <div className="author-img">
                                  <img
                                    src="assets/img/inner-page/comment-author-01.png"
                                    alt=""
                                  />
                                </div>
                                <div className="comment-content">
                                  <div className="author-and-review">
                                    <div className="author-name-deg">
                                      <h6>Mr. Bowmik Haldar,</h6>
                                      <span>05 June, 2023</span>
                                    </div>
                                    <ul className="review d-flex flex-row align-items-center">
                                      <li>
                                        <i className="bi bi-star-fill" />
                                      </li>
                                      <li>
                                        <i className="bi bi-star-fill" />
                                      </li>
                                      <li>
                                        <i className="bi bi-star-fill" />
                                      </li>
                                      <li>
                                        <i className="bi bi-star-fill" />
                                      </li>
                                      <li>
                                        <i className="bi bi-star-fill" />
                                      </li>
                                    </ul>
                                  </div>
                                  <p>
                                    However, here are some well-regarded car
                                    dealerships known for their customer
                                    service, inventory, and overall reputation.
                                    It's always a good idea to research and read
                                    reviews specific...
                                  </p>
                                  <div className="replay-btn">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={14}
                                      height={11}
                                      viewBox="0 0 14 11"
                                    >
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
                                      <img
                                        src="assets/img/inner-page/comment-author-02.png"
                                        alt=""
                                      />
                                    </div>
                                    <div className="comment-content">
                                      <div className="author-name-deg">
                                        <h6>Jacoline Juie,</h6>
                                        <span>05 June, 2023</span>
                                      </div>
                                      <p>
                                        "What factors should I consider when
                                        choosing a car dealership for purchasing
                                        a vehicle"
                                      </p>
                                      <div className="replay-btn">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={14}
                                          height={11}
                                          viewBox="0 0 14 11"
                                        >
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
                                      <img
                                        src="assets/img/inner-page/comment-author-03.png"
                                        alt=""
                                      />
                                    </div>
                                    <div className="comment-content">
                                      <div className="author-name-deg">
                                        <h6>Robert Smith,</h6>
                                        <span>05 June, 2023</span>
                                      </div>
                                      <p>
                                        "What factors should I consider when
                                        choosing a car dealership for purchasing
                                        a vehicle"
                                      </p>
                                      <div className="replay-btn">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={14}
                                          height={11}
                                          viewBox="0 0 14 11"
                                        >
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
                                  <img
                                    src="assets/img/inner-page/comment-author-04.png"
                                    alt=""
                                  />
                                </div>
                                <div className="comment-content">
                                  <div className="author-and-review">
                                    <div className="author-name-deg">
                                      <h6>Srileka Panday,</h6>
                                      <span>05 June, 2023</span>
                                    </div>
                                    <ul className="review d-flex flex-row align-items-center">
                                      <li>
                                        <i className="bi bi-star-fill" />
                                      </li>
                                      <li>
                                        <i className="bi bi-star-fill" />
                                      </li>
                                      <li>
                                        <i className="bi bi-star-fill" />
                                      </li>
                                      <li>
                                        <i className="bi bi-star-fill" />
                                      </li>
                                      <li>
                                        <i className="bi bi-star" />
                                      </li>
                                    </ul>
                                  </div>
                                  <p>
                                    However, here are some well-regarded car
                                    dealerships known for their customer
                                    service, inventory, and overall reputation.
                                    It's always a good idea to research and read
                                    reviews specific...
                                  </p>
                                  <div className="replay-btn">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={14}
                                      height={11}
                                      viewBox="0 0 14 11"
                                    >
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
                                  <img
                                    src="assets/img/inner-page/comment-author-05.png"
                                    alt=""
                                  />
                                </div>
                                <div className="comment-content">
                                  <div className="author-and-review">
                                    <div className="author-name-deg">
                                      <h6>Mr. Bowmik Haldar,</h6>
                                      <span>05 June, 2023</span>
                                    </div>
                                    <ul className="review d-flex flex-row align-items-center">
                                      <li>
                                        <i className="bi bi-star-fill" />
                                      </li>
                                      <li>
                                        <i className="bi bi-star-fill" />
                                      </li>
                                      <li>
                                        <i className="bi bi-star-fill" />
                                      </li>
                                      <li>
                                        <i className="bi bi-star-fill" />
                                      </li>
                                      <li>
                                        <i className="bi bi-star-half" />
                                      </li>
                                    </ul>
                                  </div>
                                  <p>
                                    However, here are some well-regarded car
                                    dealerships known for their customer
                                    service, inventory, and overall reputation.
                                    It's always a good idea to research and read
                                    reviews specific...
                                  </p>
                                  <div className="replay-btn">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={14}
                                      height={11}
                                      viewBox="0 0 14 11"
                                    >
                                      <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                                    </svg>
                                    Reply (02)
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="review-form">
                          <div className="number-of-review">
                            <h4>Write A Review</h4>
                          </div>
                          <form>
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-inner2 mb-40">
                                  <div className="review-rate-area">
                                    <p>Your Rating</p>
                                    <div className="rate">
                                      <input
                                        type="radio"
                                        id="star5"
                                        name="rate"
                                        defaultValue={5}
                                      />
                                      <label htmlFor="star5" title="text">
                                        5 stars
                                      </label>
                                      <input
                                        type="radio"
                                        id="star4"
                                        name="rate"
                                        defaultValue={4}
                                      />
                                      <label htmlFor="star4" title="text">
                                        4 stars
                                      </label>
                                      <input
                                        type="radio"
                                        id="star3"
                                        name="rate"
                                        defaultValue={3}
                                      />
                                      <label htmlFor="star3" title="text">
                                        3 stars
                                      </label>
                                      <input
                                        type="radio"
                                        id="star2"
                                        name="rate"
                                        defaultValue={2}
                                      />
                                      <label htmlFor="star2" title="text">
                                        2 stars
                                      </label>
                                      <input
                                        type="radio"
                                        id="star1"
                                        name="rate"
                                        defaultValue={1}
                                      />
                                      <label htmlFor="star1" title="text">
                                        1 star
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-inner mb-20">
                                  <input
                                    type="text"
                                    placeholder="Name*"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-inner mb-20">
                                  <input
                                    type="email"
                                    placeholder="Email*"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-inner mb-10">
                                  <textarea
                                    placeholder="Message..."
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-inner two">
                                  <button
                                    className="primary-btn3 btn-lg"
                                    type="submit"
                                  >
                                    Submit
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
                <div
                  className="tab-pane fade"
                  id="v-pills-common"
                  role="tabpanel"
                  aria-labelledby="v-pills-common-tab"
                >
                  <div className="addithonal-information">
                    <table className="table total-table2">
                      <tbody>
                        <tr>
                          <td>Brand</td>
                          <td>Pyhodi</td>
                        </tr>
                        <tr>
                          <td>Model Name</td>
                          <td>Pyhodi9acsriobv1</td>
                        </tr>
                        <tr>
                          <td>Compatible Devices</td>
                          <td>Playstation 3, PC, Xbox One, Android</td>
                        </tr>
                        <tr>
                          <td>Controller Type</td>
                          <td>Steering Wheel</td>
                        </tr>
                        <tr>
                          <td>Connectivity Technology</td>
                          <td>USB</td>
                        </tr>
                        <tr>
                          <td>Package Dimensions</td>
                          <td>4.17 x 11.42 x 11.42 inches</td>
                        </tr>
                        <tr>
                          <td>Manufacturer recommended age</td>
                          <td>12 months and up</td>
                        </tr>
                        <tr>
                          <td>Manufacturer</td>
                          <td>Pyhodi</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-90">
            <div className="col-lg-12">
              <div className="section-title">
                <h4>Related Car Parts</h4>
              </div>
            </div>
            <div className="col-lg-12 mb-40">
              <Swiper
                {...productSlide1}
                className="swiper product-details-slider"
              >
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="shop-card2">
                      <div className="shop-img">
                        <img
                          src="assets/img/inner-page/Product-01.png"
                          alt=""
                        />
                        <div className="offer-batch">
                          <span>-20%</span>
                        </div>
                        <a href="#" className="fav">
                          <svg
                            width={12}
                            height={11}
                            viewBox="0 0 14 14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="content">
                        <div className="cart-btn">
                          <a className="primary-btn2" href="#">
                            Add to cart
                          </a>
                        </div>
                        <div className="star">
                          <ul>
                            <li className="active">
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-half" />
                            </li>
                          </ul>
                          <span>(4.5)</span>
                        </div>
                        <h6>
                          <Link legacyBehavior href="/product-details">
                            <a>
                              Steering Rack Advance Auto Parts is a retailer.
                            </a>
                          </Link>
                        </h6>
                        <div className="content-btm">
                          <div className="price">
                            <h6>
                              $214.00 <del>$234.00</del>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="shop-card2">
                      <div className="shop-img">
                        <img
                          src="assets/img/inner-page/Product-02.png"
                          alt=""
                        />
                        <div className="offer-batch">
                          <span>-20%</span>
                        </div>
                        <a href="#" className="fav">
                          <svg
                            width={12}
                            height={11}
                            viewBox="0 0 14 14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="content">
                        <div className="cart-btn">
                          <a className="primary-btn2" href="#">
                            Add to cart
                          </a>
                        </div>
                        <div className="star">
                          <ul>
                            <li className="active">
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-half" />
                            </li>
                          </ul>
                          <span>(4.5)</span>
                        </div>
                        <h6>
                          <Link legacyBehavior href="/product-details">
                            <a>Jekit 355*32mm assembled brake disks.</a>
                          </Link>
                        </h6>
                        <div className="content-btm">
                          <div className="price">
                            <h6>
                              $214.00 <del>$234.00</del>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="shop-card2">
                      <div className="shop-img">
                        <img
                          src="assets/img/inner-page/Product-03.png"
                          alt=""
                        />
                        <div className="offer-batch">
                          <span>-20%</span>
                        </div>
                        <a href="#" className="fav">
                          <svg
                            width={12}
                            height={11}
                            viewBox="0 0 14 14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="content">
                        <div className="cart-btn">
                          <a className="primary-btn2" href="#">
                            Add to cart
                          </a>
                        </div>
                        <div className="star">
                          <ul>
                            <li className="active">
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-half" />
                            </li>
                          </ul>
                          <span>(4.5)</span>
                        </div>
                        <h6>
                          <Link legacyBehavior href="/product-details">
                            <a>Pump Water Audi Seat Skoda Vw Skf Vkpc 81620.</a>
                          </Link>
                        </h6>
                        <div className="content-btm">
                          <div className="price">
                            <h6>
                              $214.00 <del>$234.00</del>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="shop-card2">
                      <div className="shop-img">
                        <img
                          src="assets/img/inner-page/Product-05.png"
                          alt=""
                        />
                        <div className="offer-batch">
                          <span>-20%</span>
                        </div>
                        <a href="#" className="fav">
                          <svg
                            width={12}
                            height={11}
                            viewBox="0 0 14 14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="content">
                        <div className="cart-btn">
                          <a className="primary-btn2" href="#">
                            Add to cart
                          </a>
                        </div>
                        <div className="star">
                          <ul>
                            <li className="active">
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-half" />
                            </li>
                          </ul>
                          <span>(4.5)</span>
                        </div>
                        <h6>
                          <Link legacyBehavior href="/product-details">
                            <a>Tech master New Brand Carbon ceramic brakes. </a>
                          </Link>
                        </h6>
                        <div className="content-btm">
                          <div className="price">
                            <h6>
                              $214.00 <del>$234.00</del>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="shop-card2">
                      <div className="shop-img">
                        <img
                          src="assets/img/inner-page/Product-06.png"
                          alt=""
                        />
                        <div className="offer-batch">
                          <span>-20%</span>
                        </div>
                        <a href="#" className="fav">
                          <svg
                            width={12}
                            height={11}
                            viewBox="0 0 14 14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="content">
                        <div className="cart-btn">
                          <a className="primary-btn2" href="#">
                            Add to cart
                          </a>
                        </div>
                        <div className="star">
                          <ul>
                            <li className="active">
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-half" />
                            </li>
                          </ul>
                          <span>(4.5)</span>
                        </div>
                        <h6>
                          <Link legacyBehavior href="/product-details">
                            <a>
                              WJB WA512187 - Rear Wheel Hub Bearing Assembly.
                            </a>
                          </Link>
                        </h6>
                        <div className="content-btm">
                          <div className="price">
                            <h6>
                              $214.00 <del>$234.00</del>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="shop-card2">
                      <div className="shop-img">
                        <img
                          src="assets/img/inner-page/Product-02.png"
                          alt=""
                        />
                        <div className="offer-batch">
                          <span>-20%</span>
                        </div>
                        <a href="#" className="fav">
                          <svg
                            width={12}
                            height={11}
                            viewBox="0 0 14 14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="content">
                        <div className="cart-btn">
                          <a className="primary-btn2" href="#">
                            Add to cart
                          </a>
                        </div>
                        <div className="star">
                          <ul>
                            <li className="active">
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-half" />
                            </li>
                          </ul>
                          <span>(4.5)</span>
                        </div>
                        <h6>
                          <Link legacyBehavior href="/product-details">
                            <a>Jekit 355*32mm assembled brake disks.</a>
                          </Link>
                        </h6>
                        <div className="content-btm">
                          <div className="price">
                            <h6>
                              $214.00 <del>$234.00</del>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="shop-card2">
                      <div className="shop-img">
                        <img
                          src="assets/img/inner-page/Product-03.png"
                          alt=""
                        />
                        <div className="offer-batch">
                          <span>-20%</span>
                        </div>
                        <a href="#" className="fav">
                          <svg
                            width={12}
                            height={11}
                            viewBox="0 0 14 14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="content">
                        <div className="cart-btn">
                          <a className="primary-btn2" href="#">
                            Add to cart
                          </a>
                        </div>
                        <div className="star">
                          <ul>
                            <li className="active">
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-half" />
                            </li>
                          </ul>
                          <span>(4.5)</span>
                        </div>
                        <h6>
                          <Link legacyBehavior href="/product-details">
                            <a>Pump Water Audi Seat Skoda Vw Skf Vkpc 81620.</a>
                          </Link>
                        </h6>
                        <div className="content-btm">
                          <div className="price">
                            <h6>
                              $214.00 <del>$234.00</del>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="shop-card2">
                      <div className="shop-img">
                        <img
                          src="assets/img/inner-page/Product-05.png"
                          alt=""
                        />
                        <div className="offer-batch">
                          <span>-20%</span>
                        </div>
                        <a href="#" className="fav">
                          <svg
                            width={12}
                            height={11}
                            viewBox="0 0 14 14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="content">
                        <div className="cart-btn">
                          <a className="primary-btn2" href="#">
                            Add to cart
                          </a>
                        </div>
                        <div className="star">
                          <ul>
                            <li className="active">
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-half" />
                            </li>
                          </ul>
                          <span>(4.5)</span>
                        </div>
                        <h6>
                          <Link legacyBehavior href="/product-details">
                            <a>Tech master New Brand Carbon ceramic brakes. </a>
                          </Link>
                        </h6>
                        <div className="content-btm">
                          <div className="price">
                            <h6>
                              $214.00 <del>$234.00</del>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <dSwiperSlideiv className="swiper-slide">
                    <div className="shop-card2">
                      <div className="shop-img">
                        <img
                          src="assets/img/inner-page/Product-06.png"
                          alt=""
                        />
                        <div className="offer-batch">
                          <span>-20%</span>
                        </div>
                        <a href="#" className="fav">
                          <svg
                            width={12}
                            height={11}
                            viewBox="0 0 14 14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="content">
                        <div className="cart-btn">
                          <a className="primary-btn2" href="#">
                            Add to cart
                          </a>
                        </div>
                        <div className="star">
                          <ul>
                            <li className="active">
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-half" />
                            </li>
                          </ul>
                          <span>(4.5)</span>
                        </div>
                        <h6>
                          <Link legacyBehavior href="/product-details">
                            <a>
                              WJB WA512187 - Rear Wheel Hub Bearing Assembly.
                            </a>
                          </Link>
                        </h6>
                        <div className="content-btm">
                          <div className="price">
                            <h6>
                              $214.00 <del>$234.00</del>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </dSwiperSlideiv>
                </div>
              </Swiper>
            </div>
            <div className="col-lg-12 divider">
              <div className="slider-btn-group style-2 justify-content-md-between justify-content-center">
                <div className="slider-btn prev-2 d-md-flex d-none">
                  <svg
                    width={11}
                    height={19}
                    viewBox="0 0 8 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                  </svg>
                </div>
                <div className="view-btn-area">
                  <p>There are More Car Parts Available</p>
                  <Link legacyBehavior href="/shop">
                    <a className="view-btn">View More</a>
                  </Link>
                </div>
                <div className="slider-btn next-2 d-md-flex d-none">
                  <svg
                    width={11}
                    height={19}
                    viewBox="0 0 8 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h4>Recently Viewed Car Parts</h4>
              </div>
            </div>
            <div className="col-lg-12 mb-40">
              <Swiper
                {...productSlide2}
                className="swiper product-details-slider2"
              >
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="shop-card2">
                      <div className="shop-img">
                        <img
                          src="assets/img/inner-page/Product-01.png"
                          alt=""
                        />
                        <div className="offer-batch">
                          <span>-20%</span>
                        </div>
                        <a href="#" className="fav">
                          <svg
                            width={12}
                            height={11}
                            viewBox="0 0 14 14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="content">
                        <div className="cart-btn">
                          <a className="primary-btn2" href="#">
                            Add to cart
                          </a>
                        </div>
                        <div className="star">
                          <ul>
                            <li className="active">
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-half" />
                            </li>
                          </ul>
                          <span>(4.5)</span>
                        </div>
                        <h6>
                          <Link legacyBehavior href="/product-details">
                            <a>
                              Steering Rack Advance Auto Parts is a retailer.
                            </a>
                          </Link>
                        </h6>
                        <div className="content-btm">
                          <div className="price">
                            <h6>
                              $214.00 <del>$234.00</del>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="shop-card2">
                      <div className="shop-img">
                        <img
                          src="assets/img/inner-page/Product-02.png"
                          alt=""
                        />
                        <div className="offer-batch">
                          <span>-20%</span>
                        </div>
                        <a href="#" className="fav">
                          <svg
                            width={12}
                            height={11}
                            viewBox="0 0 14 14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="content">
                        <div className="cart-btn">
                          <a className="primary-btn2" href="#">
                            Add to cart
                          </a>
                        </div>
                        <div className="star">
                          <ul>
                            <li className="active">
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-half" />
                            </li>
                          </ul>
                          <span>(4.5)</span>
                        </div>
                        <h6>
                          <Link legacyBehavior href="/product-details">
                            <a>Jekit 355*32mm assembled brake disks.</a>
                          </Link>
                        </h6>
                        <div className="content-btm">
                          <div className="price">
                            <h6>
                              $214.00 <del>$234.00</del>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="shop-card2">
                      <div className="shop-img">
                        <img
                          src="assets/img/inner-page/Product-03.png"
                          alt=""
                        />
                        <div className="offer-batch">
                          <span>-20%</span>
                        </div>
                        <a href="#" className="fav">
                          <svg
                            width={12}
                            height={11}
                            viewBox="0 0 14 14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="content">
                        <div className="cart-btn">
                          <a className="primary-btn2" href="#">
                            Add to cart
                          </a>
                        </div>
                        <div className="star">
                          <ul>
                            <li className="active">
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-half" />
                            </li>
                          </ul>
                          <span>(4.5)</span>
                        </div>
                        <h6>
                          <Link legacyBehavior href="/product-details">
                            <a>Pump Water Audi Seat Skoda Vw Skf Vkpc 81620.</a>
                          </Link>
                        </h6>
                        <div className="content-btm">
                          <div className="price">
                            <h6>
                              $214.00 <del>$234.00</del>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="shop-card2">
                      <div className="shop-img">
                        <img
                          src="assets/img/inner-page/Product-05.png"
                          alt=""
                        />
                        <div className="offer-batch">
                          <span>-20%</span>
                        </div>
                        <a href="#" className="fav">
                          <svg
                            width={12}
                            height={11}
                            viewBox="0 0 14 14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="content">
                        <div className="cart-btn">
                          <a className="primary-btn2" href="#">
                            Add to cart
                          </a>
                        </div>
                        <div className="star">
                          <ul>
                            <li className="active">
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-half" />
                            </li>
                          </ul>
                          <span>(4.5)</span>
                        </div>
                        <h6>
                          <Link legacyBehavior href="/product-details">
                            <a>Tech master New Brand Carbon ceramic brakes. </a>
                          </Link>
                        </h6>
                        <div className="content-btm">
                          <div className="price">
                            <h6>
                              $214.00 <del>$234.00</del>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="shop-card2">
                      <div className="shop-img">
                        <img
                          src="assets/img/inner-page/Product-06.png"
                          alt=""
                        />
                        <div className="offer-batch">
                          <span>-20%</span>
                        </div>
                        <a href="#" className="fav">
                          <svg
                            width={12}
                            height={11}
                            viewBox="0 0 14 14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="content">
                        <div className="cart-btn">
                          <a className="primary-btn2" href="#">
                            Add to cart
                          </a>
                        </div>
                        <div className="star">
                          <ul>
                            <li className="active">
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-half" />
                            </li>
                          </ul>
                          <span>(4.5)</span>
                        </div>
                        <h6>
                          <Link legacyBehavior href="/product-details">
                            <a>
                              WJB WA512187 - Rear Wheel Hub Bearing Assembly.
                            </a>
                          </Link>
                        </h6>
                        <div className="content-btm">
                          <div className="price">
                            <h6>
                              $214.00 <del>$234.00</del>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="shop-card2">
                      <div className="shop-img">
                        <img
                          src="assets/img/inner-page/Product-02.png"
                          alt=""
                        />
                        <div className="offer-batch">
                          <span>-20%</span>
                        </div>
                        <a href="#" className="fav">
                          <svg
                            width={12}
                            height={11}
                            viewBox="0 0 14 14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="content">
                        <div className="cart-btn">
                          <a className="primary-btn2" href="#">
                            Add to cart
                          </a>
                        </div>
                        <div className="star">
                          <ul>
                            <li className="active">
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-half" />
                            </li>
                          </ul>
                          <span>(4.5)</span>
                        </div>
                        <h6>
                          <Link legacyBehavior href="/product-details">
                            <a>Jekit 355*32mm assembled brake disks.</a>
                          </Link>
                        </h6>
                        <div className="content-btm">
                          <div className="price">
                            <h6>
                              $214.00 <del>$234.00</del>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="shop-card2">
                      <div className="shop-img">
                        <img
                          src="assets/img/inner-page/Product-03.png"
                          alt=""
                        />
                        <div className="offer-batch">
                          <span>-20%</span>
                        </div>
                        <a href="#" className="fav">
                          <svg
                            width={12}
                            height={11}
                            viewBox="0 0 14 14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="content">
                        <div className="cart-btn">
                          <a className="primary-btn2" href="#">
                            Add to cart
                          </a>
                        </div>
                        <div className="star">
                          <ul>
                            <li className="active">
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-half" />
                            </li>
                          </ul>
                          <span>(4.5)</span>
                        </div>
                        <h6>
                          <Link legacyBehavior href="/product-details">
                            <a>Pump Water Audi Seat Skoda Vw Skf Vkpc 81620.</a>
                          </Link>
                        </h6>
                        <div className="content-btm">
                          <div className="price">
                            <h6>
                              $214.00 <del>$234.00</del>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="shop-card2">
                      <div className="shop-img">
                        <img
                          src="assets/img/inner-page/Product-05.png"
                          alt=""
                        />
                        <div className="offer-batch">
                          <span>-20%</span>
                        </div>
                        <a href="#" className="fav">
                          <svg
                            width={12}
                            height={11}
                            viewBox="0 0 14 14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="content">
                        <div className="cart-btn">
                          <a className="primary-btn2" href="#">
                            Add to cart
                          </a>
                        </div>
                        <div className="star">
                          <ul>
                            <li className="active">
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-half" />
                            </li>
                          </ul>
                          <span>(4.5)</span>
                        </div>
                        <h6>
                          <Link legacyBehavior href="/product-details">
                            <a>Tech master New Brand Carbon ceramic brakes. </a>
                          </Link>
                        </h6>
                        <div className="content-btm">
                          <div className="price">
                            <h6>
                              $214.00 <del>$234.00</del>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="shop-card2">
                      <div className="shop-img">
                        <img
                          src="assets/img/inner-page/Product-06.png"
                          alt=""
                        />
                        <div className="offer-batch">
                          <span>-20%</span>
                        </div>
                        <a href="#" className="fav">
                          <svg
                            width={12}
                            height={11}
                            viewBox="0 0 14 14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="content">
                        <div className="cart-btn">
                          <a className="primary-btn2" href="#">
                            Add to cart
                          </a>
                        </div>
                        <div className="star">
                          <ul>
                            <li className="active">
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-half" />
                            </li>
                          </ul>
                          <span>(4.5)</span>
                        </div>
                        <h6>
                          <Link legacyBehavior href="/product-details">
                            <a>
                              WJB WA512187 - Rear Wheel Hub Bearing Assembly.
                            </a>
                          </Link>
                        </h6>
                        <div className="content-btm">
                          <div className="price">
                            <h6>
                              $214.00 <del>$234.00</del>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
            <div className="col-lg-12 divider">
              <div className="slider-btn-group style-2 justify-content-md-between justify-content-center">
                <div className="slider-btn prev-2 d-md-flex d-none">
                  <svg
                    width={11}
                    height={19}
                    viewBox="0 0 8 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                  </svg>
                </div>
                <div className="view-btn-area">
                  <p>There are More Car Parts Available</p>
                  <Link legacyBehavior href="/shop">
                    <a className="view-btn">View More</a>
                  </Link>
                </div>
                <div className="slider-btn next-2 d-md-flex d-none">
                  <svg
                    width={11}
                    height={19}
                    viewBox="0 0 8 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default ProductDetailsPage;
