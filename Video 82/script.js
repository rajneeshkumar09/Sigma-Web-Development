async function sleep() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(45);
        });
    }, 1000);
}

function sum(a,b,c) { 
    return a+b+c;
}

/* IIFE : Immediately Invoke Function Expression */

(async function main() {
    console.log(k);     /* k is Always host at the top of the block | let and const doesn't provide hoisting | Only var provides hoisting, with var undefined is printed */

    let a = await sleep();
    console.log(a);
    let b = await sleep();
    console.log(b);

    /* Destructuring */

    let [c,d] = [1,5,7];
    console.log(c,d);

    let [x,y, ...rest] = [1,5,7,8,9,10];
    console.log(x,y, rest);

    let obj = {
        u:11,
        v:22,
        w:33
    };
    let {u,w} = obj;
    console.log(u,w);

    let arr = [9,4,6];
    console.log(arr[0] + arr[1] + arr[2]);
    console.log(sum(arr[0], arr[1], arr[2]));
    console.log(sum(...arr));

    var k = 27;     // let and const variable
    // console.log(k);
})();
