// Drop non-dominant terms
// 

function printAllNumbersThenAllPairSums(numbers) {

    console.log('these are the numbers:');
    numbers.forEach(function(number) { // loop over number function
      console.log(number); // console log that number
    });
    // adding another step
    console.log('and these are their sums:'); // adding the numbers
    numbers.forEach(function(firstNumber) {  
      numbers.forEach(function(secondNumber) { 
        console.log(firstNumber + secondNumber);
      });
    });
  }
  
  printAllNumbersThenAllPairSums([1,2,3,4,5])

// Big O Notation:
//   0(n + n^2)

//   0(n^2)

  