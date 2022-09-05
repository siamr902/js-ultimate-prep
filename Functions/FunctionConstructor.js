var a = 100;
function createFunction() {
  var a = 200;
  return new Function("return a");
}

console.log(createFunction()()) // 100 -> do not create closures but created in the global scope
