import Footer1 from "../components/Footer/Footer1";
import Header from "../components/Home1/Header";
import Banner from "../components/Home1/Banner/index";
import QuickLinkArea from "../components/Home1/QuickLinkArea";
import Topbar from "../components/Home1/Topbar";
import BrandCategory from "../components/Home1/BrandCategory";
import WhyChoose from "../components/Home1/WhyChoose/index";
import UpcomingCars from "../components/Home1/UpcomingCars/index";
export default function Home() {
  return (
    <>
      <Topbar />
      <Header />
      <Banner />
      <QuickLinkArea />
      <BrandCategory />
      <WhyChoose />
      <UpcomingCars />
      <Footer1 />
    </>
  );
}
