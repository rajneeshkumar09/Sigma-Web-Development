console.log('This is Promises');

let promOne = new Promise((resolve, reject) => {
    let a = Math.random();
    console.log(a);
    
    if (a<0.5) {
        reject("No random number was not supporting promise 1");
    }
    else {
        setTimeout(() => {
            console.log('Yes I am done Promise 1');
            resolve("Rajneesh");
        }, 3000);
    }
});

let promSecond = new Promise((resolve, reject) => {
    let a = Math.random();
    console.log(a);
    
    if (a<0.5) {
        reject("No random number was not supporting Promise 2");
    }
    else {
        setTimeout(() => {
            console.log('Yes I am done Promise 2');
            resolve("Aman");
        }, 1000);
    }
});

let promThird = new Promise((resolve, reject) => {
    let a = Math.random();
    console.log(a);
    
    if (a<0.5) {
        reject("No random number was not supporting Promise 3");
    }
    else {
        setTimeout(() => {
            console.log('Yes I am done Promise 3');
            resolve("Rohit");
        }, 2000);
    }
});

let promFourth = new Promise((resolve, reject) => {
    let a = Math.random();
    console.log(a);
    
    if (a<0.5) {
        reject("No random number was not supporting Promise 4");
    }
    else {
        setTimeout(() => {
            console.log('Yes I am done Promise 4');
            resolve("Kush");
        }, 4000);
    }
});

// let arr = Promise.all([promOne, promSecond, promThird, promFourth]);
// arr.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// });

let arr1 = Promise.allSettled([promOne, promSecond, promThird, promFourth]);
arr1.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
});

// let arr2 = Promise.race([promOne, promSecond, promThird, promFourth]);
// arr2.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// });

// let arr3 = Promise.any([promOne, promSecond, promThird, promFourth]);
// arr3.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// });