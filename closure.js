function outer() {
  let num1 = 10;

  return function (num3) {
    let num2 = 5;
    console.log(num1, num2, num3);
  };
}

outer()(7);
