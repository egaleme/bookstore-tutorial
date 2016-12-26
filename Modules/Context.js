var Backend = require("./Backend");
var Observable = require("FuseJS/Observable");

var store = Observable();
var books = Observable();
var cart = Observable();
var isCartEmpty = Observable(true);
var total = Observable(0);
var totalAmount = Observable();
var book = Observable();

function getBooks() {
  Backend.getBooks()
  .then(function(data) {
    store.replaceAll(data)
    store.forEach(function(item) {
      item.isRemoved = Observable(false)
      books.add(item)
    })
  })
  .catch(function(error) {
    console.log("can not load books")
  })
}

getBooks();

function addToCart(id, cost, title, picture, author) {
  var isRemoved = Observable(false)
  cart.add({id: id, isRemoved: isRemoved, cost: cost, title: title, picture: picture, author: author, qty:1})
  total.value = 0
  cart.forEach(function(item) {
    total.value = (total.value + item.cost)
  })

  isCartEmpty.value = cart.length ? false : true;
  totalAmount.value = "You Paid : $" + total.value.toFixed(2);
}

function removeFromCart(item) {
  cart.remove(item)
  total.value = 0
  cart.forEach(function(item) {
    total.value = (total.value + item.cost )
  })

  isCartEmpty.value = cart.length ? false : true
  totalAmount.value = "You Paid : $" + total.value.toFixed(2);
}

module.exports = {
  book,
  books,
  addToCart,
  isCartEmpty,
  totalAmount,
  removeFromCart,
  cart
}
