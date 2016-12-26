var Context = require("Modules/Context");

var title = Context.book.map(function(x) {
  return x.title
});

var id = Context.book.map(function(x) {
  return x.id
});

var publicationdate = Context.book.map(function(x) {
  return x.publicationdate
});

var author = Context.book.map(function(x) {
  return x.author
});

var authorbio = Context.book.map(function(x) {
  return x.authorbio
});

var picture = Context.book.map(function(x) {
  return x.picture
});

var cost = Context.book.map(function(x) {
  return x.cost
});

var introduction = Context.book.map(function(x) {
  return x.introduction
});

var price = Context.book.map(function(x) {
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
