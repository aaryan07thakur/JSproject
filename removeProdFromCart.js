import { getCartProductFromLS } from "./getCartProducts.js";
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
    }
    updateCartValue(cartProducts);
};