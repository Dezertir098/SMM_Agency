import React from 'react';
import './about_us.css';
function About_us() {
    return (
        <div id='about_us' className='container'>
            <div className='about_is_info'>
                <h2>О НАС</h2>
                <p><span>Derry</span> - специализируется на рекламе
                    в социальных сетях и привлечении новох клиентов</p>
                <img src="/image 61.png" alt="Our Team" ></img>
            </div>
            <div className='sqr_list'>
                <div className='sqr'>
                    <div className='sqr_text '>
                        <p><span>от</span>1000</p>
                    </div>

                    <p>Новых клиетов придут к вам</p>

                </div>
                <div className='sqr'>
                    <div className='sqr_text '>
                        <p><span>на</span>50<b>%</b></p>
                    </div>

                    <p>Дешевле чем у конкурентов</p>
                </div>
                <div className='sqr'>
                    <div className='sqr_text'>
                        <p>12<span>лет</span></p>
                    </div>

                    <p>Лет успешной рекламы</p>
                </div>
                <div className='sqr sqr_blue'>
                    <div className='sqr_text'>
                        <p>98<b>%</b></p>
                    </div>

                    <p>Клинентов довольны рекламой</p>
                </div>
            </div>
        </div>
    );
}
export default About_us;
