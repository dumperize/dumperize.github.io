import {makeObservable, observable, action, computed} from "mobx"

export class RootStore {
    stealth;
    money;
    straight;
    ruilCoolBloodedMemory;

    knownMap: [[number,number,number]];

    constructor() {
        makeObservable(this, {
            stealth: observable,
            money: observable,
            straight: observable,
            ruilCoolBloodedMemory: observable,
            knownMap: observable,
            availableMap: computed,
            addStealth: action,
            addStraight: action,
            changeMoney: action,
            ruilRemember: action,
        })
        this.stealth = 1;
        this.money = 100;
        this.straight = 1;
        this.ruilCoolBloodedMemory = false;
        this.knownMap = [[0,0,0]];
    }

    addStealth() {
        this.stealth++
    }

    addStraight() {
        this.straight++
    }

    changeMoney(value: number) {
        this.money += value;
    }

    ruilRemember() {
        this.ruilCoolBloodedMemory = true;
    }

    get availableMap() {
        return Array.from(this.knownMap.reduce(
            (result: Set<[number,number,number]>, mapHex: [number,number,number]) => {
                let newResult = result;
                const closest = [
                    [mapHex[0]+1,mapHex[1]-1,mapHex[2]],
                    [mapHex[0]-1,mapHex[1]+1,mapHex[2]],
                    [mapHex[0],mapHex[1]-1,mapHex[2]+1],
                    [mapHex[0],mapHex[1]+1,mapHex[2]-1],
                    [mapHex[0]-1,mapHex[1],mapHex[2]+1],
                    [mapHex[0]+1,mapHex[1],mapHex[2]-1],
                ]
                closest.forEach(
                // @ts-ignore
                    (hex: [number,number,number]) => {
                        newResult = newResult.add(hex);
                    }
                )
                return newResult;
            },
            new Set(),
        ))
            .filter((hex) => !this.knownMap
                .some(mapHex => hex[0] === mapHex[0] && hex[1] === mapHex[1] && hex[2] === mapHex[2])
            );
    }

    openHex(hexCoords: [number,number,number]) {
        this.knownMap.push(hexCoords);
    }
}

const rootStore = new RootStore();

export default rootStore;
