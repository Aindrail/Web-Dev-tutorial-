//   function cookBiriyani(serves,meat,packing){
//       console.log("Your biriyani will be ready in " +serves*5 +" mins with "+ meat +" pieces of meat in "+packing +" packs" )
//   }

//   cookBiriyani(2,4,1);

  //return type function

   let bread1= prompt("Which bread do you want :-");
   let veggies1 = prompt("Select veggies :- ");
   let sauce1 = prompt("Sauce of your choice :-");

   function makeSandwich(bread,veggies,sauce){
       let sandwich = bread + " bread " + veggies + " " + sauce +" sandwich ";
       return sandwich;
   }

   let vegSandwich = makeSandwich(bread1 , veggies1 , sauce1);
   console.log(vegSandwich);