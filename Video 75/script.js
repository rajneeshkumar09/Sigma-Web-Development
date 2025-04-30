console.log("Harry is a Hacker");
console.log("Rohan is a Hecker");

setTimeout(() => {
    console.log("I am inside settimeout");
}, 0);

setTimeout(() => {
    console.log("I am inside settimeout 2");
}, 0);

console.log("The END");

const fn = () => { 
    console.log('Nothing');
    
}

const callback = (arg, fn) => {
    console.log(arg);
    fn();
}

const loadScript = (src, cback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = cback("Rajneesh", fn)
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)