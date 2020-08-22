import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Chat.scss';
import perfil from '../assets/static/Mask-Perfil.png';

import HeadBack from '../components/HeadBack';
import NavigatorNav from '../components/NavigatorNav';
import Chat3 from '../components/Chat3';

const Chat = () => (
  <>
    <div className='contenedor_chat'>
      <HeadBack link='/' nameHead='Mensajes' />
      <div className='contenedorWindowChat'>
        <Chat3 photoProfile3={perfil} name3='Diana Martinez' lastMessage3='Gracias :)' />
        <Link to='/onechat' className='link-nav'>
          <Chat3 photoProfile3={perfil} name3='Dra Rosa Rojas' lastMessage3='Sí! Listo :) Quedamos en contacto, un abrazo.' />
        </Link>
      </div>
    </div>
    <NavigatorNav />
  </>
);

export default Chat;
