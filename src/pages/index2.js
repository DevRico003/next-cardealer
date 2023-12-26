import React from "react";
import Footer1 from "../components/Footer/Footer1";
import Header from "../components/Home2/Header";
import Banner from "../components/Home2/Banner";
import TestSlider from "../components/Home2/TestSlider";
import DreamCar from "../components/Home2/DreamCar";
import FeatureCars from "../components/Home2/FeaturedCars/index";
import InerBanner from "../components/Home2/InnerBanner";
import RecentLaunchCars from "../components/Home2/RecentLaunchedCars";
import BroseUsedCar from "../components/Home2/BrowseUsedCar";
import HowItWorks from "../components/Home2/HowDoesItWork";
import UpCommingsCar from "../components/Home2/UpcomingCars";
import OurTrustedPartner from "../components/Home2/OurTrustedPartners";
import CompareCarWtihBrand from "../components/Home2/ComparingCarWithBrand";
import Testimonial from "../components/Home2/Testimonial";
import Blog from "../components/Home2/Blog";
import Modals from "../components/Home1/Modals";

function HomePage2() {
  return (
    <>
      <Modals />
      <Header />
      <Banner />
      <TestSlider />
      <DreamCar />
      <FeatureCars />
      <InerBanner />
      <RecentLaunchCars />
      <BroseUsedCar />
      <HowItWorks />
      <UpCommingsCar />
      <OurTrustedPartner />
      <CompareCarWtihBrand />
      <Testimonial />
      <Blog />
      <Footer1 />
    </>
  );
}

export default HomePage2;
