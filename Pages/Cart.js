var Context = require("Modules/Context");

function remove(args) {
  var item = args.data
  Context.removeFromCart(item)
}

function goHome() {
  router.goto("home")
}

var todaysDate = "Purchases made on " + new Date().toDateString() + " at " + new Date().toLocaleTimeString();
var qty = Context.cart.count();

module.exports = {
  goHome: goHome,
  noItems: Context.isCartEmpty,
  cart: Context.cart,
  remove: remove,
  todaysDate: todaysDate,
  totalAmount: Context.totalAmount,
  qty: qty
}
