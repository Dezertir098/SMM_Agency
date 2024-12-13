import React from 'react';
import './cases.css';
import { Link } from 'react-router-dom';
function Cases() {
    return (
        <div className='container' id='cases'>
            <h2>КЕЙСЫ</h2>
            <div className='case_list'>
                <div>
                    <img src='/sony.png' ></img>
                    <p className='title'>Sony</p>
                    <p>Продвижение фильмов и электроники </p>
                </div>

                <div>
                    <Link to="/samsung">
                        <img src="/samsung.png" alt="Samsung" />
                    </Link>
                    <p className='title'>Samsung</p>
                    <p>Продвижение новых смартфонов и телевизовов </p>
                </div>

                <div>
                    <img src='/kaspersky.png' ></img>
                    <p className='title'>Kaspersky</p>
                    <p>Продвидение IT продуктов в телеграмме </p>
                </div>

                <div>
                    <img src='/paradox.png' ></img>
                    <p className='title'>Paradox Interactive</p>
                    <p>Продвижение игр с помощью рекламмы на Youtube </p>
                </div>
            </div>
        </div>
    );
}
export default Cases;   