import type CarFactory from "./car-factory.js";
import Mercedes from "./mercedes.js";


export default class MercedesFactory implements CarFactory {
    public makeCar(): Mercedes {
        return new Mercedes();
    }
} 
