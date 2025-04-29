let button = document.getElementById("btn");

// List of all mouse events
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
// button.addEventListener("click", ()=>{
//     // alert("I was clicked. Ypyy!");
//     document.querySelector(".box").innerHTML = "<b>Yayy You are clicked,</b> Enjoy your click!";
// });

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b>Yayy You are clicked,</b> Enjoy your click!";
});

button.addEventListener("contextmenu", ()=>{
    alert("Don't hack us by Right Click Please");
});

document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode);
});