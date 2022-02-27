const products = [
  { name: "water bottle", price: 50, color: "yellow" },
  { name: "mobile phone", price: 15000, color: "black" },
  { name: "smart watch", price: 3000, color: "black" },
  { name: "sticky note", price: 30, color: "pink" },
  { name: "water glass", price: 3, color: "white" },
];
const cheepProducts = products.filter((p) => p.price < 1000);
const whiteItem = products.find((product) => product.color == "black");
console.log(whiteItem);
// console.log(cheepProducts);

const friendsName = ["jamal", "kamal", "sofi", "kofi", "tomal", "kawser"];
const oddFriends = friendsName.filter((f) => f.length % 2 != 0);
console.log(oddFriends);
