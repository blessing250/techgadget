// Sample products for each category
const products = {
  phones: [
    { name: "iPhone 13", price: "$999", img: "images/i phone 13.jpeg" },
    {
      name: "Google Pixel 6 Pro",
      price: "$799",
      img: "images/Google pixel 6 pro.jpeg",
    },
    {
      name: "Galaxy S24 Ultra",
      price: "$1100",
      img: "images/Galaxy S24 Ultra.jpeg",
    },
  ],
  laptops: [
    { name: "HP", price: "$1299", img: "images/hp.jpeg" },
    { name: "Dell", price: "$999", img: "images/Dell.jpeg" },
    {
      name: "Toshiba Core i7",
      price: "$1100",
      img: "images/Toshiba core i7.jpeg",
    },
  ],
  wearables: [
    {
      name: "Fitness Tracker",
      price: "$140",
      img: "images/fitness Tracker.jpeg",
    },
    {
      name: "Funost 0A88 Smart Watch",
      price: "$199",
      img: "images/Funost 0A88 Smart Watch.jpeg",
    },
    { name: "Smart Glasses", price: "$150", img: "images/Smart Glasses.jpeg" },
  ],
  accessories: [
    {
      name: "Wireless Earbuds",
      price: "$99",
      img: "images/Beats Solo Buds.jpeg",
    },
    {
      name: "Portable Charger",
      price: "$49",
      img: "images/Portable Charger.jpeg",
    },
    {
      name: "Mini Portable Charger",
      price: "$49",
      img: "images/Mini Portable Charger.jpeg",
    },
  ],
};

// Function to render products in each category
function displayProducts(category) {
  const grid = document.getElementById(`${category}-grid`);
  if (grid) {
    products[category].forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("product-card");

      card.innerHTML = `
        <img src="${product.img}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>Price: ${product.price}</p>
      `;

      grid.appendChild(card);
    });
  }
}

// Initialize products for each category
["phones", "laptops", "wearables", "accessories"].forEach((category) => {
  displayProducts(category);
});
