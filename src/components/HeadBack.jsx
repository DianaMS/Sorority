import React from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import '../assets/styles/components/Chat1.scss';

const HeadBack = ({ link, nameHead }) => (
  <>
    <div className='contenedor_titles'>
      <div className='icon'>
        <Link to={link}>
          <FontAwesomeIcon className='back' icon={faAngleLeft} />
        </Link>
      </div>
      <p className='title'>{nameHead}</p>
    </div>
  </>
);

export default HeadBack;
