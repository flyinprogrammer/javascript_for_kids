console.log("Hello world!");

var numberNine = 9;
var stringNine = "9";

console.log(numberNine + numberNine);
console.log(stringNine + stringNine);
console.log(numberNine + stringNine);
console.log(stringNine + numberNine);


console.log("Spuercalifragilisticexpialidocious".length);

var java = "Java";
console.log(java.length);
var script = "Script";

var javascript = java + script;
console.log(javascript.length);


var myName = "Nick";
console.log(myName[0]);
console.log(myName[1]);
console.log(myName[2]);


var codeWord1 = "are";
var codeWord2 = "tubas";
var codeWord3 = "unsafe";
var codeWord4 = "?!";

console.log(codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1]);

console.log("a string".slice(1,5));

var longString = "My long string is long";
console.log(longString.slice(3, 14));
console.log(longString.slice(3));

var sillyString = "heLlo THERE, hOW ARE yOu doINg?";

console.log(sillyString.toUpperCase());
console.log(sillyString.toLowerCase());

var lowerString = sillyString.toLowerCase();
var firstCharacter = lowerString[0];
var firstCharacterUpper = firstCharacter.toUpperCase();
var restOfString = lowerString.slice(1);
console.log(firstCharacterUpper + restOfString);
console.log(sillyString[0].toUpperCase() + sillyString.slice(1).toLowerCase());
