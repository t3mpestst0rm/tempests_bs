/**
 * Created by TempestStorm on 1/24/15.
 */

//alert("I am testing testing 123");

//Declaring a variable (telling what the we're calling the variable)
//For variables we always use the keywords "var"

var animeYuri; //We've declared or told what the variable is
animeYuri = 20; //We've defined what the given variable means or is equal to
console.log(animeYuri); //This allows me to see what the result of the variables are in the console

var characterBleach;
characterBleach = 6;
console.log(characterBleach);

/*Here we are declaring AND defining a variable
(This is putting the two steps above together into 1 line of code)
 */

var animeYaoi = 5;
console.log(animeYaoi);

var cansOfFruit = 10;
console.log(cansOfFruit);

//Declare & define a variable & then use math signs to solve simple math problems
//This includes +,-,/, & *

//Example 1 (addition)
var a = 10;
a = a + 9;
console.log(a);

//Example 2 (addition)
var b = 25;
b = b + 30;
console.log(b);

//Example 3 (addition)
var c = 40;
c = c + 80;
console.log(c);

//Example 4 (subtraction)
var d = 45;
d = d - 10;
console.log(d);

//Example 5 (subtraction)
var e = 100;
e = e - 20;
console.log(e);

//Example 6 (subtraction)
var f = 70;
f = f - 5;
console.log(f);

//Example 7 (division)
var g = 120;
g = g/10;
console.log(g);

//Example 8 (division)
var h = 100;
h = h/2;
console.log(h);

//Example 9 (division)
var i = 500;
i = i/5;
console.log(i);

//Example 10 (multiplication)
var j = 50;
j=j*4;
console.log(j);

//Example 11 (multiplication)
var k = 40;
k=k*3;
console.log(k);

//Example 12 (multiplication)
var l = 20;
l=l*2;
console.log(l);

//Calculate the area of a triangle
//Formula: 1/2 * base * height

//Example 1

var base = 36;
var height = 50;

var areaTriangle = 1/2 * base * height;
console.log(areaTriangle);

//Example 2

var base= 40;
var height = 35;

var areaTriangle2 = 1/2 * base * height;
console.log(areaTriangle2);

//Calculate a birth year

//Example 1 (-1 to get more accurate age if your birthday has not happened yet)
var yearBorn = 1982;
var currentYear = 2015;

var age = currentYear - yearBorn -1;
console.log(age);

//Example 2 (without taking off 1 to get more accurate age if birthday has happened)
var yearBorn2 = 1889;
var currentYear2 = 2014;

var age2 = currentYear2 - yearBorn2;
console.log(age2);

//Modulo - This gives a remainder when diving numbers Module = %

//Example 1

var remainder = 25%6;
console.log(remainder);

//Example 2

var remainder2 = 110%30;
console.log(remainder2);

//Example 3

var remainder3 = 90%20;
console.log(remainder3);

//Find out if an answer is even or odd (with remainders in this case)
//Test your number against %2 (ALWAYS) & then the result of 0 or 1 will tell you if the resulting # is even or odd
//Example 1

var evenOrOdd = 67%2;
console.log(evenOrOdd);

//Example 2

var evenOrOdd = 50%2;
console.log(evenOrOdd);

var evenOrOdd = 30%2;
console.log(evenOrOdd);

//Assignment Operators
/*
++ //Adds 1 to the variable
-- //Subtracts 1 from the variable.
+= //Addition assignment
-= //Subtraction assignment
/= //Division assignment
*= //Multiplication assignment
*/

//Example 1 ( ++ Assignment Operator)
//This assignment operator adds 1 onto your variable
var Int = 5;
Int++;
console.log(Int);

//Example 2

var number = 10;
number++;
console.log(number);

//Example 1 ( -- Assignment Operator)
//This assignment operator subtracts 1 from your variable

var subNumber = 19;
subNumber--;
console.log(subNumber);

//Example 2

var subtractInt = 15;
subtractInt--;
console.log(subtractInt);

//Example 1 (+= addition assignment)
//This assignment operator adds a variable & a number together

var addCounter = 4;
addCounter += 2;
console.log(addCounter);

//Example 2

var addInt = 25;
addInt += 5;
console.log(addInt);

//Example 1 (-= subtraction assignment)
//This assignment operator subtracts a number from a variable

var subCounter = 5;
subCounter -= 3;
console.log(subCounter);

//Example 2

var subInt = 50;
subInt -= 10;
console.log(subInt);

//Example 1 ( /= division assignment)
//This assignment operator divides a variable by a number

var divCounter = 30;
divCounter /= 5;
console.log(divCounter);

//Example 2

var divNumber = 100;
divNumber /= 2;
console.log(divNumber);

//Example 1 ( *= multiplication assignment)
//This assignment operator multiplies a variable by a number

var multiInt = 67;
multiInt *= 8;
console.log(multiInt);

var multiNumber = 607;
multiNumber *= 10;
console.log(multiNumber);

//Averaging numbers
//Add numbers together and divide to get result

//Example 1

var kwhReading1 = 993;
var kwhReading2 = 500;
var kwhReading3 = 450;
var kwhReading4 = 600;

var avg = (kwhReading1 + kwhReading2 + kwhReading3 +kwhReading4) /4;
console.log(avg);

//Example 2

var casesOfBeads1 = 20;
var casesOfBeads2 = 40;
var casesOfBeads3 = 10;
var casesOfBeads4 = 30;
var casesofBeads5 = 5;

var avg2 = (casesOfBeads1 + casesOfBeads2 + casesOfBeads3 + casesOfBeads4 + casesofBeads5) /5;
console.log(avg2);

//Don't overuse your parenthesis
//var perimeter = length*2 + width*2;

//Example 1

var length = 9;
var width = 20;

var perimeter = length*2 + width*2;
console.log(perimeter);

//Example 2

var length = 45;
var width = 25;

var perimeter2 = length*2 + width*2;
console.log(perimeter2);

//Constants (pi) are always upper case

var PI = 3.14;
console.log(PI);

//Rounding to a certain decimal place
// toFixed(number of decimal places we want)

//Example 1

var num = 67.8927357239;
num = num.toFixed(4);
console.log(num);

//Example 2

var Int = 768.08289235;
Int = Int.toFixed(3);
console.log(Int);