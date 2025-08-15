import { showProductContainer } from './homeProductCards.js';
// import "./style.css";

fetch("./api/products.json")
  .then(response => response.json())
  .then(products => {
    // console.log(data);
    showProductContainer(products); // send products to the function
  })
  .catch(err => console.error(err));

