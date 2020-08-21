console.log("Hello world!");

let numberNine = 9;
let stringNine = "9";

console.log(numberNine + numberNine);
console.log(stringNine + stringNine);
console.log(numberNine + stringNine);
console.log(stringNine + numberNine);


console.log("Spuercalifragilisticexpialidocious".length);

let java = "Java";
console.log(java.length);
let script = "Script";

let javascript = java + script;
console.log(javascript.length);


let myName = "Nick";
console.log(myName[0]);
console.log(myName[1]);
console.log(myName[2]);


let codeWord1 = "are";
let codeWord2 = "tubas";
let codeWord3 = "unsafe";
let codeWord4 = "?!";

console.log(codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1]);

console.log("a string".slice(1,5));

let longString = "My long string is long";
console.log(longString.slice(3, 14));
console.log(longString.slice(3));

let sillyString = "heLlo THERE, hOW ARE yOu doINg?";

console.log(sillyString.toUpperCase());
console.log(sillyString.toLowerCase());

let lowerString = sillyString.toLowerCase();
let firstCharacter = lowerString[0];
let firstCharacterUpper = firstCharacter.toUpperCase();
let restOfString = lowerString.slice(1);
console.log(firstCharacterUpper + restOfString);
console.log(sillyString[0].toUpperCase() + sillyString.slice(1).toLowerCase());
