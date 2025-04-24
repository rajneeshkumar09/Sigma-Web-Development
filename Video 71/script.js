console.log(document.querySelector(".box"))

console.log(document.querySelector(".box").innerHTML)
console.log(document.querySelector(".box").innerText)

console.log(document.querySelector(".container").innerHTML)
console.log(document.querySelector(".container").innerText)

console.log(document.querySelector(".container").outerHTML)
console.log(document.querySelector(".container").tagName)
console.log(document.querySelector(".container").textContent)
console.log(document.querySelector(".container").nodeName)
console.log(document.querySelector(".container").hidden )
// document.querySelector(".box").hidden = true

console.log(document.querySelector(".box").innerHTML = "Hey I am Rajneesh")

console.log(document.querySelector(".box").hasAttribute("style"))
console.log(document.querySelector(".box").getAttribute("style"))
console.log(document.querySelector(".box").setAttribute("style", "font-size: 30px;"))
console.log(document.querySelector(".box").attributes)
console.log(document.querySelector(".box").removeAttribute("id"))
console.log(document.querySelector(".box").dataset)

// Insertion Methods

let div = document.createElement("div");
div.setAttribute("class", "created");
div.setAttribute("style", "font-size: 25px;");
// document.querySelector(".container").append(div);   //Add an element inside the container at the end
// document.querySelector(".container").prepend(div);   //Add an element inside the container at the start
// document.querySelector(".container").before(div);   //Add an element before a container(outside the container at the top)
document.querySelector(".container").after(div);   //Add an element after a container(outside the container at the bottom)
div.innerHTML = "I have been inserted by <b>Rajneesh</b> using append method. This element insert at the end .";

// insertAsjacentHTML/Text/Element

let cont = document.querySelector(".container");
// cont.insertAdjacentHTML("afterbegin", "<b>I am under the water. Please help me here too much raining... iuuuuoooo</b>")   //Add an element inside the container box at the start
// cont.insertAdjacentHTML("beforeend", "<b>I am under the water. Please help me here too much raining... iuuuuoooo</b>")   //Add an element inside the container box at the end
// cont.insertAdjacentHTML("beforebegin", "<b>I am under the water. Please help me here too much raining... iuuuuoooo</b>")   //Add an element before a container(outside the container at the top)
cont.insertAdjacentHTML("afterend", "<b>I am under the water. Please help me here too much raining... iuuuuoooo</b>")   //Add an element after a container box

cont.insertAdjacentText("beforebegin", "This is the insertAdjacentText method.")
// cont.insertAdjacentElement("afterend", "<h2>This is the insertAdjacentElement method</h2>")

// console.log(document.querySelector(".box").remove())

console.log(document.querySelector(".container").classList)
console.log(document.querySelector(".container").className)

console.log(document.querySelector(".container").classList.add("harry"))
console.log(document.querySelector(".container").classList.remove("harry"))
console.log(document.querySelector(".container").classList.toggle("red"))
console.log(document.querySelector(".container").classList.toggle("red"))