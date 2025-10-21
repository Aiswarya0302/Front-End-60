// Array of products
let products = [
  { name: "Laptop", price: 45000 },
  { name: "Phone", price: 25000 },
  { name: "Tablet", price: 15000 },
  { name: "Smart Watch", price: 7000 },
];

// Display data using map() and forEach()
const container = document.getElementById("productList");

products.map((product, index) => {
  let div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `<h3>${index + 1}. ${product.name}</h3>
                   <p>Price: ₹${product.price}</p>`;
  container.appendChild(div);
});

// Example of other array methods:
let prices = products.map(p => p.price);
console.log("All Prices:", prices);

let affordable = products.filter(p => p.price < 20000);
console.log("Affordable:", affordable);
