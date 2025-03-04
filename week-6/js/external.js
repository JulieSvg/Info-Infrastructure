console.log("Umm... where are we?")

const birthYear = 1207;

let myName = "Ty the Noodle Arm Guy";

console.log(myName, "was born", birthYear);

myName= "Ty the Fly Guy"

// const variables can't change there values 
// birthYear= 1202;

console.warn (myName, "MAY have devoured 10 souls.");

console.log("myName is", myName.length,"chaaracter long.");

console.log("myName includes ty", myName.toUpperCase().includes("TY"));

myName="ty"

console.log("myName has uppercase:", myName !== myName.toLowerCase())
console.log("myName has lowercase:", myName !== myName.toUpperCase())

const PI = 3.14159265

console.log(PI.toFixed(2))
// this show only two number decimal number


// Get a random number between 1-100
const randomNumber = Math.floor(Math.random()*100)+1;

console.log("random number:", randomNumber)

console.log(Math.PI-PI, PI.toString().length)

console.log(Math.PI, PI.toString())

console.log("loose check", PI==PI.toString())
console.log("strick check", PI===Number (PI.toString()))

console.log("PI type:")

