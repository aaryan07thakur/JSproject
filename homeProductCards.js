const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");

//importing :
import { homeQuantityToggle } from './homeQuantityToggle.js';
import{addToCart} from './addToCart.js';


export const showProductContainer = (products) => {
    if (!products) return false;

    products.forEach((currProd) => {
        const { brand, category, description, id, image, name, price, stock } = currProd;

        const productClone = document.importNode(productTemplate.content, true);
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector('.productImage').src=image;
        productClone.querySelector('.productImage').alt=name;
        productClone.querySelector('.productDescription').textContent=description;
        productClone.querySelector('.productPrice').textContent= `£${price}`;
        productClone.querySelector('.productActualPrice').textContent= `£${price * 4}`;
        productClone.querySelector('.productStock').textContent=stock;
        productClone.querySelector('.category').textContent=category;
        productClone.querySelector('.category').textContent=category;

        // uniquid id 
        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);


        productClone.querySelector(".stockElement").addEventListener('click',(event)=>{
            homeQuantityToggle(event, id, stock);
        });

        // add to cart funcanality of add to cart button
        productClone.querySelector(".add-to-cart-button").addEventListener("click",(event)=>{
            addToCart(event,id, stock);

        });


        productContainer.append(productClone);
    });
};
