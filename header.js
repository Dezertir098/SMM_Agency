import React from 'react';
import './header.css';
import Button from './button';
function Header() {
  return (
    <header className="container" id="header">
      <img className='logo' src="/Derry_Logo.png" alt="Derry Logo" />
      <div className="menu">
        <li>
          <ul><a className='menu_text' href='#about_us'>О нас</a></ul>
          <ul><a className='menu_text' href='#services'>Услуги</a></ul>
          <ul><a className='menu_text' href='#rev'>Отзывы</a></ul>
          <ul><a className='menu_text' href='#cases'>Кейсы</a></ul>
        </li>
          <Button />
      </div>

    </header>
  );
}

export default Header;