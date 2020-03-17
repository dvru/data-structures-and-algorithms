// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) { 
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }
    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}
module.exports = maxChar;



// Common String Questions:
// What is the most common char in the string?
// Does A string have the same char as string B (is it an anagram)?
// Does the given strnig have any repeated char in it?



// declare a new variable called character map which will be an empty object
// then iterate through str to build out character map

// for every character we recieve we will add an entry to character map
// & if an entry already exists then we will add 1

// if (charMap[char]) exists and already have entry
// then increment by 1

// otherwise we will set charMap[char] equal to 1

// declare 2 helper variables at the top of function



// function maxChar(str) { 
//     const charMap = {};

//     for (let char of str) {
//         if (charMap[char]) {
//             charMap[char]++;
//         } else {
//             charMap[char] = 1;
//         }
//     }
//     console.log(charMap)
// }
