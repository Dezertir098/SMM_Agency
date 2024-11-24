import React from 'react';
import './cover.css';
import Button_cover from './button_cover';
function Cover() {
  return (
    <div id="cover">
      <div className='container'>
        <div className='cover_text_blog'>
          <h1>Быстрая реклама и продвижение в социальных сетях</h1>
          <p>Надёжно и недорого</p>
          <Button_cover />
        </div>
      </div>
    </div>
  );
}

export default Cover;