var Context = require("Modules/Context");

var book = this.Parameter;
var title = book.map(function(x) {
  return x.title
});

var id = book.map(function(x) {
  return x.id
});

var publicationdate = book.map(function(x) {
  return x.publicationdate
});

var author = book.map(function(x) {
  return x.author
});

var authorbio = book.map(function(x) {
  return x.authorbio
});

var picture = book.map(function(x) {
  return x.picture
});

var cost = book.map(function(x) {
  return x.cost
});

var introduction = book.map(function(x) {
  return x.introduction
});

var price = book.map(function(x) {
  return "Price : $" +x.cost
});

function addToCart() {
  Context.addToCart(id.value, cost.value, title.value, picture.value, author.value);
  router.goBack()
}

module.exports = {
  title,
  id,
  introduction,
  picture,
  cost,
  authorbio,
  publicationdate,
  author,
  addToCart,
  price
}
