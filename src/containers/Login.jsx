import React from 'react';
import { Link } from 'react-router-dom';
import ButtonRegister from '../components/ButtonRegister';

const Login = () => (
  <>
    <p>ESTAS EN LOGIN</p>
    <Link to='/home' style={{ textDecoration: 'none' }}>
      <ButtonRegister namebutton='Inicia sesion' />
    </Link>
  </>
);

export default Login;
