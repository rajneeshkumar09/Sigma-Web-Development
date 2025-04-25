console.log("Script.js Initializing")

/* Access the elements using DOM */

// let boxes = document.getElementsByClassName("box");
let boxes = document.querySelector(".container").children

/* Random Color generating using rgb value but we also generate using hex code */

function getRandomColor(){
    /* Math.floor(x) : Rounds x up to nearest integer less than or equal to x.
    Math.ceil(x) : Rounds x up to nearest integer greater than or equal to x. */

    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    // let val = Math.ceil(min + Math.random() * (max - min));
    let val3 = Math.ceil(0 + Math.random() * 255);

    /* max = 255;
    min = 0;
    let val3 = Math.ceil(Math.random() * (max - min + 1) + min); */

    return `rgb(${val1}, ${val2}, ${val3})`
}

Array.from(boxes).forEach(e => {
    console.log(e)
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
})