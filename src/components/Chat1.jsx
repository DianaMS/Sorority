import React from 'react';

import '../../public/assets/styles/components/Chat1.scss';

const Chat1 = ({ name1, lastMessage1, photoProfile1 }) => (
  <>
    <div className='contenedor_chat1'>
      <div className='data1'>
        <p className='name1'>{name1}</p>
        <p className='message1'>{lastMessage1}</p>
      </div>
      <img src={photoProfile1} alt='' className='avatar1' />
    </div>
  </>
);

export default Chat1;
