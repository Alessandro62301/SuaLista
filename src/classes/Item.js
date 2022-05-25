export default class Item {
    name  = String;
    price  = Float32Array;
    quantity = Int16Array;
    status = Boolean;
    id = Float32Array;
    constructor(name , price) {
        this.name = name;
        this.price = price;
        this.quantity = 1;
        this.status = false;
        this.id = Math.round(Math.random() * 1000 * Math.random() * 100);
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