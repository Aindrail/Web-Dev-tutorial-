let character = [
    {
        name : 'Dharmesh',
        height : 168,
        mass : 68,
        eye_color : 'grey',
        gender : 'male'
    },{
        name : 'Jay',
        height : 198,
        mass : 88,
        eye_color : 'light-grey',
        gender : 'male'
    },{
        name : 'pragati',
        height : 162,
        mass : 58,
        eye_color : 'grey',
        gender : 'female'
    },{
        name : 'Aakash',
        height : 168,
        mass : 68,
        eye_color : 'black',
        gender : 'male'
    },{
        name : 'Yagnesh',
        height : 188,
        mass : 60,
        eye_color : 'blue',
        gender : 'male'
    }
]

 //Get an array of all names
 const names = character.map(ch =>{
return ch.name
 })
 console.log(names);
 //Get an array of objects with just name and height properties
 const propOfCh = character.map(ch =>{
     return {
         name: ch.name,
         height: ch.height
     }
 })
 console.log(propOfCh);
 //Get the total height of all characters
 const sum = character.reduce( (prevHeigth,character) =>{
  return prevHeigth + Number(character.height);
 },0
 );
 console.log(sum);

 //Get characters with mass greater then 100
const gr_100 = character.filter(character =>character.mass > 60);
console.log(gr_100);

 //Get all male characters
 const male_only = character.filter(character =>character.gender=='male')
 console.log(male_only);
 //Sort by genders
 const sort_by_gend = character.sort()
 console.log(sort_by_gend);
 //Sort by names