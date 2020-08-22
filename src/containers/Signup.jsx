/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import ButtonRegister from '../components/ButtonRegister';
import '../assets/styles/components/Signup.scss';

const Signup = () => (
  <>
    <div className='contenedor_titles'>
      <div className='icon'>
        <Link to='/'>
          <FontAwesomeIcon className='back' icon={faAngleLeft} />
        </Link>
      </div>
      <p className='title'>Registrate</p>
    </div>
    <div className='contenedor'>
      <form>
        <label htmlFor='email'>Correo</label>
        <input id='email' type='email' />
        <label htmlFor='password'>Contraseña</label>
        <input id='password' type='password' />
        <label htmlFor='confirm-password'>Confirmar contraseña</label>
        <input id='confirm-password' type='password' />
      </form>
    </div>
    <div className='contenedor_botones'>
      <Link to='/profile' style={{ textDecoration: 'none' }}>
        <ButtonRegister namebutton='Continuar' />
      </Link>
    </div>
  </>
);

export default Signup;
