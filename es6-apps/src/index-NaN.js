//numerical computation against undefined
let qty; //undefined
let price = 100;
let totalPrice = qty * price;
console.log(`Totatl Price is ${totalPrice}`)

//
// let isValid = true;
// totalPrice = isValid * price;
// console.log(`Totatl Price is ${totalPrice}`)

//during type conversion : String to number 

let x = "10"; //string type but value is number 
let y = 10;
let c = x * y; // string => convert number * number
console.log(`C ${c}`)

let d = parseFloat(x) * y;
console.log(`D ${d}`)

x = "$20";
c = x * y;
console.log(`C ${c}`)

d = parseFloat(x) * y;
console.log(`D ${d}`)