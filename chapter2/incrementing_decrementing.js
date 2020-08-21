

let highfives = 0;
let highfivesReturn = 0;

console.log("hF: " + highfives);
console.log("hR: " + highfivesReturn);
highfivesReturn = ++highfives;
console.log("hF: " + highfives);
console.log("hR: " + highfivesReturn);
highfivesReturn = ++highfives;
console.log("hF: " + highfives);
console.log("hR: " + highfivesReturn);
highfivesReturn = --highfives;
console.log("hF: " + highfives);
console.log("hR: " + highfivesReturn);

highfivesReturn = highfives++;
console.log("hF: " + highfives);
console.log("hR: " + highfivesReturn);
highfivesReturn = highfives--;
console.log("hF: " + highfives);
console.log("hR: " + highfivesReturn);

// ------------------

highfives = 0;
console.log(highfives++);
console.log(highfives++);
console.log(highfives);

let x = 10;
x = x + 5;
console.log(x);

let score = 10;
score += 7;
console.log(score);
score -= 3;
console.log(score);

let balloons = 10
balloons *= 2;
console.log(balloons);

balloons = 100;
balloons /= 4;
console.log(balloons);
