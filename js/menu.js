const container = document.getElementById("menuContainer");

menuItems.forEach(item=>{

container.innerHTML += `

<div class="food-card">

<img src="${item.image}" alt="${item.name}">

<div class="food-details">

<h2>${item.name}</h2>

<p>${item.category}</p>

<div class="price">

₹${item.price}

</div>

<div class="qty">

<button>-</button>

<span>1</span>

<button>+</button>

</div>

<button class="add-cart">

🛒 Add To Cart

</button>

</div>

</div>

`;

});



