function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // Finish this function
    // Create a element with class name card into container class
    let cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card");
    document.querySelector(".container").prepend(cardDiv);

    // Create a element with class name thumbnail into card class
    let thumbDiv = document.createElement("div");
    thumbDiv.setAttribute("class", "thumbnail");
    document.querySelector(".card").prepend(thumbDiv);

    // Create a element with class name thumbnail-image into thumbnail class
    let thumbImage = document.createElement("div");
    thumbImage.setAttribute("class", "thumbnail-image");
    document.querySelector(".thumbnail").prepend(thumbImage);
    thumbImage.innerHTML = `<img src="${thumbnail}" alt="Thumbnail Image">`;

    // Create a element with class name lecture-duration into thumbnail class
    let time = document.createElement("div");
    time.setAttribute("class", "lecture-duration");
    document.querySelector(".thumbnail").append(time);
    time.innerHTML = `<p>${duration}</p>`;

    // Create a element with class name title-info into card class
    let infoDiv = document.createElement("div");
    infoDiv.setAttribute("class", "title-info");
    document.querySelector(".card").append(infoDiv);

    // Create a element with class name video-title into title-info class
    let titleDiv = document.createElement("div");
    titleDiv.setAttribute("class", "video-title");
    document.querySelector(".title-info").prepend(titleDiv);
    titleDiv.innerHTML = `<h5>${title}</h5>`;

    // Views conversion into K's & M's
    if (views>=0 && views<1000) {
        if (views===0 || views===1){
            result = `${views} view`;
        }
        else {
            result = `${views} views`;
        }
    }
    else if (views>=1000 && views<1000000) {
        views /= 1000;
        result = `${views}K views`;
    }
    else {
        views /= 1000000;
        result = `${views}M views`;
    }

    // months to year conversion
    if (monthsOld >=0 && monthsOld<12) {
        if (monthsOld===0 || monthsOld===1) {
            totalMonths = `${monthsOld} month`;
        }
        else {
            totalMonths = `${monthsOld} months`;
        }
        }
    else {
        monthsOld /=12
        // let years = Math.max(monthsOld).toFixed(1);
        let years = Math.fround(monthsOld).toFixed(1);
        totalMonths = `${years} years`
    }

    // Create a element with class name vedio-info into title-info class
    let dataDiv = document.createElement("div");
    dataDiv.setAttribute("class", "video-info");
    document.querySelector(".title-info").append(dataDiv);
    dataDiv.innerHTML = `<p>${cName} &bull; ${result} &bull; ${totalMonths}`;
}

createCard("Installing VS Code & How Websites Work | Sigma Web Development Course- Tutorial #01", "CodeWithHarry", 4400000, 14, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");

createCard("Your First HTML Website | Sigma Web Development Course- Tutorial #02", "CodeWithHarry", 727000, 12, "28:31", "https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCJ1LoyqdZFLpT7I8d4ATCDAg7rrw");

createCard("Basics Structure of an HTML Website | Sigma Web Development Course-Tutorial #03", "CodeWithHarry", 1000000, 9, "11:12", "https://i.ytimg.com/vi/BGeDBfCIqas/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAOpE-jqfC5twD183Onwd0gRQ7mJQ")

createCard(prompt("Enter the Video Title : "), prompt("Enter Channel Name : "), Number(prompt("Enter video views : ")), Number(prompt("Enter months ago : ")), prompt("Enter the video length in hours:minutes:seconds : "), prompt("Enter the URL of thumbnail : "))