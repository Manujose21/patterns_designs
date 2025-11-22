
export default class Product {

    private id: number;
    private name: string;
    private cost: number;

    constructor(id: number, name: string, cost: number) {
        this.id = id;
        this.name = name;
        this.cost = cost;
    }

    public getCost(): number {
        return this.cost;
    }

    public getName(): string {
        return this.name;
    }

    public getId(): number {
        return this.id;
    }

}
