import { getCartProductFromLS } from "./getCartProducts.js";

import { updateCartValue } from "./updateCartValue.js";

// To get the cart data from localstorage
// to update the cart value ans also to get the data always ready from localstorage
getCartProductFromLS();
// ======================AddTo data in localStorage =========================
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


        if(existingProd && quantity > 1){
            // console.log('quantity', quantity)
            quantity= Number(existingProd.quantity) + Number(quantity)
            price=Number(price * quantity);

            let updatedCart={id, quantity, price};

            updatedCart=arrLocalStorageProduct.map((curProd) =>{
                return (curProd.id === id) ? updatedCart: curProd;
            });
            console.log(updatedCart);
            localStorage.setItem("cartProductLS",JSON.stringify(updatedCart));

            //   // show toast when product added to the cart
            //     showToast("add",id);

        };

        if(existingProd){
            // alert("This Product is already in cart");
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

    //   // show toast when product added to the cart
    //     showToast("add",id);
    

};