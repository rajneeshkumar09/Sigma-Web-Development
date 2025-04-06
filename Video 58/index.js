function nice(name) {
    console.log("Hey " + name + " You are nice!")
    console.log("Hey " + name + " You are good!")
    console.log("Hey " + name + " Your tshirt is  nice!")
    console.log("Hey " + name + " your course is good to")
}

// nice("harry")
nice("Rohan")
// nice("Abhishek")

function sum(a, b, c=3) {
    // console.log(a + b)
    return a + b + c
}

// sum(3, 5)
result1 = sum(3, 5)
result2 = sum(7, 5, 9)
result3 = sum(3, 12)

console.log("The sum of these numbers is : ", result1)
console.log("The sum of these numbers is : ", result2)
console.log("The sum of these numbers is : ", result3)

const func1 = (x) => {
    console.log("I am an arrow function", x)
}

func1(34)
func1(66)
func1(84)