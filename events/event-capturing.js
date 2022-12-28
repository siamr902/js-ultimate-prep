const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

// capture goes in reverse order -> div, form, button
// if we only put capture true on the form, rest will bubble and order will be
// form -> button -> div

div.addEventListener(
  "click",
  () => {
    alert("div clicked");
  },
  { capture: true }
);
form.addEventListener(
  "click",
  () => {
    alert("form clicked");
  },
  { capture: true }
);
button.addEventListener(
  "click",
  () => {
    alert("button clicked");
  },
  { capture: true }
);