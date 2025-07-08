const puzzleNumbers = [
    -13, -1, 0, 1, 2, 3, 5, 8, 13, 21, 34,       // Fibonacci sequence
    42, 64, 81, 100, 121,                        // Perfect squares
    101, 113, 127, 131, 149,                     // Primes
    200, 256, 512, 1024,                         // Powers of 2
    333, 666, 999, -222,                         // Repeating digits
    123, 321, 132, 213,                          // Permutations of digits
    7777, 10000, 65536,                          // Larger numbers
    -42, -64, -128,                              // Negative powers of 2
    0.5, 1.5, 3.14, 6.28, 9.81,                  // Interesting floats
  ];

console.log(`Searching ${puzzleNumbers.length} numbers...`)

// Find numbers that begin with 2
console.log(`Looking for numbers that start with '2'`);
const startsWithTwo = [];
for (let i=0; i<puzzleNumbers.length; i++) {
    const firstDigit = puzzleNumbers[i].toString()[0];
    if (firstDigit === '2') {
        // We found one!
        console.log(`  --> Found one! ${puzzleNumbers[i]}`);
        // Keep it!
        startsWithTwo.push(puzzleNumbers[i])
    }
}
console.log(`Found ${startsWithTwo.length} numbers!`, startsWithTwo);

// Find even numbers
console.log(`Looking for even numbers`);
const evenNumbers = [];
for (const currentNumber of puzzleNumbers) {
    // const currentNumber = puzzleNumbers[i]; // same thing!!
    if (currentNumber % 2 === 0) {
        // if remainder when divided by 2 is zero, its an even number!
        console.log(`   --> Found one! ${currentNumber}`);
        evenNumbers.push(currentNumber);
    }
}
console.log(`Found ${evenNumbers.length} numbers!`, evenNumbers);

// Find all positive numbers
console.log(`Looking for positive numbers`);
const positiveNumbers = [];
for (let i=0; i<puzzleNumbers.length; i++) {
    if ( puzzleNumbers[i] > 0){
        console.log(`   --> Found one!`, puzzleNumbers[i]);
        positiveNumbers.push(puzzleNumbers[i]);
    }
}
console.log( `Found ${positiveNumbers.length} numbers!`, positiveNumbers);

// Find all perfect squares (16 is a perfect square of 4)
console.log(`Looking for perfect squares`);
const perfectSquares = [];
for (const currentNumber of puzzleNumbers) {
    // const currentNumber = puzzleNumbers[i]; // same thing!!
    if (Number.isInteger(Math.sqrt(currentNumber))) {
        // if the square root is an integer, we found it! Note: Math.sqrt will never
        // return negative values, so we're covered for numbers like -16
        console.log(`   --> Found one! ${currentNumber}; ${Math.sqrt(currentNumber)}`);
        perfectSquares.push(currentNumber);
    }
}
console.log(`Found ${perfectSquares.length} numbers!`, perfectSquares);

/**
 * Finds numbers that are powers of 2 in the given array.
 * 
 * @param {number[]} numbersToSearch - An array of numbers to search through.
 * @returns {number[]} An array of numbers that are powers of 2.
 */
function findPowersOf2(numbersToSearch) {
    // Find any numbers that are powers of 2
    console.log(`Looking for powers of 2`);
    const powersOf2 = [];
    for (const currentNumber of numbersToSearch) {
        // 2, 4, 8, 16, ... are powers of 2. 
        // For example, 8 is 2 to the third power (2^3)
        // If we have `8`, how do we get `3`? Log2! Log2(8)=>3
        if (Number.isInteger(Math.log2(currentNumber))) {
            // console.log(`   --> Found one! ${currentNumber}; 2**${Math.log2(currentNumber)}`);
            powersOf2.push(currentNumber);
        }
    }
    // console.log(`Found ${powersOf2.length} numbers!`, powersOf2);
    return powersOf2;
}
console.log(findPowersOf2(puzzleNumbers));
console.log(findPowersOf2([2, 1024, 65656]));
const result5 = findPowersOf2([1, 2**32, 2**11, 100]);
console.log(`Result5: `, result5);




// Find numbers of repeating digits
console.log(`Looking for repeat digits`);
// algorithm:
//  For every number in the puzzle array:
//      Loop over every digit in the number:
//          For every digit, see if it matches the first digit
//              If yes: continue to check next digit
//              If no: stop, continue search
//              If we made it through all digits, we found one!
const repeatingDigits = [];
for (const currentNumber of puzzleNumbers) {
    const numberAsString = Math.abs(currentNumber).toString(); // convert to string so we can look at each digit
    if (numberAsString.length === 1) {
        continue; // skip this number, continue the search!
    }

    let foundRepeatingDigits = true; // assume we will find one
    for (const currentDigit of numberAsString) { // loop over all digits in this number
        if (currentDigit !== numberAsString[0]) { // see if this digit matches the first one
            foundRepeatingDigits = false; // tag this number as not a candidate
            break; // get out of this loop if digits don't match
        }
    }
    // Let's see if the current number has all repeating digits?
    if (foundRepeatingDigits) {
        console.log(`   --> Found one!`, currentNumber);
        repeatingDigits.push(currentNumber); // keep what we found for later!
    }
}
console.log(`Found ${repeatingDigits.length} numbers!`, repeatingDigits);

// BONUS: Functions
// Functions are like a machine that takes an input (arguments) does some computations
// (function body // code), and returns an output (return value)
// Functions can have any number of arguments, and arguments can have default values
// (if you don't specify an argument, the value will be the default or `undefined`)
// When you call a function, the value it returns can be saved into a variable for later use

// this is a function that takes one argument (`x`) and calculates the value in that variable
// times two. This value is stored in a new variable called 'result' that only lives in this function
// and is returned back so that whoever called this function can access it
function doubler(x) {
    const result = x*2;
    return result;
}

// To call a function, use parenthesis and provide the arguments
console.log(`2*2=`, doubler(2)); // prints '2*2=4'
const tenDoubled = doubler(10); // return value stored in a variable
console.log(`10*2=`, tenDoubled); // from that point on, just a value in a variable

// this is a function that takes two arguments, but if `y` is not given by the caller
// OR the value of `y` is undefined, y gets the default value of 10
function multiplier(x, y=10) {
    const result = x*y;
    return result;
}
console.log(`5*5=`, multiplier(5, 5)); // 5*5=25
console.log(`5*10=`, multiplier(5)); // left off 'y' so default value of 10 is used