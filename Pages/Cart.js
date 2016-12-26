var Context = require("Modules/Context");

function remove(args) {
  var item = args.data
  Context.removeFromCart(item)
}
function clicked(args) {
  var bo = args.data
  bo.isRemoved.value = !bo.isRemoved.value
}

function undo(args) {
  var it = args.data
  it.isRemoved.value="false"
}

function goHome() {
  router.goto("home")
}

var todaysDate = "Purchases made on " + new Date().toDateString() + " at " + new Date().toLocaleTimeString();
var qty = Context.cart.count();

module.exports = {
  undo: undo,
  clicked: clicked,
  goHome: goHome,
  noItems: Context.isCartEmpty,
  cart: Context.cart,
  remove: remove,
  todaysDate: todaysDate,
  totalAmount: Context.totalAmount,
  qty: qty
}
