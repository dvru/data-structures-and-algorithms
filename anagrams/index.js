// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);  // produce char map for str a & b
    const bCharMap = buildCharMap(stringB); 

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {  // if acharmap is not equal to bcharmap, return false
        return false;
    }

    for (let char in aCharMap){   // look through a char map, 
        if(aCharMap[char] !== bCharMap[char]){  // if they dont equal eachother,
            return false;
        }
    }

    return true;
}

// helper function
function buildCharMap(str) {
    const charMap = {};  // empty object serve as our character map

    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {   // iterate through str,
        charMap[char] = charMap[char] + 1 || 1;                   // and for every char, add to char map
    }

    return charMap;
}


module.exports = anagrams;
