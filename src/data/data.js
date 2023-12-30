import { latestCar } from '../data/mappedData';

const ids = latestCar.map(car => car.id);

export const BrandCategoryHome1 = [
  {
    id: 1,
    icons: "assets/img/home1/icon/JEEP.svg",
    image: "assets/img/home1/icon/suzuki-car.svg",
  },
  {
    id: 2,
    icons: "assets/img/home1/icon/BMW.svg",
    image: "assets/img/home1/icon/bmw-car.svg",
  },
  {
    id: 3,
    icons: "assets/img/home1/icon/TOYOTA.svg",
    image: "assets/img/home1/icon/toyota-car.svg",
  },
  {
    id: 4,
    icons: "assets/img/home1/icon/TESLA.svg",
    image: "assets/img/home1/icon/tesla-car.svg",
  },
  {
    id: 5,
    icons: "assets/img/home1/icon/AUDI.svg",
    image: "assets/img/home1/icon/honda-car.svg",
  },
  {
    id: 6,
    icons: "assets/img/home1/icon/FORD.svg",

    image: "assets/img/home1/icon/mazda-car.svg",
  },
  {
    id: 7,
    icons: "assets/img/home1/icon/LAND ROVER.svg",
    image: "assets/img/home1/icon/suzuki-car.svg",
  },
  {
    id: 8,
    icons: "assets/img/home1/icon/MINI.svg",
    image: "assets/img/home1/icon/bmw-car.svg",
  },
  {
    id: 9,
    icons: "assets/img/home1/icon/MERCEDES-BENZ.svg",
    image: "assets/img/home1/icon/toyota-car.svg",
  },
  {
    id: 10,
    icons: "assets/img/home1/icon/LAMBORGHINI.svg",
    image: "assets/img/home1/icon/tesla-car.svg",
  },
  {
    id: 11,
    icons: "assets/img/home1/icon/SKODA.svg",
    image: "assets/img/home1/icon/honda-car.svg",
  },
  {
    id: 12,
    icons: "assets/img/home1/icon/VW.svg",
    image: "assets/img/home1/icon/mazda-car.svg",
  },
];

export const featuredCarData = [
  {
    id: 1,
    productImgSrc: [
      {
        id: 1,
        img: "assets/img/home5/feature-car-01.png",
      },
      {
        id: 2,
        img: "assets/img/home5/feature-car-02.png",
      },
      {
        id: 3,
        img: "assets/img/home5/feature-car-03.png",
      },
      {
        id: 4,
        img: "assets/img/home5/feature-car-04.png",
      },
    ],
    location: "Panama City",
    productName: "Mercedes-Benz Class-2023",
    slug: "mercedes-benz-class-2023",
    features: [
      {
        id: 1,
        iconSrc: "assets/img/home4/icon/miles.svg",
        text: "2500 miles",
      },
      { id: 2, iconSrc: "assets/img/home4/icon/menual.svg", text: "Automatic" },
      { id: 3, iconSrc: "assets/img/home4/icon/fuel.svg", text: "Petrol" },
      {
        id: 4,
        iconSrc: "assets/img/home4/icon/electric.svg",
        text: "Electric",
      },
    ],
    price: "$7,65600",
  },
  {
    id: 2,
    productImgSrc: [
      {
        id: 1,
        img: "assets/img/home5/feature-car-01.png",
      },
      {
        id: 2,
        img: "assets/img/home5/feature-car-02.png",
      },
      {
        id: 3,
        img: "assets/img/home5/feature-car-03.png",
      },
      {
        id: 4,
        img: "assets/img/home5/feature-car-04.png",
      },
    ],
    location: "Panama City",
    productName: "Mercedes-Benzs Class-2023",
    slug: "mercedes-benzs-class-2023",
    features: [
      {
        id: 1,
        iconSrc: "assets/img/home4/icon/miles.svg",
        text: "2500 miles",
      },
      { id: 2, iconSrc: "assets/img/home4/icon/menual.svg", text: "Automatic" },
      { id: 3, iconSrc: "assets/img/home4/icon/fuel.svg", text: "Petrol" },
      {
        id: 4,
        iconSrc: "assets/img/home4/icon/electric.svg",
        text: "Electric",
      },
    ],
    price: "$7,65600",
  },
];

