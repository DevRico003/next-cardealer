import React from "react";
import Header from "../components/Home6/Header";
import Banner from "../components/Home6/Banner";
import SearchFilter from "../components/Home6/SearchFilter/index";
import LatestCar from "../components/Home6/LatestCar/index";
import BLog from "../components/Home6/Blog/index";
import CompareCar from "../components/Home6/CompareCar/index";
import Brand from "../components/Home6/Brands/index";
import TopUsedCar from "../components/Home6/TopUsedCar/index";
import InnerBanner from "../components/Home6/InnerBanner/index";
import UpCommingCar from "../components/Home6/UpcommingCar/index";
import HowItWorks from "../components/Home6/HowItWork/index";
import TopNewCars from "../components/Home6/TopNewCars/index";
import Topbar from "../components/Home6/Topbar/index";
import Footer from "../components/Home6/Footer";
import Modals from "../components/Home6/common/Modals";
import CustomarFeedback from "../components/Home6/Testimonial";

function Homepage6() {
  return (
    <>
      <Modals />
      <Topbar />
      <Header />
      <Banner />
      <SearchFilter />
      <LatestCar />
      <Brand />
      <TopUsedCar />
      <InnerBanner />
      <UpCommingCar />
      <HowItWorks />
      <TopNewCars />
      <CompareCar />
      <CustomarFeedback />
      <BLog />
      <Footer />
    </>
  );
}

export default Homepage6;
