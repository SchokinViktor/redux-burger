import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { setModalActive } from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";

import "./header.scss";
import LogoImg from "../../assets/img/logo.png";
import CartIcon from "../../assets/icons/cart.svg";
import ModalCart from "../../components/ModalCart/ModalCart";

const Header = () => {
  const [headerActive, setHeaderActive] = useState("header");

  const toggleHeader = () => {
    headerActive === "header"
      ? setHeaderActive("header header_active")
      : setHeaderActive("header");
  };

  const isModalActive = useSelector((state) => state.cartReducer.isModalActive);
  const dispatch = useDispatch();

  const toggleModalCart = () => {
    dispatch(setModalActive(!isModalActive));
  };

  const totalPrice = useSelector((state) => state.cartReducer.totalPrice);

  return (
    <>
      <ModalCart />
      <header className={headerActive}>
        <div className='header__overlay'></div>
        <div className='container'>
          <div className='header__inner'>
            <button
              onClick={() => toggleHeader()}
              className='header__nav-opener'
            >
              <span></span>
            </button>
            <nav className='header__nav-holder'>
              <div className='header__logo-holder'>
                <NavLink to={`/`} onClick={() => setHeaderActive("header")}>
                  <img src={LogoImg} alt='logo' />
                </NavLink>
              </div>

              <ul className='header__nav-list'>
                <li className='header__nav-item'>
                  <NavLink
                    to={`/`}
                    onClick={() => setHeaderActive("header")}
                    className={({ isActive }) =>
                      isActive ? "header__nav-link_active" : "header__nav-link"
                    }
                  >
                    Discover
                  </NavLink>
                </li>
                <li className='header__nav-item'>
                  <NavLink
                    to={`/custom-burger`}
                    onClick={() => setHeaderActive("header")}
                    className={({ isActive }) =>
                      isActive ? "header__nav-link_active" : "header__nav-link"
                    }
                  >
                    Make your burger
                  </NavLink>
                </li>
              </ul>
            </nav>
            <button
              className='header__cart-btn'
              onClick={() => toggleModalCart()}
            >
              <div className='header__price'>{totalPrice.toFixed(2)} ₴</div>
              <div className='header__cart'>
                <span className='header__cart-icon'>
                  <img src={CartIcon} alt='cart' />
                </span>
              </div>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
