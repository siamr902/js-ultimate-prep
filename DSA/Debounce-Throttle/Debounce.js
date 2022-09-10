// delay triggers once you stop -> so clicking 100 times won't trigger if there wasn't
// sufficient time for the delay between clicks
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

const debounce = (fn, delay) => {
  let timeoutId;
  return function (...args) {
    timoutId && clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

button.addEventListener(
  "click",
  debounce(() => {
    const color = randomColor();
    document.body.classList.remove(...document.body.classList);
    document.body.classList.add(color);
  }, 2000)
);
