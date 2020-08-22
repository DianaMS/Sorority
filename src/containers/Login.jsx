/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import '../assets/styles/components/Signup.scss';

import ButtonRegister from '../components/ButtonRegister';
import '../assets/styles/components/Login.scss';

const Login = () => (
  <>
    <div className='contenedor_titles'>
      <div className='icon'><FontAwesomeIcon className='back' icon={faAngleLeft} /></div>
      <p className='title'>Iniciar Sesión</p>
    </div>
    <div className='contenedor'>
      <form>
        <label htmlFor='email'>Correo</label>
        <input id='email' type='email' />
        <label htmlFor='password'>Contraseña</label>
        <input id='password' type='password' />
      </form>
    </div>
    <div className='contenedor_botones'>
      <Link to='/home' style={{ textDecoration: 'none' }}>
        <ButtonRegister namebutton='Inicia Sesión' />
      </Link>
      <a href='/' className='link'>¿Olvidaste contraseña?</a>
    </div>
  </>
);

export default Login;
