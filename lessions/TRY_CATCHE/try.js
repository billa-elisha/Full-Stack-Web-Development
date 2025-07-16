// function sum(x, y) {
//   return x + y;
// }

// let variables = [2, 7];
// console.log(...variables); //this divids the data into individual units

// // performing Spread
// console.log(sum(...variables)); // this spreads the variables and give x = 2 and y=7

// REST OPERATOR
// function sum1(...args) {
//   //because we dont know how many values the user will porvide we use rest ...args
//   console.log(args);
//   sum_ = 0;
//   for (const x of args) {
//     sum_ += x;
//   }
//   return sum_;
// }
// console.log(sum1(2, 4, 5));
// console.log(sum1(2, 4, 5, 6, 7, 8, 5));

// event loop
// const userone = () => {
//   console.log("user one");
// };
// const usertwo = () => {
//   setTimeout(() => {
//     console.log("i am waiting");
//   }, 3000);
//   console.log("user two");
// };
// const userthree = () => {
//   console.log("user three");
// };

// userone();
// usertwo();
// userthree();

// PROMISE
const one = () => {
  return "log in page";
};
const two = () => {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve("correct credentials");
    }, 3000);
  });
};
const three = () => {
  return "home page";
};

const callback = async () => {
  valone = one();
  console.log(valone);

  valtwo = await two();
  console.log(valtwo);

  valthree = three();
  console.log(valthree);
};

callback();
