/**  
* Function declaration
* @param {number} a - It will have a number
* @param {number} b - It will have a number
* @return {number} - It returns the sum of a and b 
*/
console.log(add(4, 6));
function add(a, b) {
    return a + b;
}

/** 
* Function declartion 
* @param {string} greets - It will have a string value
* @return {string} - It will returns the string value pass in the greets parameter
*/
function greeting(greets) {
    return greets;
}
console.log(greeting("Hello"));

/**
* Function expression
* @param {number} a - It will have a number value 
* @param {number} b - It will have a number value 
* @return {number} - It returns the multiplication of a and b 
*/
let multiply = function (a, b) {
    return a * b;
};
console.log(multiply(3, 3));

/**
* Arrow function
* @param {number} x - It will have a number value 
* @console.log {number} - It will print the cube of the given value
* When we have a single parameter we don't require parenthesis in arrow function. 
*/
let cube = x => x * x * x;
console.log(cube(2));

/**
 * @param {number} a - It will have a number value 
 * @param {number} b - It will have a number value 
 * @returns {number} - It will return the sum of a and b 
 */
let subtract = (a, b) => a + b;
console.log(subtract(3, 4));

/**
 * 
 * @param {number} price - It will have a number value  
 * @param {number} quantity - It will have a number value  
 * @returns {number} - It will return the total 
 */
let calculateTotal = (price, quantity) => {
    let subtotal = price * quantity;
    let tax = subtotal * 0.1;
    let total = subtotal + tax;
    return total;
};
console.log(calculateTotal(50, 2));

/**
* Default parameter 
* Function: greet  
* Generates a greeting message with an optional 'name' parameter.
* Defaults to 'Sarita' if 'name' is not provided. Uses template literals.  
*Example output:
   - greet() returns 'Hello, Sarita'.
   - greet('world') returns 'Hello, world'.
*/
function greet(name = "Sarita") {
    return `Hello, ${name}`;
}
console.log(greet());
console.log(greet("world"));

/**
 * Destructuring Parameters
 * @param {string} firstName - It will take string value
 * @param {string} lastName -  It will take string value
 * @returns - It returns the firstName and lastName with a space between extract from the object called by the function personalInfo
 */
function personalInfo({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}
let user = {
    firstName: "Sarita",
    lastName: "Yadav",
    age: 20,
};
console.log(personalInfo(user));

/**
 * Rest parameter
 * @param {string} separator - It will have only one string value 
 * @param  {...any} strings - It will accept indefinite number of values
 * @returns - First it will place hyphen(-) between 3 strings and store the string in result after that result the modifiedResult 
 will place hyphen(-) between each strings  
 */
function concatenateStrings(separator, ...strings) {
    let result = "";
    let modifiedResult = "";
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < strings.length - 1) {
            result += separator;
        }
    }

    for (let j = 0; j < result.length; j++) {
        modifiedResult += result[j];
        if (j < result.length - 1) {
            modifiedResult += separator;
        }
    }
    return modifiedResult;
}
console.log(concatenateStrings("-", "Hello", "World", "JavaScript")); // Output: "Hello-World-JavaScript"
// console.log(concatenateStrings(" ", "This", "is", "a", "test")); // Output: "This is a test"

// Error handling 
function divide(a, b) {
    if (b === 0) {
        throw new Error('Something went wrong');
    }
    return a / b;
}
try {
    console.log(divide(15, 3));
    console.log(divide(4, 0));
} catch (error) {
    console.error(error.message);
} finally {
    console.log("This block is always execute");
}

// Error handling
function checkAge(age) {
    if (age < 18) {
        throw new Error("You are not eligble to vote");
    }
    return age;
}
try {
    console.log(checkAge(22));
    console.log(checkAge(2));
} catch (error) {
    console.error(error.message);
}

// Error handling
function functionOne() {
    functionTwo();
}
function functionTwo(){
        throw new Error("Somthing went wrong....");
    }
try {
    functionOne();
} catch (error) {
    console.error(error.message);
}

