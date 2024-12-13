import React from 'react';
import './fotter.css';
function Fotter() {
    return (
        <div className='background'>
            <div className="container" id="fotter">
                <div className='site_content'>
                    <div className='fotter_column'>
                        <h3>О нас</h3>
                        <p>Информация о компании</p>
                    </div>

                    <div className='fotter_column'>
                        <h3>Услуги</h3>
                        <p>Тарифы</p>
                    </div>
                    <div className='fotter_column'>
                        <h3>Кейсы</h3>
                        <p>Sony</p>
                        <p>Samsung</p>
                        <p>Kaspersky</p>
                        <p>Paradox Interactive</p>
                    </div>
                    <div className='fotter_column'>
                        <h3>Контакты</h3>
                        <p>Контактная информация</p>
                        <p>Оставить заявку</p>
                    </div>
                </div>
                <div className='contact_info'>
                    <div className='adress'>
                        <img src='/gap.svg'></img>
                        <p>г.Москва Ленинградское шоссе 13А</p>
                    </div>
                    <div className='socials'>
                        <img src='/vk_mini.svg'></img>
                        <img src='/tg_mini.svg'></img>
                    </div>
                </div>


            </div>
            <div className='logo_name'>
                <h2>Derry</h2>
            </div>

        </div>
    );
}

export default Fotter