import Singleton from "./pattern-class/singleton/singleton.js";
import ShoppingCart from "./pattern-class/singleton/shopping-cart.js";
import Product from "./pattern-class/singleton/product.js";
import type CarFactory from "./pattern-class/factory/car-factory.js";
import BMWFactory from "./pattern-class/factory/bmw-factory.js";
import MercedesFactory from "./pattern-class/factory/mercedes-factory.js";
import type BaseCar from "./pattern-class/factory/base-car.js";
import RollsRoyceFactory from "./pattern-class/factory/rolls-royce-factory.js";

// ================== singleton ==================

// const singleton1 = Singleton.getInstance('1.0.0');
// const singleton2 = Singleton.getInstance('1.1.0');

// Singleton.updateVersion('1.2.0');

// console.log(singleton1 === singleton2);
// console.log(singleton1.version);
// console.log(singleton2.version);

// * Ejemplo de carrito de compras

// *una sola instancia de ShoppingCart en toda la aplicación
// *const product = new Product(1, 'Producto 1', 100);
// *const product2 = new Product(2, 'Producto 2', 200);

// *ShoppingCart.getInstance();
// *ShoppingCart.addProduct(product);
// *ShoppingCart.addProduct(product2);

// *console.log(ShoppingCart.getInstance());

// ================== end singleton ==================

// ================== Factory ==================

const createCar = (factory: 'Mercedes' | 'BMW' | 'RollsRoyce') => {
    const cars = {
        BMW: BMWFactory,
        Mercedes: MercedesFactory,
        RollsRoyce: RollsRoyceFactory
    }

    const Factory = cars[factory]

    return new Factory().makeCar();
}

function appMain() {
    const bmw: BaseCar = createCar('BMW');
    const mercedes: BaseCar = createCar('Mercedes');
    // rolls royce car creation
    const rollsRoyce: BaseCar = createCar('RollsRoyce');

    console.log(mercedes.getCost());
    console.log(mercedes.getDetails());
    console.log(bmw.getCost());
    console.log(bmw.getDetails());
    // added rolls royce output
    console.log(rollsRoyce.getCost());
    console.log(rollsRoyce.getDetails());
}

appMain();