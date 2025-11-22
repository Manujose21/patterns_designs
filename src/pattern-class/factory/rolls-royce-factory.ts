import type CarFactory from "./car-factory.js";
import  RollsRoyce from "./rolls-royce.js";

export default class RollsRoyceFactory implements CarFactory {
    public makeCar(): RollsRoyce {
        return new RollsRoyce();
    }
}