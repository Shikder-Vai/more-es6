// get single properti form an array

const phone = { name: "realme ", model: "2pro", price: "3k", camera: "30px" };

// Method 1
/*
const name = phone.name;
const model = phone.model;
const price = phone.price;
console.log(name, model, price);
*/
//Method 2
/*
const { name, model, camera } = phone;
console.log(name, model, camera);
*/

// array inside another array
const companey = {
  name: "Ns Shop",
  regiNo: 3434343,
  itSection: { work: "Web Development", sellary: "30k", handler: "mini ns" },
  desingning: {
    softwear: "adobi ilistator",
    Worker: "5 person",
    shift: "6 hours",
  },
};
const sh = companey.itSection.sellary;
const { Worker, shift, softwar } = companey.desingning;
const { name } = companey;
console.log(Worker, shift, name, softwar);
