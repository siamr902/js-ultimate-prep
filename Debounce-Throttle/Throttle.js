const button = document.getElementById("click");

const randomColor = () => {
  const colors = [
    "blue",
    "red",
    "green",
    "yellow",
    "gray",
    "purple",
    "orange",
    "violet",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
};

const throttle = (fn, delay) => {
  let last = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    return fn(...args);
  };
};

button.addEventListener(
  "click",
  throttle(() => {
    const color = randomColor();
    document.body.classList.remove(...document.body.classList);
    document.body.classList.add(color);
  }, 2000)
);
