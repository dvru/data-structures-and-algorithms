// Given 2 arrays, create a function that let's a user know (true/false) 
//whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.


// 2 parameter --> arrays - no size limit
// return true or fale
// nested for loops --> 0(n^2)
//brute force approach: large amounts instead of more efficient
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

function containsCommonItem(arr1, arr2) {
    for (let i=0; i < arr1.length; i++) {
      for ( let j=0; j < arr2.length; j++) {
        if(arr1[i] === arr2[j]) {
          return console.log(true);
        }
      }
    }
    return console.log(false)
  }

  containsCommonItem(array1, array2)
//O(a*b)
//O(1) - Space Complexity


const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

function containsCommonItem2(arr1, arr2) {
  // loop through first array and create object where properties === items in the array
  // can we assume always 2 params?

  let map = {};
  for (let i=0; i < arr1.length; i++) {
    if(!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  // loop through second array and check if item in second array exists on created object. 
  for (let j=0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false
}

//O(a + b) Time Complexity
//O(a) Space Complexity
