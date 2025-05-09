let a = prompt("Enter first number : ");
let b = prompt("Enter second number :");

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is now allowed")
}
let sum = parseInt(a) + parseInt(b);

// let x=1;
// try {
//     // setTimeout(()=>{        // In SetTimeout function, catch block doesn't catch an error and show the actual error in the console
//     //     console.log('The sum is ', sum*x);
//     // }, 400);
//     console.log('The sum is ', sum*x);
// } catch (error) {
//     console.log('ERROR aa gya bhau');
//     alert(error.name)       // Provide the error name 
//     alert(error.message)    // Provide the message of error
//     alert(error.stack)      //Provide the address of error with name and message
// }


/* Use of finally block in block to run after the return function */
const main = () => { 
    let x=1;
    try {
        console.log('The sum is ', sum*x);
        return true;
    } catch (error) {
        console.log('ERROR aa gya bhau');
        return false;     
    }
    finally{
        console.log('Files are being closed and db connection is being closed');
    }
}

let c = main();