import React from 'react';
import './rev.css';
function Rev() {
  return (
    <div className="container" id="rev">
      <h2 className='rev'>ОТЗЫВЫ</h2>
      <div className='message_list'>
        <div className='message first'>
          <div className='user_comment'>
            <div className='main_user_info'>
              <img src="/profile.svg" alt="profile" ></img>
              <p>Антон Логвинов</p>
              <img src="/star.svg" alt="star" ></img>
              <img src="/star.svg" alt="star" ></img>
              <img src="/star.svg" alt="star" ></img>
              <img src="/star.svg" alt="star" ></img>
              <img src="/star.svg" alt="star" ></img>

            </div>
            <p>Отличное агентство, получил новых клинтов быстро и дёшево</p>

          </div>
        </div>

        <div className='message second'>
          <div className='user_comment'>
            <div className='main_user_info'>
              <img src="/profile.svg" alt="profile" ></img>
              <p>Xsiomi</p>
              <img src="/star.svg" alt="star" ></img>
              <img src="/star.svg" alt="star" ></img>
              <img src="/star.svg" alt="star" ></img>
              <img src="/star.svg" alt="star" ></img>

            </div>
            <p>Благодаря вам у нашей компании появилось много новых заказов, а также больше людей узнали о новых товарах</p>

          </div>
        </div>

        <div className='message  third'>
          <div className='user_comment'>
            <div className='main_user_info'>
              <img src="/profile.svg" alt="profile" ></img>
              <p>Samsung</p>
              <img src="/star.svg" alt="star" ></img>
              <img src="/star.svg" alt="star" ></img>
              <img src="/star.svg" alt="star" ></img>
              <img src="/star.svg" alt="star" ></img>
              <img src="/star.svg" alt="star" ></img>

            </div>
            <p>Много новых клиетов пришли после ваших услуг, хорошая тех. поддержка и цена</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Rev