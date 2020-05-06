// Create a function that reverses a string:
// 'Hi My name is Damini' should be:
// 'inimaD si eman yM iH'



// // Method 1
// function reverseString(str){
//     // Step 1. Use the split() method to return a new array
//     var splitString = str.split("");
//     // Step 2. Use the reverse() method to reverse the new created array
//     var reverseArray = splitString.reverse();
//     // Step 3. Use the join() method to join all elements of the array into a string
//     var joinArray = reverseArray.join("");
//     //Step 4. Return the reversed string
//     return joinArray;
// }



// Method 2
// chaining all methods together
function reverseString(str) {
    return str.split("").reverse().join("");
}



// // Method 3
// function reverseString(str) {
//     // Step 1. Create an empty string that will host the new created string
//     var newString = "";
 
//     // Step 2. Create the FOR loop
//     /* The starting point of the loop will be (str.length - 1) which corresponds to the 
//        last character of the string, "I"
//        As long as i is greater than or equals 0, the loop will go on
//        We decrement i after each iteration */
//     for (var i = str.length - 1; i >= 0; i--) { 
//         newString += str[i]; // or newString = newString + str[i];
//     }
//     /* EX: Here hello's length equals 5
//         For each iteration: i = str.length - 1 and newString = newString + str[i]
//         First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
//         Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
//         Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
//         Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
//         Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
//     End of the FOR Loop*/
 
//     // Step 3. Return the reversed string
//     return newString; // 'inimaD si eman yM iH'
// }

console.log(reverseString('Hi My name is Damini'));