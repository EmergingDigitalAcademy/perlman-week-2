# Perlman JS Lecture

In this repo we are going to review javascript basics for week2.

We'll cover:
    - Basic JS datatypes
    - Console log
    - Running JS from an index.html page (script tag)
    - Creating variables, updating variables
    - Bonus: Week 3 content (loops, arrays, functions, objects)

## Basic Datatypes
Lots more info on [Javascript.info](https://javascript.info).
You can use `typeof` to ask a value or variable what kind of datatype it is
typeof(10) returns the string 'number'; typeof('blaine') returns 'string'
    - Numbers
        - Integers (like 20)
        - Floats (like 2.2222)
        - BigInt (like 12341245971359713591374198n)
        - NaN (not a number)
        - Infinity / -Infinity
    - Strings
        - 'blaine'
        - "emerging prairie"
        - `my name is blaine`
    - Booleans
        - true/false
        - in javascript, EVERYTHING is "truthy" or "falsey"
    - `undefined`
    - `null`
    - Arrays (collections of many different values)
        - [1, 2, 50, 100]
        - ['blaine', 'katie', 'dave']
    - Objects (contains key:value information, bundled in a single datatype)
        - const human = {name: 'blaine', isHungry: true}
        - console.log(human.name); // logs 'blaine'
        - console.log(human.isHungry; // log true)

Next up: conditionals (if statements / logic branching), loops (doing the same thing over and over, very helpful for working with arrays), functions (reusable code that can be called from other places with new inputs and can return a computed output)