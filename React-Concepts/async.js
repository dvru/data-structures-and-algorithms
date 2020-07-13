const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('I have succeeded');
    }, 1000); // after 1 second call on the value 'I have suceeded'
});

//acces it by, pass a .then a function a value which will be the result value
myPromise.then(value => console.log(value));
