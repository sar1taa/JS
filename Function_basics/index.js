// Write a function named "minutesToSeconds" that takes a number of minutes and returns the equivalent number of seconds.
function minutesToSeconds(minutes) {
    return minutes * 60;
}
console.log("Seconds:" + minutesToSeconds(10));

// Write a function named isEven that takes a number as an argument and returns true if the number is even, and false if it is odd.
function isEven(num) {
    if (num % 2 == 0)
        return "True";
    else
        return "False";
}
console.log(isEven(4));
console.log(isEven(7));

// Write a function named max that takes two numbers as arguments and returns the larger of the three.
function max(a, b, c) {
    if (a > b && a > c) {
        return a;
    }
    else if (b > a && b > c) {
        return b;
    }
    else
        return c;
}
console.log(max(23, 42, 7));

// Write a function named factorial that takes a number as an argument and returns its factorial.
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}
console.log(factorial(9));

// Write a function named reverseString that takes a string as an argument and returns the string reversed.
function reverseString(str) {
    let result2 = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result2 = result2 + str[i];
    }
    return result2;
}
console.log(reverseString("hello"));
console.log(reverseString("Sarita"));

// Write a function named sumArray that takes an array of numbers and returns the sum of all the numbers.
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 7]));

// Write a function named containsSubstring that takes two strings as arguments and returns true if the second string is found within the first string, and false otherwise.
function containsSubstring(str, substr) {
    return str.includes(substr);
}
console.log(containsSubstring("Hello World", "Hello"));
console.log(containsSubstring("Hello World", "Hi"));

// Write a function named isPalindrome that takes a string as an argument and returns true if the string is a palindrome (reads the same backward as forward), and false otherwise.
function isPalindrome(string) {
    let reversed = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversed = reversed + string[i];
    }
    if (reversed == string)
        return "true";
    else
        return "false";
}
console.log(isPalindrome("kanak"));
console.log(isPalindrome("Sarita"));

// Write a function named countVowels that takes a string as an argument and returns the number of vowels (a, e, i, o, u) in the string.
function countVowels(strings) {
    let count = 0;
    for (let i = 0; i < strings.length; i++) {
        if (strings[i] == "a" || strings[i] == "e" || strings[i] == "i" || strings[i] == "o" || strings[i] == "u" || strings[i] == "A" || strings[i] == "E" || strings[i] == "I" || strings[i] == "O" || strings[i] == "U") {
            count++;
        }
    }
    return count;
}
console.log(countVowels("sArita"));