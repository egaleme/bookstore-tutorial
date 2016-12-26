var Context = require("Modules/Context");

function getBookDetail(args) {
  Context.book.value = args.data
  router.push("detail")
}

function goToCart() {
  router.goto("cart")
}
module.exports = {
  books: Context.books,
  getBookDetail: getBookDetail,
  goToCart: goToCart
}
