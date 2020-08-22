import React from 'react';
import '../../public/assets/styles/components/Comments.scss';

const Comments = ({ img, name, timeComment, text }) => (
  <>
    <div className='container-comments'>
      <section className='column-img'>
        <img src={img} alt='' />
      </section>
      <section className='column-text'>
        <p className='nameComment'>{name}</p>
        <p className='timeComment'>{timeComment}</p>
        <p className='textComment'>{text}</p>
      </section>
    </div>
  </>
);

export default Comments;
