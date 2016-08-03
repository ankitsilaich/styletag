var cart = new styleTagCart(config);
var validCoupons = ['STYLETAG50','FLAT20'];
var couponValue;

function checkValidCoupon() {
    couponValue = document.getElementById('promo-code').value;
    if(validCoupons.indexOf(couponValue) === -1){
      return false;
    }
    return true;
}

function updateCart() {
  document.getElementById('coupon-value').innerHTML = couponValue;
  document.getElementById('total-discount').innerHTML = cart.getTotalDiscount();
}

function applyCoupon() {
  if(checkValidCoupon()) {
    cart.applyDiscount(20);
    document.getElementById('coupon-error').style.display = 'none';
    document.getElementById('coupon-success').style.display = 'block';
    document.getElementById('success-message').style.display = 'block';
    document.getElementById('total-discount-container').style.display = 'block';
    updateCart();
  }else {
    document.getElementById('success-message').style.display = 'none';
    document.getElementById('coupon-error').style.display = 'block';
  }
}

function removeCoupon() {
  updateCart();
  cart.removeDiscount();
  document.getElementById('coupon-success').style.display = 'none';
  document.getElementById('promo-code').value = '';
  document.getElementById('success-message').style.display = 'none';
  document.getElementById('total-discount-container').style.display = 'none';

}

fillSideCartDetails();
cart.subscribe(updateCart);
cart.subscribe(fillSideCartDetails);
