import React from 'react';
import './contacts.css';







function Contacts() {
    return (

        <div className='container' id='contacts'>
            <h2>КОНТАКТЫ</h2>
            <div className='contacts_list'>
                <div className='social_list'>
                    <img src='VK.svg'></img>
                    <img src='TG.svg'></img>
                    <img src='mail.svg'></img>
                    <img src='phone.svg'></img>
                </div>

                <div className="leave">
                    <div className='content_position'>
                        <div className="content">
                            
                            <img className="logo" src="/Derry_Logo.png" alt="Derry Logo" />
                        </div>
                        <div className="c">
                            <p>Имя</p>
                            <input
                                className="base_info"


                                placeholder=""
                            />


                            <p>Телефон</p>
                            <input
                                className="base_info"


                                placeholder="+7 984 134 03 01"
                                pattern="\+7 \d{3} \d{3} \d{2} \d{2}"
                                required
                            />


                            <p>Сообщение</p>
                            <input
                                className=""
                            />


                            <input type="file" className="file" />


                        </div>
                        <div className="btn_leave_req">
                            <button className="leave_req button_v2">
                                Оставить заявку
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contacts; 