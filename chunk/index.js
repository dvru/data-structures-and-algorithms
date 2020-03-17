// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunked = [];

    for (let element of array) {
        const last = chunked[chunked.length - 1];

        if (!last || last.length === size) {
            chunked.push([element]);
        } else {
            last.push(element);
        }
    }
    return chunked;
}

module.exports = chunk;


// Create empty array to hold chunks called 'chunked'

// For each element in the *unchunked* array
// Retrieve the last element in 'chunked'

// If last element does not exist, or if its length is equal to chunk size
// Push a new chunk into 'chunked' with the current element

// Else add the current element into the chunk



// ✓ function chunk exists 
// ✓ chunk divides an array of 10 elements with chunk size 2
// ✓ chunk divides an array of 3 elements with chunk size 1 
// ✓ chunk divides an array of 5 elements with chunk size 3 
// ✓ chunk divides an array of 13 elements with chunk size 5