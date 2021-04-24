import { makeObservable, observable, action } from "mobx"

export class RootStore {
    stealth;
    money;
    straight;
    ruilCoolBloodedMemory;

    constructor() {
        makeObservable(this, {
            stealth: observable,
            money: observable,
            straight: observable,
            ruilCoolBloodedMemory: observable,
            addStealth: action,
        })
        this.stealth = 1;
        this.money = 100;
        this.straight = 1;
        this.ruilCoolBloodedMemory = false;
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
}

export default new RootStore();
