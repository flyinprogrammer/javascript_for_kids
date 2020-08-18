var height = 60;
var heightRestriction = 60;
console.log( height > heightRestriction);
console.log( height >= heightRestriction);

heightRestriction = 48;
console.log(height < heightRestriction);

height = 48;
console.log(height < heightRestriction);
console.log(height <= heightRestriction);

var mySecretNumber = 5;
var chicoGuess = 3;

console.log(mySecretNumber === chicoGuess);

var harpoGuess = 7;
console.log(mySecretNumber === harpoGuess);

var grouchoGuess = 5;
console.log(mySecretNumber === grouchoGuess);

var stringNumber = "5";
var actualNumber = 5;
console.log("String == Number: " + (stringNumber == actualNumber));
console.log("String === Number: " + (stringNumber === actualNumber));
console.log("0 == false: " + (0 == false));
console.log("\"false\" == false: " + ("false" == false));

var age = 12;
var accompanied = true;

console.log("can see movie: " + (age >= 13 || accompanied));

var myUndefinedVariable;
var myNullVariable = null;

console.log(myUndefinedVariable + " : " + myNullVariable);
