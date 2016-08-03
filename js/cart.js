var styleTagCart = function(config) {
  this.items = [];
  this.callbacks = [];

  // adding items into cart
  this.addItem = function(item) {
    this.items.push(item);
    localStorage.setItem('Products', JSON.stringify(this.items));
    this.refresh();
  };

  //add array of items into cart
  this.addItems = function(items) {
    this.items = this.items.concat(items);
    localStorage.setItem('Products', JSON.stringify(this.items));
    this.refresh();
  };

  // removing of particular item form cart
  this.removeItem = function (itemId) {
    var newItems = this.getItems();
    if(this.searchItem(itemId) !== -1) {
      var index = this.searchItem(itemId);
      newItems.splice(index,1);
    }
    localStorage.setItem('Products', JSON.stringify(newItems));
    this.refresh();
  };

  // getter method for items
  this.getItems = function() {
    return JSON.parse(localStorage.getItem('Products'));
  };

  // getter method for subtotal calculation
  this.getSubTotal = function() {
    var cartTotal = 0;
    this.getItems().forEach(function(product){
      var productTotal = product.price * product.quantity;
      cartTotal = cartTotal + productTotal;
    });
    return cartTotal;
  };

  // getter method for service tax calculation
  this.getServiceTax = function () {
    return (this.getSubTotal() * config.serviceTax) / 100;
  };

  // getter method for delivery charges
  this.getDeliveryCharges = function () {
    if(this.getSubTotal() < config.deliverythreshold &&  this.getSubTotal() > 0){
      return config.deliveryCharges;
    }
    return 0;
  };

  // getter method for calculatin total discount
  this.getTotalDiscount = function() {
    if(this.discount){
      var cartTotal = ((this.getSubTotal() + this.getServiceTax() + this.getDeliveryCharges()) * this.discount) / 100;
      return Number((parseInt(cartTotal)).toFixed(1));
    }
    return 0;
  };

  // getter method for grand total calculation
  this.getGrandTotal = function () {
    return this.getSubTotal() + this.getServiceTax() + this.getDeliveryCharges() - this.getTotalDiscount();
  };

  //clearing items from cart
  this.clearItems = function () {
    this.items = [];
      localStorage.setItem('Products', JSON.stringify(this.items));
  };

  // apply discount in the cart
  this.applyDiscount = function(discount){
    this.discount = discount;
    this.refresh();
  };

  // removal of discount from the cart
  this.removeDiscount = function(){
    this.discount = null;
    this.refresh();
  };

  // updatiion of product quantity for a particular product in cart
  this.changeQuantity = function (itemId,quantity) {
    if(this.searchItem(itemId) !== -1) {
      var index = this.searchItem(itemId);
      var newItems = this.getItems();
      newItems[index].quantity = quantity;
    };
    localStorage.setItem('Products', JSON.stringify(newItems));
    this.refresh();
  };

  // event listeners to listen on cart
  this.subscribe = function (callback) {
    this.callbacks.push(callback);
  };

  // to refresh the values in the cart and call all the listners to update
  this.refresh = function(){
    if(this.callbacks) {
      for(var i = 0;i < this.callbacks.length; i++){
        this.callbacks[i]();
      }
    }
  };

  // searching of particular item in the cart with product id
  this.searchItem = function(itemId) {
    for (var i=0; i < this.getItems().length; i++) {
        if (this.getItems()[i].id === itemId) {
            return i;
        }
    }
    return -1;
  };

  // this.initialize = function() {
  //
  // };
  //
  // this.initialize();
};
