function funChallenge(input) {
    let a = 10; // 0(1) , only running once
    a = 50 + 3; // 0(1) , reassigning a
  
    for (let i = 0; i < input.length; i++) { // 0(n)
      anotherFunction();
      let stranger = true;
      a++;
    }
    return a;
  }

  funChallenge();