// Task-1
// You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.
var myMoney = 900 ;
var applePrice = 300;
var orangePrice = 320;
var totalPrice = applePrice + orangePrice;
console.log("I have = " + myMoney)
console.log("Apple Price = " + applePrice)
console.log("Orange Price = " + orangePrice)
console.log("Total Price = " + totalPrice)
console.log("shopkeper return = " + (myMoney - totalPrice));

// Task-2
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

var math = 82;
var bangla = 87;
var english = 85;
var chemistry = 89;
var physics = 90;

var totalNumber = math + bangla + english + chemistry + physics;
var totalSubject = 5;
console.log("Average Marks = " + totalNumber / totalSubject)

// Task-3
// You task is to divide the given number by 5 and show the remainder as the output.
var num = 58;
console.log("Remainder = " +num % 5)

/* Task-4
What will be the result of the following codes:

var a = isNaN(‘11’);

var a = isNaN(2-10);

Explain your answers.*/


/* 
In JavaScript, the isNaN() function is used to determine whether a value is NaN (Not-a-Number). When you call isNaN() with a value, it returns true if the value is NaN and false otherwise. However, the function first tries to convert the value to a number before making this determination.

Here's a breakdown of what happens with var a = isNaN('11');:

Conversion Attempt: The string '11' is not inherently NaN, but isNaN() will first try to convert '11' to a number. Since '11' is a valid numeric string, it converts to the number 11.

Check for NaN: After conversion, the value is 11, which is a valid number, so it is not NaN.

Return Value: Since the result of the conversion (11) is not NaN, isNaN() returns false.

So, var a = isNaN('11'); sets the variable a to false because '11' can be converted to a valid number.
*/

/*
Let's break down the JavaScript expression var a = isNaN(2 - 10);:

Expression Evaluation:

First, the expression inside isNaN() needs to be evaluated. In this case, it's 2 - 10.
Performing the subtraction: 2 - 10 results in -8.
Checking with isNaN():

isNaN(-8) is then evaluated.
isNaN() checks if the provided value is NaN (Not-a-Number). Since -8 is a valid number, isNaN(-8) will return false.
Variable Assignment:

The result of isNaN(2 - 10) is false, so var a will be assigned this value.
So, var a = isNaN(2 - 10); will assign false to the variable a, because 2 - 10 evaluates to -8, which is a valid number and not NaN.
*/