import React from 'react';
import profile from '../assets/static/Mask-Perfil.png';
import send from '../assets/static/013-send.png';
import '../assets/styles/components/ForComment.scss';

const ForComment = () => (
  <>
    <section className='for-comment'>
      <img src={profile} alt='' />
      <div className='input-field'>
        <input type='text' className='input' placeholder='Escribe una respuesta' />
        <img src={send} alt='' className='icon' />
      </div>
    </section>
  </>
);

export default ForComment;

