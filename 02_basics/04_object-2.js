// approch : 1
// const tinderuser = new Object()

// approch : 2
const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "tind"
tinderuser.isLoggedin = false

// console.log(tinderuser);

const user = {
    email: "user@gmail.com",
    fullname : {
        username : {
            firstname : "Harsh",
            lastname : "Rajput"
        }
    }
}
// console.log(user.fullname.username.firstname);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}

// const obj3={obj1,obj2} // trick:1 to combine objects
// const obj3 = Object.assign({},obj1,obj2)   // trick:2 to combine objects
const obj3 = {...obj1,...obj2}  // trick:3 to combine objects

// console.log(obj3);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty('isLoggedin'));

// ==================>>>

const course = {
    coursename : "JavaScript",
    price : 999,
    courseDeliverBy : "Hitesh" 
}

// console.log(course.courseDeliverBy)

const {courseDeliverBy : DeliverBy} = course  //destructuring
console.log(DeliverBy);

