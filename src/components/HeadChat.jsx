import React from 'react';

import '../assets/styles/components/HeadChat.scss';

const HeadChat = ({ nameHead, photoProfileHead }) => (
  <>
    <div className='contenedor_HeadChat'>
      <img src={photoProfileHead} alt='' className='photoProfileHead' />
      <p className='nameHead'>{nameHead}</p>
    </div>
  </>
);

export default HeadChat;
