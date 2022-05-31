//parameters and args

function add(a = 0, b = 0) {
    return a + b
}
console.log(add(10, 10))
console.log(add())

//how initalize the function : literal syntax

const multiply = function (a = 0, b = 0) {
    return a * b;
}
console.log(multiply(10, 10))

//arrow functions
// const div = (a = 0, b = 0) => {
//     return a * b;
// }
const div = (a = 0, b = 0) => a * b
console.log(div(10, 10))