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

