import { showProductContainer } from './homeProductCards.js';

fetch("./api/products.json")
  .then(response => response.json())
  .then(data => {
    // console.log(data);
    showProductContainer(data); // send products to the function
  })
  .catch(err => console.error(err));
