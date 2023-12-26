import React from 'react'
import Link from 'next/link'

function index() {
  return (
    <div className="home3-inner-banner mb-100">
      <div className="container-lg container-fluid">
        <div className="row">
          <div className="col-lg-12 d-flex align-items-center justify-content-md-between justify-content-center flex-md-nowrap flex-wrap gap-md-3 gap-4">
            <div className="content wow fadeInUp" data-wow-delay="200ms">
              <div className="logo">
                <img src="assets/img/home3/icon/inner-banner-logo.svg" alt="" />
              </div>
              <div className="price">
                <h4>$74, 345.00</h4>
              </div>
              <h5><Link legacyBehavior href="/car-deatils"><a>BMW 3 Series Class-2022</a></Link></h5>
              <Link legacyBehavior href="/car-deatils"><a className="primary-btn3">Explore More <i className="bi bi-arrow-right" /></a></Link>
            </div>
            <div className="product-img wow zoomIn" data-wow-delay="300ms">
              <img src="assets/img/home3/home3-inner-banner-img.png" alt="" />
            </div>
            <div className="offer-tag wow fadeInUp" data-wow-delay="200ms">
              <img src="assets/img/home3/icon/Discount.svg" alt="" />
              <div className="offer-content">
                <p>Up To <br /><strong>Discount</strong></p>
                <span><i className="bi bi-star-fill" />40%<i className="bi bi-star-fill" /></span>
                <p>Sale</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default index