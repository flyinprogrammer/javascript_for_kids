let speak = function () {
    console.log(this.sound + "! My name is " + this.name + "!");
}

let animals = [];

let dog = {
    name: "Pancake",
    legs: 4,
    isAwesome: true,
    sound: "Woof woof"
};

dog.speak = speak;
animals.push(dog);

let cat = {
    sound: "Miaow",
    name: "Mittens",
    speak: speak
};
animals.push(cat);

let pig = {
    sound: "Oink",
    name: "Charlie",
    speak: speak
};
animals.push(pig);

let horse = {
    sound: "Neigh",
    name: "Marie",
    speak: speak
};
animals.push(horse);

for (let i = 0; i < animals.length; i++) {
    animals[i].speak();
}
