import Link from 'next/link'
import React from 'react'

function index() {
  return (
    <div className="compare-car-section two pt-90 pb-90 mb-100">
      <div className="modal compare-modal two fade" id="compareModal01" tabIndex={-1} aria-labelledby="compareModal01Label" aria-hidden="true">
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
                            <td><Link legacyBehavior href="/car-deatils"><a className="primary-btn2">View Details</a></Link></td>
                            <td><Link legacyBehavior href="/car-deatils"><a className="primary-btn2">View Details</a></Link></td>
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
      <div className="container-xl container-fluid">
        <div className="row mb-60 wow fadeInUp" data-wow-delay="200ms">
          <div className="col-lg-12 d-flex align-items-end justify-content-between gap-3 flex-wrap">
            <div className="section-title-2">
              <h2>Comparing Car Brand</h2>
              <p>Here are some of the featured cars in different categories</p>
            </div>
            <ul className="nav nav-tabs" id="myTab5" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="toyota-tab" data-bs-toggle="tab" data-bs-target="#toyota" type="button" role="tab" aria-controls="toyota" aria-selected="true">Toyota</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="mercedes-tab" data-bs-toggle="tab" data-bs-target="#mercedes" type="button" role="tab" aria-controls="mercedes" aria-selected="false">Mercedes</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="tesla-tab" data-bs-toggle="tab" data-bs-target="#tesla" type="button" role="tab" aria-controls="tesla" aria-selected="false">Tesla</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="mazda-tab" data-bs-toggle="tab" data-bs-target="#mazda" type="button" role="tab" aria-controls="mazda" aria-selected="false">Mazda</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="ferrari-tab" data-bs-toggle="tab" data-bs-target="#ferrari" type="button" role="tab" aria-controls="ferrari" aria-selected="false">Ferrari</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="row wow fadeInUp" data-wow-delay="300ms">
          <div className="col-lg-12">
            <div className="tab-content">
              <div className="tab-pane active" id="toyota" role="tabpanel" aria-labelledby="toyota-tab">
                <div className="row g-4 justify-content-center mb-30">
                  <div className="col-lg-4 col-sm-2">
                    <div className="single-compare-card style-2">
                      <div className="compare-top">
                        <div className="single-car">
                          <div className="car-img">
                            <img src="assets/img/home1/cc-merceds.png" alt="car" />
                          </div>
                          <div className="content text-center">
                            <h6 className="title"><Link legacyBehavior href="car-deatils"><a>Toyota 86</a></Link></h6>
                            <h6 className="price">$68, 219.000</h6>
                          </div>
                        </div>
                        <div className="vs">
                          <span>VS</span>
                        </div>
                        <div className="single-car">
                          <div className="car-img">
                            <img src="assets/img/home1/cc-bmw.png" alt="car" />
                          </div>
                          <div className="content text-center">
                            <h6 className="title"><Link legacyBehavior href="car-deatils"><a>Toyota Prius</a></Link></h6>
                            <h6 className="price">$78, 729.000</h6>
                          </div>
                        </div>
                      </div>
                      <div className="compare-btm">
                        <button type="button" className="primary-btn2" data-bs-toggle="modal" data-bs-target="#compareModal01">
                          Comparing Car
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-2">
                    <div className="single-compare-card style-2">
                      <div className="compare-top">
                        <div className="single-car">
                          <div className="car-img">
                            <img src="assets/img/home1/cc-sucuki.png" alt="car" />
                          </div>
                          <div className="content text-center">
                            <h6 className="title"><Link legacyBehavior href="/car-deatils"><a>Toyota 86</a></Link></h6>
                            <h6 className="price">$70, 219.000</h6>
                          </div>
                        </div>
                        <div className="vs">
                          <span>VS</span>
                        </div>
                        <div className="single-car">
                          <div className="car-img">
                            <img src="assets/img/home1/cc-tesla.png" alt="car" />
                          </div>
                          <div className="content text-center">
                            <h6 className="title"><Link legacyBehavior href="/car-deatils"><a>Toyota Prius</a></Link></h6>
                            <h6 className="price">$78, 729.000</h6>
                          </div>
                        </div>
                      </div>
                      <div className="compare-btm">
                        <button type="button" className="primary-btn2" data-bs-toggle="modal" data-bs-target="#compareModal01">
                          Comparing Car
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-2">
                    <div className="single-compare-card style-2">
                      <div className="compare-top">
                        <div className="single-car">
                          <div className="car-img">
                            <img src="assets/img/home1/cc-sucuki.png" alt="car" />
                          </div>
                          <div className="content text-center">
                            <h6 className="title"><Link legacyBehavior href="/car-deatils"><a>Toyota Prius</a></Link></h6>
                            <h6 className="price">$90, 319.000</h6>
                          </div>
                        </div>
                        <div className="vs">
                          <span>VS</span>
                        </div>
                        <div className="single-car">
                          <div className="car-img">
                            <img src="assets/img/home1/cc-toyota.png" alt="car" />
                          </div>
                          <div className="content text-center">
                            <h6 className="title"><Link legacyBehavior href="/car-deatils"><a>Toyota 86</a></Link></h6>
                            <h6 className="price">$93, 740.000</h6>
                          </div>
                        </div>
                      </div>
                      <div className="compare-btm">
                        <button type="button" className="primary-btn2" data-bs-toggle="modal" data-bs-target="#compareModal01">
                          Comparing Car
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="compare-btn-and-slider-btn">
                  <div className="see-all-btn">
                    <Link legacyBehavior href="/compare">
                      <a className="view-btn2">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={15} viewBox="0 0 24 15">
                        <path d="M3.25973 0C3.15692 0 3.05831 0.0413135 2.98561 0.114852C2.91291 0.18839 2.87207 0.28813 2.87207 0.392129C2.87207 0.496128 2.91291 0.595867 2.98561 0.669405C3.05831 0.742944 3.15692 0.784257 3.25973 0.784257H4.81038C4.91319 0.784257 5.0118 0.742944 5.0845 0.669405C5.1572 0.595867 5.19804 0.496128 5.19804 0.392129C5.19804 0.28813 5.1572 0.18839 5.0845 0.114852C5.0118 0.0413135 4.91319 0 4.81038 0H3.25973ZM5.77953 0C5.67672 0 5.57812 0.0413135 5.50542 0.114852C5.43271 0.18839 5.39187 0.28813 5.39187 0.392129C5.39187 0.496128 5.43271 0.595867 5.50542 0.669405C5.57812 0.742944 5.67672 0.784257 5.77953 0.784257H10.3346C10.4374 0.784257 10.536 0.742944 10.6087 0.669405C10.6814 0.595867 10.7222 0.496128 10.7222 0.392129C10.7222 0.28813 10.6814 0.18839 10.6087 0.114852C10.536 0.0413135 10.4374 0 10.3346 0H5.77953Z" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.22966 2.74658C4.12685 2.74658 4.02824 2.7879 3.95554 2.86143C3.88284 2.93497 3.842 3.03471 3.842 3.13871C3.842 3.24271 3.88284 3.34245 3.95554 3.41599C4.02824 3.48953 4.12685 3.53084 4.22966 3.53084H13.1459C14.6535 3.53084 15.5827 3.76847 16.3261 4.15021C16.958 4.4745 17.4677 4.90564 18.106 5.4456C18.238 5.55716 18.3754 5.67323 18.5206 5.79421L18.6106 5.8691L18.7265 5.88145C22.2658 6.25829 23.0627 7.4684 23.2251 8.08796V9.60883C23.2251 9.71283 23.1842 9.81257 23.1115 9.88611C23.0388 9.95965 22.9402 10.001 22.8374 10.001H21.8361C21.6516 8.8883 20.6948 8.04032 19.5423 8.04032C18.3898 8.04032 17.433 8.8883 17.2485 10.001H10.2062C10.0217 8.8883 9.06497 8.04032 7.91245 8.04032C6.75993 8.04032 5.80318 8.8883 5.61865 10.001H3.74508C3.64227 10.001 3.54367 10.0423 3.47097 10.1158C3.39826 10.1894 3.35742 10.2891 3.35742 10.3931C3.35742 10.4971 3.39826 10.5968 3.47097 10.6704C3.54367 10.7439 3.64227 10.7852 3.74508 10.7852H5.61865C5.80318 11.8979 6.75993 12.7459 7.91245 12.7459C9.06497 12.7459 10.0217 11.8979 10.2062 10.7852H17.2485C17.433 11.8979 18.3898 12.7459 19.5423 12.7459C20.6948 12.7459 21.6516 11.8979 21.8361 10.7852H22.8374C23.1459 10.7852 23.4417 10.6613 23.6598 10.4407C23.8779 10.22 24.0004 9.92083 24.0004 9.60883V7.99562L23.9905 7.95209C23.7436 6.87001 22.5796 5.52874 18.9244 5.11425C18.8222 5.02877 18.722 4.94368 18.6232 4.85996C17.9833 4.31784 17.3947 3.81905 16.6771 3.45065C15.7971 2.99911 14.7396 2.74658 13.1459 2.74658H4.22966ZM17.9917 10.3931C17.9917 9.9771 18.155 9.57814 18.4458 9.28398C18.7366 8.98983 19.131 8.82458 19.5423 8.82458C19.9536 8.82458 20.348 8.98983 20.6388 9.28398C20.9296 9.57814 21.0929 9.9771 21.0929 10.3931C21.0929 10.8091 20.9296 11.208 20.6388 11.5022C20.348 11.7964 19.9536 11.9616 19.5423 11.9616C19.131 11.9616 18.7366 11.7964 18.4458 11.5022C18.155 11.208 17.9917 10.8091 17.9917 10.3931ZM7.91245 8.82458C7.50119 8.82458 7.10678 8.98983 6.81597 9.28398C6.52517 9.57814 6.3618 9.9771 6.3618 10.3931C6.3618 10.8091 6.52517 11.208 6.81597 11.5022C7.10678 11.7964 7.50119 11.9616 7.91245 11.9616C8.3237 11.9616 8.71812 11.7964 9.00892 11.5022C9.29972 11.208 9.46309 10.8091 9.46309 10.3931C9.46309 9.9771 9.29972 9.57814 9.00892 9.28398C8.71812 8.98983 8.3237 8.82458 7.91245 8.82458Z" />
                        <path d="M0 5.09867C0 4.99467 0.0408428 4.89493 0.113543 4.82139C0.186244 4.74786 0.284847 4.70654 0.387662 4.70654H4.74886C4.85167 4.70654 4.95027 4.74786 5.02297 4.82139C5.09567 4.89493 5.13652 4.99467 5.13652 5.09867C5.13652 5.20267 5.09567 5.30241 5.02297 5.37595C4.95027 5.44949 4.85167 5.4908 4.74886 5.4908H0.387662C0.284847 5.4908 0.186244 5.44949 0.113543 5.37595C0.0408428 5.30241 0 5.20267 0 5.09867ZM15.6836 5.60569C15.7563 5.67923 15.7971 5.77895 15.7971 5.88293C15.7971 5.98691 15.7563 6.08663 15.6836 6.16016L15.6532 6.19095C15.2897 6.55859 14.7968 6.76516 14.2828 6.76522H8.14089C8.03808 6.76522 7.93948 6.7239 7.86678 6.65037C7.79408 6.57683 7.75323 6.47709 7.75323 6.37309C7.75323 6.26909 7.79408 6.16935 7.86678 6.09581C7.93948 6.02227 8.03808 5.98096 8.14089 5.98096H14.2826C14.4354 5.98098 14.5866 5.95057 14.7277 5.89146C14.8688 5.83235 14.997 5.74571 15.105 5.63648L15.1355 5.60569C15.2082 5.53218 15.3068 5.49088 15.4096 5.49088C15.5123 5.49088 15.6109 5.53218 15.6836 5.60569ZM8.52856 14.6078C8.52856 14.5038 8.5694 14.4041 8.6421 14.3305C8.7148 14.257 8.8134 14.2157 8.91622 14.2157H10.5638C10.6666 14.2157 10.7652 14.257 10.8379 14.3305C10.9106 14.4041 10.9514 14.5038 10.9514 14.6078C10.9514 14.7118 10.9106 14.8115 10.8379 14.8851C10.7652 14.9586 10.6666 14.9999 10.5638 14.9999H8.91622C8.8134 14.9999 8.7148 14.9586 8.6421 14.8851C8.5694 14.8115 8.52856 14.7118 8.52856 14.6078ZM11.2422 14.6078C11.2422 14.5038 11.283 14.4041 11.3557 14.3305C11.4284 14.257 11.527 14.2157 11.6299 14.2157H15.991C16.0939 14.2157 16.1925 14.257 16.2652 14.3305C16.3379 14.4041 16.3787 14.5038 16.3787 14.6078C16.3787 14.7118 16.3379 14.8115 16.2652 14.8851C16.1925 14.9586 16.0939 14.9999 15.991 14.9999H11.6299C11.527 14.9999 11.4284 14.9586 11.3557 14.8851C11.283 14.8115 11.2422 14.7118 11.2422 14.6078Z" />
                      </svg>
                      See All Compare Car
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="mercedes" role="tabpanel" aria-labelledby="mercedes-tab">
                <div className="row g-4 justify-content-center mb-30">
                  <div className="col-lg-4 col-sm-2">
                    <div className="single-compare-card style-2">
                      <div className="compare-top">
                        <div className="single-car">
                          <div className="car-img">
                            <img src="assets/img/home1/cc-merceds.png" alt="car" />
                          </div>
                          <div className="content text-center">
                            <h6 className="title"><Link legacyBehavior href="/car-deatils"><a>E Class</a></Link></h6>
                            <h6 className="price">$68, 219.000</h6>
                          </div>
                        </div>
                        <div className="vs">
                          <span>VS</span>
                        </div>
                        <div className="single-car">
                          <div className="car-img">
                            <img src="assets/img/home1/cc-bmw.png" alt="car" />
                          </div>
                          <div className="content text-center">
                            <h6 className="title"><Link legacyBehavior href="/car-deatils"><a>Glc</a></Link></h6>
                            <h6 className="price">$78, 729.000</h6>
                          </div>
                        </div>
                      </div>
                      <div className="compare-btm">
                        <button type="button" className="primary-btn2" data-bs-toggle="modal" data-bs-target="#compareModal01">
                          Comparing Car
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-2">
                    <div className="single-compare-card style-2">
                      <div className="compare-top">
                        <div className="single-car">
                          <div className="car-img">
                            <img src="assets/img/home1/cc-sucuki.png" alt="car" />
                          </div>
                          <div className="content text-center">
                            <h6 className="title"><Link legacyBehavior href="/car-deatils"><a>Gla</a></Link></h6>
                            <h6 className="price">$70, 219.000</h6>
                          </div>
                        </div>
                        <div className="vs">
                          <span>VS</span>
                        </div>
                        <div className="single-car">
                          <div className="car-img">
                            <img src="assets/img/home1/cc-tesla.png" alt="car" />
                          </div>
                          <div className="content text-center">
                            <h6 className="title"><Link legacyBehavior href="/car-deatils"><a>A Class</a></Link></h6>
                            <h6 className="price">$78, 729.000</h6>
                          </div>
                        </div>
                      </div>
                      <div className="compare-btm">
                        <button type="button" className="primary-btn2" data-bs-toggle="modal" data-bs-target="#compareModal01">
                          Comparing Car
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-2">
                    <div className="single-compare-card style-2">
                      <div className="compare-top">
                        <div className="single-car">
                          <div className="car-img">
                            <img src="assets/img/home1/cc-sucuki.png" alt="car" />
                          </div>
                          <div className="content text-center">
                            <h6 className="title"><Link legacyBehavior href="/car-deatils"><a>A Class</a></Link></h6>
                            <h6 className="price">$90, 319.000</h6>
                          </div>
                        </div>
                        <div className="vs">
                          <span>VS</span>
                        </div>
                        <div className="single-car">
                          <div className="car-img">
                            <img src="assets/img/home1/cc-toyota.png" alt="car" />
                          </div>
                          <div className="content text-center">
                            <h6 className="title"><Link legacyBehavior href="/car-deatils"><a>GLB</a></Link></h6>
                            <h6 className="price">$93, 740.000</h6>
                          </div>
                        </div>
                      </div>
                      <div className="compare-btm">
                        <button type="button" className="primary-btn2" data-bs-toggle="modal" data-bs-target="#compareModal01">
                          Comparing Car
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="compare-btn-and-slider-btn">
                  <div className="see-all-btn">
                    <Link legacyBehavior href="/compare">
                      <a className="view-btn2">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={15} viewBox="0 0 24 15">
                        <path d="M3.25973 0C3.15692 0 3.05831 0.0413135 2.98561 0.114852C2.91291 0.18839 2.87207 0.28813 2.87207 0.392129C2.87207 0.496128 2.91291 0.595867 2.98561 0.669405C3.05831 0.742944 3.15692 0.784257 3.25973 0.784257H4.81038C4.91319 0.784257 5.0118 0.742944 5.0845 0.669405C5.1572 0.595867 5.19804 0.496128 5.19804 0.392129C5.19804 0.28813 5.1572 0.18839 5.0845 0.114852C5.0118 0.0413135 4.91319 0 4.81038 0H3.25973ZM5.77953 0C5.67672 0 5.57812 0.0413135 5.50542 0.114852C5.43271 0.18839 5.39187 0.28813 5.39187 0.392129C5.39187 0.496128 5.43271 0.595867 5.50542 0.669405C5.57812 0.742944 5.67672 0.784257 5.77953 0.784257H10.3346C10.4374 0.784257 10.536 0.742944 10.6087 0.669405C10.6814 0.595867 10.7222 0.496128 10.7222 0.392129C10.7222 0.28813 10.6814 0.18839 10.6087 0.114852C10.536 0.0413135 10.4374 0 10.3346 0H5.77953Z" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.22966 2.74658C4.12685 2.74658 4.02824 2.7879 3.95554 2.86143C3.88284 2.93497 3.842 3.03471 3.842 3.13871C3.842 3.24271 3.88284 3.34245 3.95554 3.41599C4.02824 3.48953 4.12685 3.53084 4.22966 3.53084H13.1459C14.6535 3.53084 15.5827 3.76847 16.3261 4.15021C16.958 4.4745 17.4677 4.90564 18.106 5.4456C18.238 5.55716 18.3754 5.67323 18.5206 5.79421L18.6106 5.8691L18.7265 5.88145C22.2658 6.25829 23.0627 7.4684 23.2251 8.08796V9.60883C23.2251 9.71283 23.1842 9.81257 23.1115 9.88611C23.0388 9.95965 22.9402 10.001 22.8374 10.001H21.8361C21.6516 8.8883 20.6948 8.04032 19.5423 8.04032C18.3898 8.04032 17.433 8.8883 17.2485 10.001H10.2062C10.0217 8.8883 9.06497 8.04032 7.91245 8.04032C6.75993 8.04032 5.80318 8.8883 5.61865 10.001H3.74508C3.64227 10.001 3.54367 10.0423 3.47097 10.1158C3.39826 10.1894 3.35742 10.2891 3.35742 10.3931C3.35742 10.4971 3.39826 10.5968 3.47097 10.6704C3.54367 10.7439 3.64227 10.7852 3.74508 10.7852H5.61865C5.80318 11.8979 6.75993 12.7459 7.91245 12.7459C9.06497 12.7459 10.0217 11.8979 10.2062 10.7852H17.2485C17.433 11.8979 18.3898 12.7459 19.5423 12.7459C20.6948 12.7459 21.6516 11.8979 21.8361 10.7852H22.8374C23.1459 10.7852 23.4417 10.6613 23.6598 10.4407C23.8779 10.22 24.0004 9.92083 24.0004 9.60883V7.99562L23.9905 7.95209C23.7436 6.87001 22.5796 5.52874 18.9244 5.11425C18.8222 5.02877 18.722 4.94368 18.6232 4.85996C17.9833 4.31784 17.3947 3.81905 16.6771 3.45065C15.7971 2.99911 14.7396 2.74658 13.1459 2.74658H4.22966ZM17.9917 10.3931C17.9917 9.9771 18.155 9.57814 18.4458 9.28398C18.7366 8.98983 19.131 8.82458 19.5423 8.82458C19.9536 8.82458 20.348 8.98983 20.6388 9.28398C20.9296 9.57814 21.0929 9.9771 21.0929 10.3931C21.0929 10.8091 20.9296 11.208 20.6388 11.5022C20.348 11.7964 19.9536 11.9616 19.5423 11.9616C19.131 11.9616 18.7366 11.7964 18.4458 11.5022C18.155 11.208 17.9917 10.8091 17.9917 10.3931ZM7.91245 8.82458C7.50119 8.82458 7.10678 8.98983 6.81597 9.28398C6.52517 9.57814 6.3618 9.9771 6.3618 10.3931C6.3618 10.8091 6.52517 11.208 6.81597 11.5022C7.10678 11.7964 7.50119 11.9616 7.91245 11.9616C8.3237 11.9616 8.71812 11.7964 9.00892 11.5022C9.29972 11.208 9.46309 10.8091 9.46309 10.3931C9.46309 9.9771 9.29972 9.57814 9.00892 9.28398C8.71812 8.98983 8.3237 8.82458 7.91245 8.82458Z" />
                        <path d="M0 5.09867C0 4.99467 0.0408428 4.89493 0.113543 4.82139C0.186244 4.74786 0.284847 4.70654 0.387662 4.70654H4.74886C4.85167 4.70654 4.95027 4.74786 5.02297 4.82139C5.09567 4.89493 5.13652 4.99467 5.13652 5.09867C5.13652 5.20267 5.09567 5.30241 5.02297 5.37595C4.95027 5.44949 4.85167 5.4908 4.74886 5.4908H0.387662C0.284847 5.4908 0.186244 5.44949 0.113543 5.37595C0.0408428 5.30241 0 5.20267 0 5.09867ZM15.6836 5.60569C15.7563 5.67923 15.7971 5.77895 15.7971 5.88293C15.7971 5.98691 15.7563 6.08663 15.6836 6.16016L15.6532 6.19095C15.2897 6.55859 14.7968 6.76516 14.2828 6.76522H8.14089C8.03808 6.76522 7.93948 6.7239 7.86678 6.65037C7.79408 6.57683 7.75323 6.47709 7.75323 6.37309C7.75323 6.26909 7.79408 6.16935 7.86678 6.09581C7.93948 6.02227 8.03808 5.98096 8.14089 5.98096H14.2826C14.4354 5.98098 14.5866 5.95057 14.7277 5.89146C14.8688 5.83235 14.997 5.74571 15.105 5.63648L15.1355 5.60569C15.2082 5.53218 15.3068 5.49088 15.4096 5.49088C15.5123 5.49088 15.6109 5.53218 15.6836 5.60569ZM8.52856 14.6078C8.52856 14.5038 8.5694 14.4041 8.6421 14.3305C8.7148 14.257 8.8134 14.2157 8.91622 14.2157H10.5638C10.6666 14.2157 10.7652 14.257 10.8379 14.3305C10.9106 14.4041 10.9514 14.5038 10.9514 14.6078C10.9514 14.7118 10.9106 14.8115 10.8379 14.8851C10.7652 14.9586 10.6666 14.9999 10.5638 14.9999H8.91622C8.8134 14.9999 8.7148 14.9586 8.6421 14.8851C8.5694 14.8115 8.52856 14.7118 8.52856 14.6078ZM11.2422 14.6078C11.2422 14.5038 11.283 14.4041 11.3557 14.3305C11.4284 14.257 11.527 14.2157 11.6299 14.2157H15.991C16.0939 14.2157 16.1925 14.257 16.2652 14.3305C16.3379 14.4041 16.3787 14.5038 16.3787 14.6078C16.3787 14.7118 16.3379 14.8115 16.2652 14.8851C16.1925 14.9586 16.0939 14.9999 15.991 14.9999H11.6299C11.527 14.9999 11.4284 14.9586 11.3557 14.8851C11.283 14.8115 11.2422 14.7118 11.2422 14.6078Z" />
                      </svg>
                      See All Compare Car
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tesla" role="tabpanel" aria-labelledby="tesla-tab">
                <div className="row g-4 justify-content-center mb-30">
                  <div className="col-lg-4 col-sm-2">
                    <div className="single-compare-card style-2">
                      <div className="compare-top">
                        <div className="single-car">
                          <div className="car-img">
                            <img src="assets/img/home1/cc-merceds.png" alt="car" />
                          </div>
                          <div className="content text-center">
                            <h6 className="title"><Link legacyBehavior href="/car-deatils"><a>Tesla Model S</a></Link></h6>
                            <h6 className="price">$68, 219.000</h6>
                          </div>
                        </div>
                        <div className="vs">
                          <span>VS</span>
                        </div>
                        <div className="single-car">
                          <div className="car-img">
                            <img src="assets/img/home1/cc-bmw.png" alt="car" />
                          </div>
                          <div className="content text-center">
                            <h6 className="title"><Link legacyBehavior href="/car-deatils"><a>Tesla Model 3</a></Link></h6>
                            <h6 className="price">$78, 729.000</h6>
                          </div>
                        </div>
                      </div>
                      <div className="compare-btm">
                        <button type="button" className="primary-btn2" data-bs-toggle="modal" data-bs-target="#compareModal01">
                          Comparing Car
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-2">
                    <div className="single-compare-card style-2">
                      <div className="compare-top">
                        <div className="single-car">
                          <div className="car-img">
                            <img src="assets/img/home1/cc-sucuki.png" alt="car" />
                          </div>
                          <div className="content text-center">
                            <h6 className="title"><Link legacyBehavior href="/car-deatils"><a>Tesla Model  X</a></Link></h6>
                            <h6 className="price">$70, 219.000</h6>
                          </div>
                        </div>
                        <div className="vs">
                          <span>VS</span>
                        </div>
                        <div className="single-car">
                          <div className="car-img">
                            <img src="assets/img/home1/cc-tesla.png" alt="car" />
                          </div>
                          <div className="content text-center">
                            <h6 className="title"><Link legacyBehavior href="/car-deatils"><a>Tesla Model  Y</a></Link></h6>
                            <h6 className="price">$78, 729.000</h6>
                          </div>
                        </div>
                      </div>
                      <div className="compare-btm">
                        <button type="button" className="primary-btn2" data-bs-toggle="modal" data-bs-target="#compareModal01">
                          Comparing Car
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-2">
                    <div className="single-compare-card style-2">
                      <div className="compare-top">
                        <div className="single-car">
                          <div className="car-img">
                            <img src="assets/img/home1/cc-sucuki.png" alt="car" />
                          </div>
                          <div className="content text-center">
                            <h6 className="title"><Link legacyBehavior href="/car-deatils"><a>Tesla Roadster</a></Link></h6>
                            <h6 className="price">$90, 319.000</h6>
                          </div>
                        </div>
                        <div className="vs">
                          <span>VS</span>
                        </div>
                        <div className="single-car">
                          <div className="car-img">
                            <img src="assets/img/home1/cc-toyota.png" alt="car" />
                          </div>
                          <div className="content text-center">
                            <h6 className="title"><Link legacyBehavior href="/car-deatils"><a>Tesla Cybertruck</a></Link></h6>
                            <h6 className="price">$93, 740.000</h6>
                          </div>
                        </div>
                      </div>
                      <div className="compare-btm">
                        <button type="button" className="primary-btn2" data-bs-toggle="modal" data-bs-target="#compareModal01">
                          Comparing Car
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="compare-btn-and-slider-btn">
                  <div className="see-all-btn">
                    <Link legacyBehavior href="/compare">
                      <a className="view-btn2">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={15} viewBox="0 0 24 15">
                        <path d="M3.25973 0C3.15692 0 3.05831 0.0413135 2.98561 0.114852C2.91291 0.18839 2.87207 0.28813 2.87207 0.392129C2.87207 0.496128 2.91291 0.595867 2.98561 0.669405C3.05831 0.742944 3.15692 0.784257 3.25973 0.784257H4.81038C4.91319 0.784257 5.0118 0.742944 5.0845 0.669405C5.1572 0.595867 5.19804 0.496128 5.19804 0.392129C5.19804 0.28813 5.1572 0.18839 5.0845 0.114852C5.0118 0.0413135 4.91319 0 4.81038 0H3.25973ZM5.77953 0C5.67672 0 5.57812 0.0413135 5.50542 0.114852C5.43271 0.18839 5.39187 0.28813 5.39187 0.392129C5.39187 0.496128 5.43271 0.595867 5.50542 0.669405C5.57812 0.742944 5.67672 0.784257 5.77953 0.784257H10.3346C10.4374 0.784257 10.536 0.742944 10.6087 0.669405C10.6814 0.595867 10.7222 0.496128 10.7222 0.392129C10.7222 0.28813 10.6814 0.18839 10.6087 0.114852C10.536 0.0413135 10.4374 0 10.3346 0H5.77953Z" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.22966 2.74658C4.12685 2.74658 4.02824 2.7879 3.95554 2.86143C3.88284 2.93497 3.842 3.03471 3.842 3.13871C3.842 3.24271 3.88284 3.34245 3.95554 3.41599C4.02824 3.48953 4.12685 3.53084 4.22966 3.53084H13.1459C14.6535 3.53084 15.5827 3.76847 16.3261 4.15021C16.958 4.4745 17.4677 4.90564 18.106 5.4456C18.238 5.55716 18.3754 5.67323 18.5206 5.79421L18.6106 5.8691L18.7265 5.88145C22.2658 6.25829 23.0627 7.4684 23.2251 8.08796V9.60883C23.2251 9.71283 23.1842 9.81257 23.1115 9.88611C23.0388 9.95965 22.9402 10.001 22.8374 10.001H21.8361C21.6516 8.8883 20.6948 8.04032 19.5423 8.04032C18.3898 8.04032 17.433 8.8883 17.2485 10.001H10.2062C10.0217 8.8883 9.06497 8.04032 7.91245 8.04032C6.75993 8.04032 5.80318 8.8883 5.61865 10.001H3.74508C3.64227 10.001 3.54367 10.0423 3.47097 10.1158C3.39826 10.1894 3.35742 10.2891 3.35742 10.3931C3.35742 10.4971 3.39826 10.5968 3.47097 10.6704C3.54367 10.7439 3.64227 10.7852 3.74508 10.7852H5.61865C5.80318 11.8979 6.75993 12.7459 7.91245 12.7459C9.06497 12.7459 10.0217 11.8979 10.2062 10.7852H17.2485C17.433 11.8979 18.3898 12.7459 19.5423 12.7459C20.6948 12.7459 21.6516 11.8979 21.8361 10.7852H22.8374C23.1459 10.7852 23.4417 10.6613 23.6598 10.4407C23.8779 10.22 24.0004 9.92083 24.0004 9.60883V7.99562L23.9905 7.95209C23.7436 6.87001 22.5796 5.52874 18.9244 5.11425C18.8222 5.02877 18.722 4.94368 18.6232 4.85996C17.9833 4.31784 17.3947 3.81905 16.6771 3.45065C15.7971 2.99911 14.7396 2.74658 13.1459 2.74658H4.22966ZM17.9917 10.3931C17.9917 9.9771 18.155 9.57814 18.4458 9.28398C18.7366 8.98983 19.131 8.82458 19.5423 8.82458C19.9536 8.82458 20.348 8.98983 20.6388 9.28398C20.9296 9.57814 21.0929 9.9771 21.0929 10.3931C21.0929 10.8091 20.9296 11.208 20.6388 11.5022C20.348 11.7964 19.9536 11.9616 19.5423 11.9616C19.131 11.9616 18.7366 11.7964 18.4458 11.5022C18.155 11.208 17.9917 10.8091 17.9917 10.3931ZM7.91245 8.82458C7.50119 8.82458 7.10678 8.98983 6.81597 9.28398C6.52517 9.57814 6.3618 9.9771 6.3618 10.3931C6.3618 10.8091 6.52517 11.208 6.81597 11.5022C7.10678 11.7964 7.50119 11.9616 7.91245 11.9616C8.3237 11.9616 8.71812 11.7964 9.00892 11.5022C9.29972 11.208 9.46309 10.8091 9.46309 10.3931C9.46309 9.9771 9.29972 9.57814 9.00892 9.28398C8.71812 8.98983 8.3237 8.82458 7.91245 8.82458Z" />
                        <path d="M0 5.09867C0 4.99467 0.0408428 4.89493 0.113543 4.82139C0.186244 4.74786 0.284847 4.70654 0.387662 4.70654H4.74886C4.85167 4.70654 4.95027 4.74786 5.02297 4.82139C5.09567 4.89493 5.13652 4.99467 5.13652 5.09867C5.13652 5.20267 5.09567 5.30241 5.02297 5.37595C4.95027 5.44949 4.85167 5.4908 4.74886 5.4908H0.387662C0.284847 5.4908 0.186244 5.44949 0.113543 5.37595C0.0408428 5.30241 0 5.20267 0 5.09867ZM15.6836 5.60569C15.7563 5.67923 15.7971 5.77895 15.7971 5.88293C15.7971 5.98691 15.7563 6.08663 15.6836 6.16016L15.6532 6.19095C15.2897 6.55859 14.7968 6.76516 14.2828 6.76522H8.14089C8.03808 6.76522 7.93948 6.7239 7.86678 6.65037C7.79408 6.57683 7.75323 6.47709 7.75323 6.37309C7.75323 6.26909 7.79408 6.16935 7.86678 6.09581C7.93948 6.02227 8.03808 5.98096 8.14089 5.98096H14.2826C14.4354 5.98098 14.5866 5.95057 14.7277 5.89146C14.8688 5.83235 14.997 5.74571 15.105 5.63648L15.1355 5.60569C15.2082 5.53218 15.3068 5.49088 15.4096 5.49088C15.5123 5.49088 15.6109 5.53218 15.6836 5.60569ZM8.52856 14.6078C8.52856 14.5038 8.5694 14.4041 8.6421 14.3305C8.7148 14.257 8.8134 14.2157 8.91622 14.2157H10.5638C10.6666 14.2157 10.7652 14.257 10.8379 14.3305C10.9106 14.4041 10.9514 14.5038 10.9514 14.6078C10.9514 14.7118 10.9106 14.8115 10.8379 14.8851C10.7652 14.9586 10.6666 14.9999 10.5638 14.9999H8.91622C8.8134 14.9999 8.7148 14.9586 8.6421 14.8851C8.5694 14.8115 8.52856 14.7118 8.52856 14.6078ZM11.2422 14.6078C11.2422 14.5038 11.283 14.4041 11.3557 14.3305C11.4284 14.257 11.527 14.2157 11.6299 14.2157H15.991C16.0939 14.2157 16.1925 14.257 16.2652 14.3305C16.3379 14.4041 16.3787 14.5038 16.3787 14.6078C16.3787 14.7118 16.3379 14.8115 16.2652 14.8851C16.1925 14.9586 16.0939 14.9999 15.991 14.9999H11.6299C11.527 14.9999 11.4284 14.9586 11.3557 14.8851C11.283 14.8115 11.2422 14.7118 11.2422 14.6078Z" />
                      </svg>
                      See All Compare Car
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="mazda" role="tabpanel" aria-labelledby="mazda-tab">
                <div className="row g-4 justify-content-center mb-30">
                  <div className="col-lg-4 col-sm-2">
                    <div className="single-compare-card style-2">
                      <div className="compare-top">
                        <div className="single-car">
                          <div className="car-img">
                            <img src="assets/img/home1/cc-merceds.png" alt="car" />
                          </div>
                          <div className="content text-center">
                            <h6 className="title"><Link legacyBehavior href="/car-deatils"><a>Mazda3</a></Link></h6>
                            <h6 className="price">$68, 219.000</h6>
                          </div>
                        </div>
                        <div className="vs">
                          <span>VS</span>
                        </div>
                        <div className="single-car">
                          <div className="car-img">
                            <img src="assets/img/home1/cc-bmw.png" alt="car" />
                          </div>
                          <div className="content text-center">
                            <h6 className="title"><Link legacyBehavior href="/car-deatils"><a>Mazda6</a></Link></h6>
                            <h6 className="price">$78, 729.000</h6>
                          </div>
                        </div>
                      </div>
                      <div className="compare-btm">
                        <button type="button" className="primary-btn2" data-bs-toggle="modal" data-bs-target="#compareModal01">
                          Comparing Car
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-2">
                    <div className="single-compare-card style-2">
                      <div className="compare-top">
                        <div className="single-car">
                          <div className="car-img">
                            <img src="assets/img/home1/cc-sucuki.png" alt="car" />
                          </div>
                          <div className="content text-center">
                            <h6 className="title"><Link legacyBehavior href="/car-deatils"><a>Mazda  MX-5</a></Link></h6>
                            <h6 className="price">$70, 219.000</h6>
                          </div>
                        </div>
                        <div className="vs">
                          <span>VS</span>
                        </div>
                        <div className="single-car">
                          <div className="car-img">
                            <img src="assets/img/home1/cc-tesla.png" alt="car" />
                          </div>
                          <div className="content text-center">
                            <h6 className="title"><Link legacyBehavior href="/car-deatils"><a>Mazda CX -3</a></Link></h6>
                            <h6 className="price">$78, 729.000</h6>
                          </div>
                        </div>
                      </div>
                      <div className="compare-btm">
                        <button type="button" className="primary-btn2" data-bs-toggle="modal" data-bs-target="#compareModal01">
                          Comparing Car
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-2">
                    <div className="single-compare-card style-2">
                      <div className="compare-top">
                        <div className="single-car">
                          <div className="car-img">
                            <img src="assets/img/home1/cc-sucuki.png" alt="car" />
                          </div>
                          <div className="content text-center">
                            <h6 className="title"><Link legacyBehavior href="/car-deatils"><a>Mazda Demio</a></Link></h6>
                            <h6 className="price">$90, 319.000</h6>
                          </div>
                        </div>
                        <div className="vs">
                          <span>VS</span>
                        </div>
                        <div className="single-car">
                          <div className="car-img">
                            <img src="assets/img/home1/cc-toyota.png" alt="car" />
                          </div>
                          <div className="content text-center">
                            <h6 className="title"><Link legacyBehavior href="/car-deatils"><a>Mazda CX -9</a></Link></h6>
                            <h6 className="price">$93, 740.000</h6>
                          </div>
                        </div>
                      </div>
                      <div className="compare-btm">
                        <button type="button" className="primary-btn2" data-bs-toggle="modal" data-bs-target="#compareModal01">
                          Comparing Car
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="compare-btn-and-slider-btn">
                  <div className="see-all-btn">
                    <Link legacyBehavior href="/compare">
                      <a className="view-btn2">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={15} viewBox="0 0 24 15">
                        <path d="M3.25973 0C3.15692 0 3.05831 0.0413135 2.98561 0.114852C2.91291 0.18839 2.87207 0.28813 2.87207 0.392129C2.87207 0.496128 2.91291 0.595867 2.98561 0.669405C3.05831 0.742944 3.15692 0.784257 3.25973 0.784257H4.81038C4.91319 0.784257 5.0118 0.742944 5.0845 0.669405C5.1572 0.595867 5.19804 0.496128 5.19804 0.392129C5.19804 0.28813 5.1572 0.18839 5.0845 0.114852C5.0118 0.0413135 4.91319 0 4.81038 0H3.25973ZM5.77953 0C5.67672 0 5.57812 0.0413135 5.50542 0.114852C5.43271 0.18839 5.39187 0.28813 5.39187 0.392129C5.39187 0.496128 5.43271 0.595867 5.50542 0.669405C5.57812 0.742944 5.67672 0.784257 5.77953 0.784257H10.3346C10.4374 0.784257 10.536 0.742944 10.6087 0.669405C10.6814 0.595867 10.7222 0.496128 10.7222 0.392129C10.7222 0.28813 10.6814 0.18839 10.6087 0.114852C10.536 0.0413135 10.4374 0 10.3346 0H5.77953Z" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.22966 2.74658C4.12685 2.74658 4.02824 2.7879 3.95554 2.86143C3.88284 2.93497 3.842 3.03471 3.842 3.13871C3.842 3.24271 3.88284 3.34245 3.95554 3.41599C4.02824 3.48953 4.12685 3.53084 4.22966 3.53084H13.1459C14.6535 3.53084 15.5827 3.76847 16.3261 4.15021C16.958 4.4745 17.4677 4.90564 18.106 5.4456C18.238 5.55716 18.3754 5.67323 18.5206 5.79421L18.6106 5.8691L18.7265 5.88145C22.2658 6.25829 23.0627 7.4684 23.2251 8.08796V9.60883C23.2251 9.71283 23.1842 9.81257 23.1115 9.88611C23.0388 9.95965 22.9402 10.001 22.8374 10.001H21.8361C21.6516 8.8883 20.6948 8.04032 19.5423 8.04032C18.3898 8.04032 17.433 8.8883 17.2485 10.001H10.2062C10.0217 8.8883 9.06497 8.04032 7.91245 8.04032C6.75993 8.04032 5.80318 8.8883 5.61865 10.001H3.74508C3.64227 10.001 3.54367 10.0423 3.47097 10.1158C3.39826 10.1894 3.35742 10.2891 3.35742 10.3931C3.35742 10.4971 3.39826 10.5968 3.47097 10.6704C3.54367 10.7439 3.64227 10.7852 3.74508 10.7852H5.61865C5.80318 11.8979 6.75993 12.7459 7.91245 12.7459C9.06497 12.7459 10.0217 11.8979 10.2062 10.7852H17.2485C17.433 11.8979 18.3898 12.7459 19.5423 12.7459C20.6948 12.7459 21.6516 11.8979 21.8361 10.7852H22.8374C23.1459 10.7852 23.4417 10.6613 23.6598 10.4407C23.8779 10.22 24.0004 9.92083 24.0004 9.60883V7.99562L23.9905 7.95209C23.7436 6.87001 22.5796 5.52874 18.9244 5.11425C18.8222 5.02877 18.722 4.94368 18.6232 4.85996C17.9833 4.31784 17.3947 3.81905 16.6771 3.45065C15.7971 2.99911 14.7396 2.74658 13.1459 2.74658H4.22966ZM17.9917 10.3931C17.9917 9.9771 18.155 9.57814 18.4458 9.28398C18.7366 8.98983 19.131 8.82458 19.5423 8.82458C19.9536 8.82458 20.348 8.98983 20.6388 9.28398C20.9296 9.57814 21.0929 9.9771 21.0929 10.3931C21.0929 10.8091 20.9296 11.208 20.6388 11.5022C20.348 11.7964 19.9536 11.9616 19.5423 11.9616C19.131 11.9616 18.7366 11.7964 18.4458 11.5022C18.155 11.208 17.9917 10.8091 17.9917 10.3931ZM7.91245 8.82458C7.50119 8.82458 7.10678 8.98983 6.81597 9.28398C6.52517 9.57814 6.3618 9.9771 6.3618 10.3931C6.3618 10.8091 6.52517 11.208 6.81597 11.5022C7.10678 11.7964 7.50119 11.9616 7.91245 11.9616C8.3237 11.9616 8.71812 11.7964 9.00892 11.5022C9.29972 11.208 9.46309 10.8091 9.46309 10.3931C9.46309 9.9771 9.29972 9.57814 9.00892 9.28398C8.71812 8.98983 8.3237 8.82458 7.91245 8.82458Z" />
                        <path d="M0 5.09867C0 4.99467 0.0408428 4.89493 0.113543 4.82139C0.186244 4.74786 0.284847 4.70654 0.387662 4.70654H4.74886C4.85167 4.70654 4.95027 4.74786 5.02297 4.82139C5.09567 4.89493 5.13652 4.99467 5.13652 5.09867C5.13652 5.20267 5.09567 5.30241 5.02297 5.37595C4.95027 5.44949 4.85167 5.4908 4.74886 5.4908H0.387662C0.284847 5.4908 0.186244 5.44949 0.113543 5.37595C0.0408428 5.30241 0 5.20267 0 5.09867ZM15.6836 5.60569C15.7563 5.67923 15.7971 5.77895 15.7971 5.88293C15.7971 5.98691 15.7563 6.08663 15.6836 6.16016L15.6532 6.19095C15.2897 6.55859 14.7968 6.76516 14.2828 6.76522H8.14089C8.03808 6.76522 7.93948 6.7239 7.86678 6.65037C7.79408 6.57683 7.75323 6.47709 7.75323 6.37309C7.75323 6.26909 7.79408 6.16935 7.86678 6.09581C7.93948 6.02227 8.03808 5.98096 8.14089 5.98096H14.2826C14.4354 5.98098 14.5866 5.95057 14.7277 5.89146C14.8688 5.83235 14.997 5.74571 15.105 5.63648L15.1355 5.60569C15.2082 5.53218 15.3068 5.49088 15.4096 5.49088C15.5123 5.49088 15.6109 5.53218 15.6836 5.60569ZM8.52856 14.6078C8.52856 14.5038 8.5694 14.4041 8.6421 14.3305C8.7148 14.257 8.8134 14.2157 8.91622 14.2157H10.5638C10.6666 14.2157 10.7652 14.257 10.8379 14.3305C10.9106 14.4041 10.9514 14.5038 10.9514 14.6078C10.9514 14.7118 10.9106 14.8115 10.8379 14.8851C10.7652 14.9586 10.6666 14.9999 10.5638 14.9999H8.91622C8.8134 14.9999 8.7148 14.9586 8.6421 14.8851C8.5694 14.8115 8.52856 14.7118 8.52856 14.6078ZM11.2422 14.6078C11.2422 14.5038 11.283 14.4041 11.3557 14.3305C11.4284 14.257 11.527 14.2157 11.6299 14.2157H15.991C16.0939 14.2157 16.1925 14.257 16.2652 14.3305C16.3379 14.4041 16.3787 14.5038 16.3787 14.6078C16.3787 14.7118 16.3379 14.8115 16.2652 14.8851C16.1925 14.9586 16.0939 14.9999 15.991 14.9999H11.6299C11.527 14.9999 11.4284 14.9586 11.3557 14.8851C11.283 14.8115 11.2422 14.7118 11.2422 14.6078Z" />
                      </svg>
                      See All Compare Car
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="ferrari" role="tabpanel" aria-labelledby="ferrari-tab">
                <div className="row g-4 justify-content-center mb-30">
                  <div className="col-lg-4 col-sm-2">
                    <div className="single-compare-card style-2">
                      <div className="compare-top">
                        <div className="single-car">
                          <div className="car-img">
                            <img src="assets/img/home1/cc-merceds.png" alt="car" />
                          </div>
                          <div className="content text-center">
                            <h6 className="title"><Link legacyBehavior href="/car-deatils"><a>Ferrari 488</a></Link></h6>
                            <h6 className="price">$68, 219.000</h6>
                          </div>
                        </div>
                        <div className="vs">
                          <span>VS</span>
                        </div>
                        <div className="single-car">
                          <div className="car-img">
                            <img src="assets/img/home1/cc-bmw.png" alt="car" />
                          </div>
                          <div className="content text-center">
                            <h6 className="title"><Link legacyBehavior href="/car-deatils"><a>Ferrari 458</a></Link></h6>
                            <h6 className="price">$78, 729.000</h6>
                          </div>
                        </div>
                      </div>
                      <div className="compare-btm">
                        <button type="button" className="primary-btn2" data-bs-toggle="modal" data-bs-target="#compareModal01">
                          Comparing Car
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-2">
                    <div className="single-compare-card style-2">
                      <div className="compare-top">
                        <div className="single-car">
                          <div className="car-img">
                            <img src="assets/img/home1/cc-sucuki.png" alt="car" />
                          </div>
                          <div className="content text-center">
                            <h6 className="title"><Link legacyBehavior href="/car-deatils"><a>Ferrari F430</a></Link></h6>
                            <h6 className="price">$70, 219.000</h6>
                          </div>
                        </div>
                        <div className="vs">
                          <span>VS</span>
                        </div>
                        <div className="single-car">
                          <div className="car-img">
                            <img src="assets/img/home1/cc-tesla.png" alt="car" />
                          </div>
                          <div className="content text-center">
                            <h6 className="title"><Link legacyBehavior href="/car-deatils"><a>Ferrari F40</a></Link></h6>
                            <h6 className="price">$78, 729.000</h6>
                          </div>
                        </div>
                      </div>
                      <div className="compare-btm">
                        <button type="button" className="primary-btn2" data-bs-toggle="modal" data-bs-target="#compareModal01">
                          Comparing Car
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-2">
                    <div className="single-compare-card style-2">
                      <div className="compare-top">
                        <div className="single-car">
                          <div className="car-img">
                            <img src="assets/img/home1/cc-sucuki.png" alt="car" />
                          </div>
                          <div className="content text-center">
                            <h6 className="title"><Link legacyBehavior href="/car-deatils"><a>Ferrari Enzo</a></Link></h6>
                            <h6 className="price">$90, 319.000</h6>
                          </div>
                        </div>
                        <div className="vs">
                          <span>VS</span>
                        </div>
                        <div className="single-car">
                          <div className="car-img">
                            <img src="assets/img/home1/cc-toyota.png" alt="car" />
                          </div>
                          <div className="content text-center">
                            <h6 className="title"><Link legacyBehavior href="/car-deatils"><a>Ferrari 250  GTO</a></Link></h6>
                            <h6 className="price">$93, 740.000</h6>
                          </div>
                        </div>
                      </div>
                      <div className="compare-btm">
                        <button type="button" className="primary-btn2" data-bs-toggle="modal" data-bs-target="#compareModal01">
                          Comparing Car
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="compare-btn-and-slider-btn">
                  <div className="see-all-btn">
                    <Link legacyBehavior href="/compare">
                      <a className="view-btn2">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={15} viewBox="0 0 24 15">
                        <path d="M3.25973 0C3.15692 0 3.05831 0.0413135 2.98561 0.114852C2.91291 0.18839 2.87207 0.28813 2.87207 0.392129C2.87207 0.496128 2.91291 0.595867 2.98561 0.669405C3.05831 0.742944 3.15692 0.784257 3.25973 0.784257H4.81038C4.91319 0.784257 5.0118 0.742944 5.0845 0.669405C5.1572 0.595867 5.19804 0.496128 5.19804 0.392129C5.19804 0.28813 5.1572 0.18839 5.0845 0.114852C5.0118 0.0413135 4.91319 0 4.81038 0H3.25973ZM5.77953 0C5.67672 0 5.57812 0.0413135 5.50542 0.114852C5.43271 0.18839 5.39187 0.28813 5.39187 0.392129C5.39187 0.496128 5.43271 0.595867 5.50542 0.669405C5.57812 0.742944 5.67672 0.784257 5.77953 0.784257H10.3346C10.4374 0.784257 10.536 0.742944 10.6087 0.669405C10.6814 0.595867 10.7222 0.496128 10.7222 0.392129C10.7222 0.28813 10.6814 0.18839 10.6087 0.114852C10.536 0.0413135 10.4374 0 10.3346 0H5.77953Z" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.22966 2.74658C4.12685 2.74658 4.02824 2.7879 3.95554 2.86143C3.88284 2.93497 3.842 3.03471 3.842 3.13871C3.842 3.24271 3.88284 3.34245 3.95554 3.41599C4.02824 3.48953 4.12685 3.53084 4.22966 3.53084H13.1459C14.6535 3.53084 15.5827 3.76847 16.3261 4.15021C16.958 4.4745 17.4677 4.90564 18.106 5.4456C18.238 5.55716 18.3754 5.67323 18.5206 5.79421L18.6106 5.8691L18.7265 5.88145C22.2658 6.25829 23.0627 7.4684 23.2251 8.08796V9.60883C23.2251 9.71283 23.1842 9.81257 23.1115 9.88611C23.0388 9.95965 22.9402 10.001 22.8374 10.001H21.8361C21.6516 8.8883 20.6948 8.04032 19.5423 8.04032C18.3898 8.04032 17.433 8.8883 17.2485 10.001H10.2062C10.0217 8.8883 9.06497 8.04032 7.91245 8.04032C6.75993 8.04032 5.80318 8.8883 5.61865 10.001H3.74508C3.64227 10.001 3.54367 10.0423 3.47097 10.1158C3.39826 10.1894 3.35742 10.2891 3.35742 10.3931C3.35742 10.4971 3.39826 10.5968 3.47097 10.6704C3.54367 10.7439 3.64227 10.7852 3.74508 10.7852H5.61865C5.80318 11.8979 6.75993 12.7459 7.91245 12.7459C9.06497 12.7459 10.0217 11.8979 10.2062 10.7852H17.2485C17.433 11.8979 18.3898 12.7459 19.5423 12.7459C20.6948 12.7459 21.6516 11.8979 21.8361 10.7852H22.8374C23.1459 10.7852 23.4417 10.6613 23.6598 10.4407C23.8779 10.22 24.0004 9.92083 24.0004 9.60883V7.99562L23.9905 7.95209C23.7436 6.87001 22.5796 5.52874 18.9244 5.11425C18.8222 5.02877 18.722 4.94368 18.6232 4.85996C17.9833 4.31784 17.3947 3.81905 16.6771 3.45065C15.7971 2.99911 14.7396 2.74658 13.1459 2.74658H4.22966ZM17.9917 10.3931C17.9917 9.9771 18.155 9.57814 18.4458 9.28398C18.7366 8.98983 19.131 8.82458 19.5423 8.82458C19.9536 8.82458 20.348 8.98983 20.6388 9.28398C20.9296 9.57814 21.0929 9.9771 21.0929 10.3931C21.0929 10.8091 20.9296 11.208 20.6388 11.5022C20.348 11.7964 19.9536 11.9616 19.5423 11.9616C19.131 11.9616 18.7366 11.7964 18.4458 11.5022C18.155 11.208 17.9917 10.8091 17.9917 10.3931ZM7.91245 8.82458C7.50119 8.82458 7.10678 8.98983 6.81597 9.28398C6.52517 9.57814 6.3618 9.9771 6.3618 10.3931C6.3618 10.8091 6.52517 11.208 6.81597 11.5022C7.10678 11.7964 7.50119 11.9616 7.91245 11.9616C8.3237 11.9616 8.71812 11.7964 9.00892 11.5022C9.29972 11.208 9.46309 10.8091 9.46309 10.3931C9.46309 9.9771 9.29972 9.57814 9.00892 9.28398C8.71812 8.98983 8.3237 8.82458 7.91245 8.82458Z" />
                        <path d="M0 5.09867C0 4.99467 0.0408428 4.89493 0.113543 4.82139C0.186244 4.74786 0.284847 4.70654 0.387662 4.70654H4.74886C4.85167 4.70654 4.95027 4.74786 5.02297 4.82139C5.09567 4.89493 5.13652 4.99467 5.13652 5.09867C5.13652 5.20267 5.09567 5.30241 5.02297 5.37595C4.95027 5.44949 4.85167 5.4908 4.74886 5.4908H0.387662C0.284847 5.4908 0.186244 5.44949 0.113543 5.37595C0.0408428 5.30241 0 5.20267 0 5.09867ZM15.6836 5.60569C15.7563 5.67923 15.7971 5.77895 15.7971 5.88293C15.7971 5.98691 15.7563 6.08663 15.6836 6.16016L15.6532 6.19095C15.2897 6.55859 14.7968 6.76516 14.2828 6.76522H8.14089C8.03808 6.76522 7.93948 6.7239 7.86678 6.65037C7.79408 6.57683 7.75323 6.47709 7.75323 6.37309C7.75323 6.26909 7.79408 6.16935 7.86678 6.09581C7.93948 6.02227 8.03808 5.98096 8.14089 5.98096H14.2826C14.4354 5.98098 14.5866 5.95057 14.7277 5.89146C14.8688 5.83235 14.997 5.74571 15.105 5.63648L15.1355 5.60569C15.2082 5.53218 15.3068 5.49088 15.4096 5.49088C15.5123 5.49088 15.6109 5.53218 15.6836 5.60569ZM8.52856 14.6078C8.52856 14.5038 8.5694 14.4041 8.6421 14.3305C8.7148 14.257 8.8134 14.2157 8.91622 14.2157H10.5638C10.6666 14.2157 10.7652 14.257 10.8379 14.3305C10.9106 14.4041 10.9514 14.5038 10.9514 14.6078C10.9514 14.7118 10.9106 14.8115 10.8379 14.8851C10.7652 14.9586 10.6666 14.9999 10.5638 14.9999H8.91622C8.8134 14.9999 8.7148 14.9586 8.6421 14.8851C8.5694 14.8115 8.52856 14.7118 8.52856 14.6078ZM11.2422 14.6078C11.2422 14.5038 11.283 14.4041 11.3557 14.3305C11.4284 14.257 11.527 14.2157 11.6299 14.2157H15.991C16.0939 14.2157 16.1925 14.257 16.2652 14.3305C16.3379 14.4041 16.3787 14.5038 16.3787 14.6078C16.3787 14.7118 16.3379 14.8115 16.2652 14.8851C16.1925 14.9586 16.0939 14.9999 15.991 14.9999H11.6299C11.527 14.9999 11.4284 14.9586 11.3557 14.8851C11.283 14.8115 11.2422 14.7118 11.2422 14.6078Z" />
                      </svg>
                      See All Compare Car
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index