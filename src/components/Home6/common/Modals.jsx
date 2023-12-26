import React from 'react'

function Modals() {
  return (
    <>    
        <div className="modal signUp-modal fade" id="signUpModal01" tabIndex={-1} aria-labelledby="signUpModal01Label" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                <h4 className="modal-title" id="signUpModal01Label">Sign Up</h4>
                <p>Already have an account? <button type="button" data-bs-toggle="modal" data-bs-target="#logInModal01">Log In</button></p>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x" /></button>
                </div>
                <div className="modal-body">
                <form>
                    <div className="row g-4">
                    <div className="col-md-6">
                        <div className="form-inner">
                        <label>First Name*</label>
                        <input type="text" placeholder="Daniel" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-inner">
                        <label>Last Name*</label>
                        <input type="text" placeholder="Last name" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-inner">
                        <label>Enter your email address*</label>
                        <input type="email" placeholder="Type email" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-inner"> 
                        <label>Password*</label>
                        <input id="password" type="password" placeholder="*** ***" />
                        <i className="bi bi-eye-slash" id="togglePassword" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-inner">
                        <label>Confirm Password*</label>
                        <input id="password2" type="password" placeholder="*** ***" />
                        <i className="bi bi-eye-slash" id="togglePassword2" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-inner">
                        <button className="primary-btn2" type="submit">Sign Up Now</button>
                        </div>
                    </div>
                    </div>
                    <div className="terms-conditon">
                    <p>By sign up,you agree to the <a href="#">‘terms &amp; conditons’</a></p>
                    </div>
                    <ul className="social-icon">
                    <li><a href="#"><img src="assets/img/home1/icon/google.svg" alt="" /></a></li>
                    <li><a href="#"><img src="assets/img/home1/icon/facebook.svg" alt="" /></a></li>
                    <li><a href="#"><img src="assets/img/home1/icon/twiter.svg" alt="" /></a></li>
                    </ul>
                </form>
                </div>
            </div>
        </div>
        </div>
        <div className="modal signUp-modal fade" id="logInModal01" tabIndex={-1} aria-labelledby="logInModal01Label" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                <h4 className="modal-title" id="logInModal01Label">Log In</h4>
                <p>Don’t have any account? <button type="button" data-bs-toggle="modal" data-bs-target="#signUpModal01">Sign Up</button></p>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x" /></button>
                </div>
                <div className="modal-body">
                <form>
                    <div className="row g-4">
                    <div className="col-md-12">
                        <div className="form-inner">
                        <label>Enter your email address*</label>
                        <input type="email" placeholder="Type email" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-inner"> 
                        <label>Password*</label>
                        <input id="password3" type="password" placeholder="*** ***" />
                        <i className="bi bi-eye-slash" id="togglePassword3" />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
                        <div className="form-group">
                            <input type="checkbox" id="html" />
                            <label htmlFor="html">Remember Me</label>
                        </div>
                        <a href="#" className="forgot-pass">Forget Password?</a>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-inner">
                        <button className="primary-btn2" type="submit">Sign Up Now</button>
                        </div>
                    </div>
                    </div>
                    <div className="terms-conditon">
                    <p>By sign up,you agree to the <a href="#">‘terms &amp; conditons’</a></p>
                    </div>
                    <ul className="social-icon">
                    <li><a href="#"><img src="assets/img/home1/icon/google.svg" alt="" /></a></li>
                    <li><a href="#"><img src="assets/img/home1/icon/facebook.svg" alt="" /></a></li>
                    <li><a href="#"><img src="assets/img/home1/icon/twiter.svg" alt="" /></a></li>
                    </ul>
                </form>
                </div>
            </div>
            </div>
        </div>
        <div className="modal signUp-modal sell-with-us fade" id="sellUsModal01" tabIndex={-1} aria-labelledby="sellUsModal01Label" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                <h4 className="modal-title" id="sellUsModal01Label">Sell Your Car</h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x" /></button>
                </div>
                <div className="modal-body">
                <form>
                    <div className="row">
                    <div className="col-lg-12 mb-15">
                        <h5>Your Personal Info</h5>
                    </div>
                    <div className="col-md-6 mb-20">
                        <div className="form-inner">
                        <label>Full Name*</label>
                        <input type="text" placeholder="Full Name*" />
                        </div>
                    </div>
                    <div className="col-md-6 mb-20">
                        <div className="form-inner">
                        <label>Phone*</label>
                        <input type="text" placeholder="+880- 123 234 ***" />
                        </div>
                    </div>
                    <div className="col-md-6 mb-20">
                        <div className="form-inner">
                        <label>Email (Optional)</label>
                        <input type="text" placeholder="Enter your email address" />
                        </div>
                    </div>
                    <div className="col-md-6 mb-20">
                        <div className="form-inner">
                        <label>Location*</label>
                        <input type="text" placeholder="Enter your address" />
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-lg-12 mb-15 mt-25">
                        <h5>Your Car Info</h5>
                    </div>
                    <div className="col-md-6 mb-20">
                        <div className="form-inner">
                        <label>Car Brand Name*</label>
                        <input type="text" placeholder="Toyota" />
                        </div>
                    </div>
                    <div className="col-md-6 mb-20">
                        <div className="form-inner">
                        <label>Model*</label>
                        <input type="text" placeholder="RS eTN 80" />
                        </div>
                    </div>
                    <div className="col-md-6 mb-20">
                        <div className="form-inner">
                        <label>Reg. Year*</label>
                        <input type="text" placeholder={2022} />
                        </div>
                    </div>
                    <div className="col-md-6 mb-20">
                        <div className="form-inner">
                        <label>Mileage*</label>
                        <input type="text" placeholder="23,456 miles" />
                        </div>
                    </div>
                    <div className="col-md-6 mb-20">
                        <div className="form-inner">
                        <label>Fuel Type*</label>
                        <input type="text" placeholder="Petrol" />
                        </div>
                    </div>
                    <div className="col-md-6 mb-20">
                        <div className="form-inner">
                        <label>Selling Price*</label>
                        <input type="text" placeholder="Ex- $23,342.000" />
                        </div>
                    </div>
                    <div className="col-md-12 mb-35">
                        <div className="form-inner">
                        <label>Your Car Note*</label>
                        <textarea placeholder="Write somethings" defaultValue={""} />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-inner">
                        <button className="primary-btn2" type="submit">Submit Now</button>
                        </div>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        {/* Advance-search-modal */}
        <div className="modal adSearch-modal fade" id="adSearchModal01" tabIndex={-1} aria-labelledby="adSearchModal01Label" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x" /></button>
                <div className="modal-body">
                <form>
                    <h5 className="main-title">Advanced Option</h5>
                    <div className="row">
                    <div className="col-md-12 mb-30">
                        <div className="form-inner">
                        <select>
                            <option value={1}>Sydne City, Australia</option>
                            <option value={2}>Dhaka, Bangladesh</option>
                            <option value={3}>Tokyo, Japan</option>
                        </select>
                        </div>
                    </div>
                    <h5>More Filter</h5>
                    <div className="row mb-10">
                        <div className="col-md-6 mb-20">
                        <div className="form-inner">
                            <label>Select Brand </label>
                            <select>
                            <option value={1}> Mercedes Benz</option>
                            <option value={2}>Volkswagen</option>
                            <option value={3}>Mitsubishi</option>
                            <option value={4 }>Tesla</option>
                            </select>
                        </div>
                        </div>
                        <div className="col-md-6 mb-20">
                        <div className="form-inner">
                            <label>Select Body Type</label>
                            <select>
                            <option value={1}>Hatchback</option>
                            <option value={2}>Covertible</option>
                            <option value={3}>Coupe </option>
                            <option value={4 }>Truck</option>
                            </select>
                        </div>
                        </div>
                        <div className="col-md-6 mb-20">
                        <div className="form-inner">
                            <label>Select Fuel Type </label>
                            <select>
                            <option value={1}> Petrol + Gas</option>
                            <option value={2}>Petrol</option>
                            <option value={3}>Gas</option>
                            </select>
                        </div>
                        </div>
                        <div className="col-md-6 mb-20">
                        <div className="form-inner">
                            <label>Steering Side</label>
                            <select>
                            <option value={1}>Left</option>
                            <option value={2}>Right</option>
                            </select>
                        </div>
                        </div>
                        <div className="col-md-6 mb-20">
                        <div className="form-inner">
                            <label>Select Color</label>
                            <select>
                            <option value={1}>Yellow</option>
                            <option value={2}>Brown</option>
                            <option value={3}>Red</option>
                            <option value={4}>Silver</option>
                            <option value={5}>Orange</option>
                            <option value={6}>Blue</option>
                            <option value={7}>Gray</option>
                            </select>
                        </div>
                        </div>
                        <div className="col-md-6 mb-20">
                        <div className="form-inner">
                            <label>Select Doors</label>
                            <select>
                            <option value={1}>03 doors</option>
                            <option value={2}>04 doors</option>
                            <option value={3}>06 doors</option>
                            <option value={4 }>08 doors</option>
                            </select>
                        </div>
                        </div>
                    </div>
                    <h5>Year &amp; Mileage</h5>
                    <div className="row">
                        <div className="col-md-6 mb-20">
                        <div className="form-inner">
                            <label>Select Year </label>
                            <select>
                            <option value={1}>2021</option>
                            <option value={2}>2020</option>
                            <option value={3}>2019</option>
                            <option value={4 }>2018</option>
                            </select>
                        </div>
                        </div>
                        <div className="col-md-3 mb-20">
                        <div className="form-inner">
                            <label>Select Min (miles)</label>
                            <select>
                            <option value={1}>800 miles</option>
                            <option value={2}>1500 miles</option>
                            <option value={3}>2000 miles</option>
                            <option value={4 }>2500 miles</option>
                            </select>
                        </div>
                        </div>
                        <div className="col-md-3 mb-20">
                        <div className="form-inner">
                            <label>Select Max (miles)</label>
                            <select>
                            <option value={1}>1200 miles</option>
                            <option value={2}>3000 miles</option>
                            <option value={3}>3500 miles</option>
                            <option value={4 }>4000 miles</option>
                            </select>
                        </div>
                        </div>
                    </div>
                    <h5>Price Range</h5>
                    <div className="row">
                        <div className="col-lg-6 mb-20">
                        <div className="price-range">
                            <input type="text" className="js-range-slider" name="my_range" defaultValue data-skin="round" data-type="double" data-min={0} data-max={1000} data-grid="false" />
                            <input hidden type="text" maxLength={4} defaultValue={0} className="from" />
                            <input hidden type="text" maxLength={4} defaultValue={1000} className="to" />
                        </div>
                        </div>
                        <div className="col-md-3 mb-20">
                        <div className="form-inner">
                            <label>Min (Price)</label>
                            <select>
                            <option value={1}>$2,234</option>
                            <option value={2}>$3,234</option>
                            <option value={3}>$4,234</option>
                            <option value={4 }>$5,234</option>
                            </select>
                        </div>
                        </div>
                        <div className="col-md-3 mb-20">
                        <div className="form-inner">
                            <label>Max (Price)</label>
                            <select>
                            <option value={1}>$12,234</option>
                            <option value={2}>$13,234</option>
                            <option value={3}>$14,234</option>
                            <option value={4 }>$15,234</option>
                            </select>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="apply-btn pt-30">
                    <button className="primary-btn2" type="submit">Apply Filter</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Modals