export const homeQuantityToggle =(envet,id, stock)=>{
    const currentCardElement=document.querySelector(`#card${id}`);
    // console.log(currentCardElement);

    const productQuantity= currentCardElement.querySelector(".productQuantity");
    // console.log(productQuantity);

    // ===========toggle cart ==================================================
    let quantity=parseInt(productQuantity.getAttribute("data-quantity")) || 1;

    if(envet.target.className==="cartIncrement"){
        if(quantity < stock){
            quantity +=1;

        }else if(quantity=== stock){
            quantity= stock
        }
        }
        if ((event.target.className==="cartDecrement")){
            if(quantity>1){
                quantity-=1;
            }
        }

        productQuantity.innerText= quantity;
        productQuantity.setAttribute("data-quantity", quantity.toString());

//================================================================================================


};