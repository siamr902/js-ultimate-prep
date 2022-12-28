// Event Bubbling

const Explanation = "Events are executed from bottom up, which means the order will be as follows: button, form, and div. This is the default behavior."

const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener("click", () => alert("div clicked"));
form.addEventListener("click", () => alert("form clicked"));
button.addEventListener("click", () => alert("button clicked"));

// clicking on button would result in "button clicked" "form clicked" "div clicked"
// clicking on form would result in "form clicked" "div clicked"

const Exceptions = "Events that do not buble are said to be 'captured' events. Examples include focus, blur, and submit: they do not propagate to any parent elements."
