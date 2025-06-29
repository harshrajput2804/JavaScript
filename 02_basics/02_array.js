const marvel =["spiderman","ironman","thor"]
const dc = ["superman","flas","batman"]

// marvel.push(dc)
// console.log(marvel[3]);

// const newhero = marvel.concat(dc)
// console.log(newhero);

const newhero = [...marvel,...dc]
console.log(newhero);

console.log(Array.from("harsh"))

const myname = "harsh"
const age= 22
const city = "surat"
console.log(Array.of(myname,age,city))