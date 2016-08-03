var styleTagCart = function(config) {
  this.items = [];
  this.callbacks = [];
  this.addItem = function(item) {
    this.items.push(item);
    localStorage.setItem('Products', JSON.stringify(this.items));
    this.refresh();
  };

  this.clearItems = function () {
    this.items = [];
      localStorage.setItem('Products', JSON.stringify(this.items));
  };

  this.addItems = function(items) {
    this.items = this.items.concat(items);
    localStorage.setItem('Products', JSON.stringify(this.items));
    this.refresh();
  };

  this.getItems = function() {
    return JSON.parse(localStorage.getItem('Products'));
  };

  this.changeQuantity = function (itemId,quantity) {
    if(this.searchItem(itemId) !== -1) {
      var index = this.searchItem(itemId);
      var newItems = this.getItems();
      newItems[index].quantity = quantity;
    };
    localStorage.setItem('Products', JSON.stringify(newItems));
    this.refresh();
  };

  this.subscribe = function (callback) {
    this.callbacks.push(callback);
  };

  this.refresh = function(){
    if(this.callbacks) {
      for(var i = 0;i < this.callbacks.length; i++){
        this.callbacks[i]();
      }
    }
  };

  this.getSubTotal = function() {
    var cartTotal = 0;
    this.getItems().forEach(function(product){
      var productTotal = product.price * product.quantity;
      cartTotal = cartTotal + productTotal;
    });
    return cartTotal;
  };

  this.getServiceTax = function () {
    return (this.getSubTotal() * config.serviceTax) / 100;
  };

  this.getDeliveryCharges = function () {
    if(this.getSubTotal() < config.deliverythreshold &&  this.getSubTotal() > 0){
      return config.deliveryCharges;
    }
    return 0;
  };

  this.searchItem = function(itemId) {
    for (var i=0; i < this.getItems().length; i++) {
        if (this.getItems()[i].id === itemId) {
            return i;
        }
    }
    return -1;
  };

  this.removeItem = function (itemId) {
    if(this.searchItem(itemId) !== -1) {
      var index = this.searchItem(itemId);
      var newItems = this.getItems();
      newItems.splice(index,1);
    }
    localStorage.setItem('Products', JSON.stringify(newItems));
    this.refresh();
  };

  this.getTotalDiscount = function() {
    if(this.discount){
      var cartTotal = ((this.getSubTotal() + this.getServiceTax() + this.getDeliveryCharges()) * this.discount) / 100;
      return Number((parseInt(cartTotal)).toFixed(1));
    }
    return 0;
  };

  this.getGrandTotal = function () {
    return this.getSubTotal() + this.getServiceTax() + this.getDeliveryCharges() - this.getTotalDiscount();
  };

  this.initialize = function() {

  };

  this.applyDiscount = function(discount){
    this.discount = discount;
    this.refresh();
  };

  this.removeDiscount = function(){
    this.discount = null;
    this.refresh();
  };

  this.initialize();
};
