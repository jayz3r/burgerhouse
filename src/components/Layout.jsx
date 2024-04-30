import React, { useState } from "react";
import "../style/scss/layout.scss";
import burgerhouselogo from "/assets/BurgerhouseLogo.svg";
import { NavLink, Outlet } from "react-router-dom";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import Burger from "./burger";

const Layout = ({ active, setActive }) => {
  const activeMenuClass = ({ isActive }) => (isActive ? "active-menu" : "");
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const [IsMenuClicked, setIsMenuClicked] = useState(false);

  const items = [
    { value: "Меню", link: "/Menu" },
    { value: "Хаусы", link: "/Houses" },
    { value: "акции", link: "/Sales" },
    { value: "о нас", link: "/AboutUs" },
    { value: "Партнерство", link: "/Partnership" },
    { value: "ЗАКАЗАТЬ", link: "/Ordering" },
  ];
  return (
    <div>
      <header>
        <div className="headerflex">
          <button
            className="burger"
            onClick={() => setIsMenuClicked(!IsMenuClicked)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="headerLogo">
            <NavLink to={"/"} onClick={""}>
              <img src={burgerhouselogo} alt="" />
            </NavLink>
          </div>
          <div className="headerNav">
            <nav>
              <ul>
                {items.map((item) => (
                  <li>
                    <NavLink to={`${item.link}`} className={activeMenuClass}>
                      {item.value}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="headerContacts">
            <NavLink>
              <FontAwesomeIcon icon={faInstagram} />
            </NavLink>
            <NavLink>
              <FontAwesomeIcon icon={faFacebookF} />
            </NavLink>
            <NavLink>
              <FontAwesomeIcon icon={faTwitter} />
            </NavLink>
            <NavLink to={"/Ordering"}>
              <FontAwesomeIcon style={{ margin: "0" }} icon={faCartShopping} />
              <span className="bag-quantity">{cartTotalQuantity}</span>
            </NavLink>
          </div>
        </div>
      </header>
      <Burger
        header={"Burger menu"}
        items={items}
        active={IsMenuClicked}
        setActive={setIsMenuClicked}
      />
      <div
        className={IsMenuClicked ? "outlet active" : "outlet"}
      >
        <Outlet />
      </div>
      <footer>
        <div className="footerflex">
          <div className="footerContacts">
            <NavLink>
              <FontAwesomeIcon icon={faInstagram} />
            </NavLink>
            <NavLink>
              <FontAwesomeIcon icon={faFacebookF} />
            </NavLink>
            <NavLink>
              <FontAwesomeIcon icon={faTwitter} />
            </NavLink>
          </div>
          <div className="footerNav">
            <nav>
              <ul>
                <NavLink to={"/Menu"} className={activeMenuClass}>
                  <li>МЕНЮ</li>
                </NavLink>
                <NavLink to={"/Houses"} className={activeMenuClass}>
                  <li>Хаусы</li>
                </NavLink>
                <NavLink to={"/Sales"} className={activeMenuClass}>
                  <li>акции</li>
                </NavLink>
                <NavLink to={"/AboutUs"} className={activeMenuClass}>
                  <li>о нас</li>
                </NavLink>
                <NavLink to={"/Partnership"} className={activeMenuClass}>
                  <li>Партнерство</li>
                </NavLink>
                <NavLink to={"/Ordering"} className={activeMenuClass}>
                  <li>ЗАКАЗАТЬ</li>
                </NavLink>
              </ul>
            </nav>
          </div>

          <div className="footerLogo">
            <NavLink to={"/"}>
              <img src={burgerhouselogo} alt="" />
            </NavLink>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
