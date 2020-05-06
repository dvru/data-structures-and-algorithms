// mergeSortedArrays([0,3,4,31], [4,6,30]);
// [0,3,4,4,6,30,31]

function mergeSortedArrays(array1, array2) {
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];

    // Check input
    if (array1.length === 0){
        return array2;
    }
    if (array2.length === 0){
        return array2;
    }

    while (array1Item || array2Item) {
        if(array1Item < array2Item) {
            mergedArray.push(array1Item)
            array1Item = array1[1]
        }
    }
    return mergedArray;
}

mergeSortedArrays([0,3,4,31], [4,6,30]);