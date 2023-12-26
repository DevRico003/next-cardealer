import React from "react";
import { breadcrumbData } from "../data/data";
import { useRouter } from "next/router";
import Link from 'next/link'
function Breadcrumb() {
    const router  = useRouter()
    const currentPathData = breadcrumbData.find((item)=> item.path===router.pathname)
    const lastPathSegment  = currentPathData?.path.split("/").pop()
    
  return (
    <div className="inner-page-banner">
      <div className="banner-wrapper">
        <div className="container-fluid">
          <ul className="breadcrumb-list">
            <li><Link legacyBehavior href="/"><a>Home</a></Link></li>
            <li style={{textTransform:"capitalize"}}>{lastPathSegment}</li>
          </ul>
          <div className="banner-main-content-wrap">
            <div className="row">
              <div className="col-xl-6 col-lg-7 d-flex align-items-center">
                <div className="banner-content">
                  <span className="sub-title">
                    {currentPathData?.sub_title||"Our Brief History"}
                  </span>
                  <h1>{currentPathData?.title||"Our Brief History"}</h1>
                  <div className="customar-review">
                    <ul>
                      <li>
                        <a href="#">
                          <div className="review-top">
                            <div className="logo">
                              <img src="assets/img/home1/icon/trstpilot-logo.svg" alt="" />
                            </div>
                            <div className="star">
                              <img src="assets/img/home1/icon/trustpilot-star.svg" alt="" />
                            </div>
                          </div>
                          <div className="content">
                            <ul>
                              <li>Trust Rating <span>5.0</span></li>
                              <li><span>2348</span> Reviews</li>
                            </ul>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="review-top">
                            <div className="logo">
                              <img src="assets/img/home1/icon/google-logo.svg" alt="" />
                            </div>
                            <div className="star">
                              <ul>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-half" /></li>
                              </ul>
                            </div>
                          </div>
                          <div className="content">
                            <ul>
                              <li>Trust Rating <span>5.0</span></li>
                              <li><span>2348</span> Reviews</li>
                            </ul>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5 d-lg-flex d-none align-items-center justify-content-end">
                <div className="banner-img">
                  <img src={currentPathData?.img_src || "assets/img/inner-page/inner-banner-img.png"} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default Breadcrumb;
