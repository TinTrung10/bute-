// Cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

// Open Cart
cartIcon.onclick = () => {
	cart.classList.add("active");
}
// Close Cart
closeCart.onclick = () => {
	cart.classList.remove("active");
} 

// Cart Working JS
if (document.readyState == "loading"){
	document.addEventListener("DOMContentLoaded", ready);
} else {
	ready();
}

// Making Function
function ready() {
	//remove item from cart
	var removeCartButtons = document.getElementsByClassName("cart-remove");
	for (var i = 0; i < removeCartButtons.length; i++) {
		var button = removeCartButtons[i];
		button.addEventListener("click", removeCartItem);
	}


	// add to cart
	var addCart = document.getElementsByClassName("add-cart");
	for (var i = 0; i < addCart.length; i++) {
		var button = addCart[i];
		button.addEventListener("click", addCartClicked);
	}

	// buy button work
	document.getElementsByClassName("btn-buy")[0].addEventListener("click", buyButtonClicked);
}

// buy button
function buyButtonClicked(){
	alert("Tak for din ordre!");
	var cartContent = document.getElementsByClassName("cart-content")[0];
	while (cartContent.hasChildNodes()) {
		cartContent.removeChild(cartContent.firstChild);
	}
	updatetotal();
}

// remove item from cart
function removeCartItem(event){
	var buttonClicked = event.target;
	buttonClicked.parentElement.remove();
	updatetotal();
}


// add to cart
function addCartClicked(event){
	alert("Du har tilføjet noget til kurven! Tjek din kurv");
	var button = event.target;
	var shopProducts = button.parentElement;
	var title = shopProducts.getElementsByClassName("sko_title")[0].innerText;
	var price = shopProducts.getElementsByClassName("sko_pris")[0].innerText;
	const shoeSize = document.getElementById("stoerrelser").value;
	var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
	addProductToCart(title, price, shoeSize, productImg);
	updatetotal();
}

function addProductToCart(title, price, shoeSize, productImg){
	var cartShopBox = document.createElement("div");
	cartShopBox.classList.add("cart-box");
	var cartItems = document.getElementsByClassName("cart-content")[0];
	var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
	for (var i = 0; i < cartItemsNames.length; i++) {
		if (cartItems[i] == shoeSize ) {
			alert("You have already added this item to cart");
			return;
		}	
	}	

	var cartBoxContent = `
	<img src="${productImg}" alt="" class="cart-img">
	<div class="detail-box">
	  <div class="cart-product-title">${title}</div>
	  <div class="cart-quantity">Str. ${shoeSize}</div>
	  <div class="cart-price">${price}</div>
	</div>
	<!-- Remove Cart -->
	<i class='bx bxs-trash-alt cart-remove'></i>`;
	cartShopBox.innerHTML = cartBoxContent;
	cartItems.append(cartShopBox);
	cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click", removeCartItem);
}

//update total
function updatetotal(){
	var cartContent = document.getElementsByClassName("cart-content")[0];
	var cartBoxes = cartContent.getElementsByClassName("cart-box");
	var total = 0;
	for (var i = 0; i < cartBoxes.length; i++){
		var cartBox = cartBoxes[i];
		var priceElement = cartBox.getElementsByClassName("cart-price")[0];
		var price = parseFloat(priceElement.innerText.replace("DKK", ""));
		total = total + price;
	}
		document.getElementsByClassName("total-price")[0].innerText = (Math.round(total * 100) / 100).toFixed(2) + " " + "DKK"; 
}

// KILDE
// https://www.youtube.com/watch?v=18Jvyp60Vbg&ab_channel=CarpoolVenom

var noti = document.querySelector('h5');
	var select = document.querySelector('.select');
	var button = document.getElementsByClassName('add-cart');
	for(var but of button){
		but.addEventListener('click', (e)=>{
			var add = Number(noti.getAttribute('data-count') || 0);
			noti.setAttribute('data-count', add +1);
			noti.classList.add('zero')

		})
	}
	var removeCartButtons = document.getElementsByClassName("cart-remove");
	for(var removeCart of removeCartButtons){
		removeCart.addEventListener('click', (e)=>{
			var remove = Number(noti.getAttribute('data-count'));
			noti.setAttribute('data-count', remove -1);
			

		})
	}

// KILDE
// https://www.youtube.com/watch?v=2x7Gwr4V47w&t=45s&ab_channel=sakaos