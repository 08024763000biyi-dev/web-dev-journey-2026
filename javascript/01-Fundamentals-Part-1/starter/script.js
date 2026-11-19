// Values and variables
{
  let js = "amazing";
  console.log(40 + 8 + 23 - 10);

  console.log("Israel");
  console.log(23);

  let firstName = "Israel";

  console.log(firstName);
  console.log(firstName);
  console.log(firstName);
}

// Variable name convention
let israel_olubiyi = "IO";
let $funcion = 17;

let person = "Israel";
let PI = 3.1415;

let myFirstJob = "Freelancer";
let myCurrentJob = "omo";

let job1 = "Freelancer";
let job2 = "God's Plan";

console.log(myCurrentJob);

// Data types
true;
console.log(true);

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Israel");

javaScriptIsFun = "Yes!";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2026;
console.log(typeof year);

// let, const and var
{
  let age = 30;
  age = 31;
  console.log(age);

  const birthYear = 2009;
  // birthYear = 2008;
  console.log(birthYear);

  // const job; // invalid, const cannot be left undefined

  var job = "Freelancer";
  job = "omo";
  console.log(job);
}

// Basic operators
{
  const now = 2026;
  const ageIsrael = now - 2009;
  const ageDaniel = now - 2012;
  console.log(ageIsrael, ageDaniel);

  console.log(ageIsrael * 2, ageIsrael / 10, ageIsrael ** 3);

  const firstName = "Israel";
  const lastName = "Olubiyi";

  console.log(firstName + " " + lastName);

  // can also be done as
  const fullName = firstName + " " + lastName;
  console.log(fullName);
}

// Assignment operators
{
  let x = 10 + 5;
  x += 10; // x = x + 10 = 25;
  x *= 4; // x = x * 4;
  x++;
  x--;
  x--;
  console.log(x);
}

//Comparison operators
{
  const now = 2026;
  const ageIsrael = now - 2009;
  const ageDaniel = now - 2012;

  console.log(ageIsrael > ageDaniel);
  console.log(ageDaniel >= 18);

  const isOfAge = ageDaniel >= 18;
  console.log(isOfAge);

  console.log(now - 2009 > now - 2012);
}

// Operator Precedence
const now = 2026;
const ageIsrael = now - 2009;
const ageDaniel = now - 2012;

console.log(now - 2009 > now - 2012);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10;
console.log(x, y);

const averageAge = (ageIsrael + ageDaniel) / 2;
console.log(averageAge);
console.log(ageIsrael, ageDaniel, averageAge);

// CHALLENGE #1

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

// Your task is to write some code to help them:

// Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

// Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

// Log the value of BMIMark and BMIJohn to the console.

// BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

// TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

// IMPORTANT: The ** operator is not supported in this editor.Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

{
  const massMark = 95;
  const heightMark = 1.88;
  const massJohn = 85;
  const heightJohn = 1.76;

  const bmiMark = massMark / (heightMark * heightMark);
  const bmiJohn = massJohn / (heightJohn * heightJohn);

  console.log(bmiMark);
  console.log(bmiJohn);

  const markHigherBmi = bmiMark > bmiJohn;
  console.log(markHigherBmi);
}

// Strings and template literals
{
  const firstName = "Israel";
  const job = "Freelancer";
  const birthYear = 2009;
  const currentYear = 2026;

  const israel = "I'm " + firstName + ", a " + (currentYear - birthYear) + "-year-old " + job + "!";

  console.log(israel);

  const israelNew = `I'm ${firstName}, a ${currentYear - birthYear}-year-old ${job}!`;
  console.log(israelNew);

  console.log(`Just a regular string...`);

  console.log(
    "String with \n\
multiple \n\
lines",
  );

  console.log(`string
multiple
lines`);
}

// Taking decisions: if/else statement
{
  const age = 15;

  if (age >= 18) {
    console.log(`Serah can start driving license 🚗`);
  } else {
    const yearsLeft = 18 - age;
    console.log(`Serah has at least ${yearsLeft} years left to start driving license... too young!`);
  }

  const birthYear = 2009;
  let century;

  if (birthYear <= 2000) {
    century = 20;
  } else {
    century = 21;
  }
  console.log(century);
}

// CHALLENGE #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.

// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

// Note: Don't round the BMI values. Leave them as they are.

// IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const bmiMark = massMark / (heightMark * heightMark);
const bmiJohn = massJohn / (heightJohn * heightJohn);

console.log(bmiMark);
console.log(bmiJohn);

const markHigherBmi = bmiMark > bmiJohn;
console.log(markHigherBmi);

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI is higher than John's!`);
} else {
  console.log(`John's BMI is higher than Mark's!`);
}

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's! (${bmiJohn})`);
} else {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
}

