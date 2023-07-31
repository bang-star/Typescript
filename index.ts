class Store {
    static type = "Food";

    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    static getType() {
        return this.type;
    }
}

const store = new Store("hamburger");

console.log(store.name, Store.type);
