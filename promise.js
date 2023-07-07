let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Hurray!, Avi is available.");
  }, 1000);
});

const grandParentCoocking = () => {
  promise
    .then(function (result) {
      
      console.log(`cooking for vegetables ${result}`);
    })
    .catch(function (err) {
      console.log(err);
    });
};

grandParentCoocking();
