import React from "react";
import "../style/scss/partnership.scss";

const PartnershipPage = () => {
  return (
    <div className="partnership">
      <div className="container">
        <div className="partnership-text">
          <h1>Партнерство</h1>
          <p>
            Burger House на постоянной основе ищет амбициозных оптимистичных
            людей от 18 лет и выше на вакансии официанта, повара, чистюли и
            стажера в офис. Мы предлагаем не только отличные условия и дружный
            коллектив, но и карьерный рост, потому что наши работники учатся
            быть профессионалами и универсалами в любом деле. Все зависит только
            от Вас, присоединяйтесь и почувствуйте атмосферу Burger House!
          </p>
          <p className="">заполните анкету</p>
          <div className="partnership-form">
            <div className="partnership-form-">
              <form>
                <label for="должность">должность</label>
                <input type="text" id="должность" name="должность" />
              </form>
            </div>
            <div className="partnership-form-">
              <form>
                <label for="ф.и.о">ф.и.о</label>
                <input type="text" id="ф.и.о" name="ф.и.о" />
              </form>
            </div>
            <div className="partnership-form-">
              <form>
                <label for="эл. почта">эл. почта</label>
                <input type="text" id="эл. почта" name="эл. почта" />
              </form>
            </div>
            <div className="partnership-form-">
              <form>
                <label for="телефон">телефон</label>
                <input type="text" id="телефон" name="телефон" />
              </form>
            </div>
            <div className="partnership-form-">
              <form>
                <label for="дата рождения">дата рождения</label>
                <input type="text" id="дата рождения" name="дата рождения" />
              </form>
            </div>
            <div className="partnership-form-">
              <form>
                <label for="место жительства">
                  место жительства в г. бишкек
                </label>
                <input
                  type="text"
                  id="место жительства"
                  name="место жительства"
                />
              </form>
            </div>
            <div className="partnership-form-">
              <form>
                <label for="опыт работы">
                  опыт работы ( если нет, то научим:  <br /> <br /> укажите:
                  <br />- должность и место
                  работы;<br /> - обязанности, функции, достижения;<br /> - как долго Вы
                  проработали на данной должности и причина ухода:
                </label>
                <textarea type="text" id="опыт работы" name="опыт работы" />
              </form>
            </div>
            <div className="partnership-form-">
              <form>
                <label for="знание языков">знание языков (преимущество)</label>
                <input type="text" id="знание языков" name="знание языков" />
              </form>
            </div>
            <div className="partnership-form-">
              <form>
                <label for="качества">личностные и профессиональные качества:</label>
                <input type="text" id="качества" name="качества" />
              </form>
            </div>
            <div className="partnership-form-">
              <form>
                <label for="образование">образование</label>
                <input type="text" id="образование" name="образование" />
              </form>
            </div>
            <div className="partnership-form-">
              <form>
                <label for="motivation">что вас мотивирует развиваться и не стоять на месте?</label>
                <input type="text" id="motivation" name="motivation" />
              </form>
            </div>
            <div className="partnership-form-">
              <form>
                <label for="why">почему вы выбрали Burger house?</label>
                <input type="text" id="why" name="why" />
              </form>
            </div>
            <div className="partnership-form-">
              <form>
                <label for="howLong">как долго планируете сотрудничать с burger house?</label>
                <input type="text" id="howLong" name="howLong" />
              </form>
            </div>
            <div className="partnership-form-">
              <form>
                <label for="schedule">желаемый график</label>
                <input type="text" id="schedule" name="schedule" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipPage;
