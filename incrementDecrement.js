import { getCartProductFromLS } from "./getCartProducts.js";

export const incrementDecrement=(event, id, stock, Price)=>{
    const currentCardElement=document.querySelector(`#card${id}`);
    const productQuantity=currentCardElement.querySelector(".productQuantity");
    const productPrice=currentCardElement.querySelector(".productPrice");
    

    let quantity=1;
    let localStoragePrice=0;

    // get data from localstorage

    let localCartProducts=getCartProductFromLS();

    let existingProd=localCartProducts.find((curProd)=> curProd.id===id);

    if(existingProd){
        quantity=existingProd.quantity;
        localStoragePrice=existingProd.Price;

    }else{
        localStoragePrice=Price;
        Price=Price;
    }

    if(event.target.className==="cartIncrement"){
        if(quantity<stock){
            quantity+=1;

        }else if (quantity=== stock){
            quantity=stock;
            localStoragePrice=Price* stock;
        }
    }

    if(event.target.className==="cartDecrement"){
        if(quantity>1){
            quantity-=1;
        }
    }

    //finall update the price in localstorage 
    localStoragePrice=Price*quantity;



    let updatedCart={id,quantity,Price: localStoragePrice};

    updatedCart=localCartProducts.map((curProd)=>{
        return curProd.id=== id? updatedCart : curProd;
    });
    // console.log(updatedCart);

    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
};