var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

//Tests 1-6 -- Passed
function addToCart(item) {
  let price = (Math.floor(Math.random() * 100) + 1);
  var newItem = {itemName: item, itemPrice: price};
  cart.push(newItem);
  return `${item} has been added to your cart.`;
}

//Tests 7-10 -- Passed
function viewCart() {
  if(cart.length <= 0) {
    return "Your shopping cart is empty.";
  }else if(cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }else if(cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  }else {
    var newArray = [];
    for(let i = 0; i < cart.length - 1; i++) {
      newArray.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
    }return `In your cart, you have${newArray}, and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`;
    }
}

//Test 11 -- Passed - but see if you can reduce
function total() {
  var priceArray = [];
  for(var price=0; price<cart.length; price++) {
    priceArray.push(cart[price].itemPrice);
  }
  var totalPrice = 0;
  for(var total=0; total<priceArray.length; total++){
    totalPrice += priceArray[total];
  }return totalPrice;
}

//Tests 12 and 13
var a = [{name:"bull", text: "sour"},
    { name: "tom", text: "tasty" },
    { name: "tom", text: "tasty" }
]
var index = a.findIndex(x => x.name=="bob")
// here you can check specific property for an object whether it exist in your array or not

if (index === -1){
    a.push({your_object});
}
else console.log("object already exists")

function removeFromCart(item) {
  var index = cart.findIndex()
}

function removeFromCart(item) {
  if(item in cart === false) {
    return "That item is not in your cart.";
  }else {
    for(var identity=0; identity<=cart.length; identity++) {
      if(cart[identity].itemName === item) {
        cart.splice(identity,1);
      }else {
        return "I'm not sure what to do next.";
      }
    }
  }
}

//Tests 14-16 -- Passed
function placeOrder(cardNumber) {
  if(cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  }else {
    var yourTotal = total();
    cart = [];
    return `Your total cost is $${yourTotal}, which will be charged to the card ${cardNumber}.`;
  }
}
