import { ESectionVariant, SectionsConfig } from '../../components/PageBuilder';
import bannerImg from './images/banner.png';
import image from '../Home/c5c5bb8b5b79febfff4dd3b51db81ca2.png';
import AltaiMap from './altai-map';
import { ETimeLineCardVariants, ITimeLineCard } from '../../components/Cards/ TimeLineCard';
import { ITimeLineSection, ITimeLineSectionButtons } from '../../sections/TimeLine';

const timeLineTourism: ITimeLineCard[] = [
  {
    variant: ETimeLineCardVariants.WAS,
    description: [
      'TEST TOURISM !!!!!Поток туристов на Алтае резко сократился до 19% по сравнению с 1988 годом.\nВ республику приезжало менее 500 тыс. человек в год.',
      'В начале 1990-х гг. закрылся аэропорт Горно-Алтайска.\nБлижайший находился в Барнауле, в 250 км.',
    ],
    imgSrc: image,
  },
  {
    variant: ETimeLineCardVariants.BECAME,
    description: [
      'В 2007 году спустя более 20 лет открылся аэропорт Горно-Алтайска.\nВ 2023 году пассажиропоток составил около 600 тыс. человек',
      'В 2023 году количество туристов в Республике Алтай составило 2,6 млн человек',
      'В 2010 году открыли всесезонный курорт Манжерок: 3 канатные дороги, 22 км горнолыжных трасс, 13 км трасс байк-парка',
    ],
    imgSrc: image,
  },
  {
    variant: ETimeLineCardVariants.WILL,
    description: [
      'В 2024 году планируется увеличить туристический поток на 5-10% за счет зимнего туризма',
      'В течение 5 лет планируется построить новый аэропорт на 1,2 млн человек, также ведутся переговоры о строительстве международного терминала',
    ],
    imgSrc: image,
  },
];

const timeLineTransport: ITimeLineCard[] = [
  {
    variant: ETimeLineCardVariants.WAS,
    description: [
      'TEST TRANSPORT !!!!!Поток туристов на Алтае резко сократился до 19% по сравнению с 1988 годом.\nВ республику приезжало менее 500 тыс. человек в год.',
      'В начале 1990-х гг. закрылся аэропорт Горно-Алтайска.\nБлижайший находился в Барнауле, в 250 км.',
    ],
    imgSrc: image,
  },
  {
    variant: ETimeLineCardVariants.BECAME,
    description: [
      'В 2007 году спустя более 20 лет открылся аэропорт Горно-Алтайска.\nВ 2023 году пассажиропоток составил около 600 тыс. человек',
      'В 2023 году количество туристов в Республике Алтай составило 2,6 млн человек',
      'В 2010 году открыли всесезонный курорт Манжерок: 3 канатные дороги, 22 км горнолыжных трасс, 13 км трасс байк-парка',
    ],
    imgSrc: image,
  },
  {
    variant: ETimeLineCardVariants.WILL,
    description: [
      'В 2024 году планируется увеличить туристический поток на 5-10% за счет зимнего туризма',
      'В течение 5 лет планируется построить новый аэропорт на 1,2 млн человек, также ведутся переговоры о строительстве международного терминала',
    ],
    imgSrc: image,
  },
];

const timeLineButtons: ITimeLineSectionButtons[] = [
  { key: 'tourism', name: 'Туризм' },
  { key: 'transport', name: 'Транспорт' },
];

const timeLineConfig: ITimeLineSection = {
  buttons: timeLineButtons,
  items: {
    [timeLineButtons[0].key]: timeLineTourism,
    [timeLineButtons[1].key]: timeLineTransport,
  },
};

