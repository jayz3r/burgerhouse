import React, { useState } from "react";
import "../style/scss/housepage.scss";
import { NavLink } from "react-router-dom";
import Adress from "../data/adress.json";

const HousePage = () => {
  return (
    <div className="house">
      <div className="mainSect">
        <h1>ХАУСЫ</h1>
      </div>
      <div className="adresses">
        {Adress.map((address, index) => (
          <div key={index} className={`adress-${index}`}>
            <NavLink to={`/Adress`} >
              <h3>{address.name}</h3>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HousePage;
