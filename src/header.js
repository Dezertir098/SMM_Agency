import React from 'react';
import './header.css';
function Header() {
  return (
    <header className = "container" id = "header">
      <img class = 'logo' src="/Derry_Logo.png" alt="Derry Logo" />
        <div class = "menu">
            <li>
                <ul><a class = 'menu_text' href=''>О нас</a></ul>
                <ul><a class = 'menu_text' href=''>Отзывы</a></ul>
                <ul><a class = 'menu_text' href=''>Услуги</a></ul>
                <ul><a class = 'menu_text' href=''>Кейсы</a></ul>
            </li>
            <button class = "leave_req">Оставить заявку</button>
            </div>
            
    </header>
  );
}

export default Header;