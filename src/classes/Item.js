export default class Item {
    name  = String;
    price  = Float32Array;
    quantity = Int16Array;
    status = Boolean;

    constructor(name , price , quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.status = false;
      }
      
      addQuantity(){
        this.quantity++;
      }
      removeQuantity(){
        if(this.quantity - 1 > 0){
          this.quantity  = this.quantity - 1;
        }
      }      
      setStatus(){
        this.status = !this.status;
      }
}