const promise = new Promise((resolve, reject) => {
    resolve('This is my resolved data');
    console.log('this');
});

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

// alternative syntax - pass in two functions to then(fun1Resolve, fun2Reject).

// promise.then() is actually another promise. If it returns another promise, then the .then()
// call onto that runs upon success.
