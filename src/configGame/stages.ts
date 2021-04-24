import rootStore from '../store/root';
import { CHARACTER } from './character';
import { POSITIONS } from './position';

export interface Line {
  character?: CHARACTER,
  image: string,
  text: string,
}
export interface Choice {
  text: string,
  nextStage: number,
  condition?: () => boolean,
  effect?: () => void,
}

export interface ChoiceBlock {
  list: Choice[],
  image: string,
  text: string,
  character: CHARACTER,
}
export interface Stage {
  id: number,
  lines?: Line[],
  choices?: ChoiceBlock,
  isMap?: boolean,
}

export const stages: Stage[] = [
  {
    id: 1,
    lines: [
      {
        image: '/images/map.jpg',
        text: `Тауриэль держала карту Северной долины.\n
        Впереди предстояло слишком много работы: допросить всех подозреваемых, сложить все пазлы в одну картинку и при это остаться не раскрытой.
        \n
        В такие моменты она с благодарностью вспоминала отца: ведь именно он, в свое время, научил ее мыслить логически. Любая загадка и головоломка - открытая книга для нее.
        \n
        Взгляд снова упал на карту. 
        `,
      },
      {
        image: '/images/tawern-bg.jpeg',
        text: `Тауриэль смотрела на паб. Именно здесь проводил свое время Дандерн. Он наверняка знал часть информации, осталось лишь заполучить ее.
        Эльфийка зашла в паб.
        \n
        Гул голосов раскатывался по помещению, что не могло не сыграть ей на руку. Она выбрала самое незаметное место в углу и заняла выжидательную позицию.
        \n
        Дандерна нигде не было. Это немного смущало, ведь именно сейчас он должен был быть хотя бы наполовину пьян.
        \n
        Вдруг ее плеча кто-то коснулся.
        `,
      },
      {
        character: CHARACTER.ELF_1,
        image: '/images/tawerna-d.jpg',
        text: `Думаешь, если ты спрячешься в углу таверны, тебя никто не увидит?`,
      },
    ],
    choices: {
      image: '/images/tawerna-t.jpg',
      character: CHARACTER.TAURIEL,
      text: 'Знаешь что… ',
      list: [
        {
          text: 'Ты не самый гостеприимный хозяин!',
          nextStage: 2,
          effect: rootStore.addStealth,
        },
        {
          text: 'Кто сказал, что я прячусь?',
          nextStage: 2,
          effect: rootStore.addStraight,
        },
      ],
    },
  },
  {
    id: 2,
    lines: [
      {
        image: '/images/tawern-bg.jpeg',
        text: 'Дандерн сел напротив эльфийки.',
      },
      {
        image: '/images/tawerna-d.jpg',
        text: 'Давай без прелюдий. Зачем ты здесь, Тауриэль.',
      },
      {
        image: '/images/tawern-bg.jpeg',
        text: `Тауриэль задумалась: Дандерн считает себя самым умным вожаком. Если подыграть ему сделать вид, что он раскрыл ее, информации можно выведать еще больше.
        Она улыбнулся.`,
      },
      {
        image: '/images/tawerna-t.jpg',
        text: `Что ты знаешь о нападениях в Изумрудном лесе?`,
      },
      {
        image: '/images/tawerna-d.jpg',
        text: `Не более, чем все. Это не объясняет твоего нахождения здесь. Тебя наняли авроры долины?`,
      },
    ],
    choices: {
      character: CHARACTER.TAURIEL,
      image: '/images/tawerna-t.jpg',
      text: 'Сегодня я буду задавать вопросы, Дандерн.',
      list: [
        {
          text: 'Сколько разбойников от Тишинской глади сейчас орудует в лесах?',
          nextStage: 3,
          effect: rootStore.addStraight,
        },
        {
          text: 'Как ты объяснишь, что в лесу нашли наконечник стрелы из Тишинской глади?',
          nextStage: 4,
          effect: rootStore.addStealth,
        },
      ]
    }
  },
  {
    id: 3,
    lines: [
      {
        character: CHARACTER.ELF_1,
        text: 'Ты же знаешь, что такую информацию никто тебе не даст даром.',
        image: '/images/tawerna-d.jpg',
      },
      {
        text: `Тауриэль демонстративно кинула мешочек с золотом на стол.\n
        Дандерн ухмыльнулся.
        `,
        image: '/images/tawern-bg.jpeg',
      },
      {
        text: `Вы использовали неосторожную стратегию, за которую пришлось заплатить. В дальнейшем вам нужно будет восполнить свое золото из казны.`,
        image: '/images/tawern-bg.jpeg',
      },
      {
        character: CHARACTER.ELF_1,
        text: 'Тебе стоит побеседовать с Лонбайтом. Кто как не он знает, что творится в его лесу?',
        image: '/images/tawerna-d.jpg',
      },
    ]
  },
  {
    id: 4,
    lines: [
      {
        character: CHARACTER.ELF_1,
        text: 'Возможно Лонбайт сможет ответить на твои вопросы?',
        image: '/images/tawerna-d.jpg',
      },
      {
        text: `Эльфийка нахмурилась. Ей не нравился намек вожака, что за разбоями в Изумрудном лесу стоит его хозяин. Но с другой стороны это была первая зацепка и глупо было от нее отказываться. Возможно Лонбайт и правда прояснит всю ситуацию.`,
        image: '/images/tawern-bg.jpeg',
      },
      {
        text: `Она уже собралась уходить, но Дандерн кинул ей напоследок:`,
        image: '/images/tawern-bg.jpeg',
      },
      {
        character: CHARACTER.ELF_1,
        text: 'Ты же знаешь, что врагов нужно искать не всегда среди злодеев?',
        image: '/images/tawerna-d.jpg',
      },
      {
        text: `С этим словами он ушел за новой пинтой эля.`,
        image: '/images/tawern-bg.jpeg',
      },
    ]
  },
  {
    id: 5,
    isMap: true,
  },
  {
    id: 6,
    lines: [
      {
        text: 'Обменяйте 1 стат прямолинейности или скрытности на мешочек с золотом.',
        image: '/images/kazna-bg.jpg',
      }
    ],
    choices: {
      character: CHARACTER.TAURIEL,
      text: '',
      image: '/images/kazna-gold.jpg',
      list: [
        {
          text: 'Забрать',
          nextStage: 7,
          effect: () => { },
        }
      ]
    }
  },
  {
    id: 7,
    lines: [
      {
        image: '/images/forest.jpeg',
        text: `Лес был наполнен одновременно тишиной и тысячами звуков. Здесь нельзя было услышать разговоры людей, скрип колесниц или фырканье лошадей. 
        \n Но над деревьями разливались пение птиц и ветер.
        `
      },
      {
        image: '/images/forest.jpeg',
        text: `Хозяин леса Лонбайт славился своей справедливостью на всю Северную долину, и потому поверить в то, что он возглавлял разбойные нападения было очень сложно.`
      },
      {
        image: '/images/forest.jpeg',
        text: `Тауриэль села на траву недалеко от главной тропинки леса, чтобы подумать над своими дальнейшими действиями.`
      },
      {
        image: '/images/forest.jpeg',
        text: `Нападения начались чуть меньше месяца назад. Всех грабили на основной дороге. У последнего из убитых в груди нашли стрелу, явно принадлежавшую кому-то из Тишинской глади.`
      },
      {
        image: '/images/forest.jpeg',
        text: `Значит, либо это неаккуратный боец глади, либо кто-то хочет их подставить. Но зачем?`
      },
      {
        image: '/images/forest.jpeg',
        text: `За спиной девушки послышался хруст веток.\n
        Эльфийка инстинктивно схватила лук и стрелы, обернувшись.
        `
      },
      {
        character: CHARACTER.TAURIEL,
        image: '/images/elfGirlForest.jpeg',
        text: `Кто здесь?`
      },
      {
        image: '/images/forest.jpeg',
        text: `Из за большого дуба вышел высокий мужчина. Его лицо было скрыто в тени листьев, но по его форме походке Тауриэль сразу узнала эльфа.`
      },
      {
        character: CHARACTER.TAURIEL,
        image: '/images/elfGirlForest.jpeg',
        text: `Руил! Черт возьми! Я могла тебя застрелить.`
      },
      {
        image: '/images/forest.jpeg',
        text: `Навстречу Тауриэль вышел ее лучший друг и напарник Руил. Его лицо украшала самодовольная ухмылка.`
      },
      {
        character: CHARACTER.ELF_2,
        image: '/images/forest-r.jpg',
        text: `Разве у тебя поднялась бы рука?`
      },
      {
        character: CHARACTER.TAURIEL,
        image: '/images/elfGirlForest.jpeg',
        text: `Испортить твое милое личико? Да! Что ты здесь делаешь?`
      },
      {
        character: CHARACTER.ELF_2,
        image: '/images/forest-r.jpg',
        text: ` Ну, неужели ты думала, что одна смогла выйти на след Лонбайта?`
      },
      {
        image: '/images/forest.jpeg',
        text: `Эльфийка нахмурилась.`
      },
      {
        character: CHARACTER.TAURIEL,
        image: '/images/elfGirlForest.jpeg',
        text: `Думаешь это правда он стоит за грабежами?`
      },
      {
        character: CHARACTER.ELF_2,
        image: '/images/forest-r.jpg',
        text: `Мне не хочется так думать, но пока все дороги ведут к нему. Как ты кстати вышла на эту информацию?`
      },
    ],
    choices: {
      text: '',
      character: CHARACTER.TAURIEL,
      image: '/images/elfGirlForest.jpeg',
      list: [
        {
          text: 'Сказать правду о встрече с Дендером.',
          nextStage: 8,
          effect: rootStore.addStraight,
        },
        {
          text: 'Уйти от ответа',
          nextStage: 9,
          effect: rootStore.addStealth,
        }
      ]
    }
  }
];

export const getStages = (id: number): Stage => {
  return stages.find(i => i.id === id) || stages[0];
}
