import React from "react";
import "../style/scss/sales.scss";
import sales from "/assets/salespic.jpg";

const SalesPage = () => {
  return (
    <div className="sales">
      <div className="container">
        <h1>акции и скидки</h1>
        <div className="section">
          <div className="section-img">
            <img src={sales} alt="" />
          </div>
          <div className="section-text">
            <h2>именникам скидка!</h2>
            <div className="sales-text">
            <p>
              По многочисленным запросам мы решили запустить акцию во всех
              филиалах🎆🎁🎂
            </p>
            <p>Для того, чтобы получить скидку на День Рождения
              вам необходимо сделать следующее:</p>
            <p>1) показать кассиру документ
              (только оригинал), подтверждающий личность и дату рождения
              (паспорт, права или свидетельство о рождении) 📃</p>
            <p>2) заказать все,
              что душе угодно и оплатить😋</p>
            <p>наслаждаться блюдами и отличной
              скидкой 😉</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SalesPage;
