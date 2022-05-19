import Item from './Item';

export default class Lista {
    name  = String;
    balance  = Float32Array;
    items = Array;
    status = Boolean;

    constructor(name) {
        this.name = name;
        this.balance = 0;
        this.status = false;
        this.items = [];
    }
    constructor(name , balance) {
        this.name = name;
        this.balance = balance;
        this.status = false;
        this.items = [];
    }

    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getBalance() {
        return this.balance;
    }
    setBalance(balance) {
        this.balance = balance
    }
    getItems() {
        return this.items;
    }
    setItem(Item) {
        this.items.push(Item)
    }
    getStatus() {
        return this.status;
    }
    setStatus() {
        this.status = !this.status;
    }
    
}