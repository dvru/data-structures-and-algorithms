// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.

// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const words = [];

    for (let word of str.split(' ')) {
       words.push(word[0].toUpperCase() + word.slice(1));
    }
    return words.join(' ');
}

module.exports = capitalize;




/////// EASIER SOLUTION 1

// Make and Empty array 'Words;
// Split the input string by spaces to get an array
// For each word in the array
// Uppercase the first letter of the word
// Join first letter with rest of the string
// Push result into 'words' array
// Join 'words' into a string and return it


// function capitalize(str) {
//     const words = [];

//     for (let word of str.split(' ')) {
//        words.push(word[0].toUpperCase() + word.slice(1));
//     }
//     return words.join(' ');
// }





////////////////// SOLUTION 2, USING A MANUAL FOR LOOP

// Create 'result' which is the first character of the input string capitalized 
// For each character in the string
// IF the character to the left, is a space 
// Capitalize it and add it to 'result' space
// ELSE 
// Add it to the 'result'

// function capitalize(str) {
//     let result = str[0].toUpperCase();

//     for (let i = 1; i < str.length; i++) {
//         if (str[i - 1] === ' ') {
//             result += str[i].toUpperCase();
//         } else {
//             result += str[i];
//         }
//     }

//     return result;
// }