for (let i = 1; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("i am 5");
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        // console.log(i + '*' + j + '=' + i*j);
    }
}


// =====  for of loop =========
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
   // console.log(num);
}

const greetings = "hello world"
for (const greet of greetings) {
    //console.log(`each char is ${greet}`);    
}

// Map

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

for (const [key,value] of map) {
    //console.log(key, ':-', value);
}

// object using for-in
const myobj = {
    js: 'JavaScript',
    cpp: 'C++',
    py : 'Python',
    rb: 'ruby'
}

for (const key in myobj) {
   
    //console.log(myobj[key]);
    // console.log(`${key} shortcut is of ${myobj[key]}`);
}


//=========== for-each loop ====

const coding =["js","ruby","java","python"]

coding.forEach(function (item){
    // console.log(item);
})

const mycode =[
    {
        languagename: "Java",
        languagefile: "java"
    },
    {
        languagename: "python",
        languagefile: "py"
    },
    {
        languagename: "JavaScript",
        languagefile: "js"
    }
]

mycode.forEach((item) => {
    // console.log(item.languagefile);
})

// ============= filter ==========

const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newnum = mynum.filter((num) =>{
//     return num>4
// } )

// chaining
const newnum = mynum
                    .map((num) => num * 10)
                    .map((num) => num + 1)
                    .filter((num) => num > 40)
// console.log(newnum);


// ======== reduce()

const mynum2 = [1,2,3]

const total = mynum2.reduce((acc, currval) => acc + currval, 0)

console.log(total);