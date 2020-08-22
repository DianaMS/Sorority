/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import ButtonRegister from '../components/ButtonRegister';
import '../assets/styles/components/Signup.scss';

const Profile = () => (
  <>
    <div className='contenedor_titles'>
      <div className='icon'>
        <FontAwesomeIcon className='back' icon={faAngleLeft} />
      </div>
      <p className='title'>Registrate</p>
    </div>
    <div className='contenedor'>
      <form>
        <label htmlFor='name'>¿Cómo te llamas?</label>
        <input id='name' type='name' />
        <label htmlFor='age'>¿Cuál es tu edad?</label>
        <label htmlFor='pregnant'>¿Estás embarazada?</label>
        <label htmlFor='pregnant'>¿Cuál fue tu última menstruación?</label>
        <label htmlFor='pregnant'>¿Tienes hijos?</label>
      </form>
    </div>
    <div className='contenedor_botones'>
      <Link to='/home' style={{ textDecoration: 'none' }}>
        <ButtonRegister namebutton='Registrate' />
      </Link>
    </div>
  </>
);

export default Profile;
