var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
 //initialize object
 var newCart = {
   itemName: "itemName",
   itemPrice: "itemPrice"
 }; 
  var price = Math.floor(Math.random()*Math.floor(100));
  newCart.itemName = [item];
  newCart.itemPrice = price;
  cart.push(newCart);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var length = cart.length;
  var list = [];
  var i=0;
  if (length === 0) {
    return `Your shopping cart is empty.`
  } else if (length === 1){
    list.push(` ${cart[i].itemName} at $${cart[i].itemPrice}.`);
   return `In your cart, you have${list.toString()}`;
    } while (i < length-1){
      list.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
      i++;
      } if (i === length-1){
        list.push(` and ${cart[i].itemName} at $${cart[i].itemPrice}`);
        } return `In your cart, you have${list.toString()}.`;
    }

function total() {
  var length = cart.length;
  var total = 0;
  for (var i=0; i < length; i++){
    var price = parseInt(cart[i].itemPrice, 10);
    total = total + price;
  } return total;
}

function removeFromCart(item) {
  var length = cart.length;
  var items = [];
  
    for (var i=0; i < length; i++){
    //items[i] = cart[i].itemName;
    items.push(cart[i].itemName);
    } 
    
   
    for (var n=0; n < length; n++){
    if (items[n] !== item){ 
    } else if (items[n] === item){
      cart.splice(n, 1);
      //var newCart = cart;s
     // return newCart;
    } else return "That item is not in your cart."
  } 
}
 
  


function placeOrder(cardNumber) {
  // write your code here
}
