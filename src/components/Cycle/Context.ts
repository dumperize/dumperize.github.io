import { createContext } from "react";
import { VARIANT_STAGE } from "../../configGame/variantStage";

export const StageContext = createContext({
    stageID: 1,
    setStage: (id: number) => {},
});
export const VariantContext = createContext({
    variant: 'lines',
    setVariant: (variant: VARIANT_STAGE) => {},
});
export const ChoiseContext = createContext({
    choise: undefined,
    setChoise: (id: number) => {},
});
