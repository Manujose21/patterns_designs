import type BaseCar from "./base-car.js";

export default class RollsRoyce implements BaseCar{
    public getCost(): number {
        return 300000;
    }
    public getDetails(): string {
        return 'Rolls-Royce Phantom';
    }
}