let a =300   // globle scop or globle variable 

if(true){
    let a=30      // local or local variable  
    const b =50   // local or local variable
    // console.log("inner" , a ,b);
}
// console.log(a);

function one(){
    const username = "harsh"

    function two(){
        const website = "youtube"
        console.log(username);
        console.log(website);  
    }
    two()
}
// one()

if(true){
    const username = "harsh"
    if(username == "harsh"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// =============

function addone(num){
    return num + 1
}
// console.log(addone(5))

const addtow = function(num){
    return num+2
}
console.log(addtow(8));