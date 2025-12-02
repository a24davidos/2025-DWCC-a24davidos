let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Ola mundo");
  }, 2000);
});
promise.then((data) => console.log(data + " 1"));
promise.then((data) => console.log(data + " 2"));
promise.then((data) => console.log(data + " 3"));
