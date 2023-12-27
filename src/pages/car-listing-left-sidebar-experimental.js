import React, { useState, useEffect } from 'react';
import { latestCar } from '../data/data';
import MainLayout from '../layout/MainLayout';
import CarLeftSidebar from '../utils/CarLeftSidebar';
// import SelectComponent from '../utils/SelectComponent';
import Link from 'next/link';

function CarListingLeftSidebar() {
  const [activeClass, setActiveClass] = useState('grid-group-wrapper');
  const [cars, setCars] = useState([]);
  const [selectedCondition, setSelectedCondition] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [currentPage, setCurrentPage] = useState(1); // New state for current page
  const itemsPerPage = 10; // Number of cars per page

  useEffect(() => {
    let filteredCars = latestCar;
    if (selectedCondition) {
      filteredCars = filteredCars.filter(car => car.condition === selectedCondition);
    }
    if (searchInput) {
      filteredCars = filteredCars.filter(car => car.make.toLowerCase().includes(searchInput.toLowerCase()));
    }
    setCars(filteredCars);
  }, [selectedCondition, searchInput]);

  // const toggleView = () => {
  //   setActiveClass(activeClass === 'grid-group-wrapper' ? 'list-group-wrapper' : 'grid-group-wrapper');
  // };

  // const conditions = ['Used Car', 'New Car'];

  // const handleConditionChange = (newCondition) => {
  //   setSelectedCondition(newCondition);
  // };

  const handleSearchInputChange = (newSearchInput) => {
    setSearchInput(newSearchInput);
  };

  const handlePageChange = (newPage) => { // New function to handle page changes
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(cars.length / itemsPerPage); // Total number of pages
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1); // Array of page numbers

  const displayedCars = cars.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage); // New line to slice cars array
  console.log(cars)
  return (
    <MainLayout>
      <div className="product-page pt-100 mb-100">
        <div className="container">
          <div className="row g-xl-4 gy-5">
            <CarLeftSidebar />
            <div className="col-xl-8 order-xl-2 order-1">
              <div className="row mb-40">
                <div className="col-lg-12">
                  <div className="show-item-and-filter">
                    <p>Showing <strong>{cars.length}</strong> cars available in stock</p>
                    {/* <div className="filter-view">
                      <div className="filter-atra">
                        <h6>Filter By:</h6>
                        <form>
                          <div className="form-inner">
                            <SelectComponent placeholder="Select conditions" options={conditions} />
                          </div>
                        </form> */}
                      {/* </div> */}
                      {/* <div className="view"> */}
                        {/* <ul className="btn-group list-grid-btn-group"> */}
                          {/* <li className={activeClass === 'grid-group-wrapper' ? 'active grid' : 'grid'} onClick={toggleView}> */}
                            {/* Grid View Icon */}
                          {/* </li> */}
                          {/* <li className={activeClass === 'list-group-wrapper' ? 'active list' : 'list'} onClick={toggleView}> */}
                            {/* List View Icon */}
                          {/* </li> */}
                        {/* </ul> */}
                      {/* </div> */}
                    {/* </div> */}
                  </div>
                </div>
              </div>
              <div className="list-grid-main">
                <div className={`list-grid-product-wrap ${activeClass}`}>
                  <div className="row g-4 justify-content-center mb-40">
                    {displayedCars.map((car) => (
                      <div key={car.id} className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp item" data-wow-delay="200ms">
                        <div className="product-card">
                          <div className="product-img">
                            <a href="#" className="fav">
                              {/* Favorite Icon */}
                            </a>
                            <div className="swiper product-img-slider">
                              <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                  <img src={car.images[1]} alt={car.carModel} />
                                </div>
                                {/* Additional Images */}
                              </div>
                            </div>
                          </div>
                          <div className="product-content">
                            <h5>
                              <Link legacyBehavior href={`/car-details/${car.id}`}>
                                <a>{car.carModel}</a>
                              </Link>
                            </h5>
                            <div className="price-location">
                              <div className="price">
                                <strong>€{car.price.toLocaleString()}</strong>
                              </div>
                              <div className="location">
                                <a href="#">
                                  <i className="bi bi-geo-alt" /> {car.location}
                                </a>
                              </div>
                            </div>
                            <ul className="features">
                              <li>
                                <img src="assets/img/home4/icon/miles.svg" alt="" /> {car.mileage}
                              </li>
                              <li>
                                <img src="assets/img/home4/icon/fuel.svg" alt="" /> {car.fuelTypes}
                              </li>
                              {/* Additional Features */}
                            </ul>
                            <div className="content-btm">
                              <Link legacyBehavior href={`/car-details/${car.id}`}>
                                <a className="view-btn2">View Details</a>
                              </Link>
                              <div className="brand">
                                <Link legacyBehavior href="/single-brand-category">
                                  <a>
                                    <img src="assets/img/home1/icon/bmw.svg" alt="brand logo" />
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="pagination-and-next-prev">
                        <div className="pagination">
                          <ul>
                          {pageNumbers.map(pageNumber => (
                              <li key={pageNumber} className={pageNumber === currentPage ? 'active' : ''}>
                                <a href="#" onClick={(e) => { e.preventDefault(); handlePageChange(pageNumber); }}>{pageNumber}</a>
                              </li>
                            ))}
                            {/* Additional Pagination */}
                          </ul>
                        </div>
                        <div className="next-prev-btn">
                          <ul>
                            <li>
                              {/* Prev Button */}
                            </li>
                            <li>
                              {/* Next Button */}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="toprated-used-cars mb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title">
                <h4>Top Rated Used Cars For Sale</h4>
              </div>
              <div className="brand-list">
                <ul>
                  <li><Link legacyBehavior href="/single-brand-category"><a>Mitsubishi <span>(1,234)</span></a></Link></li>
                  {/* Additional Brands */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default CarListingLeftSidebar;
