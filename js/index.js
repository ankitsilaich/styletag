  var cart = new styleTagCart(config);
  // cart.clearItems();
  cart.addItems(productList);

  function generateCartItem(product) {
    var template = '<div class="cart-item"><div class="cart-heading-item"><p>Random Product 1</p></div><div class="cart-heading-item"><p>Rs '+product.price+'</p></div><div class="cart-heading-item"><p>'+product.quantity+'</p></div><div class="cart-heading-item"><p>'+product.brand+'<span onclick="cart.removeItem('+product.id+')">Remove</span></p></div></div>';
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

  initialize();
