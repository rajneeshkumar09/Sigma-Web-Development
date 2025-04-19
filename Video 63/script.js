// Javascript Array
// alert("Hello ")
let arr = [1, 2, 4, 5, 7];
// Index   0, 1, 2, 3, 4

// arr[0] = 556;
// console.log(arr, typeof arr)
// console.log(arr.length)
// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])

console.log(arr.toString())
console.log(arr.join(" and "))

console.log(arr.pop())
arr.push(100)
arr.push("Harry")
console.log(arr.push("ha"))     //return updated length of an array
console.log(arr)

console.log(arr.shift())
console.log(arr)
console.log(arr.unshift("Jack"))
console.log(arr)

delete arr[6]
console.log(arr)
// console.log(arr.length)
// console.log(arr[6])

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [9, 8, 7];

console.log(a1.concat(a2, a3))

console.log(a3.sort())

// let numbers = [1, 2, 3, 4, 5];
// // console.log(numbers.slice(1, 2))
// // console.log(numbers.splice(1, 3))
// console.log(numbers.splice(1, 3, 22, 333))
// console.log(numbers)

const num = [1, 2, 3, 4];
// a = num.slice(2)
a = num.slice(1, 3)
console.log(a)

console.log(num.reverse())