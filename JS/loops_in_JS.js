for(let i=0 ; i<100 ; i+=5 )
console.log("My Name is Aindrail " + i)

for(let i=0 ; i<100 ; i+=5 )
if(i%2==0)
console.log( i )

//while loops
let i=1;
while(i<100){
console.log( i )
    i*=2;
}
 
//do while
let j=10;
do{
console.log("Hello Bro!")
}
while(i<10);

// for...In
//objects
let animal = {
    name : "Zebra",
    leg :4

};
for( let key in animal){
    console.log(key);
    console.log(key,animal[key]);

}
//arrays
let names = ["Rahul","Neha", "Preeti","Aman"];
for(let index in names){
    console.log(index, names[index]);
}

//for...of
for(let name of names){
    console.log(name);
}
