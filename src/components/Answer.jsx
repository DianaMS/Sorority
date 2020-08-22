import React from 'react';

import '../assets/styles/components/Answer.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Answer = () => (
  <>
    <div className='contenedor_answer'>
      <p className='placeholder_answer'>Escribe una respuesta...</p>
      <FontAwesomeIcon className='send' icon={faPaperPlane} />
    </div>
  </>
);

export default Answer;
