import React from 'react'
import MainLayout from '../layout/MainLayout'

function Faq() {
  return (
    <MainLayout>
        <div className="faq-page-wrap pt-100 mb-100">
            <div className="container">
            <div className="row g-lg-4 gy-5">
                <div className="col-lg-4 d-lg-flex d-none">
                <div className="faq-img">
                    <img src="assets/img/inner-page/faq-img.png" alt="" />
                </div>
                </div>
                <div className="col-lg-8">
                <div className="faq-area">
                    <div className="section-title-and-filter mb-40">
                    <div className="section-title">
                        <h4>FAQ’s &amp; Latest Answer</h4>
                    </div>
                    </div>
                    <div className="faq-wrap">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                        <h5 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            How often should I get my car serviced?
                            </button>
                        </h5>
                        <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                            Follow your car's owner's manual for recommended service intervals based on mileage and time. Consider driving conditions and habits for adjustments. Address warning signs promptly.</div>
                        </div>
                        </div>
                        <div className="accordion-item">
                        <h5 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            How often should I change my car's oil?
                            </button>
                        </h5>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">It's always a good idea to research and read
                            reviews specific to the dealership you're interested in, as
                            experiences can vary even within the same dealership chain.</div>
                        </div>
                        </div>
                        <div className="accordion-item">
                        <h5 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            What type of fuel should I use for my car?
                            </button>
                        </h5>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">It's always a good idea to research and read
                            reviews specific to the dealership you're interested in, as
                            experiences can vary even within the same dealership chain.</div>
                        </div>
                        </div>
                        <div className="accordion-item">
                        <h5 className="accordion-header" id="flush-headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            What is the recommended tire pressure for my car?
                            </button>
                        </h5>
                        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">It's always a good idea to research and read
                            reviews specific to the dealership you're interested in, as
                            experiences can vary even within the same dealership chain.</div>
                        </div>
                        </div>
                        <div className="accordion-item">
                        <h5 className="accordion-header" id="flush-headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                            Can I trade in my old car at a dealership?
                            </button>
                        </h5>
                        <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">It's always a good idea to research and read
                            reviews specific to the dealership you're interested in, as
                            experiences can vary even within the same dealership chain.</div>
                        </div>
                        </div>
                        <div className="accordion-item">
                        <h5 className="accordion-header" id="flush-headingSix">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                            Can I test drive a vehicle before purchasing it?
                            </button>
                        </h5>
                        <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">It's always a good idea to research and read
                            reviews specific to the dealership you're interested in, as
                            experiences can vary even within the same dealership chain.</div>
                        </div>
                        </div>
                        <div className="accordion-item">
                        <h5 className="accordion-header" id="flush-headingSeven">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                            Can I negotiate the price of a car at a dealership?
                            </button>
                        </h5>
                        <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">It's always a good idea to research and read
                            reviews specific to the dealership you're interested in, as
                            experiences can vary even within the same dealership chain.</div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="faq-inquiery-form pt-80 pb-80">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="section-title mb-20">
                    <h4>If Any Inquirey, To Do Ask Somethings </h4>
                </div>
                <form>
                    <div className="row">
                    <div className="col-md-6 mb-30">
                        <div className="form-inner">
                        <label>Your Name* :</label>
                        <input type="text" placeholder="Jackson Mile" />
                        </div>
                    </div>
                    <div className="col-md-6 mb-30">
                        <div className="form-inner">
                        <label>Your Email* :</label>
                        <input type="text" placeholder="example@gamil.com" />
                        </div>
                    </div>
                    <div className="col-md-12 mb-30">
                        <div className="select-category">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Used Car
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                            New Car
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" defaultChecked />
                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                            Auction Car
                            </label>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-12 mb-30">
                        <div className="form-inner">
                        <label>Type Your Question*</label>
                        <textarea placeholder="Type Your Question*" defaultValue={""} />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-inner">
                        <button type="submit" className="primary-btn3">Submit</button>
                        </div>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
    </MainLayout>
  )
}

export default Faq