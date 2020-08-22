import React from 'react';
import { Link } from 'react-router-dom';
import ButtonRegister from '../components/ButtonRegister';

const Welcome = () => (
  <>
    <p>ESTAS EN WELCOME</p>
    <Link to='/signup' style={{ textDecoration: 'none' }}>
      <ButtonRegister namebutton='Registrate' />
    </Link>
    <Link to='/login' style={{ textDecoration: 'none' }}>
      <ButtonRegister namebutton='Inicia sesion' />
    </Link>
  </>
);

export default Welcome;
