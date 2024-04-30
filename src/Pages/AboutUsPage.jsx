import React from "react";
import "../style/scss/aboutus.scss";
import us from '/assets/aboutus/us.jpg';
import us2 from "/assets/aboutus/us2.jpg";
import us3 from "/assets/aboutus/us3.jpg";
import us4 from "/assets/aboutus/us4.jpg";
const AboutUsPage = () => {
  return (
    <div>
      <div className="content">
        <div className="container">
          <div className="content-us">
            <div className="content-text">
              <h2>мы</h2>
              <p>
                - сеть ресторанов быстрого питания в Бишкеке, призванная
                подарить городу настоящие качественные бургеры и не только.
              </p>
              <p>сеть состоит из 4 ресторанов и впереди еще большие планы!</p>
            </div>
            <img src={us} alt="" />
          </div>
          <div className="content-values">
            <h2 style={{ marginBottom: "40px" }}>наши ценности</h2>
            <div className="content-flex">
              <div className="content-text">
                <p>
                  любовь к своему делу - это то, что делает burger house таким
                  какой он есть сейчас. именно благодаря огромной любви к нашему
                  делу, мы выросли из идеи в целую сеть ресторанов.
                </p>
                <p>
                  мы хотим становиться все интереснее с каждым днем и никогда не
                  перестанем находить способы сделать Burger house еще лучше.{" "}
                </p>
              </div>
              <img src={us2} alt="" />
            </div>
            <div className="content-flex">
              <img src={us3} alt="" className="n3" />
              <div className="content-text">
                <p>
                  Качество - один из самых главных принципов нашей компании.
                </p>
                <p>
                  мы хотим приносить удовольствие людям через еду. именно
                  поэтому наша главная задача - готовить вкусные бургеры.
                </p>
                <p>
                  Мы покупаем лучшее мясо, свежие ингридиенты и печем домашние
                  булочки.
                </p>
              </div>
            </div>
            <div style={{ marginBottom: "0" }} className="content-flex">
              <div className="content-text">
                <p>
                  гостеприимство - это черта издавна отличала кыргызский народ и
                  мы хотим сохранять традиции предков. burger house это наш
                  общий дом, где каждого гостя уважают и любят.
                </p>
                <p>
                  как мы это делаем? - у нас всегда чисто, светло и
                  доброжелательно.
                </p>
                <p>
                  - мы всегда готовим с душой и дарим наслаждение в каждом
                  кусочке.
                </p>
              </div>
              <img src={us4} alt="" className="n4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
