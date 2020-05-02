// 0(n^2)

//log all pairs of array
const boxes = ['a', 'b', 'c', 'd', 'e'];

function logAllPairs(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j <array.length; j++) {
            console.log(array[i], array [j])
        }
    }
}

logAllPairs(boxes)

0(n^2)