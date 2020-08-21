let height = 60;
let heightRestriction = 60;
console.log( height > heightRestriction);
console.log( height >= heightRestriction);

heightRestriction = 48;
console.log(height < heightRestriction);

height = 48;
console.log(height < heightRestriction);
console.log(height <= heightRestriction);

let mySecretNumber = 5;
let chicoGuess = 3;

console.log(mySecretNumber === chicoGuess);

let harpoGuess = 7;
console.log(mySecretNumber === harpoGuess);

let grouchoGuess = 5;
console.log(mySecretNumber === grouchoGuess);

let stringNumber = "5";
let actualNumber = 5;
console.log("String == Number: " + (stringNumber == actualNumber));
console.log("String === Number: " + (stringNumber === actualNumber));
console.log("0 == false: " + (0 == false));
console.log("\"false\" == false: " + ("false" == false));

let age = 12;
let accompanied = true;

console.log("can see movie: " + (age >= 13 || accompanied));

let myUndefinedVariable;
let myNullVariable = null;

console.log(myUndefinedVariable + " : " + myNullVariable);
