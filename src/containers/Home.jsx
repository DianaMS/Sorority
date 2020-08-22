import React from 'react';
import { Link } from 'react-router-dom';
import NavigatorNav from '../components/NavigatorNav';
import backgroundProfile from '../assets/static/backgroundProfile.png';
import perfil from '../assets/static/Mask-Perfil.png';
import buttonBreathe from '../assets/static/buttonBreathe.png';
import buttonDiary from '../assets/static/buttonDiary.png';
import buttonContractions from '../assets/static/buttonContractions.png';
import buttonMusic from '../assets/static/buttonMusic.png';
import '../assets/styles/components/Home.scss';

const Home = () => (
  <>
    <div className='container-home'>
      <section className='content-info'>
        <div className='container-cover'>
          <img src={backgroundProfile} alt='background-profile' className='background-profile' />
          <Link to='/'>
            <button type='button'>Salir</button>
          </Link>
          <img src={perfil} alt='' className='perfil' />
        </div>
        <div className='container-biography'>
          <p className='name'>Juana María</p>
          <div className='numbers'>
            <p>27 AÑOS</p>
            <p>|</p>
            <p>32 SEMANAS</p>
          </div>
        </div>
        <div className='options'>
          <p className='note'>Caja de Herramientas</p>
          <div className='images-options'>
            <div className='block'>
              <img src={buttonBreathe} alt='button-breathe' className='click' />
              <p>Respiración</p>
            </div>
            <div className='block'>
              <img src={buttonDiary} alt='button-diary' className='click' />
              <p>Diario</p>
            </div>
            <div className='block'>
              <img src={buttonContractions} alt='button-contractions' className='click' />
              <p>Contracciones</p>
            </div>
            <div className='block'>
              <img src={buttonMusic} alt='button-music' className='click' />
              <p>Sonidos</p>
            </div>
          </div>
        </div>
      </section>
      <NavigatorNav />
    </div>

  </>
);

export default Home;
