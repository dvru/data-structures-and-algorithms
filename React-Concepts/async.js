const myPromise = new Promise((resolve, reject) => {
    if(true) {
        setTimeout(() => {
            resolve('I have succeeded');
        }, 1000); // after 1 second call on the value 'I have suceeded'
    } else {
        reject('I have failed');
    }
});

//acces it by, pass a .then a function a value which will be the result value
myPromise
    .then(value => console.log(value))
    .catch(rejectValue => console.log(rejectValue))

//true 'I have succeeded'
//false 'I have failed'