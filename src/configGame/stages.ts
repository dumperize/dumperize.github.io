import rootStore from '../store/root';
import { CHARACTER } from './character';

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
  nextStage?: number,
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
        `,
      },
      {
        image: '/images/map.jpg',
        text: `
        В такие моменты она с благодарностью вспоминала отца: ведь именно он, в свое время, научил ее мыслить логически. Любая загадка и головоломка - открытая книга для нее.
        `,
      },
      {
        image: '/images/map.jpg',
        text: `
        Взгляд снова упал на карту. 
        `,
      },
      {
        image: '/images/tawern-bg.jpeg',
        text: `Тауриэль смотрела на паб. Именно здесь проводил свое время Дандерн. Он наверняка знал часть информации, осталось лишь заполучить ее.
        Эльфийка зашла в паб.
        \n
        Гул голосов раскатывался по помещению, что не могло не сыграть ей на руку. Она выбрала самое незаметное место в углу и заняла выжидательную позицию.
        
        `,
      },
      {
        image: '/images/tawern-bg.jpeg',
        text: `
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
        character: CHARACTER.ELF_1,
        image: '/images/tawerna-d.jpg',
        text: 'Давай без прелюдий. Зачем ты здесь, Тауриэль.',
      },
      {
        image: '/images/tawern-bg.jpeg',
        text: `Тауриэль задумалась: Дандерн считает себя самым умным вожаком. Если подыграть ему сделать вид, что он раскрыл ее, информации можно выведать еще больше.
        Она улыбнулся.`,
      },
      {
        character: CHARACTER.TAURIEL,
        image: '/images/tawerna-t.jpg',
        text: `Что ты знаешь о нападениях в Изумрудном лесе?`,
      },
      {
        character: CHARACTER.ELF_1,
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
          nextStage: 300,
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
    id: 300,
    lines: [
      {
        character: CHARACTER.ELF_1,
        text: 'Ты же знаешь, что такую информацию никто тебе не даст даром.',
        image: '/images/tawerna-d.jpg',
      },
    ],
    choices: {
      character: CHARACTER.TAURIEL,
      image: '/images/tawerna-t.jpg',
      text: '',
      list: [
        {
          text: 'Отдать денег',
          nextStage: 3,
          effect: () => rootStore.changeMoney(-100),
        },
      ]
    }
  },
  {
    id: 3,
    lines: [
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
    ],
    nextStage: 4,
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
    ],
    nextStage: 5,
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
          effect: () => { rootStore.decStraight(); rootStore.changeMoney(100); },
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
  },
  {
    id: 8,
    lines: [
      {
        character: CHARACTER.TAURIEL,
        text: 'Я была в таверне Тишинской глади и говорила с вожаком. Он намекнул, что Лонбайт в курсе всего происходящего в лесу.',
        image: '/images/elfGirlForest.jpeg',
      },
    ],
    nextStage: 10,
  },
  {
    id: 9,
    lines: [
      {
        character: CHARACTER.TAURIEL,
        text: 'У меня есть свои источники.',
        image: '/images/elfGirlForest.jpeg',
      },
    ],
    nextStage: 10,
  },
  {
    id: 10,
    lines: [
      {
        image: '/images/forest.jpeg',
        text: 'На главной дороге леса послышался шум колесницы и друзья быстро спрятались за дерево.Все остальное произошло за считанные секунды.',
      },
      {
        image: '/images/forest.jpeg',
        text: 'С верхушки деревьев полетели стрелы, моментально поразив всех пассажиров.Трое мужчин тут же спустились, послышался звук рассыпающегося золота.',
      },
      {
        image: '/images/forest.jpeg',
        text: 'Тауриэль прицелилась и ее стрела попала в ногу одного из грабителей.',
      },
      {
        image: '/images/forest.jpeg',
        text: 'Двое других, схватив вещи убитых, скрылись из виду, оставляя своего соучастника на суд Тауриэль и Руила.',
      },
      {
        image: '/images/forest.jpeg',
        text: 'Эльфийка подбежала к раненому, на ходу подмечая, что в убитых снова были стрелы из Тишинской глади.'
      },
      {
        character: CHARACTER.TAURIEL,
        image: '/images/elfGirlForest.jpeg',
        text: `Кто ты и откуда? Отвечай!`,
      },
      {
        image: '/images/forest.jpeg',
        text: 'Мужчина отвечал неразборчиво, но что - то эльфийка все таки смогла услышать.',
      },
      {
        character: CHARACTER.ELF_4,
        image: '/images/forest-e.jpg',
        text: `Меня зовут Эльгорт.`
      },
      {
        character: CHARACTER.TAURIEL,
        image: '/images/elfGirlForest.jpeg',
        text: `И кто тебя сюда отправил, Эльгорт.`
      },
      {
        image: '/images/forest.jpeg',
        text: 'Он ничего не ответил, просто продолжал держаться за рану.',
      },
      {
        character: CHARACTER.ELF_2,
        image: '/images/forest-r.jpg',
        text: 'Ты же понимаешь, что если ты не ответишь, мне не жалко будет закончить ее работу? И после этих слов он приставил меч к его горлу.',
      },
      {
        image: '/images/forest.jpeg',
        text: 'Эльгорт понял, что у него нет шансов спастись, а может он просто не отличался воровской честностью, поэтому тихо ответил.'
      },
      {
        character: CHARACTER.ELF_4,
        image: '/images/forest-e.jpg',
        text: `Это все Лонбайт! Он закупает стрелы в Тишинской глади, чтобы подставить их вожака.`
      },
      {
        character: CHARACTER.TAURIEL,
        image: '/images/elfGirlForest.jpeg',
        text: `Зачем ему это нужно?`
      },
      {
        character: CHARACTER.ELF_4,
        image: '/images/forest-e.jpg',
        text: `Не знаю…`
      },
      {
        image: '/images/forest.jpeg',
        text: 'Руил чуть сильнее надавил на меч, а у Эльгорта показалась небольшая капля крови под ним.',
      },
      {
        character: CHARACTER.ELF_4,
        image: '/images/forest-e.jpg',
        text: `Я правда не знаю! Мне сказали просто обворовывать богачей на дороге леса.Я больше ничего не знаю.`
      },
      {
        character: CHARACTER.ELF_2,
        image: '/images/forest-r.jpg',
        text: `Тогда ты нам больше не нужен.Тауриэль, закончи с ним`
      },
    ],
    choices: {
      text: 'Эльфийка смотрела на перепуганного разбойника. Перед ней стоял выбор.',
      character: CHARACTER.TAURIEL,
      image: '/images/elfGirlForest.jpeg',
      list: [
        {
          text: 'Убить разбойника. Руил запомнит вашу хладнокровность.',
          nextStage: 11,
          effect: () => { },
        },
        {
          text: 'Пощадить и отпустить его. Горожане узнают о том, что авроры отправили шпионов в лес.',
          nextStage: 12,
          effect: () => { },
        }
      ]
    },
  },
  {

    id: 11,
    lines: [
      {
        character: CHARACTER.TAURIEL,
        text: `Тауриэль натянула стрелу и выпустила ее в сердце вора. Ни один мускул не дрогнул на ее лице. Она просто шла к своей цели.
          / n Но где- то в глубине души, ее начало пожирать разочарование. 
/ n Она не могла поверить, что справедливый Лонбайт оказался последним предателем, приславшим сюда глупого разбойника.
`,
        image: '/images/elfGirlForest.jpeg',
      },
    ],
    nextStage: 1300,
  },
  {

    id: 12,
    lines: [
      {
        character: CHARACTER.TAURIEL,
        text: 'Пусть уходит, я не хочу даже пачкать стрелы. И обязательно расскажи все, что лес теперь под охраной.',
        image: '/images/elfGirlForest.jpeg',
      },
      {
        image: '/images/forest.jpeg',
        text: 'Эльгорта не пришлось просить дважды. Хромая он скрылся между деревьев.'
      },
      {
        image: '/images/forest.jpeg',
        text: 'Тауриэль и Руил стояли посреди дороги и пытались осмыслить все, что сейчас произошло.'
      },
      {
        image: '/images/forest.jpeg',
        text: 'В телах убитых были стрелы Тишинской глади, богачей просто обокрали, а все нити напрямую вели к Лонбайту.'
      },
      {
        image: '/images/forest.jpeg',
        text: 'Руил взял эльфику за руку.'
      },
      {
        character: CHARACTER.ELF_2,
        image: '/images/forest-r.jpg',
        text: 'Я знаю, что ты боишься в нем разочароваться. Но есть ли смысл оправдывать эльфийскую жестокость?',
      },
      {
        image: '/images/forest.jpeg',
        text: 'Тауриэль ничего не ответила.Все что она сейчас знала: следующий кого пронзит ее стрела, будет наказан за каждого убитого на этой дороге.'
      },
    ],
    nextStage: 1300,
  },
  {
    id: 1300,
    isMap: true,
  },
  {
    id: 13,
    lines: [
      {
        text: 'Тауриэль и Руил шли между скал, поднимаясь все выше. Им нужно было найти хижину Лонбайта.',
        image: '/images/mountains-bg.jpeg',
      },
      {
        text: `По легенде она находилась на вершине Холодной скалы, чтобы хозяин леса мог следить за всем, что находится внизу.
\nНо еще никто и никогда там не был.Никто кроме самой Тауриэль.
        `,
        image: '/images/mountains-bg.jpeg',
      },
      {
        text: 'Дорога была долгой и временами нудной.',
        image: '/images/mountains-bg.jpeg',
      },
      {
        text: 'Руил молчал, понимая, что Тауриэль полностью погружена в свои мысли. Он знал, что ее сердце уже давно занимал Лонбайт и поэтому его предательство Северной долины было убийственным для нее.',
        image: '/images/mountains-bg.jpeg',
      },
      {
        text: 'Спустя несколько часов за небольшой скалой показалась вершина хижины.',
        image: '/images/mountains-bg.jpeg',
      },
      {
        character: CHARACTER.ELF_2,
        text: ' Ты уверена, что хочешь закончить это дело?',
        image: '/images/mountains-r.jpg',
      },
      {
        character: CHARACTER.TAURIEL,
        text: 'У меня есть выбор? Я зайду одна, если не решу все через десять минут - заходи.',
        image: '/images/mountains-t.jpg',
      },
      {
        text: 'Руил лишь молча кивнул, а Тауриэль повернула ручку в хижину.',
        image: '/images/mountains-bg.jpeg',
      },
    ],
    nextStage: 1302,
  },
  {
    id: 1302,
    isMap: true,
  },
  {
    id: 1303,
    lines: [
      {
        text: 'Лонбайт сидел за столом и изучал карты леса. Когда дверь открылась, мужчина даже не поднял головы, лишь тяжело вздохнул.',
        image: '/images/house-bg.jpeg',
      },
      {
        character: CHARACTER.ELF_3,
        text: 'Если ты пришла сюда сама, значит поверила слухам.',
        image: '/images/house-l.jpg',
      }
    ],
    choices: {
      text: 'Разве у меня был выбор…',
      character: CHARACTER.TAURIEL,
      image: '/images/house-t.jpg',
      list: [
        {
          text: 'все говорят, что это твоих рук дело.',
          nextStage: 14,
          effect: rootStore.addStraight,
        },
        {
          text: 'зачем только использовать стрелы Тишинской глади?',
          nextStage: 14,
          effect: rootStore.addStealth,
        }
      ]
    }
  },
  {
    id: 14,
    lines: [
      {
        character: CHARACTER.ELF_3,
        text: 'Наверное не все вещи так очевидны как нам кажется. И не всем, кто рядом стоит доверять.',
        image: '/images/house-l.jpg',
      },
      {
        character: CHARACTER.TAURIEL,
        text: 'Ты о себе сейчас говоришь?',
        image: '/images/house-t.jpg',
      },
      {
        text: 'Дверь резко распахнулась. На пороге стоял разъяренный Руил.',
        image: '/images/house-bg.jpeg',
      },
      {
        character: CHARACTER.TAURIEL,
        text: 'Ты рано…',
        image: '/images/house-t.jpg',
      },
      {
        character: CHARACTER.ELF_2,
        image: '/images/house-r.jpg',
        text: 'Как раз во время.',
      },
      {
        text: 'И после этих слов он поднял меч в ее сторону. ',
        image: '/images/house-bg.jpeg',
      },
      {
        text: `Тауриэль непонимающе перевела взгляд с Руила на Лонбайта, затем обратно.\n
В эту же секунду из окна пролетела стрела, пронзив плечо хозяина леса.\n
Эльфика кинулась к нему.Прижав рукой его рану она обратилась к своему некогда другу.
        `,
        image: '/images/house-bg.jpeg',
      },
      {
        character: CHARACTER.TAURIEL,
        text: 'Так это был ты? Ты организовывал нападения? Зачем?',
        image: '/images/house-t.jpg',
      },
      {
        character: CHARACTER.ELF_2,
        image: '/images/house-r.jpg',
        text: 'Затем что хозяин леса уже слишком долго занимал свой пост. А как еще можно подставить самого справедливого в Северной долине? Заставить людей в нем сомневаться.',
      },
      {
        character: CHARACTER.TAURIEL,
        text: 'И в лесу ты был не просто так?',
        image: '/images/house-t.jpg',
      },
      {
        character: CHARACTER.ELF_2,
        image: '/images/house-r.jpg',
        text: 'Моя дорогая, как только ты вышла из таверны, я уже знал куда тебя направили. Ты бы очень удивилась как легко подкупить авроров и вождей.',
      },
      {
        character: CHARACTER.TAURIEL,
        text: 'Я думала, ты мне помогаешь. Мы же столько всего прошли вместе.',
        image: '/images/house-t.jpg',
      },
      {
        character: CHARACTER.ELF_2,
        image: '/images/house-r.jpg',
        text: 'Мне просто нужно было найти его хижину.',
      },
      {
        text: 'Он кивнул в сторону раненого Лонбайта.',
        image: '/images/house-bg.jpeg',
      },
      {
        character: CHARACTER.ELF_2,
        image: '/images/house-r.jpg',
        text: 'В глобальных вопросах нет места дружбе. Ничего личного.',
      },
      {
        text: `Этих слов было достаточно эльфийке.\n
Она не замедляясь вскинула лук, натягивая стрелу с тетивой. 
        `,
        image: '/images/house-bg.jpeg',
      },
      {
        character: CHARACTER.ELF_2,
        image: '/images/house-r.jpg',
        text: 'Не самое лучшее решение, ведь я пришел сюда не один.',
      },
    ],
    choices: {
      character: CHARACTER.TAURIEL,
      text: '',
      image: '/images/house-t.jpg',
      list: [
        {
          text: 'Все равно выстрелить',
          nextStage: 15,
          effect: rootStore.addStraight,
        },
        {
          text: 'Подождать удобного момента',
          nextStage: 16,
          effect: rootStore.addStealth,
        },
      ]
    }
  },
  {
    id: 15,
    lines: [
      {
        image: '/images/house-bg.jpeg',
        text: `Лучник вне хижины окажется быстрее и смертельно ранит вас.\n
Вы мертвы.Руил убьет Лонбайта и захватит власть над лесом.\n
Игра для вас закончена.
        `
      },
      {
        image: '/images/house-bg.jpeg',
        text: `Тауриэль запомнят как предателя, соучастника Лонбайта.Вас обоих обвинят в грабеже и все преступления повесят на ваши плечи.`
      },
    ],
    nextStage: 17,
  },
  {
    id: 16,
    lines: [
      {
        image: '/images/house-bg.jpeg',
        text: `Руил начал прохаживаться по хижине, рассматрива карты.\n
Он был уверен в себе и своих действиях.
        `
      },
      {
        image: '/images/house-bg.jpeg',
        text: `Тауриэль почувствовала как кто - то аккуратно тронул ее плечо.\n
Лонбайт показал, что в его руке находится маленький нож, а затем кивнул в сторону окна.
        `
      },
      {
        image: '/images/house-bg.jpeg',
        text: `Эльфийка заметила среди скал лучника.`
      },
      {
        image: '/images/house-bg.jpeg',
        text: `Она медленно кивнула головой.`
      },
      {
        image: '/images/house-bg.jpeg',
        text: `В следующее же мгновение Лонбайт метко запустил нож в лучника, а Тауриэль стрелу в спину Руилу.`
      },
      {
        image: '/images/house-bg.jpeg',
        text: `Мужчина упал на холодный пол хижины.`
      },
      {
        character: CHARACTER.ELF_2,
        image: '/images/house-r.jpg',
        text: 'Что же Тауриэль, это было очень нечестно.',
      },
      {
        character: CHARACTER.TAURIEL,
        text: 'Ничего личного.',
        image: '/images/house-t.jpg',
      },
      {
        image: '/images/house-bg.jpeg',
        text: `И девушка закончила то, что начала мгновением раньше.`
      },
      {
        image: '/images/house-bg.jpeg',
        text: `Поздравляем! Игра окончена.\n
Вы смогли найти главного злодея и одержать над ним победу.
        `
      },
      {
        image: '/images/house-bg.jpeg',
        text: `Тауриэль запомнят как бравого воина, готового бороться за правду.\n
Ей было сложно пережить предательство лучшего друга, но она знала, что дальше ее и Северную долину ждет только светлое будущее.
        `
      },
    ]
  },
  {
    id: 17,
    lines: [
      {
        text: 'КОНЕЦ',
        image: '/images/house-bg.jpeg',
      }
    ]
  }
];

export const getStages = (id: number): Stage => {
  return stages.find(i => i.id === id) || stages[0];
}
