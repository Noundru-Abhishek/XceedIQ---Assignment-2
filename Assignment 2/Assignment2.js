// Question 1
const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];


console.log('Fruits in the array:');
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

const thirdElement = fruits[2]; 
console.log('The third fruit in the array is:', thirdElement);

const lengthOfArray = fruits.length;
console.log('The length of the array is:', lengthOfArray);

// Question 2

let carBrands = ['Toyota', 'Honda', 'Ford'];

carBrands.push('BMW');
console.log('Array after push:', carBrands);

const lastBrand = carBrands.pop();
console.log('Removed element with pop:', lastBrand);
console.log('Array after pop:', carBrands);

carBrands.unshift('Mercedes');
console.log('Array after unshift:', carBrands);

const firstBrand = carBrands.shift();
console.log('Removed element with shift:', firstBrand);
console.log('Array after shift:', carBrands);

// Question 3

let person = {
    name: 'Abhishek',
    age: 21,
    city: 'Vizag'
};

console.log('Name (dot notation):', person.name);
console.log('Name (square bracket notation):', person['name']);

person.occupation = 'Software Developer';
console.log('Person after adding occupation (dot notation):', person);

person['hobbies'] = ['Reading', 'Cycling', 'Traveling'];
console.log('Person after adding hobbies (square bracket notation):', person);

// Question 4

let Car = {
    make: 'Porche',
    model: '911 TUrbo',
    year: 1975,
    drive: function() {
        console.log('The car is driving.');
    }
};

Car.drive();

let Calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            console.log('Cannot divide by zero.');
            return undefined;
        }
    }
};

console.log('Add:', Calculator.add(5, 3));
console.log('Subtract:', Calculator.subtract(10, 4));
console.log('Multiply:', Calculator.multiply(7, 6));
console.log('Divide:', Calculator.divide(20, 4));
console.log('Divide by zero:', Calculator.divide(20, 0));

// Question 5

let numbers = [1, 2, 3, 4, 5];

// 1. Iterate over an array of numbers using a `for` loop and print each number
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

let strings = ['apple', 'banana', 'cherry'];

// 2. Iterate over an array of strings using a `while` loop and print each string
let j = 0;
while (j < strings.length) {
    console.log(strings[j]);
    j++;
}

// 3. Use a `for` loop to find the sum of all elements in an array
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log('Sum of numbers:', sum);

let mixedArray = [7, 13, 21, 34, 55];

// 4. Use a `while` loop to find the first even number in an array
let k = 0;
let firstEven = undefined;
while (k < mixedArray.length) {
    if (mixedArray[k] % 2 === 0) {
        firstEven = mixedArray[k];
        break;
    }
    k++;
}
console.log('First even number:', firstEven);

// 5. Use a `for` loop with a `break` statement to exit the loop when a certain condition is met
for (let i = 0; i < mixedArray.length; i++) {
    if (mixedArray[i] > 20) {
        console.log('Found a number greater than 20:', mixedArray[i]);
        break;
    }
}

// 6. Use a `for` loop with a `continue` statement to skip certain elements in the array
for (let i = 0; i < mixedArray.length; i++) {
    if (mixedArray[i] % 2 !== 0) {
        continue;
    }
    console.log('Even number:', mixedArray[i]);
}


// Question 6

let globalVar = 'I am a global variable';

function showVariables() {
    let localVar = 'I am a local variable';
    console.log('Inside function:', globalVar); // Accessing global variable
    console.log('Inside function:', localVar);  // Accessing local variable
}

showVariables();
console.log('Outside function:', globalVar); // Accessing global variable
console.log('Outside function:', localVar);  // This will cause an error because localVar is not defined outside the function

console.log(hoistedVar); // undefined
var hoistedVar = 'This variable is hoisted';

console.log(hoistedVar); // 'This variable is hoisted'

console.log(hoistedFunc()); // 'This function is hoisted'
function hoistedFunc() {
    return 'This function is hoisted';
}

console.log(nonHoistedFunc()); // Error: nonHoistedFunc is not defined
var nonHoistedFunc = function() {
    return 'This function is not hoisted';
};

// Question 7 

console.log(hoistedFunc()); // 'This function is hoisted'
function hoistedFunc() {
    return 'This function is hoisted';
}

const obj = {
    name: 'Alice',
    regularFunction: function() {
        console.log(this.name);
    },
    arrowFunction: () => {
        console.log(this.name);
    }
};

obj.regularFunction(); // 'Alice'
obj.arrowFunction();   // undefined

function globalFunction() {
    console.log(this);
}

globalFunction(); // In a browser, this refers to the global window object

const boundFunction = globalFunction.bind({ name: 'Bob' });
boundFunction(); // { name: 'Bob' }