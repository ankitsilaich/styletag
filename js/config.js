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
  id: 2,
  name: 'Random Product 2',
  price: 2000,
  quantity: 1,
  brand: 'Nike'
},
{
  id: 3,
  name: 'Random Product 2',
  price: 20,
  quantity: 2,
  brand: 'Reebok'
},
{
  id: 4,
  name: 'Random Product 2',
  price: 75,
  quantity: 9,
  brand: 'Adidas'
},{
  id: 5,
  name: 'Random Product 2',
  price: 130,
  quantity: 2,
  brand: 'Wrogn'
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
