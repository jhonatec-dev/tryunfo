import aloneStage from './aloneStage.png';
import buried from './buried.png';
import drowning from './drowning.png';
import fallenAngel from './fallenAngel.jpeg';
import falling from './falling.png';
import fishing from './fishing.png';
import flying from './flying.png';
import inception from './inception.png';
import replay from './replay.png';
import rockstar from './rockstar.png';
import school from './school.png';
import screaming from './screaming.png';
import snake from './snake.png';
import spider from './spider.png';
import survive from './survive.png';
import teeth from './teeth.png';
import toilet from './toilet.png';
import trainStation from './trainStation.png';
import voidDream from './void.png';

const normal = 'normal';
const raro = 'raro';
const muitoRaro = 'muito raro';

const cards = [
  {
    cardName: 'Naked at School',
    cardDescription:
    'Entrando no portão da escola só de roupa de baixo com todo mundo olhando pra você',
    cardAttr1: '10',
    cardAttr2: '60',
    cardAttr3: '25',
    cardImage: school,
    cardRare: normal,
    cardTrunfo: false,
  },
  {
    cardName: 'Flying',
    cardDescription:
    'Simplesmente, você começa a voar no meio do sonho e Fuck it All',
    cardAttr1: '70',
    cardAttr2: '30',
    cardAttr3: '55',
    cardImage: flying,
    cardRare: raro,
    cardTrunfo: false,
  },
  {
    cardName: 'Fishing',
    cardDescription:
    'Sonhando que está pescando na maior paz do mundo',
    cardAttr1: '70',
    cardAttr2: '10',
    cardAttr3: '70',
    cardImage: fishing,
    cardRare: normal,
    cardTrunfo: false,
  },
  {
    cardName: 'Falling',
    cardDescription:
    'Sonhando que está caindo e acorda com o impacto no colchão',
    cardAttr1: '0',
    cardAttr2: '80',
    cardAttr3: '40',
    cardImage: falling,
    cardRare: normal,
    cardTrunfo: false,
  },
  {
    cardName: 'Rock Star',
    cardDescription:
    'Tocando no palco com sua banda predileta',
    cardAttr1: '90',
    cardAttr2: '50',
    cardAttr3: '40',
    cardImage: rockstar,
    cardRare: muitoRaro,
    cardTrunfo: false,
  },
  {
    cardName: 'Inception',
    cardDescription:
    'Você acorda de um sonho, mas na verdade está em outro',
    cardAttr1: '20',
    cardAttr2: '50',
    cardAttr3: '30',
    cardImage: inception,
    cardRare: raro,
    cardTrunfo: false,
  },
  {
    cardName: 'Toilet Fail',
    cardDescription:
    'Sonhando que está usando o trono, mas não saiu da cama...',
    cardAttr1: '20',
    cardAttr2: '10',
    cardAttr3: '10',
    cardImage: toilet,
    cardRare: normal,
    cardTrunfo: false,
  },
  {
    cardName: 'Screaming',
    cardDescription:
    'Sonhando que precisa gritar algo, mas não consegue',
    cardAttr1: '0',
    cardAttr2: '70',
    cardAttr3: '30',
    cardImage: screaming,
    cardRare: normal,
    cardTrunfo: false,
  },
  {
    cardName: 'Run to Survive',
    cardDescription:
    'Perseguido por alguém e se morrer no sonho, '
    + 'sabe que será o fim aqui também...',
    cardAttr1: '0',
    cardAttr2: '80',
    cardAttr3: '40',
    cardImage: survive,
    cardRare: raro,
    cardTrunfo: false,
  },
  {
    cardName: 'Replay Master',
    cardDescription:
    'Consegue continuar seu sonho depois de um precoce despertamento',
    cardAttr1: '90',
    cardAttr2: '10',
    cardAttr3: '70',
    cardImage: replay,
    cardRare: muitoRaro,
    cardTrunfo: true,
  },
  {
    cardName: 'Fallen Angel',
    cardDescription:
    'Coração quentinho com a cremosa aparecendo no sonho',
    cardAttr1: '90',
    cardAttr2: '50',
    cardAttr3: '60',
    cardImage: fallenAngel,
    cardRare: muitoRaro,
    cardTrunfo: false,
  },
  {
    cardName: 'Alone in the Theater',
    cardDescription:
    'Sozinha no palco de teatro e olhando a imensidão',
    cardAttr1: '50',
    cardAttr2: '50',
    cardAttr3: '50',
    cardImage: aloneStage,
    cardRare: raro,
    cardTrunfo: false,
  },
  {
    cardName: 'Train Station',
    cardDescription:
    'Numa estação de trem misteriosa, sem saber pra onde vai',
    cardAttr1: '50',
    cardAttr2: '50',
    cardAttr3: '50',
    cardImage: trainStation,
    cardRare: muitoRaro,
    cardTrunfo: false,
  },
  {
    cardName: 'Void',
    cardDescription:
    'Sonhando NADA... Supeito....',
    cardAttr1: '40',
    cardAttr2: '40',
    cardAttr3: '40',
    cardImage: voidDream,
    cardRare: raro,
    cardTrunfo: false,
  },
  {
    cardName: 'Snake',
    cardDescription:
    'Cuidado com a serpente x..x',
    cardAttr1: '0',
    cardAttr2: '90',
    cardAttr3: '50',
    cardImage: snake,
    cardRare: raro,
    cardTrunfo: false,
  },
  {
    cardName: 'Spider',
    cardDescription:
    'Cuidado com a mega dona aranha',
    cardAttr1: '0',
    cardAttr2: '90',
    cardAttr3: '50',
    cardImage: spider,
    cardRare: raro,
    cardTrunfo: false,
  },
  {
    cardName: 'Drowning',
    cardDescription:
    'Afogando',
    cardAttr1: '0',
    cardAttr2: '90',
    cardAttr3: '40',
    cardImage: drowning,
    cardRare: raro,
    cardTrunfo: false,
  },
  {
    cardName: 'Losing Teeth',
    cardDescription:
    'Perdendo os dentes e acordando desesperado',
    cardAttr1: '0',
    cardAttr2: '90',
    cardAttr3: '45',
    cardImage: teeth,
    cardRare: normal,
    cardTrunfo: false,
  },
  {
    cardName: 'Buried Alive',
    cardDescription:
    'Estão te enterrando e você relutando pra gritar que está vivo',
    cardAttr1: '0',
    cardAttr2: '90',
    cardAttr3: '70',
    cardImage: buried,
    cardRare: raro,
    cardTrunfo: false,
  },
];

export default cards;
