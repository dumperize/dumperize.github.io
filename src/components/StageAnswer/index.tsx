import { useContext } from 'react';
import { Choice, getStages } from '../../configGame/stages';
import { StageContext } from '../Cycle/Context';
import './styles.css';

export const StageAnswer = () => {
  const { stageID, setStage } = useContext(StageContext);

  const stage = getStages(stageID);
  const img = stage.choices?.image;
  const choises = stage.choices?.list || [];

  const chooseAnswer = (item: Choice) => {
    item.effect && item.effect();
    setStage(item.nextStage);
  }
  return (
    <>
      <div className='mainText'>
        {stage.choices?.character && <b style={{ textTransform: 'uppercase' }}>{stage.choices?.character}<br/></b>}
        {stage.choices?.text}
      </div>
      <img alt="" src={img} />
      {choises.map((item, index) => (
          // @ts-ignore
          <div className={ 'one' + index}>
            <button className='button' key={item.text} onClick={() => chooseAnswer(item)}>{item.text}</button>
          </div>
      ))}
    </>
  );
}
