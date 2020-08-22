/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import ButtonRegister from '../components/ButtonRegister';
import '../assets/styles/components/Profile.scss';

const Profile = () => (
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
        <label className='question' htmlFor='name'>¿Cómo te llamas?</label>
        <input id='name' type='name' />
        <label className='question' htmlFor='age'>¿Cuál es tu fecha de nacimiento?</label>
        <div className='custom-select'>
          <div className='selectores'>
            <select className='daySelect'>
              <option value='0'>Dia</option>
              <option value='1'>1</option>
            </select>
            <select className='monthSelect'>
              <option value='0'>Mes</option>
              <option value='1'>1</option>
            </select>
            <select className='yearSelect'>
              <option value='0'>Año</option>
              <option value='1'>1</option>
            </select>
          </div>
        </div>
        <label className='question' htmlFor='pregnant'>¿Estás embarazada?</label>
        <label className='question' htmlFor='pregnant'>¿Cuál fue tu última menstruación?</label>
        <div className='custom-select'>
          <div className='selectores'>
            <select className='daySelect'>
              <option value='0'>Dia</option>
              <option value='1'>1</option>
            </select>
            <select className='monthSelect'>
              <option value='0'>Mes</option>
              <option value='1'>1</option>
            </select>
          </div>
        </div>
        <label className='question' htmlFor='pregnant'>¿Tienes hijos?</label>
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
