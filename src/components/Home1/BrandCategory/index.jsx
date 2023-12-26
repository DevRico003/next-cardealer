import React from "react";
import Link from "next/link";
import { BrandCategoryHome1 } from "../../../data/data";

function index() {
  return (
    <div className="brand-category-area pt-100 mb-100">
      <div className="container">
        <div className="row row-cols-xl-6 row-cols-lg-5 row-cols-md-3 row-cols-sm-3 row-cols-2 g-4 justify-content-center mb-40">
          {BrandCategoryHome1.map((item) => {
            const { id, image, icons } = item;
            return (
              <div className="col wow fadeInUp" data-wow-delay="200ms">
                <Link legacyBehavior href="/single-brand-category" key={id}>
                  <a className="single-category1">
                    <div className="brand-icon">
                      <img src={icons} alt="" />
                    </div>
                    <div className="brand-car">
                      <img src={image} alt="" />
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="row wow fadeInUp" data-wow-delay="300ms">
          <div className="col-lg-12">
            <div className="view-btn-area">
              <p>There has 30+ Brand Category Available </p>
              <Link legacyBehavior href="/brand-category">
                <a className="view-btn">View More</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