const altaiId = 'altai-region-map-';
export const AltaiConfig: SectionsConfig[] = [
  {
    section: ESectionVariant.BANNER,
    props: {
      title: 'Республика Алтай',
      imgSrc: bannerImg,
      containerProps: {
        paddingTop: true,
      },
    },
  },
  {
    section: ESectionVariant.REGION_INFORMATION,
    props: {
      regionFacts: [
        'Не путайте с Алтайским краем —\nотделилась от него в 1990 году!',
        'Граничит с Казахстаном,\nКитаем и Монголией',
        'Является экоголической\nстолицей России',
        'Четверть территории имеет статус особо охраняемой',
      ],
    },
  },
  {
    section: ESectionVariant.ATTRACTIONS_MAP,
    props: {
      mapSvg: <AltaiMap />,
      attractionsItems: [
        {
          id: altaiId + 'secondary-item',
          title: 'Всесезонный курорт Манжерок',
          description: 'Первую популярность обрел после фестиваля монголо-советской молодежи «Алтай-66»',
          location: 'Локация Всесезонный курорт Манжерок',
          imgSrc: image,
        },
        {
          id: '123',
          title: 'Снежный гриф',
          location: '',
          description: 'Первую популярность обрел после фестиваля монголо-советской молодежи «Алтай-66»',
          imgSrc: image,
        },
        {
          id: '332',
          title: 'Марал',
          location: '',
          description: 'Первую популярность обрел после фестиваля монголо-советской молодежи «Алтай-66»',
          imgSrc: image,
        },
        {
          id: altaiId + 'first-item',
          title: 'Марал',
          location: 'Локация Марал',
          description: 'Первую популярность обрел после фестиваля монголо-советской молодежи «Алтай-66»',
          imgSrc: image,
        },
        {
          id: '543',
          title: 'Марал',
          location: '',
          description: 'Первую популярность обрел после фестиваля монголо-советской молодежи «Алтай-66»',
          imgSrc: image,
        },
        {
          id: '45346',
          title: 'Марал',
          location: '',
          description: 'Первую популярность обрел после фестиваля монголо-советской молодежи «Алтай-66»',
          imgSrc: image,
        },
        {
          id: '64324',
          title: 'Марал',
          location: '',
          description: 'Первую популярность обрел после фестиваля монголо-советской молодежи «Алтай-66»',
          imgSrc: image,
        },
        {
          id: '45643',
          title: 'Марал',
          location: '',
          description: 'Первую популярность обрел после фестиваля монголо-советской молодежи «Алтай-66»',
          imgSrc: image,
        },
      ],
    },
  },
  {
    section: ESectionVariant.TIME_LINE,
    props: timeLineConfig,
  },
  {
    section: ESectionVariant.PROMINENT_FIGURE,
    props: {
      containerProps: {
        paddingRight: false,
        paddingLeft: false,
      },
      items: [
        {
          imgSrc: image,
          personFullName: 'Павел Васильевич Кучияк',
          years: '(1897–1943)',
          description:
            'Алтайский поэт, прозаик, драматург, популяризатор алтайской национальной литературы. В честь него названа улица и национальный театр в Горно-Алтайске',
        },
        {
          imgSrc: image,
          personFullName: 'Павел Васильевич Кучияк',
          years: '(1897–1943)',
          description:
            'Алтайский поэт, прозаик, драматург, популяризатор алтайской национальной литературы. В честь него названа улица и национальный театр в Горно-Алтайске',
        },
        {
          imgSrc: image,
          personFullName: 'Павел Васильевич Кучияк',
          years: '(1897–1943)',
          description:
            'Алтайский поэт, прозаик, драматург, популяризатор алтайской национальной литературы. В честь него названа улица и национальный театр в Горно-Алтайске',
        },
        {
          imgSrc: image,
          personFullName: 'Павел Васильевич Кучияк',
          years: '(1897–1943)',
          description:
            'Алтайский поэт, прозаик, драматург, популяризатор алтайской национальной литературы. В честь него названа улица и национальный театр в Горно-Алтайске',
        },
        {
          imgSrc: image,
          personFullName: 'Павел Васильевич Кучияк',
          years: '(1897–1943)',
          description:
            'Алтайский поэт, прозаик, драматург, популяризатор алтайской национальной литературы. В честь него названа улица и национальный театр в Горно-Алтайске',
        },
      ],
    },
  },
  {
    section: ESectionVariant.REGION_ACHIEVEMENTS,
    props: {
      items: [
        {
          text: 'Алтай — главная «житница» России. Республика Алтай обеспечивает страну медом и пантовой продукцией.',
          imgSrc: image,
        },
        {
          text: 'В Национальном музее Республики Алтай хранится мумия Алтайской принцессы с плато Укок. Возраст находки — около 2,5 тысяч лет',
        },
        {
          text: 'Республика Алтай — единственный регион России, где большая часть электроэнергии производится солнечными электростанциями',
        },
        {
          text: 'На территории Республики Алтай фармацевтическая компания «Эвалар» выращивает лекарственную продукцию для собственного производства',
        },
        {
          text: 'Чуйский тракт входит в топ-5 красивейших дорог мира по версии National Geographic',
          imgSrc: image,
        },
      ],
    },
  },
  {
    section: ESectionVariant.QUIZ_QUESTION,
    props: {
      quizProps: {
        question: 'Как называется традиционный десерт Республики Алтай? ',
        variants: ['Кызы', 'Кочо', 'Чок-чок', 'Подтопольники'],
        correctAnswer: 'Кызы',
      },
    },
  },
  {
    section: ESectionVariant.TRADITIONAL_CUISINE,
    props: {
      containerProps: {
        paddingRight: false,
        paddingLeft: false,
      },
      items: [
        {
          dishName: 'Боорсок ',
          description: 'Жареные колобки. Обычно без начинки, иногда делают с творогом, но лучше всего есть с медом',
          imgSrc: image,
        },
        {
          dishName: 'Боорсок ',
          description: 'Жареные колобки. Обычно без начинки, иногда делают с творогом, но лучше всего есть с медом',
          imgSrc: image,
        },
        {
          dishName: 'Боорсок ',
          description: 'Жареные колобки. Обычно без начинки, иногда делают с творогом, но лучше всего есть с медом',
          imgSrc: image,
        },
        {
          dishName: 'Боорсок ',
          description: 'Жареные колобки. Обычно без начинки, иногда делают с творогом, но лучше всего есть с медом',
          imgSrc: image,
        },
        {
          dishName: 'Боорсок ',
          description: 'Жареные колобки. Обычно без начинки, иногда делают с творогом, но лучше всего есть с медом',
          imgSrc: image,
        },
      ],
    },
  },
];
