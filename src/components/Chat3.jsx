import React from 'react';

import '../../public/assets/styles/components/Chat3.scss';

const Chat3 = ({ name3, lastMessage3, photoProfile3 }) => (
  <>
    <div className='contenedor_chat3'>
      <img src={photoProfile3} alt='' className='avatar3' />
      <div className='data3'>
        <p className='name3'>{name3}</p>
        <p className='message3'>{lastMessage3}</p>
      </div>
    </div>
  </>
);

export default Chat3;
