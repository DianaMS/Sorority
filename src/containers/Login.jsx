/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import '../assets/styles/components/Login.scss';

const Login = () => (
  <form>
    <p>Registro</p>
    <label htmlFor='email'>Correo</label>
    <input id='email' type='email' />
    <label htmlFor='password'>Contraseña</label>
    <input id='password' type='password' />
    <label htmlFor='confirm-password'>Confirmar contraseña</label>
    <input id='confirm-password' type='password' />
    <button type='submit'>Aceptar</button>
  </form>

);

export default Login;
