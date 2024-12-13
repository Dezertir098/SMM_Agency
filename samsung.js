import React from 'react';
import Header from './header';
import './samsung.css';
const Samsung = () => {
    return (
        <div>
            <Header />
            <div className='sum_cover'>
                <div className='container cover_text_sum'>
                    <h2>Кейс по продажам Galaxy S24 через Instagram</h2>
                    <div className='line'>
                    </div>
                </div>
            </div>
            <div className='container client_info'>
                <div>
                    <p><span>Клиент:</span>Samsung</p>
                    <p><span>Период:</span>февраль 2023 – сентябрь 2024</p>
                    <p><span>Способ продвижения:</span>контекстная реклама в Instagam</p>
                    <p><span>Бюджет:</span>167 570, 88 руб.</p>
                    <p><span>Цель:</span>продвижение и привлечение новых клиентов с сайта</p>
                </div>
                <img src='/samsung_back.png'></img>
            </div>
            <div className='container'>
                <div className='results'>
                    <h2>Результаты по привлечению</h2>
                    <p>За 1,5 года работы рекламной кампании на сайт было привлечено 35000 новых пользователей.</p>
                    <img src='/statistic.png'></img>
                </div>
            </div>
        </div>
    );
};

export default Samsung;