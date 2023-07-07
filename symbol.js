let age = Symbol("ageValue");

const person = {
  name: "Avi Patel",
  [age]: 23,
};

// console.log(person.age);
// console.log(person[age]);

for (const key in person) {
  console.log("🚀 ~ key:", key);
}
