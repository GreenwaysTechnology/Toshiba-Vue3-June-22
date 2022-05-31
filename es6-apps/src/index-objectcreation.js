//object creations : constructor patterns and literal pattern

//constructors -  functions 

function Employee(id = 0, name = '', city = '') {
    //instance variables
    this.id = id //1;
    this.name = name// 'Subramanian'
    this.city = city //'Coimbatore'
    //methods
    this.calculate = function () {
        return 1000
    }
}
//create object 
let emp = new Employee(1, 'Subramanian', 'Coimbatore');
console.log(emp.id, emp.name, emp.city, emp.calculate())

class Customer {
    //instance variables
    constructor(id, name, city) {
        this.id = id //1;
        this.name = name// 'Subramanian'
        this.city = city //'Coimbatore'
    }
    //methods
    calculate() {
        return 1000
    }
}
let cust = new Customer(1, 'Subramanian', 'Coimbatore');
console.log(cust.id, cust.name, cust.city, cust.calculate())
