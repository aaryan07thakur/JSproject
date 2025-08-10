import { getCartProductFromLS } from "./getCartProducts.js";

import { updateCartValue } from "./updateCartValue.js";

export const addToCart=(envet,id,stock)=>{

    let arrLocalStorageProduct=getCartProductFromLS();

    const currentProdElem=document.querySelector(`#card${id}`);

    let quantity= currentProdElem.querySelector(".productQuantity").innerText;

    let price=currentProdElem.querySelector(".productPrice").innerText;

    // console.log(quantity, price);
    
    price=price.replace("£","");

// same product addto cart ma add hunu vaya n just price and quantity matrai increase hunu paryo
    let existingProd=arrLocalStorageProduct.find(
        (curProd)=> curProd.id===id);
        if(existingProd){
            return false;
        }



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