import React from 'react';
import profile from '../../public/assets/static/Mask-Perfil.png';
import send from '../../public/assets/static/013-send.png';
import '../../public/assets/styles/components/ForComment.scss';

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

