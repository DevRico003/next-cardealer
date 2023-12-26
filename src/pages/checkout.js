import React, { useReducer, useState } from 'react'
import MainLayout from '../layout/MainLayout'
import HandleQuantity from '../utils/HandleQuantity';

  
function CheckoutPage() {
    const [activeOption, setActiveOption] = useState('paypal');
    const handleOptionChange = (option) => {
      setActiveOption(option);
    };

  return (
    <MainLayout>
        <div className="checkout-page pt-100 mb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="login-and-coupon-area">
                  <div className="row divider g-3">
                    <div className="col-lg-6">
                      <p>Alraedy have an account? 
                        <button type="button" data-bs-toggle="modal" data-bs-target="#logInModal01">
                          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.4311 12.759C15.417 11.4291 16 9.78265 16 8C16 3.58169 12.4182 0 8 0C3.58169 0 0 3.58169 0 8C0 12.4182 3.58169 16 8 16C10.3181 16 12.4058 15.0141 13.867 13.4387C14.0673 13.2226 14.2556 12.9957 14.4311 12.759ZM13.9875 12C14.7533 10.8559 15.1999 9.48009 15.1999 8C15.1999 4.02355 11.9764 0.799983 7.99991 0.799983C4.02355 0.799983 0.799983 4.02355 0.799983 8C0.799983 9.48017 1.24658 10.8559 2.01245 12C2.97866 10.5566 4.45301 9.48194 6.17961 9.03214C5.34594 8.45444 4.79998 7.49102 4.79998 6.39995C4.79998 4.63266 6.23271 3.19993 8 3.19993C9.76729 3.19993 11.2 4.63266 11.2 6.39995C11.2 7.49093 10.654 8.45444 9.82039 9.03206C11.5469 9.48194 13.0213 10.5565 13.9875 12ZM13.4722 12.6793C12.3495 10.8331 10.3188 9.59997 8.00008 9.59997C5.68126 9.59997 3.65049 10.8331 2.52776 12.6794C3.84829 14.2222 5.80992 15.2 8 15.2C10.1901 15.2 12.1517 14.2222 13.4722 12.6793ZM8 8.79998C9.32551 8.79998 10.4 7.72554 10.4 6.39995C10.4 5.07444 9.32559 3.99992 8 3.99992C6.6744 3.99992 5.59997 5.07452 5.59997 6.40003C5.59997 7.72554 6.67449 8.79998 8 8.79998Z" />
                          </svg>  Log in
                        </button> 
                      </p>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center">
                      <div className="cupor-code-area">
                        <p>Have a coupon code?</p>
                        <div className="cupon">
                          <button type="button">
                            Click here coupon code
                          </button>
                          <form className="nav__search-form">
                            <input type="text" placeholder="Write coupon code" id="search" autoComplete="off" />
                            <button className="primary-btn3" type="submit">Save</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="inquiry-form mt-60">
                  <div className="title">
                    <h4>Billing Information</h4>
                  </div>
                  <form>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-inner mb-30">
                          <label>Full Name*</label>
                          <input type="text" placeholder="Jackson Mile" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-inner mb-30">
                          <label>Phone*</label>
                          <input type="text" placeholder="Ex- +880-13* ** ***" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-inner mb-30">
                          <label>Email (Optional)</label>
                          <input type="email" placeholder="Ex- info@gmail.com" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-inner mb-30">
                          <label>Address*</label>
                          <input type="email" placeholder="Dhaka, Bangladesh" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-inner mb-30">
                          <label>Street Address*</label>
                          <input type="email" placeholder="Your Street" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-inner mb-30">
                          <label>Postal Code*</label>
                          <input type="email" placeholder="City Postal" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-inner mb-30">
                          <label>Short Notes*</label>
                          <textarea placeholder="Write Something..." defaultValue={""} />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-inner">
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark" />
                            <span className="text">Save this information for next time</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inquiry-form mt-60">
                  <div className="title">
                    <h4>Order Summary</h4>
                  </div>
                  <form>
                    <div className="cart-menu">
                      <div className="cart-body">
                        <ul>
                          <li className="single-item">
                            <div className="item-area">
                              <div className="main-item">
                                <div className="item-img">
                                  <img src="assets/img/home1/cart-01.png" alt="" />
                                </div>
                                <div className="content-and-quantity">
                                  <div className="content">
                                    <div className="price-and-btn d-flex align-items-center justify-content-between">
                                      <span>$234</span>
                                      <button className="close-btn"><i className="bi bi-x" /></button>
                                    </div>
                                    <h6><a href="#">Steering Rack Advance Auto Parts is a
                                        retailer.</a></h6>
                                  </div>
                                  <div className="quantity-area">
                                  <HandleQuantity/>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="single-item">
                            <div className="item-area">
                              <div className="main-item">
                                <div className="item-img">
                                  <img src="assets/img/home1/cart-01.png" alt="" />
                                </div>
                                <div className="content-and-quantity">
                                  <div className="content">
                                    <div className="price-and-btn d-flex align-items-center justify-content-between">
                                      <span>$234</span>
                                      <button className="close-btn"><i className="bi bi-x" /></button>
                                    </div>
                                    <h6><a href="#">Steering Rack Advance Auto Parts is a
                                        retailer.</a></h6>
                                  </div>
                                  <div className="quantity-area">
                                  <HandleQuantity/>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="cart-footer">
                        <div className="pricing-area">
                          <ul>
                            <li><span>Sub Total</span><span>$468</span></li>
                            <li><span>Offer (20%)</span><span>$56</span></li>
                          </ul>
                          <ul className="total">
                            <li><span>Total</span><span>$425</span></li>
                          </ul>
                        </div>
                        <div className="choose-payment-mathord">
                          <h6>Select Payment Method</h6>
                          <div className="payment-option">
                            <ul>
                              <li onClick={() => handleOptionChange('paypal')} className={`paypal ${activeOption === 'paypal' ? 'active' : ''}`}>
                                <img src="assets/img/inner-page/icon/PayPal.svg" alt="" />
                                <div className="checked">
                                  <i className="bi bi-check" />
                                </div>
                              </li>
                              <li className={`stripe ${activeOption === 'stripe' ? 'active' : ''}`} onClick={() => handleOptionChange('stripe')}>
                                <img src="assets/img/inner-page/icon/Stripe.svg" alt="" />
                                <div className="checked">
                                  <i className="bi bi-check" />
                                </div>
                              </li>
                              <li className={`offline ${activeOption === 'offline' ? 'active' : ''}` } onClick={() => handleOptionChange('offline')}>
                                <img src="assets/img/inner-page/icon/Offline.svg" alt="" />
                                <div className="checked">
                                  <i className="bi bi-check" />
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="pt-25" id="StripePayment" style={{ display: activeOption === 'stripe' ? 'block' : 'none' }}>
                            <div className="row g-4">
                              <div className="col-md-12">
                                <div className="form-inner">
                                  <label>Card Number</label>
                                  <input type="text" placeholder="1234 1234 1234 1234" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-inner">
                                  <label>Expiry</label>
                                  <input type="text" placeholder="MM/YY" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-inner">
                                  <label>CVC</label>
                                  <input type="text" placeholder="CVC" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-inner">
                          <button className="primary-btn3" type="submit">Place Order</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

    </MainLayout>
  )
}

export default CheckoutPage