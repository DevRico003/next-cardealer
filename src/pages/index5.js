import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Topbar from "../components/Home5/Topbar";
import Header from "../components/Home5/Header";
import Banner from "../components/Home5/Banner/index";
import CarFeature from "../components/Home5/FeaturedCar/index";
import BrandCategory from "../components/Home5/Brand/index";
import RecentCar from "../components/Home5/RecentCar/index";
import HowItWork from "../components/Home5/HowItWork/index";
import WhyDrivco from "../components/Home5/WhyDrivco/WhyChooseUs";
import TopUseCar from "../components/Home5/TopUseCar/TopUseCar";
import UpCommingCar from "../components/Home5/UpCommingCar/UpCommingCar";
import Partner from "../components/Home5/Partnar/Partner";
import CompareCar from "../components/Home5/ComparingCars/CompareCar";
import CustomarReview from "../components/Home5/Testimonial/Testimonial";
import Blog from "../components/Home5/Blog/Blog";
import Footer from "../components/Home5/Footer";
function HomePage5() {
  const router = useRouter();
  const currentRoute = router.pathname;
  useEffect(() => {
    // Get the current route
    document.body.classList.add(currentRoute === "/index5" ? "home-5" : "");
  }, []);
  return (
    <>
      <Topbar />
      <Header />
      <Banner />
      <CarFeature />
      <BrandCategory />
      <WhyDrivco />
      <RecentCar />
      <HowItWork />
      <TopUseCar />
      <UpCommingCar />
      <Partner />
      <CompareCar />
      <CustomarReview />
      <Blog />
      <Footer />
    </>
  );
}

export default HomePage5;
