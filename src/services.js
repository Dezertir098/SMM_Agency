import React from 'react';
import './services.css';
import Button from './button';
function Services() {
    return (
        <div className="services" id='services'>
            <div className='container'>
                <h2>УСЛУГИ</h2>
                <div className='card_list'>
                    <div className='card'>
                        <div className='inside_card'>
                            <div className='tarif'>
                                <div className='card_text'>
                                    <p className='tarif_title'>Standart</p>
                                    <p className='sub_title'>Идеально подходит для малого бизнеса</p>

                                    <p className='text'>Прибыль за первую неделю от 30 000₽</p>
                                    <p>1000 новых клиентов</p>
                                    <img className='' src="/house.png" alt="Standart" />
                                </div>
                            </div>
                        </div>
                        <div className='d'>
                            <p>от 10 000₽ </p>
                            <Button />
                        </div>
                    </div>

                    <div className='card'>
                        <div className='inside_card_blue'>
                            <div className='tarif'>
                                <div className='card_text'>
                                    <p className='tarif_title'>Premium</p>
                                    <p className='sub_title'>Подходит малому и среднему бизнесу</p>

                                    <p className='text'>Прибыль за первую неделю от 100 000₽</p>
                                    <p>5000 новых клиентов</p>
                                    <img className='' src="/cafe.png" alt="Premium" />
                                    <p className='best'>Лучший для вас</p>
                                </div>
                            </div>
                        </div>
                        <div className='d'>
                            <p>от 80 000₽ </p>
                            <Button />
                        </div>
                    </div>

                    <div className='card'>
                        <div className='inside_card'>
                            <div className='tarif'>
                                <div className='card_text'>
                                    <p className='tarif_title'>Ultimate</p>
                                    <p className='sub_title'>Подходит Крупным компаниям</p>

                                    <p className='text'>Прибыль за первую неделю от 600 000₽</p>
                                    <p>20000 новых клиентов</p>
                                    <img className='' src="/company.png" alt="Ultimate" />

                                </div>
                            </div>
                        </div>
                        <div className='d'>
                            <p>от 200 000₽ </p>
                            <Button />
                        </div>
                    </div>
                </div>


            </div>

        </div>

    );
}

export default Services;