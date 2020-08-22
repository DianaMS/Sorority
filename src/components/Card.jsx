import React from 'react';
import '../assets/styles/components/Card.scss';

const Card = ({ user }) => (
  <div className='card'>
    <div className='card-content'>
      <img src={user.photo} alt='' />
      <div>
        <p>{user.name}</p>
        <p className='occupation'>{user.occupation}</p>
        <p>{user.content}</p>
      </div>
    </div>
    <div className='extra-info'>
      <div>
        <img src='src/assets/static/Group.png' alt='icon' />
        <p>Escribeme</p>
      </div>
      <div>
        <img src='src/assets/static/Group2.png' alt='icon' />
        <img src='src/assets/static/Group2.png' alt='icon' />
        <img src='src/assets/static/Group2.png' alt='icon' />
        <img src='src/assets/static/Group2.png' alt='icon' />
        <img src='src/assets/static/Group2.png' alt='icon' />
      </div>
    </div>
  </div>
);

export default Card;
