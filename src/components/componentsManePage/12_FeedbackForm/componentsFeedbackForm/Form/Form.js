import React from 'react';
import "./Form.sass";
import arrowRight from "./imgForm/arrowRight.png";

const Form = () => {
    return (
        <div className="containerFeedbackForm__form">
            <h2 className="headerText">
                Зв'яжіться з нами </h2>
            <form action="#" method="post" className="formFeedback">

                <div className="blockInputNamePhone">
                    <div className="blockInputNamePhone__name">
                        <p>Ваше імя</p>
                        <input type="text" name="name"/>
                    </div>
                    <div className="blockInputNamePhone__phone">
                        <p>Номер телефону* </p>
                        <input type="tel"
                               name="phone"
                               placeholder="063 867 48 48"
                            // pattern="[0]\s[0-9][0-9]\s[0-9]{3}\s[0-9]{2}\s[0-9]{2}"
                               required/>
                    </div>
                </div>

                <div className="blockInputCompanyEmail">
                    <div className="blockInputCompanyEmail__company">
                        <p>Компанія</p>
                        <input type="text" name="company" id="companyInput"/>
                    </div>
                    <div className="blockInputCompanyEmail__email">
                        <p>Email*</p>
                        <input type="email" name="email" id="emailInput" required/>
                    </div>
                </div>

                <div className="blockInputComment">
                    <div className="blockInputComment__comment">
                        <p>Ваше повідомлення</p>
                        <textarea name="comment" id="commentInput" cols="30" rows="1" required/>
                    </div>
                </div>

                <div className="blockInputCheckbox">
                    <input type="checkbox" name="checkbox" id="checkbox"/>
                    <label htmlFor="checkbox" className="contentFormCheckboxText">
                        <span className="contentFormCheckboxText-black">Я даю дозвіл на оборку персональных данних та приймаю умови </span>
                        <span className="contentFormCheckboxText-yellow">користувальницької угоди</span>.
                    </label>
                </div>
                <div className="blockText">
                    * - поля для обов'язкового заповнення
                </div>

                <div className="blockInputSubmit">
                    <div className="blockArrowRight">
                        <img src={arrowRight} alt="arrowRight"/>
                        <input type="submit" className="inputSubmit"/>
                    </div>
                </div>

            </form>

            <div className="containerFeedbackForm-text">
                Працюємо з підприємствами <br/>
                Украини, Молдавії, Грузії, країн Балтії
            </div>
        </div>
    )
}

export default Form;