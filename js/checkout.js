
var cart = new styleTagCart(config);

var savedLocations = JSON.parse(localStorage.getItem('savedLocations'));

function fillform(address) {
  document.getElementById("firstName").value = address.firstName;
  document.getElementById("lastName").value = address.lastName;
  document.getElementById("phoneNo").value = address.phoneNo;
  document.getElementById("otherNo").value = address.otherNo;
  document.getElementById("streetAddress").value = address.streetAddress;
  document.getElementById("town").value = address.town;
  document.getElementById("state").value = address.state;
  document.getElementById("pincode").value = address.pincode;
  document.getElementById("landmark").value = address.landmark;
}

function genrateAddressTemplate(addressLocation,index) {
  var template = '<div class="col-12 address-item"><div class="col-8"><p class="address">'+addressLocation+'</p></div><div class="col-4"><a class="checkout-button" onclick="useAddressAction('+index+')">Use Address</a></div></div>';
  return template;
}

function displaySavedLocations() {
  savedLocations.forEach(function(address,index){
    var addressLocation = generateAddressString(address);
    var content = genrateAddressTemplate(addressLocation,index);
    document.getElementById("address-list").innerHTML += content;
  });
}

function generateAddressString(address) {
  return address.firstName +" "+address.lastName +","+ address.phoneNo+"," + address.streetAddress;
}

function useAddressAction(addressId) {
  fillform(addressList[addressId]);
}

cart.subscribe(fillSideCartDetails);

fillSideCartDetails();
displaySavedLocations();
