// const basket = ['apples', 'grapes', 'pears']

// const list = [apples --> grapes --> pears]

// apples
// 8947 --> grapes
//           8742 --> pears
//                     372 --> null

// Pointers

let obj1 = { a: true};
let obj2 = obj1;
obj1.a = 'Hello john'
delete obj1
obj2 = 'hello'
// console.log('1', obj1)
console.log('2', obj2)