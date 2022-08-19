import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./header.scss";
import LogoImg from "../../assets/img/logo.png";
import PriceIcon from "../../assets/icons/uah.svg";
import CartIcon from "../../assets/icons/cart.svg";

const Header = () => {
  const [headerActive, setHeaderActive] = useState("header");

  const toggleHeader = () => {
    headerActive === "header"
      ? setHeaderActive("header header_active")
      : setHeaderActive("header");
  };

  return (
    <header className={headerActive}>
      <div className="header__overlay"></div>
      <div className='container'>
        <div className='header__inner'>
          <button onClick={() => toggleHeader()} className='header__nav-opener'>
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
          <button className='header__cart-btn'>
            <div className='header__price'>
              <span className='header__price-number'>2305</span>
              <span className='header__price-icon'>
                <img src={PriceIcon} alt='UAH' />
              </span>
            </div>
            <div className='header__cart'>
              <span className='header__cart-icon'>
                <img src={CartIcon} alt='cart' />
              </span>
              <span className='header__cart-number'>0</span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
