function getRandomAdjective() {
    let adjectives = "Crazy Amazing Fire";
    const adj = adjectives.split(" ");
    return adj[Math.floor(Math.random() * adj.length)];
}

function getRandomshop() {
    let shop_type = "Engine Food Garments";
    const shop = shop_type.split(" ");
    return shop[Math.floor(Math.random() * shop.length)];
}

function getRandomword() {
    let another_word = "Bros limited Hub";
    const word = another_word.split(" ");
    return word[Math.floor(Math.random() * word.length)];
}

function generateBusinessName() {
    const adjective = getRandomAdjective();
    const shop = getRandomshop();
    const end = getRandomword();
    return `${adjective} ${shop} ${end}`;
}

console.log(generateBusinessName());

// console.log(randomadj);
// console.log(randomshop);
// console.log(randomword);

// console.log(adjectives)
// console.log(adjectives.split(" ")[0])
// console.log(adjectives.split(" ")[1])
// console.log(adjectives.split(" ")[2])

// console.log(shop_type)
// console.log(shop_type.split(" ")[0])
// console.log(shop_type.split(" ")[1])
// console.log(shop_type.split(" ")[2])

// console.log(another_word)
// console.log(another_word.split(" ")[0])
// console.log(another_word.split(" ")[1])
// console.log(another_word.split(" ")[2])