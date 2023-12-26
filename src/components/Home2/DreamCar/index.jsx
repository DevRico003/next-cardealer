import React from 'react'
import Link from 'next/link'

function index() {
  return (
    <div className="dream-car-area pt-100 pb-100">
      <div className="container">
        <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
          <div className="col-lg-12">
            <div className="section-title-2 text-center">
              <h2>Search Your Dream Car</h2>
              <p>There has 30+ Brand Category Available </p>
            </div>
          </div>
        </div>
        <div className="row wow fadeInUp" data-wow-delay="300ms">
          <div className="col-lg-12">
            <div className="filter-area d-flex flex-wrap align-items-center justify-content-between">
              <ul className="nav nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="pills-make-tab" data-bs-toggle="pill" data-bs-target="#pills-make" type="button" role="tab" aria-controls="pills-make" aria-selected="true">Make</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-body-tab" data-bs-toggle="pill" data-bs-target="#pills-body" type="button" role="tab" aria-controls="pills-body" aria-selected="false">Body Type</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-location-tab" data-bs-toggle="pill" data-bs-target="#pills-location" type="button" role="tab" aria-controls="pills-location" aria-selected="false">Location</button>
                </li>
              </ul>
              <div className="explore-btn d-lg-flex d-none">
                <Link legacyBehavior href="/brand-category"><a className="explore-btn2">Explore More <i className="bi bi-arrow-right-short" /></a></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-make" role="tabpanel" aria-labelledby="pills-make-tab">
            <div className="row g-4 justify-content-center">
              <div className="col-xl-2 col-md-3 col-sm-4 col-6 wow fadeInUp" data-wow-delay="200ms">
                <Link legacyBehavior href="/single-brand-category">
                  <a className="car-category text-center">
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
              <div className="col-xl-2 col-md-3 col-sm-4 col-6 wow fadeInUp" data-wow-delay="300ms">
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
              <div className="col-xl-2 col-md-3 col-sm-4 col-6 wow fadeInUp" data-wow-delay="400ms">
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
              <div className="col-xl-2 col-md-3 col-sm-4 col-6 wow fadeInUp" data-wow-delay="500ms">
            <Link legacyBehavior href="/single-brand-category">
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
              <div className="col-xl-2 col-md-3 col-sm-4 col-6 wow fadeInUp" data-wow-delay="600ms">
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
              <div className="col-xl-2 col-md-3 col-sm-4 col-6 wow fadeInUp" data-wow-delay="700ms">
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
              <div className="col-xl-2 col-md-3 col-sm-4 col-6 wow fadeInUp" data-wow-delay="200ms">
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
              <div className="col-xl-2 col-md-3 col-sm-4 col-6 wow fadeInUp" data-wow-delay="300ms">
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
              <div className="col-xl-2 col-md-3 col-sm-4 col-6 wow fadeInUp" data-wow-delay="400ms">
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
              <div className="col-xl-2 col-md-3 col-sm-4 col-6 wow fadeInUp" data-wow-delay="500ms">
            <Link legacyBehavior href="/single-brand-category">
                  <a className="car-category text-center">
                  <div className="icon">
                    <img src="assets/img/home2/icon/volkswagen.svg" alt="" />
                  </div>
                  <div className="content">
                    <h6>Available Cars</h6>
                    <span>(5463)</span>
                  </div>
                  </a>
                </Link>
              </div>
              <div className="col-xl-2 col-md-3 col-sm-4 col-6 wow fadeInUp" data-wow-delay="600ms">
            <Link legacyBehavior href="/single-brand-category">
                  <a className="car-category text-center">
                  <div className="icon">
                    <img src="assets/img/home2/icon/ferarri.svg" alt="" />
                  </div>
                  <div className="content">
                    <h6>Available Cars</h6>
                    <span>(5463)</span>
                  </div>
                  </a>
                </Link>
              </div>
              <div className="col-xl-2 col-md-3 col-sm-4 col-6 wow fadeInUp" data-wow-delay="700ms">
            <Link legacyBehavior href="/single-brand-category">
                  <a className="car-category text-center">
                  <div className="icon">
                    <img src="assets/img/home2/icon/jeep.svg" alt="" />
                  </div>
                  <div className="content">
                    <h6>Available Cars</h6>
                    <span>(5463)</span>
                  </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="pills-body" role="tabpanel" aria-labelledby="pills-body-tab">
            <div className="row g-4 justify-content-center">
              <div className="col-xl-2 col-md-3 col-sm-4 col-6">
                <Link legacyBehavior href="/single-brand-category">
                  <a  className="car-category text-center">
                  <div className="icon">
                    <img src="assets/img/home2/icon/body-01.svg" alt="" />
                  </div>
                  <div className="content">
                    <h6>Sedan</h6>
                    <span>(4,63)</span>
                  </div>
                  </a>
                </Link>
              </div>
              <div className="col-xl-2 col-md-3 col-sm-4 col-6">
                <Link legacyBehavior href="/single-brand-category">
                  <a  className="car-category text-center">
                  <div className="icon">
                    <img src="assets/img/home2/icon/body-02.svg" alt="" />
                  </div>
                  <div className="content">
                    <h6>Hatchback</h6>
                    <span>(1,63)</span>
                  </div>
                  </a>
                </Link>
              </div>
              <div className="col-xl-2 col-md-3 col-sm-4 col-6">
                <Link legacyBehavior href="/single-brand-category">
                  <a className="car-category text-center">
                  <div className="icon">
                    <img src="assets/img/home2/icon/body-03.svg" alt="" />
                  </div>
                  <div className="content">
                    <h6>Covertible</h6>
                    <span>(4,63)</span>
                  </div>
                  </a>
                </Link>
              </div>
              <div className="col-xl-2 col-md-3 col-sm-4 col-6">
                <Link legacyBehavior href="/single-brand-category">
                  <a  className="car-category text-center">
                  <div className="icon">
                    <img src="assets/img/home2/icon/body-04.svg" alt="" />
                  </div>
                  <div className="content">
                    <h6>SUV</h6>
                    <span>(4,63)</span>
                  </div>
                  </a>   
                </Link>
              </div>
              <div className="col-xl-2 col-md-3 col-sm-4 col-6">
                <Link legacyBehavior href="/single-brand-category">
                  <a  className="car-category text-center">
                  <div className="icon">
                    <img src="assets/img/home2/icon/body-04.svg" alt="" />
                  </div>
                  <div className="content">
                    <h6>Coupe</h6>
                    <span>(1,563)</span>
                  </div>
                  </a>
                </Link>
              </div>
              <div className="col-xl-2 col-md-3 col-sm-4 col-6">
                <Link legacyBehavior href="/single-brand-category">
                  <a  className="car-category text-center">
                  <div className="icon">
                    <img src="assets/img/home2/icon/body-04.svg" alt="" />
                  </div>
                  <div className="content">
                    <h6>Truck</h6>
                    <span>(1,463)</span>
                  </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="pills-location" role="tabpanel" aria-labelledby="pills-location-tab">
            <div className="row g-4 justify-content-center">
              <div className="col-xl-2 col-md-3 col-sm-4 col-6">
                <Link legacyBehavior href="/single-brand-category">
                  <a  className="car-category text-center">
                  <div className="icon">
                    <img src="assets/img/home2/icon/panama.svg" alt="" />
                  </div>
                  <div className="content">
                    <h6>Panama City</h6>
                    <span>(4,63)</span>
                  </div>
                  </a>
                </Link>
              </div>
              <div className="col-xl-2 col-md-3 col-sm-4 col-6">
                <Link legacyBehavior href="/single-brand-category">
                  <a  className="car-category text-center">
                  <div className="icon">
                    <img src="assets/img/home2/icon/sydne.svg" alt="" />
                  </div>
                  <div className="content">
                    <h6>Sydne City</h6>
                    <span>(1,63)</span>
                  </div>
                  </a>
                </Link>
              </div>
              <div className="col-xl-2 col-md-3 col-sm-4 col-6">
                <Link legacyBehavior href="/single-brand-category">
                  <a  className="car-category text-center">
                  <div className="icon">
                    <img src="assets/img/home2/icon/delhi.svg" alt="" />
                  </div>
                  <div className="content">
                    <h6>New Delhi</h6>
                    <span>(4,63)</span>
                  </div>
                  </a>
                </Link>
              </div>
              <div className="col-xl-2 col-md-3 col-sm-4 col-6">
                <Link legacyBehavior href="/single-brand-category">
                  <a  className="car-category text-center">
                  <div className="icon">
                    <img src="assets/img/home2/icon/new-work.svg" alt="" />
                  </div>
                  <div className="content">
                    <h6>New York</h6>
                    <span>(5,463)</span>
                  </div>
                  </a>
                </Link>
              </div>
              <div className="col-xl-2 col-md-3 col-sm-4 col-6">
                <Link legacyBehavior href="/single-brand-category">
                  <a  className="car-category text-center">
                  <div className="icon">
                    <img src="assets/img/home2/icon/merchester.svg" alt="" />
                  </div>
                  <div className="content">
                    <h6>Merchester City</h6>
                    <span>(5,463)</span>
                  </div>
                  </a>
                </Link>
              </div>
              <div className="col-xl-2 col-md-3 col-sm-4 col-6">
                <Link legacyBehavior href="/single-brand-category">
                  <a  className="car-category text-center">
                  <div className="icon">
                    <img src="assets/img/home2/icon/abu-dabi.svg" alt="" />
                  </div>
                  <div className="content">
                    <h6>Abu-dabi</h6>
                    <span>(2,463)</span>
                  </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="explore-btn d-lg-none d-flex pt-40">
          <Link legacyBehavior href="/brand-category"><a className="explore-btn2">Explore More <i className="bi bi-arrow-right-short" /></a></Link>
        </div>
      </div>
    </div>


  )
}

export default index