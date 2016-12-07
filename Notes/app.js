// Variable
let balance = 100; //represent a concept
balance = balance - 10; //number
balance = balance - 10;

console.log(balance);

let user = "Oliver"; //string
// let job = "construction worker"
// let employed = true; //boolean
let job = null; //null is a type! Kind of a non-type

console.log(user + " is a " + job);

//Conditional: do this IF something is true
// =   assignment (set something equal to)
// === are these values equal?
// !== are these values not equal?

if (job === null) {
    console.log(user + " is a " + job);
} else { //if it's NOT true (false)
    console.log(user + " needs a job. You hiring? ");
}

//Arrays: lists of things
//Square brackets:
let prices = [1.17, 91.01, 14.51];
// console.log(prices);


let sum = 0;
// for (<start>; <run-as-long-as>; <each-time>)
// "starting at zero, run as long as i < 5 increasing i by one each time"
for (let i = 0; i < prices.length; i++) { // i++ is the same as i plus one
    // console.log(i);
    sum = sum + prices[i];
}

console.log(sum); // 0 is an "index"
