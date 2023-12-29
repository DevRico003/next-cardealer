import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { latestCar } from "../data/mappedData";
import { latestCarImages } from "../data/imageData"
import MainLayout from '../layout/MainLayout'
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

const CarDetails = () => {
    const router = useRouter(); // Get the router object
    const { id } = router.query; // Get the ID from the router object
    const [isSticky, setIsSticky] = useState(false); // State for the sticky navbar
    const [carImages, setCarImages] = useState({ images: [] }); // Define carImages in your component's state
  
    const slideSetting = useMemo(()=>{
      return {
          slidesPerView: "auto",
          speed: 1500,
          spaceBetween: 25,
          loop: true,
          autoplay: {
              delay: 2500, // Autoplay duration in milliseconds
          },
          navigation: {
              nextEl: ".product-stand-next",
              prevEl: ".product-stand-prev",
          },
  
          }
    })
  
    useEffect(() => { 
      if (router.isReady) { // If the router is ready, find the car by ID from the latestCar array
        const car = latestCar.find(car => car.id.toString() === id); 
        console.log("Car found after router is ready:", car); 
      }
    }, [router.isReady, id]); // Add router.isReady and id to the dependency array
  
    if (!router.isReady) {
      return <p>Loading...</p>; // Show loading state while waiting for the router
    }
  
    // Find the car by ID from the latestCar array
    const car = latestCar.find(car => car.id.toString() === id);
  
    if (!car) {
      return <p>Car not found!</p>;
    }
  
    useEffect(() => {
      if (router.isReady) {
        // Find the images for the car with the given ID
        const images = latestCarImages.find(images => images.id.toString() === id);
        console.log("Car images found after router is ready:", images);
    
        // Update carImages in the state
        setCarImages(images);
      }
    }, [router.isReady, id]);

    useEffect(() => {
      const handleScroll = () => { 
        if (window.scrollY >= 600) { // Set the navbar to sticky
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll); // Add event listener when the component is mounted
  
      return () => {
        window.removeEventListener('scroll', handleScroll); // Remove event listener when the component is unmounted
      };
    }, []);
  
    const phoneInputField = useRef(null);
  
    useEffect(() => {
      if (phoneInputField.current) { // Initialize the phone number input field
        window.intlTelInput(phoneInputField.current, { 
          utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        });
      }
    }, []);
  
    const [contactData, setContactData] = useState({ // Set the default values for the contact data
      phoneNumber: '+990737621432',
      email: 'info@gmail.com',
      whatsapp: '+990737621432',
    });
  
    const handleClick = (type) => { // Handle the click event for the phone number and email address
      let hrefValue = '';
      let newText = '';
  
      switch (type) {
        case 'phoneNumber': // Set the href value and the text for the clicked element
          hrefValue = `tel:${contactData.phoneNumber}`;
          newText = contactData.phoneNumber;
          break;
        case 'emailAdress': // Set the href value and the text for the clicked element
          hrefValue = `mailto:${contactData.email}`;
          newText = contactData.email;
          break;
        case 'emailAdresss': // Set the href value and the text for the clicked element
          hrefValue = contactData.whatsapp
            ? `https://api.whatsapp.com/send?phone=${contactData.whatsapp}&text=Hello this is the starting message`
            : '';
          newText = contactData.whatsapp || 'Whatsapp';
          break;
        default:
          break;
      }
  
      // Set the href attribute and update the text for the clicked element
      const element = document.getElementById(type);
      if (element) {
        const link = element.querySelector('a');
        link.setAttribute('href', hrefValue);
        link.textContent = `${newText}`;
      }
    };
  
    return (
      <MainLayout>
        <div className="car-details-area pt-100 mb-100">
        <div className="container">
          {/* navbar */}
          <div className="row mb-50">
            <div className="col-lg-12 position-relative">
              <div className={`car-details-menu ${isSticky? "sticky":""}` }>
                <nav id="navbar-example2" className="navbar">
                  <ul className="nav nav-pills">
                    <li className="nav-item">
                      <a className="nav-link" href="#car-img">Car Image</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#car-info">Car Info</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#kye-features">Key Features</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#overview">Overview</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#performance">Engine &amp; Performance</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#car-milage">Mileage</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          {/* image slider */}
          <div className="row">
            <div className="col-lg-8">
              <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset={0} className="scrollspy-example" tabIndex={0}>
              <div className="single-item mb-50" id="car-img">
                    <div className="car-img-area">
                      <div className="tab-content mb-30" id="myTab5Content">
                        <div className="tab-pane fade show active" id="exterior" role="tabpanel" aria-labelledby="exterior-tab">
                          <div className="product-img">
                            <div className="number-of-img">
                              <img src="assets/img/home1/icon/gallery-icon-1.svg" alt="" />
                              {carImages.images.length}
                            </div>
                            <div className="slider-btn-group">
                              <div className="product-stand-prev swiper-arrow">
                                <svg width={8} height={13} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                                </svg>
                              </div>
                              <div className="product-stand-next swiper-arrow">
                                <svg width={8} height={13} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                                </svg>
                              </div>
                            </div>
                            {carImages && carImages.images.length > 0 && (
                              <Swiper {...slideSetting} className="swiper product-img-slider">
                                <div className="swiper-wrapper">
                                  {carImages.images.map((image, index) => (
                                    <SwiperSlide key={index} className="swiper-slide">
                                      <img src={image} alt={`Car Image ${index + 1}`} />
                                    </SwiperSlide>
                                  ))}
                                </div>
                              </Swiper>
                            )}
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
      </MainLayout>
    );
  };
  
  export default CarDetails;