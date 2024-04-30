import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  decreaseCart,
  getTotal,
  removeFromCart,
} from "../stores/CartSlice";
import "../style/scss/cart.scss";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };
  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  return (
    <div className="container">
      <h2>корзина</h2>
      {cart.cartItems.length === 0 ? (
        <div style={{ height: "67vh" }} className="cart-empty">
          <p>Ваша картина пуста</p>
          <div className="start-shopping">
            <Link to="/menu">
              <span>начать закупаться</span>
            </Link>
          </div>
        </div>
      ) : (
        <div
          className="cart-items"
          style={{ height: cart.cartItems.length < 3 ? "100vh" : "auto" }}
        >
          {cart.cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <div className="cart-product">
                <div className="cart-product-div">
                  <img src={item.img} alt="" />
                  <h3>{item.name}</h3>
                  <div className="btns">
                    <button
                      style={{ width: "20px" }}
                      onClick={() => handleDecreaseCart(item)}
                    >
                      -
                    </button>
                    <button
                      style={{ width: "20px" }}
                      onClick={() => handleIncreaseCart(item)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="cart-product-price">
                {item.price} <p>С</p>{" "}
              </div>
              <div className="cart-product-quantity">
                <div className="count">
                  {item.cartQuantity} <p>шт</p>
                </div>
              </div>
              <div className="card-product-total-price">
                <p>итого</p> {item.price * item.cartQuantity} <p>C</p>
              </div>
              <button className="clear" onClick={() => handleRemoveFromCart(item)}> <p>УБРАТЬ</p> </button>
            </div>
          ))}
          <div className="continue-shopping">
            <Link to="/menu">
              <span>Продолжить</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
