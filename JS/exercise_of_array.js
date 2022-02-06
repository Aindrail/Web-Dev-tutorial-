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
 //Get characters with mass greater then 100
 //Get all male characters
 //Sort by genders
 //Sort by names