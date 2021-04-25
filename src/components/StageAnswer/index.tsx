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
    <div className="shapeAnswer-root">
      <div className="shapeAnswer-image" style={{ backgroundImage: `url(${img})` }} />
      <div className="shapeAnswer-controls">
        <div className='shapeAnswer-mainText'>
          {stage.choices?.character && <b style={{ textTransform: 'uppercase' }}>{stage.choices?.character}:<br /></b>}
          {stage.choices?.text}
        </div>

        <div className='shapeAnswer-buttons'>
          {choises.map((item, index) => (
            // @ts-ignore
            <button className='button' key={item.text} onClick={() => chooseAnswer(item)}>{item.text}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
