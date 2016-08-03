var cart = new styleTagCart(config);
if(cart.getItems() == null && cart.getItems().length === 0 ){
  cart.addItems(productList);
}

function generateCartItem(product) {
  var template = '<div class="cart-item"><div class="cart-heading-item"><p>Random Product 1</p></div><div class="cart-heading-item"><p>Rs '+product.price+'</p></div><div class="cart-heading-item"><span class="m-r-5" onclick="decreaseProductQuantity('+product.id+','+product.quantity+')"><i class="fa fa-minus"></i></span><span class="quantity-info">'+product.quantity+'</span><span class="m-l-5" onclick="increaseProductQuantity('+product.id+','+product.quantity+')"><i class="fa fa-plus"></i><span></div><div class="cart-heading-item"><p>'+product.brand+'<span  class="remove-from-cart" onclick="cart.removeItem('+product.id+')"><i class="fa fa-close"></i></span></p></div></div>';
  return template;
}

function displayCartItems() {
  var container = document.getElementById('cart-items-container');
  var html = '';
  if(cart.getItems()){
    cart.getItems().forEach(function(product){
      html += generateCartItem(product);
    });
  }
  container.innerHTML = html;
}

function displayCartDetails() {
  document.getElementById('sub-total').innerHTML = cart.getSubTotal();
  document.getElementById('service-tax').innerHTML = cart.getServiceTax();
  document.getElementById('delivery-charges').innerHTML = cart.getDeliveryCharges();
  document.getElementById('grand-total').innerHTML = cart.getGrandTotal();
}

function initialize() {
  displayCartItems();
  displayCartDetails();
  cart.subscribe(displayCartDetails);
  cart.subscribe(displayCartItems);
}

function increaseProductQuantity(id, quantity){
  var quantity = quantity + 1;
  cart.changeQuantity(id, quantity);
};

function decreaseProductQuantity(id, quantity){
  if(quantity > 1){
    var quantity = quantity - 1;
    cart.changeQuantity(id, quantity);
  }
};

initialize();
