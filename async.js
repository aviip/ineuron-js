// async function f1() {
//   let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(1);
//     }, 1000);
//   });

//   let result = await promise;
//   console.log("🚀 ~ f1 ~ result:", result);

// }

// f1().then(console.log("Hello"));

function getSyncheonousMessage() {
  return "Hello";
}

function getSyncheonousMessagePromise() {
  return new Promise(function (resolve, reject) {
    resolve("Hello - Promise");
  });
}

function getSyncheonousMessageDelay() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Hello - Delay");
    }, 2000);
  });
}

async function callFunc() {
  let simpleMsgDelay = await getSyncheonousMessageDelay();
  console.log("🚀 ~ callFunc ~ simpleMsgDelay:", simpleMsgDelay);

  let simpleMsg = getSyncheonousMessage();
  console.log("🚀 ~ callFunc ~ simpleMsg:", simpleMsg);

  let simpleMsgPromise = await getSyncheonousMessagePromise();
  console.log("🚀 ~ callFunc ~ simpleMsgPromise:", simpleMsgPromise);
}

callFunc();
