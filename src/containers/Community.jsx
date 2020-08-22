import React from 'react';
import Publication from '../components/Publication';
import NavigatorNav from '../components/NavigatorNav';
import Comments from '../components/Comments';
import ForComment from '../components/ForComment';
import diana from '../assets/static/Diana.png';
import mariana from '../assets/static/Mariana.png';
import juana from '../assets/static/Mask-Perfil.png';
import HeadBack from '../components/HeadBack';
import '../assets/styles/components/HeadBack.scss';
import '../assets/styles/components/Community.scss';

const Community = () => (
  <>
    <div className='container-community'>
      <HeadBack link='/' nameHead='Comunidad' />
      <section className='share-content'>
        <input type='text' className='text-profile' placeholder='Comparte tu experiencia' />
        <button type='button'>Publicar</button>
      </section>
      <Publication
        img={juana}
        name='Juana María'
        age='27 años'
        time='34 semanas'
        timePublication='Hace 5 minutos'
        text='Hola! Soy Juana, espero estén bien ¿Saben si es normal que mi médico me haya recomendado
        una cesárea? Estoy asustada :c pensé que se hacían solo en emergencias'
        likes='0'
        comment='0'
      />
      <Publication
        img={diana}
        name='Diana Martinez'
        age='27 años'
        time='34 semanas'
        timePublication='Hace 3 horas'
        text='Mi obstreta me dio fecha para dentro de un mes, qué nerviosa estoy
      ¡es mi primer parto!'
        likes='2'
        comment='3'
      >
        <Comments
          img={mariana}
          name='Mariana Rivas'
          timeComment='Hace 3 horas'
          text='No te preocupes Diana, yo tuve mi primer parto hace poco,
        estaba muy nerviosa porque opté hacerlo en casa pero todo salió bien
        tienes alguna duda que quisieras resolver?'
        />
        <Comments
          img={diana}
          name='Diana Martinez'
          timeComment='Hace 3 horas'
          text='Gracias por tu respuesta Mariana, no sabía que podía tener un parto en casa! No me gustaría
          tener que ir a al hospital con la pandemia. Voy a consultarlo con mi obstétra a ver si es posible,
          me sentiría más segura. ¿Podrías contarme cómo lo coordinaste?'
        />
        <Comments
          img={mariana}
          name='Mariana Rivas'
          timeComment='Hace 3 horas'
          text='Te recomiendo que revises la sección "especialistas" que está acá en sorority, allí contacté con la
          Dra. Rosa Mora, ella fue muy amable conmigo, hizo del parto una muy bonita experiencia!'
        />
        <ForComment />
      </Publication>

      <NavigatorNav />
    </div>

  </>
);

export default Community;
