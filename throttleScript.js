const throttleInput = document.querySelector("#throttleInput");
const throttledValueSpan = document.querySelector("#throttledValue");

let isThrottle = false;

const throttleFunc = (event) => {
  const value = event.target.value;
  if (isThrottle) return;

  isThrottle = true;

  setTimeout(() => {
    throttledValueSpan.textContent = value;
    isThrottle = false;
  }, 1000);
};

throttleInput.addEventListener("input", throttleFunc);

throttleInput.addEventListener(
  "blur",
  () => throttleInput.removeEventListener("input", throttleFunc),
  {
    once: true,
  }
);
