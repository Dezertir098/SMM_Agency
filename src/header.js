import React from 'react';
import './header.css';
import Button from './button';
function Header() {
  return (
    <header className="container" id="header">
      <img className='logo' src="/Derry_Logo.png" alt="Derry Logo" />
      <div className="menu">
        <li>
          <ul><a className='menu_text' href=''>О нас</a></ul>
          <ul><a className='menu_text' href=''>Отзывы</a></ul>
          <ul><a className='menu_text' href=''>Услуги</a></ul>
          <ul><a className='menu_text' href=''>Кейсы</a></ul>
        </li>
        <Button />
      </div>

    </header>
  );
}

export default Header;