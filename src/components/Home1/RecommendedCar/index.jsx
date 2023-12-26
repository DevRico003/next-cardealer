import React from 'react'
import Link from 'next/link'

function index() {
  return (
    <div className="recommended-car-section">
      <div className="container-fluid">
        <div className="row g-4">
          <div className="col-lg-8 d-flex align-items-lg-end justify-content-center">
            <div className="recommended-left">
              <div className="section-title1 wow fadeInUp" data-wow-delay="200ms">
                <span>Recommended Car</span>
                <h2>Not Sure, Which Car is Best?</h2>
              </div>
              <div className="think-img wow zoomIn" data-wow-delay="400ms">
                <img src="assets/img/home1/recommended-img.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-flex align-items-lg-end justify-content-center">
            <div className="recommended-right wow fadeInUp" data-wow-delay="300ms">
              <p>A car that is dependable and has a low risk of breakdowns is highly desirable.</p>
              <Link legacyBehavior href="/car-listing-left-sidebar"><a className="primary-btn2">Show Me Best Car</a></Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default index