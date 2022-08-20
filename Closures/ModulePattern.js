// What is a module Pattern?

const Module = (function () {
  function privateMethod() {
    console.log("private");
  }

  return {
    publicMethod: function () {
      console.log("public");
    },
  };
})();

Module.publicMethod();
Module.privateMethod(); // error
