function displayProducts() {
  var content = '';
  cart.getItems().forEach(function(product){
    content += genrateProductTemplate(product);
  });
  document.getElementById("product-container").innerHTML = content;
}

function fillSideCartDetails() {
  document.getElementById('grand-total').innerHTML = cart.getGrandTotal();
  document.getElementById('service-tax').innerHTML = cart.getServiceTax();
  document.getElementById('delivery-charges').innerHTML = cart.getDeliveryCharges();
  displayProducts();
}


function genrateProductTemplate(product) {
  var template = '<div class="cart-sidebar-items"><p>'+product.name+'</p><span>Rs '+(product.price * product.quantity)+'</span></div>';
  return template;
}
