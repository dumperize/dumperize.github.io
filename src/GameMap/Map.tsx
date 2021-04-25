import React, { useContext } from 'react';
// @ts-ignore
import { HexGrid, Layout, Hexagon, Text, Pattern } from 'react-hexgrid';
import { GameHex } from "./Hex";
import rootStore from "../store/root";
import root from "../store/root";
import { StageContext } from '../components/Cycle/Context';
import Modal from 'react-modal';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

const mapEffects = {
    'money': {
        text: "На дороге вы нашли кошелёк с сотней монет",
        effect: () => rootStore.changeMoney(100),
    },
    'road': {
        text: "Дорога... иди дальше",
        effect: () => {},
    },
    'desert': {
        text: "Тауриэль, ты заблудилась, моя дорогая, это пустыня",
        effect: () => {},
    },
    'pay': {
        text: "Доступно по подписке",
        effect: () => {},
    },
    'fields': {
        text: "Перекати поле...",
        effect: () => {},
    },
    'waterfall': {
        text: "Искупайся, отдохни",
        effect: () => {},
    },
}

export function GameMap() {
    const { setStage } = useContext(StageContext);
    const [modalIsOpen,setIsOpen] = React.useState<string|null>(null);
    const hexagonSize = { x: 10, y: 10 };
    return <div className="App">
        <Modal
            isOpen={!!modalIsOpen}
            onRequestClose={() => setIsOpen(null)}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div>{
    // @ts-ignore
                mapEffects[modalIsOpen]?.text
            }</div>
            <button onClick={() => {
                // @ts-ignore
                mapEffects[modalIsOpen].effect();
                setIsOpen(null)
            }}>ЗАКРЫТЬ</button>
        </Modal>
        <HexGrid width={1200} height={800} viewBox="-100 -100 200 200">
            {/* Main grid with bit hexagons, all manual */}
            <Layout size={hexagonSize} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
                <GameHex q={0} r={0} s={0} type={'castle'} event={() => console.log('zero hex click')} />
                <GameHex q={0} r={-1} s={1} type={'cave'} event={() => setIsOpen('pay')} />
                <GameHex q={0} r={1} s={-1} type={'road'} event={() => setIsOpen('road')} />
                <GameHex q={1} r={0} s={-1} type={'road'} event={() => setIsOpen('money')} />
                <GameHex q={-1} r={0} s={1} type={'desert'} event={() => setIsOpen('desert')} />
                <GameHex q={-1} r={1} s={0} type={'desert'} event={() => setIsOpen('desert')} />
                <GameHex q={1} r={-1} s={0} type={'fields'} event={() => setIsOpen('fields')} />
                <GameHex q={2} r={-1} s={-1} type={'road'} event={() => console.log('')} />
                <GameHex q={3} r={-2} s={-1} type={'road'} event={() => console.log('0-11')} />
                <GameHex q={4} r={-3} s={-1} type={'mountains'} event={() => {
                    rootStore.setHint([4, -4, -1]);
                    rootStore.removeBlock([4, -4, -1]);
                    setStage(13)
                }} />
                <GameHex q={4} r={-4} s={0} type={'cave'} event={() => setStage(1303)} />
                <GameHex q={4} r={-2} s={-2} type={'fields'} event={() => console.log('0-11')} />
                <GameHex q={3} r={-1} s={-2} type={'waterfall'} event={() => setIsOpen('waterfall')} />
                <GameHex q={2} r={0} s={-2} type={'fields'} event={() => console.log('0-11')} />
                <GameHex q={1} r={1} s={-2} type={'fields'} event={() => console.log('0-11')} />
                <GameHex q={2} r={1} s={-3} type={'forest'} event={() => {
                    rootStore.setHint([4, -3, -1]);
                    rootStore.removeBlock([4, -3, -1]);
                    setStage(6)
                }} />
                {/* <GameHex q={-1} r={1} s={0} type={'mountains'} event={() => console.log('mountains')} /> */}
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
