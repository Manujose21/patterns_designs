import type BaseCar from "./base-car.js";


export default class BMW implements BaseCar {
    public getCost(): number {
        return 60000;
    }

    public getDetails(): string {
        return 'BMW Serie 3';
    }
}
