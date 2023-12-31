import Footer1 from "../components/Footer/Footer1";
import Header from "../components/Home1/Header";
import Banner from "../components/Home1/Banner/index";
import QuickLinkArea from "../components/Home1/QuickLinkArea";
import Topbar from "../components/Home1/Topbar";
import BrandCategory from "../components/Home1/BrandCategory";
import WhyChoose from "../components/Home1/WhyChoose/index";
import UpcomingCars from "../components/Home1/UpcomingCars/index";
import CookieConsent, { Cookies } from "react-cookie-consent";
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
      <CookieConsent
         location="bottom"
         buttonText="Akzeptieren"
         declineButtonText="Ablehnen"
         cookieName="carcenter-erding-cookies"
         style={{ background: "#58DA93" }}
         buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
         expires={150}
         enableDeclineButton
 >
  Wir verwenden Cookies, um unsere Website und unseren Service zu optimieren und zu verbessern. 
       Cookies sind kleine Textdateien, die von Websites verwendet werden können, 
       um die Benutzererfahrung effizienter zu gestalten.
</CookieConsent>
    </>
  );
}