// Type conversion and coercion
// Type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("jonas"));
console.log(typeof NaN); // NaN means Not a  Number which is still a number but it is an invalid number.

console.log(String(23), 23);

// Type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" + "10" + 3); //"23103"
console.log("23" * "10" * 3);
console.log("23" / "10" / 3);

let n = "1" + 1; //"11"
n = n - 1;
console.log(n);

// Truthy and falsy values
// 5 falsy values: 0, "", undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean("Israel"));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean(""));
console.log(Boolean(NaN));

const money = 0;
// const money = 100;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

let height;
// let height = 201
if (height) {
  console.log(`Yay! Height is defined`);
} else {
  console.log(`Height is UNDEFINED`);
}

// Equality Operators: == vs ===
{
  const age = "18";
  if (age === 18) console.log(`You just became an adult :D (strict)`); // Strict

  if (age == 18) console.log(`You just became an adult :D (loose)`); // Loose

  // const favourite = Number(prompt(`What's your favourite number?`));
  const favourite = 7
  console.log(favourite);
  console.log(typeof favourite);

  if (favourite === 7) {
    console.log(`Cool! 7 is an amazing number!`);
  } else if (favourite === 23) {
    console.log(`23 is also a cool number`);
  } else if (favourite === 9) {
    console.log(`9 is also a cool number`);
  } else {
    console.log(`Number is neither 7 nor 23 nor 9`);
  }

  if (favourite !== 7) console.log(`Why not 7?`);
}

// Boolean logic: The AND, OR & NOT operators
{
  let age = 16;
  console.log(age >= 20 && age <= 30);
}

// Logical operators
const hasDriversLicence = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

if (hasDriversLicence && hasGoodVision) {
  console.log(`Serah is able to drive!`);
} else {
  console.log(`Someone else eligible should drive...`);
}

const isTired = true; // C

console.log(hasDriversLicence || hasGoodVision || isTired);
console.log(hasDriversLicence && hasGoodVision && isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
  console.log(`Serah is able to drive!`);
} else {
  console.log(`Someone else eligible should drive...`);
}

// CHALLENGE #3
// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:

// 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:

// "Dolphins win the trophy" if Dolphins win, or

// "Koalas win the trophy" if Koalas win, or

// "Both win the trophy" if their average scores are equal.

// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
  console.log(`Dolphins win the trophy`);
} else if (scoreDolphins === scoreKoalas) {
  console.log(`Both win the trophy`);
} else {
  console.log(`Koalas win the trophy`);
}

// The switch statement
const day = "tuesday";

switch (day) {
  case "monday":
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
    break;
  case "tuesday":
    console.log(`Watch theory videos`);
    break;
  case "wednessday":
  case "thursday":
    console.log(`Write practice codes`);
    break;
  case "friday":
    console.log(`Watch coding videos`);
    break;
  case "saturday":
  case "sunday":
    console.log(`Enjoy the weekend`);
    break;
  default:
    console.log(`Not a valid day!`);
}

if (day === "monday") {
  console.log(`Plan course structure`);
  console.log(`Go to coding meetup`);
} else if (day === "tuesday") {
  console.log(`Watch theory videos`);
} else if (day === "wednessday" || day === "thursday") {
  console.log(`Write practice codes`);
} else if (day === "friday") {
  console.log(`Watch coding videos`);
} else if (day === "saturday" || day === "sunday") {
  console.log(`Enjoy the weekend`);
} else {
  console.log(`Not a valid day!`);
}

// Statements and expressions
3 + 4;
2009;

if (23 > 10) {
  const str = `23 is bigger`;
}

// The conditional (ternary) operator
const age = 17;
age >= 18 ? console.log(`I like to drink wine 🍷`) : console.log(`I like to drink water 🫗`);

const drink = age >= 18 ? `wine 🍷` : `water 🫗`;
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = `wine 🍷`;
} else {
  drink2 = `water 🫗`;
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? `wine 🍷` : `water 🫗`}`);

// CHALLENGE #4
// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// Your tasks:

// Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

// Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

// Example: The bill was 275, the tip was 41.25, and the total value 316.25.

// Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

// TEST DATA: Test with different bill values: 275, 40, and 430

// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

// HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

// Using if...else statement
{
  const bill = 30;
  let tip;

  if (bill >= 50 && bill <= 300) {
    tip = (15 / 100) * bill;
  } else if (bill > 300) {
    tip = (20 / 100) * bill;
  } else {
    tip = 0;
  }
  console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);
}

// Using ternary operator
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);