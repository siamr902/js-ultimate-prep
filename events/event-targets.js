// know the difference between e.target, e.currentTarget, and this.target


const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener("click", test);
form.addEventListener("click", test);
button.addEventListener("click", test);

function test(e) {
    alert(e.currentTarget.tagName);
    alert(e.target.tagName);
    alert(this.target.tagName);
}

// currentTarget bubbles, whereas target refers to the original target
// this works the same as current target