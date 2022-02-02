//Arrays
let arr = ["Hello","Hi","Kemcho","Namaste","Nomoskar"]
console.log(arr[3])
console.log(arr.length)

const array = [1,2,3,4,5,6,7,8,9]; 
console.log(array);

//push
array.push(11); //pushes 11 in last and returns the new size of the array
console.log(array.push(12 ));  

//unshift
array.unshift(0); // adds at stating and return new length
console.log(array.unshift(-1));

//pop
console.log(array.pop()); //return last element

//shift
console.log(array.shift()); // return first element

//dynamic array value
arr[0]= 1; //stores and deletes the curr and prev index elemnt resp
arr[1]= {array:80}
console.log(arr); 

const names  = ['Aindrail','Preeti','Gaurav','Anindita','Mrutunjay','Hand']
//return the first index of the value and return -1 if not found
console.log(names.indexOf('Preeti'));
//to solve the first index bug use
console.log(names.indexOf('Preeti',2)); //return the first occurence after and including 1(ie i)
console.log(names);

//return the last index of the key
console.log(names.lastIndexOf('Mrutunjay'));

//check if present or not
console.log(names.includes('Hitesh'));

 //array of objects
 let players = [
     {
         name: 'Nadal',
         GS: 21

     }
     ,{
         name:'Djockovic',
         GS: 20
     },{
         name:'Fedder',
         GS: 20
     }
 ];
 console.log(players.find(function(ele){
     return ele.GS ===21
 }))
  //fun in another way
  console.log(players.find(ply => ply.name ==='Fedder'))

  //concat 
  let names1 =['Hero','Raja','Leo']
  let names2 =['Pope','Ronaldo','Messi']
let names3 = names1.concat(names2);
  console.log(names3);
  //slice method
  console.log(names3.slice(3,5));
  //spread operator
  let name4 = [...names1,...names3];
  console.log(name4);

  //For loop
  for( let i=0; i<names.length; i++){
      console.log(names[i]);
  }

  //For of
  for(let name of names3){
      console.log(name)
  }

  // for each
  names.forEach(function(name1,index1){
console.log(name1,index1);
  })

  // JOIN
  let student = ['S','h','i','v','a'];
 console.log( student.join('')); //prints without commas
 console.log( student.join()); //prints with commma
 console.log( student.join('_'));//use seperator _

 //Spilt
 console.log(student.toString().split('-'));

 let cities =[
     {name: 'Mumbai', poplation: 3333333},
     {name: 'Delhi', poplation: 3333433},
     {name: 'Chennai', poplation: 33123333},
     {name: 'Kolkata', poplation: 3678333},
     {name: 'Banglore', poplation: 24343333}

 ];

 //filter
console.log(cities.filter((city => city.poplation >30000000 )));
console.log(cities.map((city => city.poplation * 2 )));