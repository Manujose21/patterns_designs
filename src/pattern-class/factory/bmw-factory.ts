import BMW from "./bmw.js";
import type CarFactory from "./car-factory.js";

export default class BMWFactory implements CarFactory {
    public makeCar(): BMW {
        return new BMW();
    }

}