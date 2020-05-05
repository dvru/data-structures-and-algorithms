function funChallenge(input) {
    let a = 10; // 0(1) , only running once
    a = 50 + 3; // 0(1) , reassigning a
  
    for (let i = 0; i < input.length; i++) { // 0(n)
      anotherFunction(); // 0(n)
      let stranger = true; // 0(n)
      a++; // a +1, // 0(n)
    }
    return a; // 0(1)
  }

// BIG 0 notation (3 + 4n)
// BIG 0(n)