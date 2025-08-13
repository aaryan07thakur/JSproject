import { getCartProductFromLS } from "./getCartProducts.js";
// =======================getting add to cart data only  from localStorage==============
fetch("./api/products.json")
  .then(response => response.json())
  .then(products => {
    let cartProducts = getCartProductFromLS();

    let filterProducts = products.filter(curPod => {
    //   console.log(curPod.id);
    return cartProducts.some((currElem)=>currElem.id===curPod.id)
      // do something with cartProducts if needed
    });

    console.log(filterProducts);
  })
  .catch(error => console.error("Error loading products:", error));
  
// =================================end of getting add to cart data only from localStorage=========