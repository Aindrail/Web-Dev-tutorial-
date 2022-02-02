class Prod {
    constructor(name,price,discount,code){
        this.name = name;
        this.price = price;
        this.discount = discount;
        this.code = code;

    }
}
let pencil = new Prod('Pencil',15,1,'P02');

const Prod1 = class {
    constructor(name,price,discount,code){
        this.name = name;
        this.price = price;
        this.discount = discount;
        this.code = code;


        }
        get getDiscount(){
            return this.discount;
    }
    set setDiscount( dis){
   this.discount = dis;
    }
    disc(){
        return this.discount;
    }
};
let chair = new Prod1('Chair',499,15,'C10');
let table = new Prod1('Table',15000,20,'TT07');
let table2 = new Prod1('Table',1500,20,'TT07');
console.log(chair.getDiscount);
console.log(chair.disc());   // if we dont use get we have to use ()
