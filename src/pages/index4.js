import React from "react";
import Header from "../components/Home4/Header";
import Banner from "../components/Home4/Banner/index";
import AvailableCar from "../components/Home4/AvailableCar/index";
import LatestCar from "../components/Home4/LatestCar/index";
import FeatureCar from "../components/Home4/FeaturedCars";
import WhyChooseus from "../components/Home4/WhyChooseUs";
import UseCars from "../components/Home4/UsedCars";
import InnerBanner from "../components/Home4/InnerBanner";
import UpCommingCar from "../components/Home4/TopUpcomingCar";
import Partner from "../components/Home4/Partner";
import Testimonial from "../components/Home4/Testimonial";
import CompareCare from "../components/Home4/ComparingCar";
import Blog from "../components/Home4/Blog";
import Modals from "../components/Home1/Modals";
import Footer1 from "../components/Footer/Footer1";

function index4() {
  return (
    <>
      <Modals />
      <Header />
      <Banner />
      <AvailableCar />
      <LatestCar />
      <FeatureCar />
      <WhyChooseus />
      <UseCars />
      <InnerBanner />
      <UpCommingCar />
      <CompareCare />
      <Testimonial />
      <Partner />
      <Blog />
      <Footer1 />
    </>
  );
}

export default index4;
