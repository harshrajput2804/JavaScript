// Immediately Invoked Function Expreesion (IIFE)

(function chai(){
    console.log("DB Connected");
})();

( () => {
    console.log("db two connected");
})();

( (name) => {
    console.log(`db two connected ${name}`);
})('Harsh')

