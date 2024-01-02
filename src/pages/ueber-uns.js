import React, { useMemo, useState } from "react";
import Marquee from "react-fast-marquee";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";
import 'node_modules/react-modal-video/css/modal-video.css';
import ModalVideo from 'react-modal-video';
import WhyChoose from "../components/Home1/WhyChoose/index";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);
import MainLayout from '../layout/MainLayout'


function About() {
  const [isOpen, setOpen] = useState(false);
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
  const images = [
    {
      id: 1,
      imageBig: "assets/img/inner-page/galerie/1.jpeg",
    }
    ,
    {
      id: 2,
      imageBig: "assets/img/inner-page/galerie/2.jpeg",
    }
    ,
    {
      id: 3,
      imageBig: "assets/img/inner-page/galerie/3.jpeg",
    }
    ,
    {
      id:4,
      imageBig: "assets/img/inner-page/galerie/4.jpeg",
    },
    {
      id:5,
      imageBig: "assets/img/inner-page/galerie/5.jpeg",
    }
    ,
    {
      id: 6,
      imageBig: "assets/img/inner-page/galerie/6.jpeg",
    }
    ,
    {
      id: 7,
      imageBig: "assets/img/inner-page/galerie/7.jpeg",
    }
    ,
    {
      id: 8,
      imageBig: "assets/img/inner-page/galerie/8.jpeg",
    }
    ,
    {
      id: 9,
      imageBig: "assets/img/inner-page/galerie/9.jpeg",
    }
    ,
    {
      id: 10,
      imageBig: "assets/img/inner-page/galerie/10.jpeg",
    }
    ,
    {
      id: 11,
      imageBig: "assets/img/inner-page/galerie/11.jpeg",
    }
    ,
    {
      id: 12,
      imageBig: "assets/img/inner-page/galerie/12.jpeg"
    }
  ]
  const slideSettings = useMemo(()=>{
    return {
        slidesPerView: "auto",
        speed: 1500,
        spaceBetween: 25,
        loop: true,
        autoplay: {
            delay: 2500, // Autoplay duration in milliseconds
        },
        navigation: {
            nextEl: ".next-4",
            prevEl: ".prev-4",
        },

        breakpoints: {
            280: {
                slidesPerView: 1,
            },
            386: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            1400: {
                slidesPerView: 2
            },
        }
        }
})
  return (
    <MainLayout>
        <div className="welcome-banner-section pb-100 pt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="welcome-wrap text-center">
                  <div className="section-title1 text-center wow fadeInUp" data-wow-delay="200ms">
                    <span>(Seit 2004)</span>
                    <h2>Willkommen bei CarCenterErding</h2>
                  </div>
                  <div className="welcome-content wow fadeInUp" data-wow-delay="300ms">
                    <p>Entdecken Sie bei uns eine vielfältige Auswahl an hochwertigen Fahrzeugen, die keine Wünsche offenlassen. Im CarCenter Erding stehen Leidenschaft für Autos und individueller Kundenservice an erster Stelle. Ob Sie auf der Suche nach einem zuverlässigen Gebrauchtwagen, einem luxuriösen Sportwagen oder einem umweltfreundlichen Elektrofahrzeug sind – unser sorgfältig kuratiertes Sortiment erfüllt alle Erwartungen.</p>
                  </div>
                  <div className="author-area wow fadeInUp" data-wow-delay="400ms">
                    <img src="assets/img/inner-page/signature.svg" alt="" />
                    <h6>K. A. Rahman</h6>
                    <span>(CEO &amp; Gründer)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="how-it-work-section mb-100">
          <div className="container">
            <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
              <div className="col-lg-12 d-flex align-items-end justify-content-between gap-3 flex-wrap">
                <div className="section-title-2">
                  <h2>Wie funktioniert es?</h2>
                  <p>Eine von vielen Möglichkeiten, bei uns ein Auto zu kaufen.</p>
                </div>      
                <div className="video-btn">
                  <a onClick={() => setOpen(true)}  className="video-popup"><i className="bi bi-play-circle" /> Video ansehen</a>
                </div> 
              </div>
            </div>

        <div className="row wow fadeInUp" data-wow-delay="300ms">
              <div className="col-lg-12">
                <div className="work-process-group">
                  <div className="row justify-content-center g-lg-0 gy-5">
                    <div className="col-lg-3 col-sm-6">
                      <div className="single-work-process text-center">
                        <div className="step">
                          <span>01</span>
                        </div>
                        <div className="icon">
                          <img src="assets/img/home2/icon/loaction.svg" alt="" />
                        </div>
                        <div className="content">
                          <h6>Standort besuchen oder online erkunden</h6>
                          <p>Bevor Sie ein neues Auto kaufen, ist es wichtig, den Standort des Händlers zu besuchen oder online nach verfügbaren Modellen zu suchen.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="single-work-process text-center">
                        <div className="step">
                          <span>02</span>
                        </div>
                        <div className="icon">
                          <img src="assets/img/home2/icon/contact.svg" alt="" />
                        </div>
                        <div className="content">
                          <h6>Kontaktiere uns</h6>
                          <p>Nachdem Sie den Standort besucht oder online nach Fahrzeugen gesucht haben, ist der nächste Schritt, das Autohaus oder den Verkäufer zu kontaktieren.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="single-work-process text-center">
                        <div className="step">
                          <span>03</span>
                        </div>
                        <div className="icon">
                          <img src="assets/img/home2/icon/pay.svg" alt="" />
                        </div>
                        <div className="content">
                          <h6>Bezahlung des Fahrzeugs</h6>
                          <p>Nachdem Sie das gewünschte Fahrzeug gefunden haben und alle erforderlichen Informationen gesammelt haben, ist es an der Zeit, die Zahlung für Ihr neues Auto zu arrangieren.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="single-work-process text-center">
                        <div className="step">
                          <span>04</span>
                        </div>
                        <div className="icon">
                          <img src="assets/img/home2/icon/recieve.svg" alt="" />
                        </div>
                        <div className="content">
                          <h6>Fahrzeugübergabe</h6>
                          <p>Nach erfolgreicher Bezahlung und Abwicklung aller notwendigen Formalitäten ist es an der Zeit, Ihr neues Auto in Empfang zu nehmen.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        <div className="drivco-gallery mb-100">
          <div className="container">
            <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
              <div className="col-lg-12">
                <div className="section-title1 text-center">
                  <h2>Galerie</h2>
                </div>
              </div>
            </div>
            <div className="row g-4 mb-50">
              <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="gallery-item">
                  <img className="img-fluid" src="assets/img/inner-page/galerie/1.jpeg" alt="gallery"  onClick={() =>setOpenimg({ openingState: true, openingIndex: 0 })}/>
                
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 d-flex align-items-end wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div className="gallery-item">
                  <img className="img-fluid" onClick={() =>setOpenimg({ openingState: true, openingIndex: 1 })} src="assets/img/inner-page/galerie/2.jpeg" alt="galery" />
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                <div className="gallery-item">
                  <img className="img-fluid" onClick={() =>setOpenimg({ openingState: true, openingIndex: 2 })}  src="assets/img/inner-page/galerie/3.jpeg" alt="galery" />
                  
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="500ms" data-wow-duration="1500ms">
                <div className="gallery-item">
                  <img className="img-fluid" onClick={() =>setOpenimg({ openingState: true, openingIndex: 3 })}  src="assets/img/inner-page/galerie/4.jpeg" alt="galery" />
                
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 d-flex align-items-start wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                <div className="gallery-item">
                  <img className="img-fluid" onClick={() =>setOpenimg({ openingState: true, openingIndex: 4 })}  src="assets/img/inner-page/galerie/5.jpeg" alt="galery" />
                
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="700ms" data-wow-duration="1500ms">
                <div className="gallery-item">
                  <img className="img-fluid" onClick={() =>setOpenimg({ openingState: true, openingIndex: 5 })}  src="assets/img/inner-page/galerie/6.jpeg" alt="galery" />
            
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="700ms" data-wow-duration="1500ms">
                <div className="gallery-item">
                  <img className="img-fluid" onClick={() =>setOpenimg({ openingState: true, openingIndex: 6 })}  src="assets/img/inner-page/galerie/7.jpeg" alt="galery" />
            
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 d-flex align-items-end wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div className="gallery-item">
                  <img className="img-fluid" onClick={() =>setOpenimg({ openingState: true, openingIndex: 7 })} src="assets/img/inner-page/galerie/8.jpeg" alt="galery" />
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                <div className="gallery-item">
                  <img className="img-fluid" onClick={() =>setOpenimg({ openingState: true, openingIndex: 8 })}  src="assets/img/inner-page/galerie/9.jpeg" alt="galery" />
                  
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="500ms" data-wow-duration="1500ms">
                <div className="gallery-item">
                  <img className="img-fluid" onClick={() =>setOpenimg({ openingState: true, openingIndex: 9 })}  src="assets/img/inner-page/galerie/10.jpeg" alt="galery" />
                
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 d-flex align-items-start wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                <div className="gallery-item">
                  <img className="img-fluid" onClick={() =>setOpenimg({ openingState: true, openingIndex: 10 })}  src="assets/img/inner-page/galerie/11.jpeg" alt="galery" />
                
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="700ms" data-wow-duration="1500ms">
                <div className="gallery-item">
                  <img className="img-fluid" onClick={() =>setOpenimg({ openingState: true, openingIndex: 11 })}  src="assets/img/inner-page/galerie/12.jpeg" alt="galery" />
            
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
          <React.Fragment>
            <ModalVideo
              channel="youtube"
              youtube={{ mute: 0, autoplay: 0 }}
              isOpen={isOpen}
              videoId="DVWUjBAC1is"
              onClose={() => setOpen(false)} 
            />
          </React.Fragment>
        <Lightbox
            className="img-fluid"
            open={isOpenimg.openingState}
            plugins={[Fullscreen]}
            index={isOpenimg.openingIndex}
            close={() => setOpenimg(false)}
            styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
            slides={images.map(function (elem) {
              return { src: elem.imageBig };
            })}
          />
    </MainLayout>
  )
}

export default About
