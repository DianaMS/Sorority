import React from 'react';
import heart from '../../public/assets/static/009-heart.png';
import comments from '../../public/assets/static/010-comments.png';
import group from '../../public/assets/static/Group.png';
import '../../public/assets/styles/components/Publication.scss';

const Publication = ({ img, name, age, time, timePublication, text, likes, comment, children }) => (
  <>
    <div className='container-publication'>
      <section className='container-header'>
        <div className='position-image'>
          <img src={img} alt='' />
        </div>
        <div className='position-description'>
          <div className='main-description'>
            <p className='main-name'>{name}</p>
            <p className='main-number'>{age}</p>
            <p className='main-number'> | </p>
            <p className='main-number'>{time}</p>
          </div>
          <p>{timePublication}</p>
        </div>
      </section>
      <section className='think-content'>
        <p>{text}</p>
      </section>
      <section className='interaction'>
        <div className='likes'>
          <p>{likes}</p>
          <img src={heart} alt='' />
        </div>
        <dis className='comments'>
          <p>{comment}</p>
          <img src={comments} alt='' />
          <img src={group} alt='' />
        </dis>
      </section>
      {children}
    </div>
  </>
);

export default Publication;
