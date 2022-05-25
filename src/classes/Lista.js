export default class Lista {
    name  = String;
    balance  = Float32Array;
    items = Array;
    status = Boolean;
    currentBalance = Float32Array;
    total = Float32Array;

    constructor(name , balance , total) {
        this.name = name;
        this.balance = balance;
        this.status = false;
        this.items = [];
        this.total = total;
        this.currentBalance = 0;
    }


    // getName() {
    //     return this.name;
    // }
    // setName(name) {
    //     this.name = name;
    // }
    // getBalance() {
    //     return this.balance;
    // }
    // setBalance(balance) {
    //     this.balance = balance
    // }
    // getItem() {
    //     return this.items;
    // }
     setItem(Item) {
         this.items.push(Item)
     }
    // getStatus() {
    //     return this.status;
    // }
    // setStatus() {
    //     this.status = !this.status;
    // }
    // getCurrentBalance() {
    //     this.currentBalance = 0;
    //     this.items.forEach(item => {
    //         this.currentBalance = this.currentBalance + (item.price*item.quantity)
    //         console.log(item.price  * item.quantity);
    //     })
    //     return this.currentBalance;
    // }
    // getTotal(){
    //     this.items.forEach(element => {
    //         this.total = this.total + element.price * element.quantity;
    //     })
    //     return this.total;
    // }
    
}