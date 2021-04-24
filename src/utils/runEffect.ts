import { getStages } from "../configGame/stages"

export const runEffect = (stageId: number) => {
    const stage = getStages(stageId).effect;
    stage && stage();
}