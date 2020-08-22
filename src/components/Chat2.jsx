import React from 'react';

import '../../public/assets/styles/components/Chat2.scss';

const Chat2 = ({ name2, lastMessage2, photoProfile2 }) => (
  <>
    <div className='contenedor_chat2'>
      <img src={photoProfile2} alt='' className='avatar2' />
      <div className='data2'>
        <p className='name2'>{name2}</p>
        <p className='message2'>{lastMessage2}</p>
      </div>
    </div>
  </>
);

export default Chat2;

