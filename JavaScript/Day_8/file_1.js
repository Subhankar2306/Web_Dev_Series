// Block Scope VS Function Scope 
function myApp(){
    if(true){
        let blockScoped = "I am block scoped";
        var functionScoped = "I am function scoped";
    }
    console.log(functionScoped); // This will work
    console.log(blockScoped); // This will throw an error
}
myApp();

// Explanation:
// In the above code, 'blockScoped' is declared using 'let', which means it is only accessible within the block it was defined in (the if statement).
// On the other hand, 'functionScoped' is declared using 'var', which means it is accessible anywhere within the function 'myApp'.  