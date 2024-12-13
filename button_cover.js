import React, { useState } from 'react';
import './button.css';

function CheckboxWithCheckmark() {

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="checkbox-container">

      <input
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="checkbox-input"
      />
      

      <label htmlFor="checkbox" className="checkbox-label">

        {isChecked && (
          <span className="checkmark">✔</span>
        )}
      </label>


      <a className="checkbox-text">Соглашение на обработку персональных данных</a>
    </div>
  );
}

function Button_cover() {
const [isModalOpen, setIsModalOpen] = useState(false);
const [isClosing, setIsClosing] = useState(false);

  // Функция для открытия модального окна
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Функция для закрытия модального окна
  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
    setIsModalOpen(false);
    setIsClosing(false);
    }, 500);
  };

  return (
    <div>
      {/* Кнопка для открытия модального окна */}
      <button onClick={openModal} className="leave_req button_v2">
        Оставить заявку
      </button>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="modal">
        <div className={`modal-content ${isClosing ? 'slide-out' : ''}`}>
          <div className='content'>
            <span className="close" onClick={closeModal}>&times;</span>
            <img className='logo' src="/Derry_Logo.png" alt="Derry Logo" />
          </div>
          <div className='c'>
            <p>Имя</p>
            <input className='base_info'></input>

            <p>Телефон</p>
            <input className='base_info'></input>

            <p>Сообщение</p>
            <input></input>
            <button className='file'>Прикрепить файл</button>
            <React.StrictMode>
            <CheckboxWithCheckmark />
            </React.StrictMode>
          </div>
          <div className="btn_leave_req">
              <button className="leave_req button_v2">Оставить заявку</button>
          </div>
        </div>
      </div>
      )}
    </div>
    );
    return (
        <button onClick={openModal} className = "leave_req">Оставить заявку</button>
      );
}

export default Button_cover;