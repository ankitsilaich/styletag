  var config  = {
    serviceTax: 14,
    deliveryCharges: 50,
    deliverythreshold: 250
  };

  var productList = [{
    id: 1,
    name: 'Random Product 1',
    price : 100,
    quantity: 2,
    brand: 'Puma'
  },
  {
    id: 123,
    name: 'Random Product 2',
    price: 200,
    quantity: 5,
    brand: 'Reebok'
  }];

  var cart = new styleTagCart(config);
  cart.addItems(productList);
  // console.log(cart.removeItem(123));
  function generateCartItem(product) {
    var template = '<div class="cart-item"><div class="cart-heading-item"><p>Random Product 1</p></div><div class="cart-heading-item"><p>Rs '+product.price+'</p></div><div class="cart-heading-item"><p>'+product.quantity+'</p></div><div class="cart-heading-item"><p>'+product.brand+'<span onclick="cart.removeItem('+product.id+')">Remove</span></p></div></div>';
    return template;
  }

  function displayCartItems() {
    var container = document.getElementById('cart-items-container');
    var html = '';
    cart.getItems().forEach(function(product){
      html += generateCartItem(product);
    });
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
