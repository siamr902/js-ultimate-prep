function createFunc() {
  const name = "Daniel";
  function displayName(str) {
    console.log(str + name);
  }
  return displayName;
}

createFunc()("Hi ");
