import React from 'react'
import SelectComponent from '@/src/utils/SelectComponent'

function Modals() {
    const city = ["Sydne City, Australia"," Dhaka, Bangladesh","Tokyo, Japan"]
    const brand = ["Mercedes Benz","Volkswagen","Mitsubishi","Tesla"]
    const body = ["Hatchback","Covertible","Coupe","Truck"]
    const  fuel = ["Petrol + Gas","Petrol","Gas"]
    const steeringSide = ["Left","Right",]
    const color = ["Yellow","Brown","Red","Silver","Orange","Blue","Gray"]
    const door = ["03 doors","04 doors","06 doors","08 doors"]
    const year = ["2021","2020","2019","2018","",]
    const miles = ["800 miles","1500 miles","2000 miles","2500 miles"]
    const milesmax = ["1200 miles","3000 miles","3500 miles","4000 miles"]
    const priceMin = ["$2,234","$3,234","$4,234","$5,234"]
    const priceMax = ["$2,234","$3,234","$4,234","$5,234"]
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
                        <button className="primary-btn2" type="submit">Log In</button>
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
        <div className="modal adSearch-modal fade" id="adSearchModal01" tabIndex={-1} aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x" /></button>
                <div className="modal-body">
                <form>
                    <h5 className="main-title">Advanced Option</h5>
                    <div className="row">
                    <div className="col-md-12 mb-30">
                        <div className="form-inner">
                        <SelectComponent options={city} placeholder="select city" />
                        </div>
                    </div>
                    <h5>More Filter</h5>
                    <div className="row mb-10">
                        <div className="col-md-6 mb-20">
                        <div className="form-inner">
                            <label>Select Brand </label>
                        <SelectComponent options={brand} placeholder="select brand" />
                        </div>
                        </div>
                        <div className="col-md-6 mb-20">
                        <div className="form-inner">
                            <label>Select Body Type</label>
                        <SelectComponent options={body} placeholder="select body type" />
                        </div>
                        </div>
                        <div className="col-md-6 mb-20">
                        <div className="form-inner">
                            <label>Select Fuel Type</label>
                        <SelectComponent options={fuel} placeholder="select body fuel" />
                        </div>
                        </div>
                        <div className="col-md-6 mb-20">
                        <div className="form-inner">
                            <label>Steering Side</label>
                        <SelectComponent options={steeringSide} placeholder="select steering side" />
                        </div>
                        </div>
                        <div className="col-md-6 mb-20">
                        <div className="form-inner">
                            <label>Select Color</label>
                        <SelectComponent options={color} placeholder="select color" />
                        </div>
                        </div>
                        <div className="col-md-6 mb-20">
                        <div className="form-inner">
                            <label>Select Doors</label>
                        <SelectComponent options={door} placeholder="select door" />
                        </div>
                        </div>
                    </div>
                    <h5>Year &amp; Mileage</h5>
                    <div className="row">
                        <div className="col-md-6 mb-20">
                        <div className="form-inner">
                            <label>Select Year </label>
                        <SelectComponent options={year} placeholder="select year" />
                        </div>
                        </div>
                        <div className="col-md-3 mb-20">
                        <div className="form-inner">
                            <label>Select Min (miles)</label>
                        <SelectComponent options={miles} placeholder="select Min" />
                        </div>
                        </div>
                        <div className="col-md-3 mb-20">
                        <div className="form-inner">
                            <label>Select Max (miles)</label>
                        <SelectComponent options={milesmax} placeholder="select Min" />
                        </div>
                        </div>
                    </div>
                    <h5 className="mb-20">Price Range</h5>
                    <div className="row">
                        <div className="col-lg-6 mb-20">
                        <div className="range-wrapper2">
                            <div className="slider-wrapper">
                            <div id="eg-range-slider" />
                            </div> 
                            <div className="valus">
                            <div className="min-value">
                                <span>$</span>
                                <input type="text" className="from" defaultValue={200} />
                            </div>
                            <div className="min-value">
                                <span>$</span>
                                <input type="text" className="to" defaultValue={2000} />
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-3 mb-20">
                        <div className="form-inner">
                            <label>Min (Price)</label>
                            <SelectComponent options={priceMin} placeholder="select price" />
                        </div>
                        </div>
                        <div className="col-md-3 mb-20">
                        <div className="form-inner">
                            <label>Max (Price)</label>
                            <SelectComponent options={priceMax} placeholder="select price" />
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
        <div className="modal adSearch-modal fade" id="bidsModal01" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x" /></button>
            <div className="modal-body">
                <form>
                <h4 className="main-title">Now, Your Bidding Time</h4>
                <div className="row">
                    <div className="row mb-10">
                    <div className="col-md-12 mb-20">
                        <div className="form-inner">
                        <label>Your Bidding Amounts*</label>
                        <input type="text" placeholder="Amounts" />
                        </div>
                    </div>
                    </div>
                    <h5>Your Personal Info</h5>
                    <div className="row">
                    <div className="col-md-12 mb-20">
                        <div className="form-inner">
                        <label>Full Name*</label>
                        <input type="text" placeholder="Enter your name" />
                        </div>
                    </div>
                    <div className="col-md-6 mb-20">
                        <div className="form-inner">
                        <label>Phone Number*</label>
                        <input type="text" placeholder="+91- 245 *** ****" />
                        </div>
                    </div>
                    <div className="col-md-6 mb-20">
                        <div className="form-inner">
                        <label>Phone Number*</label>
                        <input type="email" placeholder="Enter your email address" />
                        </div>
                    </div>
                    <div className="col-md-12 mb-20">
                        <div className="form-inner">
                        <label>Message*</label>
                        <textarea placeholder="Write somethings" defaultValue={""} />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="apply-btn pt-30">
                    <button className="primary-btn3" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                        <path d="M12.3195 5.44834C12.4414 5.32646 12.6395 5.32646 12.7613 5.44834C12.8835 5.57053 12.8835 5.76834 12.7613 5.89021C12.6395 6.0124 12.4413 6.0124 12.3195 5.89021C12.1973 5.76834 12.1973 5.57053 12.3195 5.44834ZM8.08753 13.9912C7.94975 13.8046 7.87528 13.5798 7.87528 13.3434C7.87528 12.7403 8.36591 12.2497 8.969 12.2497H14.2813C14.5736 12.2497 14.8483 12.3634 15.0547 12.5699C15.2613 12.7764 15.375 13.0511 15.375 13.3434C15.3752 13.5764 15.3006 13.8034 15.1621 13.9909C15.6597 14.2525 16 14.7744 16 15.3745V15.687C16 15.8596 15.8601 15.9995 15.6875 15.9995H7.56281C7.39025 15.9995 7.25031 15.8596 7.25031 15.687V15.3745C7.25031 14.7747 7.59031 14.253 8.08753 13.9912ZM14.6128 13.0118C14.5694 12.9681 14.5177 12.9335 14.4608 12.91C14.4039 12.8864 14.3429 12.8744 14.2813 12.8746H8.969C8.71053 12.8746 8.50028 13.0849 8.50028 13.3433C8.50028 13.4686 8.54903 13.5863 8.63753 13.6748C8.68097 13.7185 8.73263 13.7531 8.78954 13.7767C8.84644 13.8002 8.90745 13.8122 8.96903 13.8121H14.2813C14.5398 13.8121 14.75 13.6018 14.75 13.3433C14.75 13.2181 14.7013 13.1003 14.6128 13.0118ZM15.375 15.3745C15.375 14.8576 14.9545 14.4371 14.4376 14.4371H8.81275C8.29584 14.4371 7.87528 14.8576 7.87528 15.3745H15.375Z" />
                        <path d="M0.290648 13.1288C0.396773 12.9644 0.523397 12.8189 0.667054 12.6966L2.12721 11.423C2.13878 11.4056 2.15207 11.3894 2.16687 11.3746C2.19155 11.35 2.22017 11.3297 2.25155 11.3146L3.13458 10.5445L7.22177 6.97912C7.05446 6.80422 6.96233 6.5755 6.96233 6.33228C6.96233 6.08172 7.05987 5.84625 7.23715 5.669C7.31241 5.59379 7.40005 5.53209 7.49624 5.48659L7.11812 5.10847C7.01276 5.13657 6.90419 5.15084 6.79515 5.15094C6.47512 5.15091 6.15505 5.02909 5.91143 4.78547C5.67524 4.54931 5.54518 4.23541 5.54518 3.90156C5.54518 3.56772 5.67524 3.25381 5.9114 3.01766L8.5629 0.366219C8.79905 0.130062 9.11299 0 9.44693 0C9.78071 0 10.0946 0.130062 10.3307 0.366219C10.6571 0.692594 10.7645 1.156 10.6537 1.57294L14.4263 5.34556C14.5319 5.31746 14.6406 5.30322 14.7499 5.30322C15.0839 5.30322 15.3976 5.43319 15.6336 5.66912C16.121 6.1565 16.121 6.94953 15.6336 7.43694L12.9821 10.0884C12.7384 10.3321 12.4183 10.454 12.0982 10.454C11.7781 10.454 11.458 10.3321 11.2143 10.0884C10.8879 9.76203 10.7805 9.29865 10.8913 8.88172L10.514 8.50434C10.468 8.60027 10.406 8.68767 10.3306 8.76281C10.1536 8.93987 9.91818 9.03741 9.66768 9.03741C9.42471 9.03741 9.19608 8.94544 9.02093 8.77831L4.66762 13.78C4.65562 13.7987 4.64162 13.8166 4.62524 13.833C4.61965 13.8386 4.61371 13.8437 4.6078 13.8487L3.31059 15.3392C3.27796 15.3776 3.24376 15.4148 3.20809 15.4504C2.8518 15.8066 2.38121 15.9999 1.88715 15.9999C1.80005 15.9999 1.71215 15.9939 1.62412 15.9817C1.03571 15.9002 0.52718 15.5482 0.228992 15.0158C-0.0976639 14.4323 -0.0733509 13.6914 0.290648 13.1288ZM9.88871 0.808156C9.83083 0.749934 9.76198 0.703768 9.68615 0.672329C9.61031 0.64089 9.52899 0.624804 9.4469 0.625C9.36476 0.624779 9.28339 0.640853 9.2075 0.672292C9.13162 0.703731 9.06272 0.74991 9.0048 0.808156L6.3533 3.45962C6.29507 3.51753 6.24891 3.5864 6.21747 3.66227C6.18604 3.73813 6.16996 3.81948 6.17018 3.90159C6.16996 3.98371 6.18604 4.06506 6.21748 4.14093C6.24892 4.21679 6.29509 4.28567 6.35333 4.34356C6.59693 4.58722 6.99337 4.58722 7.23696 4.34356L9.88855 1.69197L9.88871 1.69181C10.1324 1.44819 10.1324 1.05178 9.88871 0.808156ZM11.6562 9.6465C11.8999 9.89019 12.2965 9.89022 12.5402 9.6465L15.1917 6.99503C15.4354 6.75131 15.4354 6.35481 15.1917 6.11106C15.0738 5.99316 14.9169 5.92822 14.7499 5.92822C14.5829 5.92822 14.4261 5.99312 14.3082 6.11094L11.6563 8.76287C11.4126 9.00647 11.4126 9.4029 11.6562 9.6465ZM10.3406 7.44712L11.2143 8.32094L13.8661 5.66919L10.3307 2.13372L7.67896 4.78547L8.55433 5.66087C8.55718 5.66356 8.55996 5.66619 8.56296 5.66916L10.3298 7.436C10.3334 7.43959 10.337 7.44334 10.3406 7.44712ZM9.22474 8.09903L9.22658 8.10087L9.44665 8.32094C9.47562 8.35005 9.51007 8.37312 9.54801 8.38883C9.58596 8.40453 9.62664 8.41256 9.66771 8.41244C9.70877 8.41256 9.74946 8.40453 9.7874 8.38882C9.82534 8.37311 9.85978 8.35002 9.88874 8.3209C9.91789 8.29192 9.94099 8.25745 9.95672 8.21948C9.97245 8.1815 9.98048 8.14079 9.98037 8.09969C9.98037 8.01787 9.94915 7.94091 9.89249 7.88284L8.11746 6.10781C7.9958 5.9895 7.79912 5.99097 7.6789 6.11106C7.64976 6.14005 7.62666 6.17452 7.61094 6.2125C7.59522 6.25047 7.58718 6.29118 7.5873 6.33228C7.58717 6.37334 7.5952 6.41401 7.61093 6.45194C7.62666 6.48986 7.64977 6.52428 7.67893 6.55319L7.89771 6.77197C7.89921 6.77344 7.9007 6.77493 7.90218 6.77644L9.22474 8.09903ZM8.57762 8.33575L7.6643 7.42244L3.79737 10.7954L5.20843 12.2065L8.57762 8.33575ZM4.79715 12.6791L3.3253 11.2072L2.85321 11.619L4.38587 13.1517L4.79715 12.6791ZM0.774273 14.7105C0.97596 15.0706 1.31693 15.3082 1.70977 15.3626C2.10171 15.4169 2.4868 15.2878 2.76624 15.0085C2.7901 14.9846 2.81294 14.9598 2.83471 14.9341L2.83774 14.9305L3.97462 13.6242L2.38115 12.0307L1.07646 13.1687L1.07346 13.1713C0.975804 13.2544 0.889148 13.3541 0.815617 13.468C0.579304 13.8332 0.562741 14.3326 0.774273 14.7105Z" />
                        <path d="M10.1099 3.2385C10.232 3.11646 10.4298 3.11646 10.5518 3.2385L11.8777 4.56437C11.9997 4.6864 11.9997 4.88428 11.8777 5.00628C11.8487 5.03534 11.8143 5.05839 11.7764 5.0741C11.7384 5.0898 11.6978 5.09786 11.6567 5.09781C11.6157 5.09786 11.5751 5.08979 11.5371 5.07409C11.4992 5.05838 11.4648 5.03533 11.4358 5.00628L10.1099 3.6804C9.98787 3.5584 9.98787 3.36056 10.1099 3.2385Z" />
                    </svg> Place Bids
                    </button>
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