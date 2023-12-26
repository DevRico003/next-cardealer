import React from 'react'

function WhyChooseUs() {
  
  return (
    <div className="home5-why-drivco-area pt-90 pb-90 mb-100">
      <div className="container">
        <div className="row g-lg-4 gy-5">
          <div className="col-lg-6 d-flex align-items-center">
            <div className="drivco-content">
              <div className="section-title-2 mb-60 wow fadeInUp" data-wow-delay="200ms">
                <h2>Why Drivco?</h2>
                <p>To get the most accurate and up-to-date information.</p>
              </div>
              <div className="drivco-featute">
                <ul>
                  <li className="single-feature wow fadeInUp" data-wow-delay="300ms">
                    <div className="feature-icon">
                      <img src="assets/img/home5/icon/safe.svg" alt="icon" />
                    </div>
                    <div className="feature-content">
                      <h5>Safe Purchase</h5>
                      <p>Safe purchase products are typically known for their high quality and
                        reliability.</p>
                    </div>
                  </li>
                  <li className="single-feature wow fadeInUp" data-wow-delay="400ms">
                    <div className="feature-icon">
                      <img src="assets/img/home5/icon/warranty.svg" alt="icon" />
                    </div>
                    <div className="feature-content">
                      <h5>90 Days Warranty</h5>
                      <p>The warranty generally covers repairs, replacements, or refunds for products
                        that exhibit defects.</p>
                    </div>
                  </li>
                  <li className="single-feature wow fadeInUp" data-wow-delay="500ms">
                    <div className="feature-icon">
                      <img src="assets/img/home5/icon/hassle.svg" alt="icon" />
                    </div>
                    <div className="feature-content">
                      <h5>Hassle &amp; Haggle Free</h5>
                      <p>Whether it's buying a product, negotiating a contract, or seeking customer
                        support.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center">
            <div className="drivco-img wow zoomIn" data-wow-delay="400ms">
              <img src="assets/img/home5/why-drivco.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs