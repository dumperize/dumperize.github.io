import React, {useCallback} from 'react';
// @ts-ignore
import { Hexagon } from 'react-hexgrid';

export type THexProps = {
    q: number,
    r: number,
    s: number,
    type: string,
    event?: () => void,
    children?: any
};

export function GameHex(props: THexProps) {
    const onClick = useCallback(
        () => {
            props.event && props.event();
        },
        [props],
    );

    return <Hexagon q={props.q} r={props.r} s={props.s} fill={props.type} draggable={false} onClick={onClick}>
        {props.children}
    </Hexagon>
}
