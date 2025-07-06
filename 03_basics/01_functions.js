function MyFun(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
}

//MyFun()    // this is execution of function
//MyFun      // this is referance of function

function addTwoNumbers(num1, num2){
    // console.log(num1 + num2)
    return num1 + num2
}

const result = addTwoNumbers(3,5)
// console.log(result);

function loginuser(username){
    if(!username){
        console.log("Please Enter a Username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginuser())

function calculateCartPrice(...num1){ // "..." it is also known as rest oprator and spred operator
    return num1
}

console.log(calculateCartPrice(200, 300, 400));