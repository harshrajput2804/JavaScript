const mysym = Symbol("you are Symbol !!")

const myobj = {
    myname : "harsh",
    age : 22,
    [mysym] : "you are new symbol",
    roll : 101,
    course : "MCA",
    city : "Surat"
}

// console.log(myobj.myname);
// console.log(myobj["myname"]);
console.log(typeof myobj[mysym]);

myobj.greeting = function () {
    console.log(`Hello ! Harsh , your age is ${myobj.age}`);
}
console.log(myobj.greeting());