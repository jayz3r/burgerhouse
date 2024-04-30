import React from "react";
import "../style/scss/mainpage.scss";
import { NavLink } from "react-router-dom";
function MainPage() {
  return (
    <div>
      <div className="MainPageSections">
        <div className="WelcomeSect">
          <h1>
            Добро пожаловать <br />в семью
          </h1>
        </div>
        <div className="MenuSect">
          <NavLink to={"/Menu"}>
            <h2>МЕНЮ</h2>
          </NavLink>
        </div>
        <div className="HouseSect">
        <NavLink to={"/Houses"}>
            <h2>Хаусы</h2>
          </NavLink>
        </div>
        <div className="SalesSect">
        <NavLink to={"/Sales"}>
            <h2>акции</h2>
          </NavLink>
        </div>
        <div className="aboutUsSect">
        <NavLink to={"/AboutUs"}>
            <h2>о нас</h2>
          </NavLink>
        </div>
        <div className="partnershipSect">
        <NavLink to={"/Partnership"}>
            <h2>Партнерство</h2>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
