// Rule 2: Remove Constants

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]); // 0(1)

    var middleIndex = Math.floor(items.length / 2); // n/2
    var index = 0; 

    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    }

    for (var i = 0; i < 100; i++) { 
        console.log('hi'); 
    }
}

// 0(1 + n/2 + 100)
// 0(n/2 + 101)
// 0(n + 1)

0(n)