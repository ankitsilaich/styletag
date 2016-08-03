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

var addressList = [{
  firstName: "Ankit",
  lastName : "Kumar",
  phoneNo : "8960274028",
  otherNo : "3213222133",
  streetAddress : "A-91,Basant Vihar",
  town : "Jhunjhunu",
  state : "Rajasthan",
  pincode : "333001",
  landmark : "Near J.B. Shah College"
},
{
  firstName: "Ankit",
  lastName : "Kumar",
  phoneNo : "8960274028",
  otherNo : "3213222133",
  streetAddress : "A-91,Basant Vihar",
  town : "Jhunjhunu",
  state : "Rajasthan",
  pincode : "333001",
  landmark : "Near J.B. Shah College"
}];

localStorage.setItem('savedLocations', JSON.stringify(addressList));
