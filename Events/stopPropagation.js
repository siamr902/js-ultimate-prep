// if we want to prevent event bubbling, we can use stopPropagation()

const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener("click", () => alert("div clicked"));
// will log button clicked form clicked
form.addEventListener("click", (e) => {
  e.stopPropagation();
  alert("form clicked");
});
button.addEventListener("click", () => alert("button clicked"));
