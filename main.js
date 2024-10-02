//Math Expressions: Eliminating 

//Example 1: Basic Arithmetic Without Parentheses

var result = 10 + 5 * 2 - 8;

// Explanation: Operator precedence means multiplication is done first.
// 1. 5 * 2 = 10
// 2. Then, 10 + 10 = 20
// 3. Finally, 20 - 8 = 12
console.log(result); // Outputs: 12


//Here, multiplication is performed before addition and subtraction, following JavaScript's default operator precedence.

//Example 2: Using Parentheses to Change Precedence

var result1 = (10 + 5) * 2 - 8;
// Explanation: Parentheses change the order of operations.
// 1. (10 + 5) = 15
// 2. Then, 15 * 2 = 30
// 3. Finally, 30 - 8 = 22
console.log(result1); // Outputs: 22

//In this case, parentheses ensure that the addition (10 + 5) is performed before multiplication.

//Example 3: Multiple Parentheses for Complex Operations

var result2 = (10 + 2) * (8 / (2 + 2));

// Explanation: Parentheses ensure certain operations are done first.
// 1. (10 + 2) = 12
// 2. (2 + 2) = 4
// 3. 8 / 4 = 2
// 4. 12 * 2 = 24

console.log(result2); // Outputs: 24

//Here, parentheses control the order of both addition and division operations, ensuring clarity in how the expression is evaluated.

//Questions for Math Expressions:
//Question 1: What will be the output of this expression?


var result3 = 5 + 10 / 2 - 3;

//Solution:

//Division is done first: 10 / 2 = 5
//Then addition: 5 + 5 = 10
//Finally, subtraction: 10 - 3 = 7

console.log(result3); // Outputs: 7


//Question 2: Solve the following expression:


var result4 = (8 + 4) / (2 * (1 + 1));

//Solution:

//Parentheses first: (8 + 4) = 12 and (1 + 1) = 2
//Then multiplication: 2 * 2 = 4
//Finally, division: 12 / 4 = 3

console.log(result4); // Outputs: 3


//Concatenating Text Strings

//Example 1: Simple String Concatenation

var name = "Alice";
var greeting = "Hello, " + name + "!";
console.log(greeting); // Outputs: "Hello, Alice!"

//In this example, two strings ("Hello, " and "!") are concatenated with the value of name, creating a personalized greeting.

//Example 2: Concatenating Numbers and Strings

var age = 25;
var message = "I am " + age + " years old.";
console.log(message); // Outputs: "I am 25 years old."


//Here, a number (age) is concatenated with strings. JavaScript automatically converts the number to a string during the concatenation.

//Example 3: Concatenating Strings Using Variables

var firstName = "Bob";
var lastName = "Smith";
var fullName = firstName + " " + lastName;
console.log(fullName); // Outputs: "Bob Smith"


//In this case, two variables representing a first and last name are concatenated with a space in between, creating a full name.

//Questions for String Concatenation:

//Question 1: What will the following code output?



var city = "New York";
var country = "USA";
var location = city + ", " + country;


//Solution: The output will be the combination of the city and country variables with a comma and space in between.


console.log(location); // Outputs: "New York, USA"


//Question 2: Combine the following variables into a sentence:


var fruit = "apple";
var number = 3;
var sentence = "I have " + number + " " + fruit + "s.";

//Solution: The output will combine the fruit and number variables into a grammatically correct sentence, accounting for pluralization.


console.log(sentence); // Outputs: "I have 3 apples."











