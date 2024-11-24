import React, { useState } from 'react';
import './button.css';
function Button() {
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
      <button onClick={openModal} className="leave_req">
        Оставить заявку
      </button>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="modal">
          <div className={`modal-content ${isClosing ? 'slide-out' : ''}`}>
            <div className='content'>
            <span className="close" onClick={closeModal}>&times;</span>
            <img class = 'logo' src="/Derry_Logo.png" alt="Derry Logo" />
            {/* Здесь можно добавить форму или другие элементы */}
            </div>
          </div>
        </div>
      )}
    </div>
    );
    return (
        <button onClick={openModal} class = "leave_req">Оставить заявку</button>
      );
}

export default Button;