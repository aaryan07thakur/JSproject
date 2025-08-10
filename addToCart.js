import { getCartProductFromLS } from "./getCartProducts.js";

import { updateCartValue } from "./updateCartValue.js";

export const addToCart=(envet,id,stock)=>{

    let arrLocalStorageProduct=getCartProductFromLS();

    const currentProdElem=document.querySelector(`#card${id}`);

    let quantity= currentProdElem.querySelector(".productQuantity").innerText;

    let price=currentProdElem.querySelector(".productPrice").innerText;

    // console.log(quantity, price);
    
    price=price.replace("£","");
    price=Number(price * quantity);
    quantity=Number(quantity);

    // localstorage ma push gare ko data laie 
    arrLocalStorageProduct.push({id, quantity, price});
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));
// ===========================================================

    //update the cart button value
    // cart ma kati wota value x tyo pata lagau n ko lagie

    updateCartValue(arrLocalStorageProduct);
    

};