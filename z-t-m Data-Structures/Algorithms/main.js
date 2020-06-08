//Algorithms: Recursion
let counter = 0;
function inception() { 
    console.log(counter)
    if (counter > 3) {
        return 'done!'
    }
    counter ++
    // inception(); 
}

console.log(inception())