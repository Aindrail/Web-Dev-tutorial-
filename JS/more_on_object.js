// const course ={
//     lecture: 18,
//     section: 3,
//     title: "JavaScript",
//     notes:{
// introduction: "Welcome to JS course"
//     },
//     enroll(){
//         console.log('You are enrolled succesfully');
//     }
// }
// course.enroll()
// console.log(course.title)
// course.price = 999
// console.log(course)

//Factory function
function createC(){
    return{
    lecture: 18,
    section: 3,
    title: "JavaScript",
    notes:{
introduction: "Welcome to JS course"
    },
    enroll(){
        console.log('You are enrolled succesfully');
    }
}
// return course;
}
const course = createC();
course.enroll();

function createC2(title){
    return{
    
    title: "title",
    enroll(){
        console.log('You are enrolled succesfully');
    }
}
// return course;
}
const course2 = createC2('Java Script');
course2.enroll();

//Constructor fun

function Course3(title){
    this.title = title,
    this.enroll = function(){
        console.log("You are great");
    }
}
const course3 = new Course3('Javascript');
course3.enroll()