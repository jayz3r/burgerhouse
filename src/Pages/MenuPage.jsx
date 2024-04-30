import React from "react";
import "../style/scss/menu.scss";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch } from "react-redux";
import products from "../data/products";
import { NavLink, useNavigate } from "react-router-dom";
import { addToCart } from "../stores/CartSlice";

function MenuPage() {
  const [showCategories, setShowCategories] = useState({
    burgers: false,
    salads: false,
    snacks: false,
    soups: false,
    pizza: false,
    meat: false,
    garnier: false,
  });
  const categoryDisplayNames = {
    burgers: "БУРГЕРЫ",
    salads: "САЛАТЫ",
    snacks: "ЗАКУСКИ",
    soups: "СУПЫ",
    pizza: "ПИЦЦА",
    meat: "МЯСО И РЫБА",
    garnier: "ГАРНИРЫ И ДЕТСКОЕ",
  };

  const dispatch = useDispatch(); 
  const navigate = useNavigate()

  const handleAddtoCart = (eachData) =>{
    dispatch(addToCart(eachData))
    navigate("/cart")
  }

  return (
    <div className="Menu">
      <div className="preSect">
        <div className="text">
          <h1>BURGER HOUSE</h1>
          <hr style={{ textAlign: "center" }} />
          <h2>меню</h2>
        </div>
      </div>
      {Object.keys(products).map(category => (
        <div key={category} className={category}>
          <div
            className={`${category}Sect`}
          >
            <div className="contents">
              <div className="icon">
                <FontAwesomeIcon
                  onClick={() => setShowCategories(prevState => ({
                    ...prevState,
                    [category]: !prevState[category]
                  }))}
                  icon={faCirclePlus}
                />
              </div>
              <div className="text">
                <h2>{categoryDisplayNames[category].toUpperCase()}</h2>
              </div>
            </div>
          </div>
          {showCategories[category] && (
            <div className="catalog">
              <div className="container">
                {products[category].map((eachData, index) => (
                  <div key={index} className="card">
                    <div className="card__header">
                      <div className="head__title">
                        <h3>{eachData.name}</h3>
                        <div className="card__price">
                        {(category === "burgers" || category ==="salads") &&(
                          <p>
                            <span> M</span> {eachData.price} С <input type="checkbox" name="" id="" /> |{" "}
                            
                            <span>L</span> {eachData.priceL} С
                            <input type="checkbox" name="" id="" />
                          </p>
                          )}
                          {(category !== "burgers" && category !=="salads") &&(
                          <p>
                            {eachData.price} C
                          </p>
                          )}
                        </div>
                      </div>
                      <div className="card__details">
                        <p>{eachData.description}</p>
                      </div>
                      <div className="card__buttons">
                        <NavLink to={"/Ordering"}>
                          <button className="ordering" onClick={() => handleAddtoCart(eachData)}>Заказать</button>
                        </NavLink>
                      </div>
                    </div>
                    {category !== "garnier" && (
                      <img src={eachData.img} alt="" className="cardImg" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default MenuPage;
