// Ouput?

(function (x) {
  return (function (y) {
    console.log(x); // 1
  })(2);
})(1);

// searches the parent scope -> closures
