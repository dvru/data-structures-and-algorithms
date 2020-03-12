// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str
    .split('')
    .reverse()
    .join('');
   }
   
   module.exports = reverse;
   

// Create an empty string called 'reversed'
// for each character in the provided string
    // Take the charcter and add it to the start of 'reversed'
// Return the variable 'reversed'

        // function reverse(str) {
        //     let reversed = '';

        //     for (let character of str) {
        //         reversed = character + reversed;
        //     }

        //     return reversed;
        // }




// Turn "str" into an array
// Call "reverse" method on the array
// Join the array back ito a string
// Return the Result 

        // function reverse(str) {
        //     return str
        //     .split('')
        //     .reverse()
        //     .join('');
        //    }

        // function reverse(str) {
        //     const arr = str.split('');
        //     arr.reverse(); 
        //     return arr.join('');
        // }