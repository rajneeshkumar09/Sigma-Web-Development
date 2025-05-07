document.body.style.backgroundColor = "#28b117";

// Create a main solution div container
let div_element = document.createElement("div");
div_element.setAttribute("class", "solution");
document.querySelector("body").append(div_element);

/* Create a heading in the solution div container*/
// let heading = document.createElement("h2");
// document.querySelector(".solution").prepend(heading);
// heading.innerHTML = "Solution of Hacking Simulation";

// Create a content div in the solution div container
let div = document.createElement("div");
div.setAttribute("class", "content");
document.querySelector(".solution").append(div);

/* Create paragraphs in the content div container */
const paragraphs = async (item) => { 
    await randomDelay();
    let para = document.createElement("p");
    para.innerHTML = item;
    // para.setAttribute("class", "para");
    document.querySelector(".content").append(para);
    para.style.color = "#000"
}

/* Create random delay function */
const randomDelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 6 * Math.random()
        setTimeout(() => {
            resolve()
        }, timeout * 1000);
    })
}

async function main() {
        setInterval(() => {
        var wait = document.bosy.getElementsByTagName("p");
        wait = wait[wait.length - 1]
        if (wait.innerHTML.length > 3)
        // if (wait.innerHTML.endsWith("..."))
            wait.innerHTML += ".";    
        else
        // wait.innerHTML += "";
        wait.innerHTML = wait.innerHTML.slice(0, wait.innerHTML.length-3);
    }, 300);

    let text = [">>> Initializaing Hacking ",
        ">>> Reading your files ",
        ">>> Password files Detected ",
        ">>> Sending all passwords and personal files to server ",
        ">>> Cleaning up "]

    for (const item of text) {
        await paragraphs(item);
    }

    await randomDelay()
    clearInterval(timeout)
}

main()
