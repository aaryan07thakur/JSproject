import { getCartProductFromLS } from "./getCartProducts.js";

export const addToCart=(envet,id,stock)=>{

    let arrLocalStorageProduct=getCartProductFromLS();

    const currentProdElem=document.querySelector(`#card${id}`);

    let quantity= currentProdElem.querySelector(".productQuantity").innerText;

    let price=currentProdElem.querySelector(".productPrice").innerText;

    // console.log(quantity, price);
    
    price=price.replace("£","");
    price=price * quantity;

    arrLocalStorageProduct.push({id, quantity, price})
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));
    

};