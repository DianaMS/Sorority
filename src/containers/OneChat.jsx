import React from 'react';

import '../assets/styles/components/OneChat.scss';
import perfil from '../assets/static/Mask-Perfil.png';

import NavigatorNav from '../components/NavigatorNav';

import HeadBack from '../components/HeadBack';
import HeadChat from '../components/HeadChat';
import Chat1 from '../components/Chat1';
import Chat2 from '../components/Chat2';
import Chat1B from '../components/Chat1B';
import Answer from '../components/Answer';

const OneChat = () => (
  <>
    <div className='contenedor_screenChat'>
      <HeadBack link='/' nameHead='Mensajes' />
      <div className='contenedorOneChat'>
        <HeadChat nameHead='Dra. Rosa Rojas' photoProfileHead={perfil} />
        <Chat1 photoProfile1={perfil} name1='Juana María' lastMessage1='Buenas tardes doctora Rosa, me gustaría tener una consulta con usted acerca de mi parto' />
        <Chat2 photoProfile2={perfil} name2='Dra. Rosa Rojas' lastMessage2='¡Hola Juana! Por supuesto, ¿cómo podría apoyarte?' />
        <Chat1B photoProfile1B={perfil} name1B='Juana María' lastMessage1B='Mi obstetra me ha recomendado una cesárea, pero no entiendo por qué, no me gustaría ir a una clínica en pandemia, y hace poco me enteré por Mariana Rivas que es posible tener un parto en casa, y me dijo que hablara con ustéd.' />
        <Chat2 photoProfile2={perfil} name2='Dra. Rosa Rojas' lastMessage2='Así es, si deseas podemos coordinar una evaluación y ver si es posible, te gustaría?' />
        <Chat1 photoProfile1={perfil} name1='Juana María' lastMessage1='Sí por favor, podría este martes a las 4pm por videollamada?' />
        <Chat2 photoProfile2={perfil} name2='Dra. Rosa Rojas' lastMessage2='Sí! Listo :) Quedamos en contacto, un abrazo.' />
        <Answer />
      </div>
    </div>
    <NavigatorNav />
  </>
);

export default OneChat;
