import { getCartProductFromLS } from "./getCartProducts.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";
// import { showToast } from "./showToast.js";
import { updateCartValue } from "./updateCartValue.js";

export const removeProdFromCart=(id)=>{
    let cartProducts=getCartProductFromLS();
    
    cartProducts=cartProducts.filter((curProd)=> curProd.id!==id);


    localStorage.setItem("cartProductLS",JSON.stringify(cartProducts));

    // remove product, remove ma click garne biti kai remove huna ko lagie
    // to remove the div on click
    let removeDiv=document.getElementById(`card${id}`);
    if(removeDiv){
        removeDiv.remove();

        // // show toast when product added to the cart
        // showToast("delete",id);
    }
    updateCartProductTotal();
    updateCartValue(cartProducts);
};