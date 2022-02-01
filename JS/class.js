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
};
let chair = new Prod1('Chair',499,15,'C10');
