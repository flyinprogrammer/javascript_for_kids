let cat1 = {
    "legs": 3,
    "name": "Harmony",
    "color": "Tortoiseshell"
};

let cat2 = {
    legs: 3,
    name: "Tom",
    color: "Blue"
};

console.log(cat2)

console.log(cat1.color);

cat1["color"] = "Red";

console.log(cat1.color);

cat1.color = "Green";

console.log(cat1.color);


let scores = {
  bill: 0,
  bob: 0,
  sally: 0
};

scores.bill += 1;
scores.sally += 3;
scores.bob += 1;
scores.bob -= 1;

console.log(scores);

let myCrazyObject = {
    "name": "A ridiculous object",
    "some array": [7,9, {purpose: "confusion", number: 123}, 3.3],
    "random animal": "Banana Shark"
};

console.log(myCrazyObject["some array"][2].number)