export const menuData = [
  {
    label: "Home",
    link: "#",
    // subMenu: [
    //   { label: "Home 01", link: "index.html" },
    //   { label: "Home 02", link: "index2.html" },
    //   { label: "Home 03", link: "index3.html" },
    //   { label: "Home 04", link: "index4.html" },
    //   { label: "Home 05", link: "index5.html" },
    //   { label: "Home 06", link: "index6.html" },
    // ],
  },
  {
    label: "NEW CAR",
    link: "#",
    subMenu: [
      // Browse by Brand
      {
        label: "Browse by Brand",
        subMenu: [
          { label: "Merchedes Benz (10)", link: "#" },
          { label: "Volkswagen (10)", link: "#" },
          // ... other brand items
        ],
      },
      // Popular Models
      {
        label: "Popular Models",
        subMenu: [
          { label: "Toyota Camry", link: "#" },
          { label: "Ford Mustang", link: "#" },
          // ... other model items
        ],
      },
      // Popular Cities
      {
        label: "Popular Cities",
        subMenu: [
          { label: "Panama City (10)", link: "#" },
          { label: "Sydne City (10)", link: "#" },
          // ... other city items
        ],
      },
    ],
  },
  {
    label: "USED CAR",
    link: "#",
    subMenu: [
      // Similar structure as "NEW CAR"
    ],
  },
  {
    label: "Pages",
    link: "#",
    subMenu: [
      { label: "About Us", link: "about.html" },
      { label: "Car Details", link: "car-deatils.html" },
      // ... other page items
    ],
  },
  {
    label: "CONTACT US",
    link: "car-deatils.html",
  },
];

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
    path: "/single-brand-category",
    sub_title: "Suzuki Brand",
    title: "To Choose Suzuki Car",
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

export const singleBrandCategoryData = [
  {
    id: 1,
    productImgSrc: [
      {
        id: 1,
        img: "assets/img/home5/feature-car-01.png",
      },
      {
        id: 2,
        img: "assets/img/home5/feature-car-02.png",
      },
      {
        id: 3,
        img: "assets/img/home5/feature-car-03.png",
      },
      {
        id: 4,
        img: "assets/img/home5/feature-car-04.png",
      },
    ],
    location: "Panama City",
    productName: "Merqcedes-Benz Class-2023",
    slug: "merqcedes-benz-class-2023",
    features: [
      {
        id: 1,
        iconSrc: "assets/img/home4/icon/miles.svg",
        text: "2500 miles",
      },
      { id: 2, iconSrc: "assets/img/home4/icon/menual.svg", text: "Automatic" },
      { id: 3, iconSrc: "assets/img/home4/icon/fuel.svg", text: "Petrol" },
      {
        id: 4,
        iconSrc: "assets/img/home4/icon/electric.svg",
        text: "Electric",
      },
    ],
    price: "$7,65600",
  },
  {
    id: 2,
    productImgSrc: [
      {
        id: 1,
        img: "assets/img/home5/feature-car-01.png",
      },
      {
        id: 2,
        img: "assets/img/home5/feature-car-02.png",
      },
      {
        id: 3,
        img: "assets/img/home5/feature-car-03.png",
      },
      {
        id: 4,
        img: "assets/img/home5/feature-car-04.png",
      },
    ],
    location: "Panama City",
    productName: "Merqcedes-Benz Class-2023",
    slug: "merqcedes-benz-class-2023",
    features: [
      {
        id: 1,
        iconSrc: "assets/img/home4/icon/miles.svg",
        text: "2500 miles",
      },
      { id: 2, iconSrc: "assets/img/home4/icon/menual.svg", text: "Automatic" },
      { id: 3, iconSrc: "assets/img/home4/icon/fuel.svg", text: "Petrol" },
      {
        id: 4,
        iconSrc: "assets/img/home4/icon/electric.svg",
        text: "Electric",
      },
    ],
    price: "$7,65600",
  },
  {
    id: 3,
    productImgSrc: [
      {
        id: 1,
        img: "assets/img/home5/feature-car-01.png",
      },
      {
        id: 2,
        img: "assets/img/home5/feature-car-02.png",
      },
      {
        id: 3,
        img: "assets/img/home5/feature-car-03.png",
      },
      {
        id: 4,
        img: "assets/img/home5/feature-car-04.png",
      },
    ],
    location: "Panama City",
    productName: "Merqcedes-Benz Class-2023",
    slug: "merqcedes-benz-class-2023",
    features: [
      {
        id: 1,
        iconSrc: "assets/img/home4/icon/miles.svg",
        text: "2500 miles",
      },
      { id: 2, iconSrc: "assets/img/home4/icon/menual.svg", text: "Automatic" },
      { id: 3, iconSrc: "assets/img/home4/icon/fuel.svg", text: "Petrol" },
      {
        id: 4,
        iconSrc: "assets/img/home4/icon/electric.svg",
        text: "Electric",
      },
    ],
    price: "$7,65600",
  },
];
export default {
  singleBrandCategoryData,
  BrandCategoryHome1,
  featuredCarData,
  breadcrumbData,
};
