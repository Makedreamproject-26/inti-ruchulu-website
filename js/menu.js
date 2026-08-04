const container=document.getElementById("menuContainer");

let cart=getCart();

menuItems.forEach(item=>{

container.innerHTML+=`

<div class="food-card">

<img src="${item.image}" alt="${item.name}">

<div class="food-details">

<h2>${item.name}</h2>

<p>${item.category}</p>

<div class="price">

₹${item.price}

</div>

<div class="qty">

<button onclick="decrease(${item.id})">-</button>

<span id="qty${item.id}">1</span>

<button onclick="increase(${item.id})">+</button>

</div>

<button class="add-cart"

onclick="addCart(${item.id})">

🛒 Add To Cart

</button>

</div>

</div>

`;

});

let quantities={};

menuItems.forEach(item=>{

quantities[item.id]=1;

});

function increase(id){

quantities[id]++;

document.getElementById("qty"+id).innerText=quantities[id];

}

function decrease(id){

if(quantities[id]>1){

quantities[id]--;

document.getElementById("qty"+id).innerText=quantities[id];

}

}

function addCart(id){

const food=menuItems.find(x=>x.id===id);

const existing=cart.find(x=>x.id===id);

if(existing){

existing.qty+=quantities[id];

}

else{

cart.push({

id:food.id,

name:food.name,

price:food.price,

qty:quantities[id]

});

}

saveCart(cart);

alert(food.name+" Added Successfully ❤️");

}

