import { useContext, useEffect, useState } from 'react';
import { getStages } from '../../configGame/stages';
import { VARIANT_STAGE } from '../../configGame/variantStage';
import { StageContext, VariantContext } from '../Cycle/Context';
import './styles.css';


export const StageText = () => {
    const { stageID } = useContext(StageContext);
    const { setVariant } = useContext(VariantContext);

    const stage = getStages(stageID);
    const lines = stage.lines || [];
    const [number, setNumber] = useState(0);

    useEffect(() => {
        const handler = () => {
            if (number + 1 >= lines.length) {
                setVariant(VARIANT_STAGE.CHOISES);
                return;
            }
            setNumber((prev) => prev + 1);
        };
        window.addEventListener('click', handler)
        return () => window.removeEventListener('click', handler);
    }, [number]);

    return (
        <div className="root">
            <div className='wrapper'>
                <img alt="" className='img' src={lines[number].image} />
            </div>
            <div className='mainText'>
                {lines[number].text}
            </div>
            {/* <div className='buttonsWrapper'>
                <div className='buttonOne'>
                    <button className='button'>MoveBack</button>
                </div>
                <div className='buttonTwo'>
                    <button className='button'>MoveForward</button>
                </div>
            </div> */}
        </div>
    );
}
