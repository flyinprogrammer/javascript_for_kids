var dinosaurs = [
    "T-Rex",
    "Velociraptor",
    "Stegosaurus",
    "Triceratops",
    "Brachiosaurus",
    "Pteranodon",
    "Apatosaurus",
    "Diplodocus",
    "Compsoognathus"
];

console.log(dinosaurs[0]);
console.log(dinosaurs[3]);

dinosaurs[0] = "Tyrannosaurus Rex";

console.log(dinosaurs[0]);
console.log(dinosaurs);

var newDinosaurs = [];
newDinosaurs[0] =     "T-Rex";
newDinosaurs[1] =    "Velociraptor";
newDinosaurs[2] = "Stegosaurus";
newDinosaurs[3] = "Triceratops";
newDinosaurs[4] = "Brachiosaurus";
newDinosaurs[5] = "Pteranodon";
newDinosaurs[6] = "Apatosaurus";
newDinosaurs[7] = "Diplodocus";
newDinosaurs[8] = "Compsoognathus";

console.log(newDinosaurs);

newDinosaurs[33] = "Philosoraptor";

console.log(newDinosaurs);

var dinosaursAndNumbers = [3, "dinosaurs", ["triceratops", "stegosaurus", 3627.5], 10];
console.log(dinosaursAndNumbers);

console.log(dinosaursAndNumbers[2]);
console.log(dinosaursAndNumbers[2][1]);

console.log(dinosaursAndNumbers.length);
console.log(dinosaursAndNumbers[2].length);
console.log(dinosaursAndNumbers[dinosaursAndNumbers.length - 1]);

var animals = [];
animals.push("Cat");
animals.push("Dog");
animals.push("Llama");
console.log(animals);
console.log(animals.length);
animals.unshift("monkey");
console.log(animals);
animals.shift();
console.log(animals);
animals.pop();
console.log(animals);

var furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"];
var scalyAnimals = ["Boa Constrictor", "Godzilla"];
var furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
console.log(furryAndScalyAnimals);
console.log(furryAnimals);
console.log(scalyAnimals);

var featheredAnimals = ["Macaw", "Dodo"];
var allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);
console.log(allAnimals);

var colors = ['red', 'green', 'blue'];
console.log(colors.indexOf('blue'));
console.log(colors.indexOf('green'));
console.log(colors.indexOf('purple'));

var insects = ["Bee", "Ant", "Bee", "Bee", "Ant"];
console.log(insects.indexOf('Bee'));

var boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"];
console.log(boringAnimals.join());
console.log(boringAnimals.join(" - "));
console.log(boringAnimals.join(" sees "));
