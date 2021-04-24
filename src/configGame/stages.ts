import { CHARACTER } from './character';
import { POSITIONS } from './position';

export interface Line {
  character: CHARACTER,
  position: POSITIONS,
  text: string,
}
export interface Choice {
  text: string,
  nextStage: number,
  condition?: () => boolean,
}
export interface Stage {
  id: number,
  lines: Line[],
  choices?: Choice[],
  effect?: () => void,
}

export const stages: Stage[] = [
  {
    id: 1,
    lines: [
      {
        character: CHARACTER.ELF_1,
        position: POSITIONS.RIGHT,
        text: `Тауриэль держала карту Северной долины.\n
        Впереди предстояло слишком много работы: допросить всех подозреваемых, сложить все пазлы в одну картинку и при это остаться не раскрытой.
        \n\n
        В такие моменты она с благодарностью вспоминала отца: ведь именно он, в свое время, научил ее мыслить логически. Любая загадка и головоломка - открытая книга для нее.
        \n\n
        Взгляд снова упал на карту. 
        `,
      },
      {
        character: CHARACTER.ELF_1,
        position: POSITIONS.RIGHT,
        text: `Тауриэль смотрела на паб. Именно здесь проводил свое время Дандерн. Он наверняка знал часть информации, осталось лишь заполучить ее.
        Эльфийка зашла в паб.
        \n\n
        Гул голосов раскатывался по помещению, что не могло не сыграть ей на руку. Она выбрала самое незаметное место в углу и заняла выжидательную позицию.
        \n\n
        Дандерна нигде не было. Это немного смущало, ведь именно сейчас он должен был быть хотя бы наполовину пьян.
        \n\n
        Вдруг ее плеча кто-то коснулся.
        `,
      },
      {
        character: CHARACTER.ELF_1,
        position: POSITIONS.RIGHT,
        text: `Думаешь, если ты спрячешься в углу таверны, тебя никто не увидит?`,
      },
    ],
    choices: [
      {
        text: 'Знаешь что… Ты не самый гостеприимный хозяин!',
        nextStage: 2,
      },
      {
        text: 'Знаешь что… Кто сказал, что я прячусь?',
        nextStage: 2,
      },
    ],
    effect: () => {
      // write some effect,
    },
  },
  {
    id: 2,
    lines: [
      {
        character: CHARACTER.ELF_3,
        position: POSITIONS.RIGHT,
        text: 'Думаешь, если ты спрячешься в углу таверны, тебя никто не увидит?',
      },
    ],
    effect: () => {
      // write some effect,
    },
  }
];

export const getStages = (id: number) => {
  return stages.find(i => i.id === id) || {
    id,
    lines: [],
    choices: [],
  };
}