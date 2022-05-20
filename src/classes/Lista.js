export default class Lista {
    name  = String;
    balance  = Float32Array;
    items = Array;
    status = Boolean;
    currentBalance = Float32Array;
    total = Float32Array;
    date = Date;

    constructor(name , balance) {
        this.name = name;
        this.balance = balance;
        this.status = false;
        this.items = [];
        this.total = 0;
        this.currentBalance = balance;
        this.date = new Date();
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
    getItem() {
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
    getCurrentBalance() {
        var total = 0;
        this.items.forEach(element => {
            total = total + element.price * element.quantity;
        })
        this.currentBalance = this.balance - total;
        return this.currentBalance;
    }
    getTotal(){
        this.items.forEach(element => {
            this.total = this.total + element.price * element.quantity;
        })
        return this.total;
    }
    
}