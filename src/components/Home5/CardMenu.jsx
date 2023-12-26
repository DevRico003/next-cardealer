import HandleQuantity from "@/src/utils/HandleQuantity";
import React, { useState,useEffect, useRef  } from "react";

function CardMenu() {
    const [showCart, setShowCart] = useState(false);
    const cartButtonRef = useRef(null);
    const cartMenuRef = useRef(null);
  
    // Handle cart button click
    const handleCartButtonClick = () => {
      setShowCart(!showCart);
    };
  
    // Close the cart when a click occurs outside of the cart area
    const handleOutsideClick = (event) => {
      if (
        cartMenuRef.current &&
        !cartMenuRef.current.contains(event.target) &&
        cartButtonRef.current !== event.target
      ) {
        setShowCart(false);
      }
    };
  
    useEffect(() => {
      // Add event listeners when the component mounts
      document.addEventListener("click", handleOutsideClick);
      // Clean up the event listeners when the component unmounts
      return () => {
        document.removeEventListener("click", handleOutsideClick);
      };
    }, []);
  
  return (
    <div className="dropdown">
      <button   ref={cartButtonRef}
        onClick={handleCartButtonClick} className="modal-btn header-cart-btn" type="button">
        <i className="bi bi-bag-check" /> CART (2 )
      </button>
      <div  ref={cartMenuRef} className={`cart-menu ${showCart ? "active" : ""}`}>
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
                        <button className="close-btn">
                          <i className="bi bi-x" />
                        </button>
                      </div>
                      <h6>
                        <a href="#">
                          Steering Rack Advance Auto Parts is a retailer.
                        </a>
                      </h6>
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
                        <button className="close-btn">
                          <i className="bi bi-x" />
                        </button>
                      </div>
                      <h6>
                        <a href="#">
                          Steering Rack Advance Auto Parts is a retailer.
                        </a>
                      </h6>
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
              <li>
                <span>Sub Total</span>
                <span>$468</span>
              </li>
              <li>
                <span>Offer (20%)</span>
                <span>$56</span>
              </li>
            </ul>
            <ul className="total">
              <li>
                <span>Total</span>
                <span>$425</span>
              </li>
            </ul>
          </div>
          <div className="footer-button">
            <ul>
              <li>
                <a className="primary-btn2" href="#">
                  Continue Shopping
                </a>
              </li>
              <li>
                <a className="primary-btn2" href="#">
                  Product Checkout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardMenu;
