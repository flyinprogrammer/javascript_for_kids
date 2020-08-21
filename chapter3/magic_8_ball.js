console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

console.log(Math.random() * 10);
console.log(Math.random() * 10);
console.log(Math.random() * 10);

console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 10));

let randomWords = ["Explosion", "Cave", "Princess", "Pen"];
let randomIndex = Math.floor(Math.random() * randomWords.length);
console.log(randomWords[randomIndex]);

let phrases = [
    "That sounds good",
    "Yes, you should definitely do that",
    "I'm not sure that's a great idea",
    "Maybe not today?",
    "Computer says no."
];

console.log(phrases[Math.floor(Math.random() * phrases.length)]);
console.log(phrases[Math.floor(Math.random() * phrases.length)]);
console.log(phrases[Math.floor(Math.random() * phrases.length)]);

let randomBodyParts = ['Face', 'Nose', 'Hair'];
let randomAdjectives = ['Smelly', 'Boring', 'Stupid'];
randomWords = ['Fly', 'Marmot', 'Stick', 'Monkey', 'Rat'];

let rndBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)]
let rndAdj = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)]
let rndWord = randomWords[Math.floor(Math.random() * randomWords.length)]

console.log("Your " + rndBodyPart + " is like a " + rndAdj + " " + rndWord + "!!!");
