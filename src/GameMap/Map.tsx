import React from 'react';
// @ts-ignore
import { HexGrid, Layout, Hexagon, Text, Pattern } from 'react-hexgrid';
import {GameHex} from "./Hex";

export function GameMap() {
    const hexagonSize = { x: 10, y: 10 };
    return <div className="App">
        <HexGrid width={1200} height={800} viewBox="-100 -100 200 200">
            {/* Main grid with bit hexagons, all manual */}
            <Layout size={hexagonSize} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
                <GameHex q={0} r={0} s={0} type={'forest'} event={() => console.log('zero hex click')}/>
                <GameHex q={0} r={-1} s={1} type={'forest'} event={() => console.log('0-11')}/>
                {/* Using pattern (defined below) to fill the hexagon */}
                <GameHex q={0} r={1} s={-1} type={'forest'} event={() => console.log('01-1')} />
                <GameHex q={1} r={-1} s={0} type={'forest'} event={() => console.log('1-10')}>
                </GameHex>
                <GameHex q={1} r={0} s={-1} type={'forest'} event={() => console.log('10-1')}>
                </GameHex>
                {/* Pattern and text */}
                <GameHex q={-1} r={1} s={0} type="castle" event={() => console.log('-110')}>
                </GameHex>
                <GameHex q={-1} r={0} s={1} type={'forest'} event={() => console.log('-101')}/>
                <GameHex q={-2} r={0} s={2} type={'forest'} event={() => console.log('-201')}/>
            </Layout>
            {/* You can define multiple patterns and switch between them with "fill" prop on Hexagon */}
            <Pattern id="forest" link="/images/map/forest.png" size={hexagonSize} />
            <Pattern id="castle" link="/images/map/castle-1.png" size={hexagonSize} />
            <Pattern id="unknown" link="/images/map/unknown.png" size={hexagonSize} />
        </HexGrid>
    </div>
}
