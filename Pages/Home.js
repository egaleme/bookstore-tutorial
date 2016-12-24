var Context = require("Modules/Context");

function getBookDetail(args) {
  var book = args.data
  router.push("detail", book)
}

function goToCart() {
  router.goto("cart")
}
module.exports = {
  books: Context.books,
  getBookDetail: getBookDetail,
  goToCart: goToCart
}
