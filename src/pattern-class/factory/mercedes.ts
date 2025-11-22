import type BaseCar from "./base-car.js";

export default class Mercedes implements BaseCar{
    public getCost(): number {
        return 50000;
    }
    public getDetails(): string {
        return 'Mercedes-Benz C-Class';
    }
}