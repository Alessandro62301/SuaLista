export default class Item {
    name  = String;
    price  = Float32Array;
    quantity = Int16Array;
    status = Boolean;

    constructor(name) {
        this.name = name;
        this.price = 0;
        this.quantity = 1;
        this.status = false;
      }
    
}