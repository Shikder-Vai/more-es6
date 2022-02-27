/*
Map er mul kaj holo akta array er moddhe loop calaya protita item ke bebohar kore onno arekta array banaya  tar maddhome show  korano
*/

// const numbers = [2, 3, 4, 5, 6, 12];

// function oldS(number) {
//   return number * 2;
// }

// const newS = (number) => number * 2;

// const output = [];
// for (const number of numbers) {
//   const results = newS(number);
//   output.push(results);
// }
// console.log(output);

// const results = numbers.map(newS);
// console.log(results);

// const addMd = (name) => "Md" + " " + name;
const addMd = (name) => `Md ${name}`;

const names = ["Mahmudul", "Shikder", "ns"];
const output = names.map(addMd);
console.log(output);
