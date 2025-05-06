/* First Approch */

// function getData() { 
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455);
//         }, 3500);
//     });
// }

// console.log('Loding Module');
// console.log('Do something else');
// console.log('load data');

// let data = getData();
// data.then((v) => {
//     console.log('data', data);
//     console.log('Process data');
//     console.log('task 2');
// });


/* Second Approch */

// async function getData() { 
//     // Simulate getting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455);
//         }, 3500);
//     });
// }

// async function getData() {
//     // Simulate getting data from a server
//     let a = fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(json => console.log(json))
// }

    /* 
        settel means resolve or reject
        resolve means promise has settled successfully
        reject means promise has not settled successfully
    */

/*
async function getData() {
// async function getData(url) {
        /* Simulate getting data from a server*
    let a = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    // let a = await fetch(url);

    /*convert in async method(comment)*
    let data = await a.json();
    // let data = await a.text();
    // console.log(data);
    return data;
    // return '403 : Access denied';
}
*/

async function getData() {
    // let a = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let a = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data = await a.json();
    return data;
}

async function main() {
    console.log('Loding Module');
    console.log('Do something else');
    console.log('load data');

    let data = await getData();
    // let data = await getData("https://jsonplaceholder.typicode.com/todos/1");
    // let data2 = await getData("https://dummyjson.com/products/1");

    console.log('data |', data)
    // console.log('data 2 |', data2)
    console.log('Process data');
    console.log('task 2');
}

main()