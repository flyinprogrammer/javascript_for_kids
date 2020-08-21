let landmarks = [];
landmarks.push("My house");
landmarks.push("Front path");
landmarks.push("Flickering streetlamp");
landmarks.push("Leaky fire hydrant");
landmarks.push("Fire station");
landmarks.push("Cat rescue center");
landmarks.push("My old school");
landmarks.push("My friend's house");

// for (let i = 0; i < landmarks.length; i++) {
//     console.log(landmarks.length);
//     console.log("i is: " + i);
//     console.log(landmarks.pop());
// }

let originalLandmarksLength = landmarks.length
for (let i = 0; i < originalLandmarksLength; i++) {
    console.log(landmarks.pop());
}