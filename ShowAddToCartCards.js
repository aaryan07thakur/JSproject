import products from "./api/products.json";

let cartProducts=getCartProductFromLS();

let filterProducts=products.filter((curPod))