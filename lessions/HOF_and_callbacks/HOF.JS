// const callback = (n) => {
//   return n ** 2;
// };

// function cube(callback, n) {
//   return callback(n) * 2;
// }
// console.log(cube(callback, 2));

// settimeout

// setTimeout(() => {
//   console.log("times");
// }, 3000);

// setTimeout(
//   () => {
//     console.log(`Your name is ${na}`);
//   },
//   3000,
// );

// setInterval(() => {
//   console.log("hi");
// }, 1000);

// MAP FUCTION
// const names = ["Billa", "Elisha", "Ema"];
// let message = names.map((name) => {
//   console.log(`${name}, please we will be meeting this afternoon`);
// });

// filter function
// const names = ["Billa", "Elisha", "Ema", "Elizebeth"];
// const numbers = [1, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6];
// const Enames = names.filter((nam) => nam.includes("li"));
// let primeNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(Enames);
// console.log(primeNumbers);;
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);

// REDUCE FUNCTION
// const nu = [1, 2, 3, 4, 5];
// let sum = nu.reduce((acc, curr) => acc + curr, 0);
// let exp = nu.reduce((acc, curr) => acc ** curr, 2);
// let mult = nu.reduce((acc, curr) => acc * curr, 1);

// console.log(sum);
// console.log(exp);
// console.log(mult);

// find function
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected out

// Destructuring
const sci = [35, 69, "elisha"];
// to Destructure
let [e, age, name] = sci;
// console.log(e, age, name);
// if you want to skip any value then
const num = [1, 2, 3, 4, 5];
let [var1, , var3, , var5] = num;
// console.log(var1, var3, var5);
// to get some values and leave the rest
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let [num1, num2, ...remaining] = arr1;
// console.log(num1, num2);
// // console.log(remaining);
// const ob = {
//   name: "billa",
//   age: "45",
//   date: "ama",
// };
// console.table(num);
// console.table(ob);
