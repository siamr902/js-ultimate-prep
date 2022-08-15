// we can call the function from up here, but not the variable
// the function gets hoisted to the top

const subtract = (n) => n - 2;

function add(n) {
  return n + 2;
}

// ************************************* //

var x = 21;

var fun = function () {
  console.log(x); // takes x in current scope, where it is not initatlized
  var x = 20;
};

fun();
