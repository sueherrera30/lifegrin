import bags from './static/slider/bolsas.jpg';
import honey from './static/slider/miel.jpg';
import sales from './static/slider/ofertas.jpg';
import xmas from './static/slider/navidad.jpg';
import market from './static/slider/mercado.jpg';
import desodorant from './static/slider/desodorante.jpg';
import glass1 from './static/slider/termo1.jpg';
import glass2 from './static/slider/termo2.jpg';
import glass3 from './static/slider/termo3.jpg';
import cope from './static/slider/copa.jpg';
import tip1 from './static/slider/consejo1.jpg';
import tip2 from './static/slider/consejo2.jpg';
import tip3 from './static/slider/consejo3.jpg';
import tip4 from './static/slider/consejo4.jpg';
import responsable from './static/slider/responsable.jpg';
import recycle from './static/slider/recicla.jpg';
import home from '../assets/static/categories/home.png';
import beauty from '../assets/static/categories/beauty.png';
import food from '../assets/static/categories/food.png';
import healthy from '../assets/static/categories/healthy.png';
import energy from '../assets/static/categories/energy.png';
import plants from '../assets/static/categories/plants.png';

const imageStorage = {
  names: [glass2, honey, bags, market, sales, desodorant, glass1, cope, glass3, xmas],
  tips: [responsable, tip1, tip2, tip3, tip4, recycle],
  listIcons: [
    {
      name: 'home',
      img: home,
    },
    {
      name: 'beauty',
      img: beauty,
    },
    {
      name: 'food',
      img: food,
    },
    {
      name: 'healthy',
      img: healthy,
    },
    {
      name: 'energy',
      img: energy,
    },
    {
      name: 'plants',
      img: plants,
    },
  ],
};
export default imageStorage;
