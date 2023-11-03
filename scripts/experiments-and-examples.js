"use strict"

// const initial = 0
// const step = 1
// const final = colors.length - 1

// let currentIndex = initial  // defining
// while (currentIndex <= final) {  // checking
//     console.log(`Color number ${currentIndex} is ${colors[currentIndex]}!`)
//     currentIndex += step  // changing
// }

const colors = ["periwinkle", "sand brown", "salmon", "coral", "seagreen", "midnight blue"]

//   DEFINING       CHECKING               CHANGING
for (let index = 0; index < colors.length; index += 1) {
    console.log(`Color number ${index} is ${colors[index]}!`)
}


for (let index = 0; index < colors.length; index += 1) {
    const currentColor = colors[index]
    console.log(`Color number ${index} is ${currentColor}!`)
}



console.log("When does this console.log run????")

let x = 0;

(x = x + 1); // Adds, assigns the new value, returns the new value
(x += 1);    // Adds, assigns the new value, returns the new value
(++x);       // Adds, assigns the new value, returns the new value
(x++);       // Adds, assigns the new value, returns the OLD value