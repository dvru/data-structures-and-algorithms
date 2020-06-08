//Algorithms: Sorting

const letters = ['a', 'd', 'e', 'f', 'g', 'c', 'h', 'i', 'b', 'j'];
const basket = [2, 65, 34, 2, 1, 7, 8];

const spanish = ['']
// console.log(letters.sort());

console.log(basket.sort(function (a, b) {
    return a - b;
}));

