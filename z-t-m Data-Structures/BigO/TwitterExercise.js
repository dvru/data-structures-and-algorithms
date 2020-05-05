// Find 1st, Find Nth...

const array = [{
tweet: 'Hi',
date: 2012
}, {
tweet:'Omg',
date: 2014
}, {
tweet: 'Hello',
date: 2018
}];

// compare tweets
// nested loops, since you are comparing tweets
// 0(n^2)

array[0]; // 0(1)
array[array.length-1] // 0(1)