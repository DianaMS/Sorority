import React from 'react';
import NavigatorNav from '../components/NavigatorNav';
import Card from '../components/Card';
import HeadBack from '../components/HeadBack';
import '../../public/assets/styles/components/Specialists.scss';

const data = [
  {
    name: 'Dra. Nieves Brach',
    occupation: 'Obstetra',
    content: 'Brindo atención y seguimiento durante el embarazo con un enfoque humanizado del parto.',
    likes: 5,
    photo: '../../public/assets/static/medica6.png',
  },
  {
    name: 'Verónica Álvarez',
    occupation: 'Doula',
    content: 'Consejería y acompañamiento emocional durante la gestación, parto y lactancia.',
    likes: 5,
    photo: '../../public/assets/static/medica7.png',
  },
  {
    name: 'Dra. Rosa Mora',
    occupation: 'Gineco-Obstetra',
    content: 'Atención médica priorizando las necesidades de la mujer embarazada y parto humanizado.',
    likes: 5,
    photo: '../../public/assets/static/medica8.png',
  },
  { name: 'Karina López',
    occupation: 'Doula',
    content: 'Acompañamiento y contención emocional, ejercicios y técnicas de relajación previo al parto..',
    likes: 4,
    photo: '../../public/assets/static/medica9.png' },
];
const Specialists = () => (
  <>
    <div className='specialists-container'>
      <section className='section'>
        <HeadBack link='/' nameHead='Especialistas' />
        <section>
          { data.map((e, index) => {
            return <Card key={index} user={e} />;
          })}
        </section>
      </section>
      <NavigatorNav />
    </div>
  </>
);

export default Specialists;
