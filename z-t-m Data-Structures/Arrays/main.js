const strings = ['a', 'b', 'c', 'd']; 
// simple array in JavaScript
//  4 items * 4 shelves = 16 bytes of storages 

// Variable array is somewhere in memory and the computer knows it.
console.log(strings[2]) // grab third item in array
// When I do array[2], i'm telling the computer, 
// hey go to the array and grab the 3rd item from where the array is stored.


//push
strings.push('e');              // 0(1)
// [ 'a', 'b', 'c', 'd', 'e' ]

//pop
strings.pop();
// [ 'a', 'b', 'c', 'd' ]
strings.pop();                  // 0(1)
// [ 'a', 'b', 'c' ]

//unshift
strings.unshift('x')            // 0(n)
// [ 'x', 'a', 'b', 'c' ]

//splice
strings.splice(2, 0, 'alien');  // 0(n)
// [ 'x', 'a', 'alien', 'b', 'c' ]

console.log(strings)