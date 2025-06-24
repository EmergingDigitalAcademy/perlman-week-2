console.log(`JS file is loaded!`);

// Let's create some information about us and console log
const myName = 'blaine';

// Build a new string using the concatonation operator (+)
// and log it directly to the console
const myString = 'My name is ' + myName;
console.log(myString); // My name is blaine

// Concatonate and log at the same time
console.log('My name is ' + myName); // My name is blaine

// String Template Literal
const myString2 = `My name is ${myName}`; // My name is blaine
console.log(myString2); // My name is blaine
console.log(`My name is ${myName}`); // My name is blaine

// Console.log is special, you can also use commas to log out
// all kinds of things without needing to build a string
console.log(`My name is`, myName);

// Numbers and Math
// create a variable called 'result' and set it to the value number 0
let result = 10.0; 
console.log(`Result starts at: `, result);
result = result*result; // 10*10, or 100 (integer)
console.log(`Result ends at`, result);

result = result/3; // 33.3333333 (float)
console.log(`Divided by 3:`, result); 

const isAboveTen = (result > 10);
console.log(`isAboveTen:`, isAboveTen);
if (isAboveTen === true) {
    console.log(`--> The value is above ten!`);
} else {
    console.log(`--> The value is NOT above ten!`);
}

/* Operators:
    - + (plus): concatonation OR addition
    - - (minus): subtraction
    - * (asterisk): multiplication
    - ** (exponent): exponent 2**3 ==> 8
    - / (division): division
    - % (modulus): division remainder
        10 / 5: 2.0 (fractional result)
        10 % 5: 0 (remainder)
        10 divided by 5 is 2 (remainder 0)
        10 % 3: 1
        10 % 4: 2
        Very convenient for finding even/odd
        number % 2 -- if 0, even; if 1, odd
*/
console.log(`10^100`, 10**100);
console.log(`Is 1359123 divisible by 3?`, ((1359123 % 3) === 0));
const remainderByFour = 1359123 % 4;
console.log(`Is 1359123 divisible by 4?`, remainderByFour === 0);