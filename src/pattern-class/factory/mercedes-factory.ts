import type BaseCar from "./base-car.js";
import type CarFactory from "./car-factory.js";
import Mercedes from "./mercedes.js";

export default class MercedesFactory implements CarFactory {
    public makeCar(): BaseCar {
        return new Mercedes();
    }
} 
