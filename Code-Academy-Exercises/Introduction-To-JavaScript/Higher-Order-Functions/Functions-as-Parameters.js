const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below

const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

const checkConsistentOutput = (func, val) => {
    let firstLoop = func(val);
    let secondLoop = func(val);
    if (firstLoop === secondLoop) {
        return firstLoop;
    } else {
        return 'This function returned inconsistent results';
    }
};

checkConsistentOutput(addTwo, 10);

// functions can be passed as parameters in other Functions (these are known as call back functions)
// we type in the function name without the parentheses for call back functions
