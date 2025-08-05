// main.js

// Load JSON using fetch
fetch('./api/products.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to load products.json");
    }
    return response.json();
  })
  .then((products) => {
    console.log("Loaded products:", products);

    // Example: Display products in the document
    products.forEach((product) => {
      const div = document.createElement("div");
      div.textContent = `${product.name} - Rs.${product.price}`;
      document.body.appendChild(div);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
