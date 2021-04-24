import { useContext } from 'react';
import { Choice, getStages } from '../../configGame/stages';
import { StageContext } from '../Cycle/Context';

export const StageAnswer = () => {
  const { stageID, setStage } = useContext(StageContext);

  const stage = getStages(stageID);
  const choises = stage.choices?.list || [];

  const chooseAnswer = (item: Choice) => {
    item.effect && item.effect();
    setStage(item.nextStage);
  }
  return (
    <>
      {choises.map(item => (
        <button key={item.text} onClick={() => chooseAnswer(item)}>{item.text}</button>
      ))}
    </>
  );
}
