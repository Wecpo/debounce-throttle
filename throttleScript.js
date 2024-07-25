const throttleInput = document.querySelector("#throttleInput");
const throttledValueSpan = document.querySelector("#throttledValue");

let isThrottle = false;

Function.prototype.throttleFunc = function () {
  const value = event.target.value;
  if (isThrottle) return;

  isThrottle = true;

  setTimeout(() => {
    throttledValueSpan.textContent = value;
    isThrottle = false;
  }, 1000);
};

throttleInput.addEventListener("input", Function.throttleFunc);

throttleInput.addEventListener(
  "blur",
  () => throttleInput.removeEventListener("input", Function.throttleFunc),
  {
    once: true,
  }
);
