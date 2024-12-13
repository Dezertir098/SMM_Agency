import React, { useState } from 'react';
import './button.css'; // Подключение стилей

// Компонент для отображения чекбокса с галочкой
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
        {isChecked && <span className="checkmark">✔</span>}
      </label>
      <a className="checkbox-text">Соглашение на обработку персональных данных</a>
    </div>
  );
}

// Основной компонент с модальным окном
function Button() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  
  // Ошибки валидации
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    message: '',
  });

  // Открыть модальное окно
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Закрыть модальное окно с анимацией
  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 500); // Задержка для анимации
  };

  // Проверка обязательных полей перед отправкой
  const validateForm = () => {
    const newErrors = {};

    if (!name) newErrors.name = 'Укажите имя';
    if (!phone) newErrors.phone = 'Укажите номер телефона';
    if (!message) newErrors.message = 'Укажите сообщение';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Если все поля заполнены, можно отправить форму
      alert('Заявка отправлена!');
      closeModal(); // Закрытие модального окна после успешной отправки
    }
  };

  return (
    <div>
      <button onClick={openModal} className="leave_req">
        Оставить заявку
      </button>
      {isModalOpen && (
        <div className="modal">
          <div className={`modal-content ${isClosing ? 'slide-out' : ''}`}>
            <div className="content">
              <span className="close" onClick={closeModal}>&times;</span>
              <img className="logo" src="/Derry_Logo.png" alt="Derry Logo" />
            </div>
            <div className="c">
              <p>Имя</p>
              <input
                className="base_info"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder=""
              />
              {errors.name && <span className="error">{errors.name}</span>}

              <p>Телефон</p>
              <input
                className="base_info"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 984 134 03 01"
                pattern="\+7 \d{3} \d{3} \d{2} \d{2}"
                required
              />
              {errors.phone && <span className="error">{errors.phone}</span>}

              <p>Сообщение</p>
              <input
                className=""
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {errors.message && <span className="error">{errors.message}</span>}

              <input type="file" className="file" />

              <React.StrictMode>
                <CheckboxWithCheckmark />
              </React.StrictMode>
            </div>
            <div className="btn_leave_req">
              <button className="leave_req button_v2" onClick={handleSubmit}>
                Оставить заявку
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Button;
