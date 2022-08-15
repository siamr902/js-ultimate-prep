function updateElementText(id) {
  return function (content) {
    document.querySelector("#" + id).textContent = content;
  };
}

const updateHeader = updateElementText("hi");

updateHeader("This does indeed work");
