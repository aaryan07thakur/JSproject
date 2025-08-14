import { getCartProductFromLS } from "./getCartProducts.js";

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

// Function to show cart products
const showCartProduct = (products) => {
  products.forEach((curProd) => {
    const { category, id, image, name, stock, price } = curProd;

    let productClone = document.importNode(templateContainer.content, true);

    // const lSActualData=fetcchQuantityFromCartLS(id,stock, price);

    productClone.querySelector("#cardValue").setAttribute("id",`card${id}`);
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent=name;
    productClone.querySelector(".productImage").src=image;
    // productClone.querySelector(".productQuantity").textContent=lSActualData.quantity
    // productClone.querySelector(".productPrice").textContent=lSActualData.price
    // // Add other fields here
    // productClone.querySelector(".name").textContent = name;
    // productClone.querySelector(".price").textContent = price;
    // productClone.querySelector("img").src = image;
    // productClone.querySelector("img").alt = name;

    cartElement.append(productClone);
  });
};

// Load products and render cart
const loadCartProducts = async () => {
  try {
    const response = await fetch("./api/products.json");
    const products = await response.json();

    const cartProducts = getCartProductFromLS();

    const filterProducts = products.filter((curPod) =>
      cartProducts.some((currElem) => currElem.id === curPod.id)
    );

    // Now render the filtered products
    showCartProduct(filterProducts);
  } catch (error) {
    console.error("Error loading products:", error);
  }
};

// Call the async function
loadCartProducts();