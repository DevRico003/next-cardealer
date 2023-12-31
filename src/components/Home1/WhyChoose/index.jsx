import React from 'react'
import CountUp from 'react-countup';
function index() {
  return (
    <div className="why-choose-area pt-90 pb-90 mb-100" id="services">
      <div className="container">
        <div className="row mb-60 wow fadeInUp" data-wow-delay="200ms">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="section-title1 text-center">
              <span>IHR WEG ZU FAHRVERGNÜGEN UND SICHERHEIT</span>
              <h2>Unsere Services</h2>
            </div>
          </div>
        </div>
        <div className="row mb-50 g-4 justify-content-center">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
            <div className="choose-card">
              <div className="choose-top">
                <div className="choose-icon">
                  <img src="assets/img/home1/icon/av-car.svg" alt="" />
                </div>
                <h5><span>Vielfältiges</span> Fahrzeugangebot</h5>
              </div>
              <p>Wir bieten eine breite Palette an Modellen, die Qualität und Leistung vereinen.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
            <div className="choose-card">
              <div className="choose-top">
                <div className="choose-icon">
                  <img src="assets/img/home1/icon/happy-customar.svg" alt="" />
                </div>
                <h5><span>Individuelle</span> Persönliche Beratung</h5>
              </div>
              <p>Unsere Experten beraten Sie mit Leidenschaft und Engagement. Wir stehen für ehrliche und individuelle Angebote.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
            <div className="choose-card">
              <div className="choose-top">
                <div className="choose-icon">
                  <img src="assets/img/home1/icon/affordable.svg" alt="" />
                </div>
                <h5><span>Kundensienst</span> mit Priorität</h5>
              </div>
              <p>Wir beheben umgehend alle Mängel an Fahrzeugen, die Sie bei uns erwerben. Ihre Zufriedenheit ist unser Ziel.</p>
            </div>
          </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
            <div className="choose-card">
              <div className="choose-top">
                <div className="choose-icon">
                  <img src="assets/img/home1/icon/use-car.svg" alt="" />
                </div>
                <h5><span>Bundesweite</span> Fahrzeugüberführung</h5>
              </div>
              <p>Wir liefern Ihr neues Fahrzeug direkt zu Ihnen – zuverlässig und überall in Deutschland.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
            <div className="choose-card">
              <div className="choose-top">
                <div className="choose-icon">
                  <img src="assets/img/home1/icon/affordable.svg" alt="" />
                </div>
                <h5><span>Schnelle</span> Finanzierungszusage</h5>
              </div>
              <p>Profitieren Sie von unserer schnellen Online-Bonitätsprüfung und sichern Sie sich Ihre Finanzierung in Minuten.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
            <div className="choose-card">
              <div className="choose-top">
                <div className="choose-icon">
                  <img src="assets/img/home1/icon/warranty.svg" alt="" />
                </div>
                <h5><span>Innovative</span> Versicherungslösungen</h5>
              </div>
              <p>Mit unseren maßgeschneiderten Versicherungsoptionen sind Sie immer bestens geschützt.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
            <div className="choose-card">
              <div className="choose-top">
                <div className="choose-icon">
                  <img src="assets/img/home1/icon/guarantee.svg" alt="" />
                </div>
                <h5>Langzeit <span>Garantie</span></h5>
              </div>
              <p>Unsere Langzeit-Garantie gewährleistet Ihnen langanhaltende Freude am Fahren.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
            <div className="choose-card">
              <div className="choose-top">
                <div className="choose-icon">
                  <img src="assets/img/home1/icon/affordable.svg" alt="" />
                </div>
                <h5>Flexible <span>Leasingoptionen</span></h5>
              </div>
              <p>Erleben Sie die Freiheit, mit unseren attraktiven Leasingoptionen für Gebrauchtwagen zu fahren.</p>
            </div>
          </div>
        </div>
        <div className="our-activetis">
          <div className="row justify-content-center g-lg-4 gy-5">
            <div className="col-lg-3 col-sm-4 col-sm-6 divider d-flex justify-content-lg-start justify-content-sm-center wow fadeInUp" data-wow-delay="200ms">
              <div className="single-activiti">
                <div className="icon">
                  <img src="assets/img/home1/icon/av-car.svg" alt="" />
                </div>
                <div className="content">
                  <div className="number">
                    <h5 className="counter"><CountUp delay={2} end={150} /></h5>
                    <span>+</span>
                  </div>
                  <p>Verfügbare Fahrzeuge</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-4 col-sm-6 divider d-flex justify-content-sm-center wow fadeInUp" data-wow-delay="400ms">
              <div className="single-activiti">
                <div className="icon">
                  <img src="assets/img/home1/icon/use-car.svg" alt="" />
                </div>
                <div className="content">
                  <div className="number">
                    <h5 className="counter"><CountUp delay={2} end={20} /></h5>
                    <span>+ Jahre</span>
                  </div>
                  <p>Erfahrung</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-4 col-sm-6 d-flex justify-content-lg-end justify-content-sm-center wow fadeInUp" data-wow-delay="500ms">
              <div className="single-activiti">
                <div className="icon">
                  <img src="assets/img/home1/icon/happy-customar.svg" alt="" />
                </div>
                <div className="content">
                  <div className="number">
                    <h5 className="counter"><CountUp delay={2} end={98} /></h5>
                    <span>%</span>
                  </div>
                  <p>Kundenzufriedenheit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default index