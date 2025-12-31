// learn function
function volume(r,h){            //r,h parametrs
    return Math.PI*Math.pow(r,2)*h;
}
let total= volume(7,2);
console.log(total.toFixed(2));
//arrow function
const multiple=function(n){
    return n*n 
}

console.log(multiple(5));

//arrow function short
const squre = (n)=> n*n;
console.log(squre(5));

function gret(name="kapi"){
    console.log("hello"+name);
}
gret();

//function in to function
function add(a,b){
    return a+b;
}
function displaysum(){
   let result = add(3,4);
   console.log(result);
}

displaysum();

//question work
function salary(salary1,salary2){

    return salary1+salary2
}
function incomesalary(){
    return salary/10;
}
function totalsalary(){
    let sal=salary(3000,5000);
    let inco= incomesalary();
    let total=sal+inco;
    console.log("My salary :"+ sal);
    console.log("My income:"+inco);
    console.log("My TOtal"+ total);
}
totalsalary();

//array classwork
// let numbers = [10, 20, 30, 40, 50];
// let first = numbers.at(0);
// let last = numbers.at(-1);
// console.log("first number:", first);
// console.log("Last number:", last);

// let numbers = [10, 20, 30, 40];
// numbers.push(50);
// numbers.unshift(0);

// console.log(numbers);

// let numbers = [10, 20, 30, 40, 50];
// numbers.pop();
// numbers.shift();
// console.log(numbers);

// let numbers = [10, 20, 30, 40, 50];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// let numbers = [10, 20, 30, 40, 50];

// numbers.forEach(function(num) {
//   console.log(num);
// });

// let numbers = [10, 25, 5, 40, 15];
// let max = Math.max(...numbers);
// let min = Math.min(...numbers);
// console.log("(Maximum):", max);
// console.log("(Minimum):", min);

// let numbers = [10, 20, 30, 36, 40, 50];

// if (numbers.includes(36)) {
//   console.log("36 in the array");
// } else {
//   console.log("36 array not exist");
// }

// let numbers = [10, 20, 30, 40, 50];
// let sum = numbers.reduce((total, num) => total + num, 0);
// console.log("Sum:", sum);

// let numbers = [40, 10, 50, 20, 30];
// numbers.sort((a, b) => a - b);
// console.log("Ascending order:", numbers);

// let numbers = [10, 20, 30, 40, 50];
// numbers.reverse();
// console.log("Reversed Array:", numbers);

// let numbers = [2, 5, 8, 1, 10, 4];
// let filteredNumbers = numbers.filter(num => num > 5);
// console.log("Filtered Numbers:", filteredNumbers);