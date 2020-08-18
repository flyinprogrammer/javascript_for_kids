console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

console.log(Math.random() * 10);
console.log(Math.random() * 10);
console.log(Math.random() * 10);

console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 10));

var randomWords = ["Explosion", "Cave", "Princess", "Pen"];
var randomIndex = Math.floor(Math.random() * randomWords.length);
console.log(randomWords[randomIndex]);

var phrases = [
    "That sounds good",
    "Yes, you should definitely do that",
    "I'm not sure that's a great idea",
    "Maybe not today?",
    "Computer says no."
];

console.log(phrases[Math.floor(Math.random() * phrases.length)]);
console.log(phrases[Math.floor(Math.random() * phrases.length)]);
console.log(phrases[Math.floor(Math.random() * phrases.length)]);

var randomBodyParts = ['Face', 'Nose', 'Hair'];
var randomAdjectives = ['Smelly', 'Boring', 'Stupid'];
var randomWords = ['Fly', 'Marmot', 'Stick', 'Monkey', 'Rat'];

var rndBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)]
var rndAdj = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)]
var rndWord = randomWords[Math.floor(Math.random() * randomWords.length)]

console.log("Your " + rndBodyPart + " is like a " + rndAdj + " " + rndWord + "!!!");
