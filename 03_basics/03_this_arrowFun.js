const user = {
    username : "Harsh",
    age : 22,

    welcomeuser : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
    
}
// user.welcomeuser()
// user.username = "shiv"
// user.welcomeuser()
// console.log(this);

function demo(){
    let username = "Harsh"
    console.log(this.username);
}
// demo()

const chai = () => {
    let username= "harsh"
    console.log(this);
}
// chai()

// const addtwo = (num1, num2) => num1 + num2

const addtwo = (num1, num2) => (num1 + num2)

console.log(addtwo(3, 4));