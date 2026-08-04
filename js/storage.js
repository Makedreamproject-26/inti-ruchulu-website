// Save Cart

function saveCart(cart){

localStorage.setItem("intiCart",JSON.stringify(cart));

}

// Get Cart

function getCart(){

const cart=localStorage.getItem("intiCart");

if(cart){

return JSON.parse(cart);

}

return [];

}

// Clear Cart

function clearCart(){

localStorage.removeItem("intiCart");

}


