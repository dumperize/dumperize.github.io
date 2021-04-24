import React, {useCallback} from 'react';
import { observer } from "mobx-react-lite"
// @ts-ignore
import { Hexagon, Text } from 'react-hexgrid';
import rootStore from "../../store/root";

export type THexProps = {
    q: number,
    r: number,
    s: number,
    type: string,
    event?: () => void,
    children?: any
};

export const GameHex = observer((props: THexProps) => {
    const onClick = useCallback(
        () => {
            if (rootStore.availableMap.some(mapHex => props.q === mapHex[0] && props.r === mapHex[1] && props.s === mapHex[2])) {
                if (!rootStore.blocked.some(mapHex => props.q === mapHex[0] && props.r === mapHex[1] && props.s === mapHex[2])) {
                    rootStore.openHex([props.q, props.r, props.s])
                }
                props.event && props.event();
            }
        },
        [props],
    );

    const available = rootStore.availableMap.some(mapHex => props.q === mapHex[0] && props.r === mapHex[1] && props.s === mapHex[2]);
    const known = rootStore.knownMap.some(mapHex => props.q === mapHex[0] && props.r === mapHex[1] && props.s === mapHex[2]);
    const hint = props.q === rootStore.nextLoc[0] && props.r === rootStore.nextLoc[1] && props.s === rootStore.nextLoc[2];
    let fill;
    let child = null;
    if (available) {
        fill = 'unknown';
    }
    if (hint) {
        child = <Text>!</Text>
    }
    if (known || hint) {
        fill = props.type;
    }
    return <Hexagon q={props.q} r={props.r} s={props.s} fill={fill} draggable={false} onClick={onClick}>
        {child}
        {props.children}
    </Hexagon>
});
