import { latestCar } from '../data/mappedData';

const ids = latestCar.map(car => car.id);
const uniqueMakes = [...new Set(latestCar.map(car => car.make))];

export const BrandCategoryHome1 = uniqueMakes.map((make, index) => ({
  id: index + 1,
  icons: `assets/img/home1/icon/${make}.svg`,
  image: "assets/img/home1/icon/bmw-car.svg",
}));

export const breadcrumbData = [
  {
    id: 1,
    path: "/kontakt",
    sub_title: "Schnelle und einfache Kommunikation mit unserem Team.",
    title: "Kontaktieren Sie unser Team",
    img_src: "assets/img/inner-page/inner-banner-img.png",
  },
  {
    id: 2,
    path: "/ueber-uns",
    sub_title: "Unsere Verpflichtung zur Qualität und Zuverlässigkeit.",
    title: "Unsere Mission",
    img_src: "assets/img/inner-page/inner-banner-img.png",
  },
  {
    id: 3,
    path: `/[id]`,
    sub_title: "Erfahren Sie, warum dieses Auto einzigartig ist.",
    title: "Fahrzeugdetails",
    img_src: "assets/img/inner-page/inner-banner-img.png",
  },
{
    id: 4,
    path: "/fahrzeuge",
    sub_title: "Entdecken Sie unsere Vielfalt an Fahrzeugen.",
    title: "Alle Modelle auf einen Blick",
    img_src: "assets/img/inner-page/inner-banner-img.png",
  },
  {
    id: 5,
    path: "/search-results",
    sub_title: "Ihre Marke, Ihr Budget, Ihr Traumwagen",
    title: "Traumauto entdecken",
    img_src: "assets/img/inner-page/inner-banner-img.png",
  },
  {
    id: 6,
    path: "/brand-category",
    sub_title: "Brand Category",
    title: "Find The Best Car",
    img_src: "assets/img/inner-page/inner-banner-img.png",
  },
  {
    id: 7,
    path: "/car-listing-right-sidebar",
    sub_title: "Car Grid System",
    title: "To Choose Dream Car",
    img_src: "assets/img/inner-page/inner-banner-img.png",
  },
  {
    id: 8,
    path: "/car-listing-no-sidebar",
    sub_title: "Car Listing System",
    title: "To Choose Dream Car",
    img_src: "assets/img/inner-page/inner-banner-img.png",
  },
  {
    id: 9,
    path: "/special-offer",
    sub_title: "Special Offer",
    title: "To Get Special Offer",
    img_src: "assets/img/inner-page/inner-banner-img.png",
  },
  {
    id: 10,
    path: "/return-enchange",
    sub_title: "Return & Exchange Policy",
    title: "Return & Exchange",
    img_src: "assets/img/inner-page/inner-banner-img.png",
  },
  {
    id: 11,
    path: "/customer-review",
    sub_title: "Customer Reviews",
    title: "Customer Feedback",
    img_src: "assets/img/inner-page/inner-banner-img.png",
  },
  {
    id: 12,
    path: "/faq",
    sub_title: "Frequently",
    title: "Answer & Questions",
    img_src: "assets/img/inner-page/inner-banner-img.png",
  },
  {
    id: 13,
    path: "/blog-standard",
    sub_title: "Blog Standard",
    title: "Car Blog Standard",
    img_src: "assets/img/inner-page/inner-banner-img.png",
  },
  {
    id: 13,
    path: "/blog-details",
    sub_title: "Blog Details",
    title: "Car Blog Details",
    img_src: "assets/img/inner-page/inner-banner-img.png",
  },
  {
    id: 14,
    path: "/shop",
    sub_title: "Shop Car Parts",
    title: "Shop Vehicles Parts",
    img_src: "assets/img/inner-page/product-dt-bannner-img.png",
  },
  {
    id: 15,
    path: "/product-details",
    sub_title: "Product Details",
    title: "Steering Rack Details",
    img_src: "assets/img/inner-page/product-dt-bannner-img.png",
  },
  {
    id: 16,
    path: "/checkout",
    sub_title: "Product Checkout",
    title: "Processed Checkout",
    img_src: "assets/img/inner-page/product-dt-bannner-img.png",
  },
  {
    id: 17,
    path: "/compare",
    sub_title: "Compare Cars",
    title: "Find The Best Car",
    img_src: "assets/img/inner-page/inner-banner-img.png",
  },
  {
    id: 18,
    path: "/car-auction-details",
    sub_title: "$34,637.00",
    title: "Lamborghini Aventador",
    img_src: "assets/img/inner-page/car-dt-banner-img.png",
  },
];

export default {
  BrandCategoryHome1,
  breadcrumbData,
};
