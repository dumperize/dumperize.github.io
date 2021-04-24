import { StageText } from "../StageText";
import { StageAnswer } from "../StageAnswer";
import { useEffect, useState } from "react";
import { StageContext, VariantContext } from "./Context";
import { VARIANT_STAGE } from "../../configGame/variantStage";
import { getStages } from "../../configGame/stages";
import { GameMap } from "../../GameMap";
import rootStore from "../../store/root";
import { observer } from "mobx-react-lite";


const Cycle = () => {
    const [stageID, setStage] = useState(1);
    const [variant, setVariant] = useState<VARIANT_STAGE>(VARIANT_STAGE.LINES);
    const stage = getStages(stageID);

    const setNextStage = (id: number) => {
        setStage(id);
        setVariant(VARIANT_STAGE.LINES);
    }
    useEffect(() => {
        if (variant === VARIANT_STAGE.CHOISES && !stage.choices) {
            setNextStage(stageID + 1);
        }
    }, [variant, stage, stageID]);
    
    return (
        <StageContext.Provider value={{
            stageID,
            setStage: setNextStage
        }}>
            <VariantContext.Provider value={{ variant, setVariant }}>
                {stage.isMap
                    ? (<GameMap />)
                    : (
                        <div>
                            {
                                {
                                    [VARIANT_STAGE.LINES]: () => <StageText />,
                                    [VARIANT_STAGE.CHOISES]: () => <StageAnswer />,
                                }[variant]()
                            }
                        </div>
                    )}
            </VariantContext.Provider>
        </StageContext.Provider>
    )
}

export default observer(Cycle);
