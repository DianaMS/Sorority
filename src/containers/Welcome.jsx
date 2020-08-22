import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Welcome.scss';
import AwesomeSlider from 'react-awesome-slider';
import ButtonRegister from '../components/ButtonRegister';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';

const Welcome = () => (
  <>
    <div className='welcome-container'>
      <div className='images-container'>
        <AwesomeSlider animation='cubeAnimation'>
          <div className='doula-images'>
            <img src='src/assets/images/doula2.png' alt='img' />
            <p>El embarazo es una etapa muy especial en la vida de las mujeres y queremos que lo disfrutes</p>
          </div>
          <div className='doula-images'>
            <img src='src/assets/images/doula1.png' alt='img' />
            <p>Únete a nuestra red de madres experimentadas, un espacio seguro y sororo</p>
          </div>
          <div className='doula-images'>
            <img src='src/assets/images/doula3.png' alt='img' />
            <p>Donde podras responder dudas y compartir tus experiencias y recomendaciones</p>
          </div>
        </AwesomeSlider>
      </div>
      <div className='options'>
        <Link to='/signup' style={{ textDecoration: 'none' }}>
          <ButtonRegister namebutton='Registrate' />
        </Link>
        <Link to='/login' style={{ textDecoration: 'none' }}>
          <button type='button' className='buttonLogin'>Inicia sesión</button>
        </Link>
      </div>

    </div>

  </>
);

export default Welcome;
