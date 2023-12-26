import React from "react";
import Header from "../components/Home3/Header";
import Banner from "../components/Home3/Banner";
import BrandCategory from "../components/Home3/BrandCategory";
import FeatureCar from "../components/Home3/FeaturedCars";
import RecentLaunchedCar from "../components/Home3/RecentLaunchedCar";
import Partner from "../components/Home3/Partner";
import WhyChoose from "../components/Home3/WhyChoose";
import TopUsescar from "../components/Home3/TopUsedCars";
import InnerBanner from "../components/Home3/InnerBanner";
import UpcommingCar from "../components/Home3/UpcomingCar";
import CompareCar from "../components/Home3/ComparingCars";
import Testimonial from "../components/Home3/Testimonial";
import Blog from "../components/Home3/Blog";
import Modals from "../components/Home1/Modals";
import Footer1 from "../components/Footer/Footer1";

function HomePage3() {
  return (
    <>
      <Modals />
      <Header />
      <Banner />
      <BrandCategory />
      <FeatureCar />
      <RecentLaunchedCar />
      <Partner />
      <WhyChoose />
      <TopUsescar />
      <InnerBanner />
      <UpcommingCar />
      <CompareCar />
      <Testimonial />
      <Blog />
      <Footer1 />
    </>
  );
}

export default HomePage3;
