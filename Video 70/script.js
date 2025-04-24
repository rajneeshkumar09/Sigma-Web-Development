function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// getRandomColor()

let boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
    const textColor = getRandomColor();
    const bgColor = getRandomColor();

    box.style.color = textColor;
    box.style.backgroundColor = bgColor;
});