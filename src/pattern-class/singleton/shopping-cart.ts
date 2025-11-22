import type Product from "./product.ts";


export default class ShoppingCart {

    private static instance: ShoppingCart;
    private products: Product[] = [];

    private constructor() {}

    public static getInstance(): ShoppingCart {
        if (!ShoppingCart.instance) {
            ShoppingCart.instance = new ShoppingCart();
        }
        return ShoppingCart.instance;
    }

    public static addProduct(product: Product): void {
        if(!ShoppingCart.instance) {
            throw new Error('El carrito de compras no está inicializado.');
        }

        ShoppingCart.instance.products.push(product);
    }

    public static deleteById(id:number): void {
        if(!ShoppingCart.instance) {
            throw new Error('El carrito de compras no está inicializado.');
        }

        ShoppingCart.instance.products = ShoppingCart.instance.products.filter((product: Product) => product.getId() !== id)

    }


}
