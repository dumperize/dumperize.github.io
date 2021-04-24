import React, { useContext } from 'react';
// @ts-ignore
import { HexGrid, Layout, Hexagon, Text, Pattern } from 'react-hexgrid';
import { GameHex } from "./Hex";
import rootStore from "../store/root";
import root from "../store/root";
import { StageContext } from '../components/Cycle/Context';

export function GameMap() {
    const { setStage } = useContext(StageContext);
    const hexagonSize = { x: 10, y: 10 };
    return <div className="App">
        <HexGrid width={1200} height={800} viewBox="-100 -100 200 200">
            {/* Main grid with bit hexagons, all manual */}
            <Layout size={hexagonSize} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
                <GameHex q={0} r={0} s={0} type={'castle'} event={() => console.log('zero hex click')} />
                <GameHex q={0} r={-1} s={1} type={'cave'} event={() => console.log('0-11')} />
                <GameHex q={0} r={1} s={-1} type={'forest'} />
                <GameHex q={1} r={0} s={-1} type={'road'} event={() => console.log('0-11')} />
                <GameHex q={-1} r={0} s={1} type={'desert'} event={() => console.log('0-11')} />
                <GameHex q={-1} r={1} s={0} type={'mountains'} event={() => console.log('0-11')} />
                <GameHex q={1} r={-1} s={0} type={'fields'} event={() => console.log('0-11')} />
                <GameHex q={2} r={-1} s={-1} type={'road'} event={() => console.log('0-11')} />
                <GameHex q={3} r={-2} s={-1} type={'road'} event={() => console.log('0-11')} />
                <GameHex q={4} r={-3} s={-1} type={'mountains'} event={() => console.log('0-11')} />
                <GameHex q={4} r={-2} s={-2} type={'fields'} event={() => console.log('0-11')} />
                <GameHex q={3} r={-1} s={-2} type={'fields'} event={() => console.log('0-11')} />
                <GameHex q={2} r={0} s={-2} type={'fields'} event={() => console.log('0-11')} />
                <GameHex q={1} r={1} s={-2} type={'fields'} event={() => console.log('0-11')} />
                <GameHex q={2} r={1} s={-3} type={'forest'} event={() => {
                    rootStore.setHint([4, -3, -1]);
                    rootStore.removeBlock([4, -3, -1]);
                    setStage(6);
                }} />
            </Layout>
            <Pattern id="unknown" link="/images/map/unknown.png" size={hexagonSize} />
            {/* You can define multiple patterns and switch between them with "fill" prop on Hexagon */}
            <Pattern id="forest" link="/images/map/forest-1.png" size={hexagonSize} />
            <Pattern id="castle" link="/images/map/castle-1.png" size={hexagonSize} />
            <Pattern id="road" link="/images/map/road-1.png" size={hexagonSize} />
            <Pattern id="waterfall" link="/images/map/waterfall-1.jpg" size={hexagonSize} />
            <Pattern id="cave" link="/images/map/cave-1.png" size={hexagonSize} />
            <Pattern id="desert" link="/images/map/desert-1.png" size={hexagonSize} />
            <Pattern id="mountains" link="/images/map/mountains-1.png" size={hexagonSize} />
            <Pattern id="fields" link="/images/map/fields-1.png" size={hexagonSize} />
        </HexGrid>
    </div>
}
