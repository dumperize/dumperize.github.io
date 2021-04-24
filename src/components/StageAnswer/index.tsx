import { useContext } from 'react';
import { Choice, getStages } from '../../configGame/stages';
import { VARIANT_STAGE } from '../../configGame/variantStage';
import { StageContext, VariantContext } from '../Cycle/Context';

export const StageAnswer = () => {
  const { stageID } = useContext(StageContext);
  const { setVariant } = useContext(VariantContext);

  const stage = getStages(stageID);
  const choises = stage.choices || [];

  const chooseAnswer = (item: Choice) => {
    setVariant(VARIANT_STAGE.MAP);
  }
  return (
    <>
      {choises.map(item => (
        <button key={item.text} onClick={() => chooseAnswer(item)}>{item.text}</button>
      ))}
    </>
  );
}
