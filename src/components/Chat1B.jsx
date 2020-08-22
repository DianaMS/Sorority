import React from 'react';

import '../../public/assets/styles/components/Chat1B.scss';

const Chat1BB = ({ name1B, lastMessage1B, photoProfile1B }) => (
  <>
    <div className='contenedor_chat1B'>
      <div className='data1B'>
        <p className='name1B'>{name1B}</p>
        <p className='message1B'>{lastMessage1B}</p>
      </div>
      <img src={photoProfile1B} alt='' className='avatar1B' />
    </div>
  </>
);

export default Chat1BB;
