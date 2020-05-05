// Space complexity O(1)
function boooo(n) {
    for (let i = 0; i < n.length; i++) {
        console.log('booooo');
    }
}
boooo([1,2,3,4,5]) 


// Space complexity O(n)
function arrayOfHiNTimes(n) {
    let hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray;
}

arrayOfHiNTimes(6)
