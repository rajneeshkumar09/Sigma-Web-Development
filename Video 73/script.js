function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // Finish this function
    let cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card");
    document.querySelector(".container").prepend(cardDiv);


    let thumbDiv = document.createElement("div");
    thumbDiv.setAttribute("class", "thumbnail");
    document.querySelector(".card").prepend(thumbDiv);
    
    let thumbImage = document.createElement("div");
    thumbImage.setAttribute("class", "thumbnail-image");
    document.querySelector(".thumbnail").prepend(thumbImage);
    thumbDiv.innerHTML = `<img src="${thumbnail}" alt="Thumbnail Image">`;

    let time = document.createElement("div");
    time.setAttribute("class", "lecture-duration");
    document.querySelector(".thumbnail").append(time);
    time.innerHTML = `<p>${duration}</p>`;

    let infoDiv = document.createElement("div");
    infoDiv.setAttribute("class", "title-info");
    document.querySelector(".card").append(infoDiv);

    let titleDiv = document.createElement("div");
    titleDiv.setAttribute("class", "video-title");
    document.querySelector(".title-info").append(titleDiv);
    titleDiv.innerHTML = `<h5>${title}</h5>`;

    let dataDiv = document.createElement("div");
    dataDiv.setAttribute("class", "video-info");
    document.querySelector(".title-info").append(dataDiv);
    dataDiv.innerHTML = `<p>${cName} &bull; ${views} &bull; ${monthsOld}`;
}

createCard("Installing VS Code & How Websites Work | Sigma Web Development Course- Tutorial #1", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);

createCard("Your First HTML Website | Sigma Web Development Course- Tutorial #2", "CodeWithHarry", 860000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);

createCard("Basics Structure of an HTML Website | Sigma Web Development Course-Tutorial #03", "DeveloperDose", "1M", "1 year ago", "11:12", "https://i.ytimg.com/vi/BGeDBfCIqas/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAOpE-jqfC5twD183Onwd0gRQ7mJQ")

// createCard(prompt("Enter the Video Title : "), prompt("Enter Channel Name : "), Number(prompt("Enter video views : ")), prompt("Enter Day/Month/Year ago : "), prompt("Enter the video length in minutes/seconds/hours : "), prompt("Enter the URL of thumbnail : "))


// let cardDiv = document.createElement("div");
// cardDiv.setAttribute("class", "card")
// document.querySelector(".container").prepend(cardDiv)

// let thumbDiv = document.createElement("div");
// thumbDiv.setAttribute("class", "thumbnail")
// document.querySelector(".card").prepend(thumbDiv)

// let thumbImage = document.createElement("div");
// thumbImage.setAttribute("class", "thumbnail-image")
// document.querySelector(".thumbnail").prepend(thumbImage)

// let time = document.createElement("div");
// time.setAttribute("class", "lecture-duration")
// document.querySelector(".thumbnail").append(time)

// let infoDiv = document.createElement("div");
// infoDiv.setAttribute("class", "title-info")
// document.querySelector(".card").append(infoDiv)

// let titleDiv = document.createElement("div");
// titleDiv.setAttribute("class", "video-title")
// document.querySelector(".title-info").prepend(titleDiv)

// let dataDiv = document.createElement("div");
// dataDiv.setAttribute("class", "video-info")
// document.querySelector(".title-info").prepend(dataDiv)
// const title = infoDiv.innerHTML = `<h4>${prompt("Enter the title : ")}</h4>`
