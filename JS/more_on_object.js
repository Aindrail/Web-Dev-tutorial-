const course ={
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
course.enroll()
console.log(course.title)

course.price = 999
console.log(course)