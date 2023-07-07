function isPrime(num) {
  let prime = true;

  if (num === 1) {
    prime = false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      prime = false;
      break;
    }
  }

  return prime;
}

function countPrime(number) {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (isPrime(i)) {
      console.log(i);
      count++;
    }
  }

  return count;
}

const res = countPrime(100);
console.log("🚀 ~ file: prime.js:53 ~ res:", res);
