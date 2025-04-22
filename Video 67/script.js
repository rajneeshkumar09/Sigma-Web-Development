console.log("Hello World!")

// document.body
// document.body.childNodes
// document.body.childNodes[0]
// document.body.childNodes[1]
// document.body.childNodes[1].childNodes

let a = document.body.childNodes[1];

a.childNodes
a.firstChild
a.lastChild

a.firstElementChild
a.lastElementChild

a.lastElementChild.style.color = "red";
a.lastElementChild.style.backgroundColor = "aqua";

a.lastElementChild.parentElement

let b = document.body.firstElementChild;

b.childNodes
b.children
b.children[0]
b.children[1]
b.children[3]
b.children[3].nextSibling
b.children[3].nextElementSibling
b.children[3].previousSibling
b.children[3].previousElementSibling

let c = document.body.children;
c[1]
c[1].rows
c[1].nextElementSibling