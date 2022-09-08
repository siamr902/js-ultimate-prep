const game = {
  name: "Uncharted",
  price: 50,
};

function purchaseGame(currency) {
  console.log(`Purchased ${this.name} for ${this.price} in ${currency}`);
}
// ***********************************************************************//

// call
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") throw new Error();

  context.fn = this;
  context.fn(...args);
};

purchaseGame.myCall(game, "USD");

// apply
Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") throw new Error();

  if (!Array.isArray(args))
    throw new TypeError("CreateListFromArrayLike called on non-object");

  context.fn = this;
  context.fn(...args);
};

purchaseGame.myApply(game, ["USD"]);

// bind
Function.prototype.myBind = function (context = {}, args = []) {
  if (typeof this !== "function") throw new Error();

  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs)
  }
};

const newFunc = purchaseGame.myBind(game);
