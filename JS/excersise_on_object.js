//itemName
//price
//discount
//itemCode

const prod = {
    itemName: "Flower",
    price: 50,
    discount:15,
    itemCode: 'F40'
}
//factory fun
function createProd(name, price , discount, itemCode){
    return{
        itemName: name,
    price: price,
    discount:discount,
    itemCode: itemCode
    }
}

const football = createProd('football',400,10,'F30');

//constructer fun
function Prod(name,price,discount,itemCode){
    this.itemName = name;
    this.price = price;
    this.discount = discount;
    this.itemCode = itemCode
    this.discountVal = function(){
        return price * discount/100;
    }
}

const mobile = new Prod('Iqoo 7 legend',40000,10,'IQ01')
console.log(mobile.discountVal());