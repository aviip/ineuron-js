// setTimeout(function () {
//   console.log(`Hello`);
// }, 2000);

// setTimeout(function () {
//   print();
// }, 2000);

// const print = () => {
//   console.log(`Hello`);
// };

// let count = 0;
// const interval = setInterval(function () {
//   console.log("hello", count);
//   count++;
//   if (count === 10) {
//     clearInterval(interval);
//   }
// }, 1000);

// let count = 1;

// const tenSecs = setInterval(() => {
//   console.log(`hello`, count);
//   count++;

//   if (count === 11) {
//     clearInterval(tenSecs);
//   }
// }, 1000);

// for (let i = 1; i <= 10; i++) {
//   setTimeout(function () {
//     console.log("hello");
//   }, 1000 * i);
// }

// ==========================

// function add(a, b) {
//   return sum(a, b);
// }

// function sum(num1, num2) {
//   return num1 + num2;
// }

// const res = add(6, 5);
// console.log("🚀 ~ res:", res);

// ==========================

// function add(a, b, handle) {
//   handle(a + b);
// }

// function print(res) {
//   console.log(res);
// }

// add(4, 5, print);

// ==========================

function outer() {
  console.log("outer");

  return function () {
    console.log("inner");
  };
}

// const result = outer();
// result();

outer()();
