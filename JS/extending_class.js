class Product{
    constructor(itemName){
        this.itemName = itemName;
    }
    getItemName(){
        return this.itemName + " is a Product";
    }
}
class Furniture extends Product{
    constructor(itemName){
        super(itemName); //calls the constructer of the parents class
    }
    getItemName(){
        return this.itemName + " is a furniture"
    }
} 

let pencil = new Product('Pencil');
let chair = new Product('Chair');
console.log(pencil.getItemName());
console.log(chair.getItemName());