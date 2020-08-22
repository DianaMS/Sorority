import React from 'react';
import { Link } from 'react-router-dom';
import user from '../assets/static/001-user.png';
import care from '../assets/static/002-care.png';
import medical from '../assets/static/003-medical-doctor-specialist 1.png';
import group from '../assets/static/004-group.png';
import '../assets/styles/components/NavigatorNav.scss';

const NavigatorNav = () => (
  <>
    <nav className='container-nav'>
      <Link to='home' className='box-nav'>
        <img src={user} alt='user' />
        <p>Perfil</p>
      </Link>

      <Link to='/community' className='box-nav'>
        <img src={care} alt='care' />
        <p>Comunidad</p>
      </Link>

      <Link to='/specialists' className='box-nav'>
        <img src={medical} alt='medical' />
        <p>Especialistas</p>
      </Link>

      <Link to='/chat' className='box-nav'>
        <img src={group} alt='group' />
        <p>Mensajes</p>
      </Link>

    </nav>
  </>
);

export default NavigatorNav;
