import { StageText } from "../StageText";
import { StageAnswer } from "../StageAnswer";
import { useEffect, useState } from "react";
import { StageContext, VariantContext } from "./Context";
import { VARIANT_STAGE } from "../../configGame/variantStage";
import { runEffect } from "../../utils/runEffect";


export const Cycle = () => {
    const [stageID, setStage] = useState(1);
    const [variant, setVariant] = useState<VARIANT_STAGE>(VARIANT_STAGE.LINES);

    useEffect(() => {
        if (variant === VARIANT_STAGE.MAP) {
            runEffect(stageID);
        }
    }, [variant]);

    return (
        <StageContext.Provider value={{ stageID, setStage }}>
            <VariantContext.Provider value={{ variant, setVariant }}>
                <div>
                    {
                        {
                            [VARIANT_STAGE.LINES]: () => <StageText />,
                            [VARIANT_STAGE.CHOISES]: () => <StageAnswer />,
                            [VARIANT_STAGE.MAP]: () => <></>,
                        }[variant]()
                    }

                </div>
            </VariantContext.Provider>
        </StageContext.Provider>
    )
}