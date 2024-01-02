import React, { useEffect, useState } from "react";
import Link from "next/link";

function index() {
  // State to store BrandCategoryHome1 data
  const [BrandCategoryHome1, setBrandCategoryHome1] = useState([]);

  useEffect(() => {
    // Fetch data and generate BrandCategoryHome1
    const fetchBrandCategoryData = async () => {
      try {
        const response = await fetch('/api/cars'); // Replace with the actual API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Process data to generate BrandCategoryHome1
        const uniqueMakes = [...new Set(data.map(car => car.make))];
        const brandCategoryData = uniqueMakes.map((make, index) => ({
          id: index + 1,
          icons: `assets/img/home1/icon/${make}.svg`
          // image: "assets/img/home1/icon/bmw-car.svg",
        }));

        // Set BrandCategoryHome1 in state
        setBrandCategoryHome1(brandCategoryData);
      } catch (error) {
        console.error('Fetching cars failed:', error);
        setBrandCategoryHome1([]); // Set an empty array if an error occurs
      }
    };

    // Call the fetchBrandCategoryData function
    fetchBrandCategoryData();
  }, []);

  return (
    <div className="brand-category-area pt-100 mb-100" id="marken">
      <div className="container">
        <div className="row row-cols-xl-6 row-cols-lg-5 row-cols-md-3 row-cols-sm-3 row-cols-2 g-4 justify-content-center mb-40">
          {BrandCategoryHome1.map((item) => {
            const { id, image, icons } = item;
            const make = icons.split('/')[4].split('.svg')[0];
            return (
              <div className="col wow fadeInUp" data-wow-delay="200ms" key={id}>
                <Link legacyBehavior href={{ pathname: '/fahrzeuge', query: { make } }}>
                  <a className="single-category1">
                    {/* for image change brand-image to brand-icon */}
                    <div className="brand-image"> 
                      <img src={icons} alt="" />
                    </div>
                    {/* <div className="brand-car">
                      <img src={image} alt="" />
                    </div> */}
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="row wow fadeInUp" data-wow-delay="300ms">
          <div className="col-lg-12">
            <div className="view-btn-area">
              <p>Alle Marken </p>
              <Link legacyBehavior href="/fahrzeuge">
                <a className="view-btn">ansehen</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
