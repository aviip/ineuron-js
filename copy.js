// const a = [10, 20, 30];

// const b = [...a];

// b.push(12);
// console.log("🚀 ~ file: copy.js:4 ~ a:", a);
// console.log("🚀 ~ file: copy.js:4 ~ b:", b);

// ---------------------

// const originalArray = [1, 2, 3];
// const shallowCopy = [...originalArray];

// console.log(originalArray); // [1, 2, 3]
// console.log(shallowCopy); // [1, 2, 3]

// // Modifying the original array
// originalArray.push(4);

// console.log(originalArray); // [1, 2, 3, 4]
// console.log(shallowCopy); // [1, 2, 3] (shallow copy remains unchanged)

// ---------------------

const originalArray = [1, 2, [3, 4]];
const deepCopy = JSON.parse(JSON.stringify(originalArray));

// console.log(originalArray); // [1, 2, [3, 4]]
// console.log(deepCopy); // [1, 2, [3, 4]]

// Modifying the original array
originalArray[2].push(5);

console.log(originalArray); // [1, 2, [3, 4, 5]]
console.log(deepCopy);
