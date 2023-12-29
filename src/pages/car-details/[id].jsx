import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { latestCar } from "../../data/mappedData";
import MainLayout from '../../layout/MainLayout'
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

const CarDetails = () => {
  const router = useRouter(); // Get the router object
  const { id } = router.query; // Get the ID from the router object
  const [isSticky, setIsSticky] = useState(false); // State for the sticky navbar

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
    <div className="car-details">
      <h1>{car.carModel}</h1>
      {/* ... other details ... */}
    </div>
    </MainLayout>
  );
};

export default CarDetails;
