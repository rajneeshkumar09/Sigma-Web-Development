console.log("Rajneesh")

// let boxes = document.getElementsByClassName("box")

// console.log(boxes)

// boxes[2].style.backgroundColor = "coral";

// document.getElementById("redbox").style.backgroundColor = "red";

// document.querySelector(".box").style.backgroundColor = "green";
// document.querySelector(".box").style.color = "white";

console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e => {
    // console.log(e)
    e.style.backgroundColor = "yellowgreen";
});
// document.querySelectorAll(".box").style.color = "white";

console.log(document.getElementsByTagName("div"));

// console.log(document.getElementsByName("redbox"))

e = document.getElementsByTagName("div");
e[4].matches("#redbox")
e[3].matches("#redbox")
e[3].closest("#redbox")
e[3].closest(".container")
e[3].closest("html")

document.querySelector(".container").contains(e[2])
document.querySelector(".container").contains(e[0])

document.querySelector(".container").contains(document.querySelector("body"))
document.querySelector("body").contains(document.querySelector(".container"))