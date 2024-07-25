const debounceInput = document.querySelector("#debounceInput");
const deboncedValueSpan = document.querySelector("#debouncedValue");

let timeoutId = 0;

Function.prototype.debounceFunc = function () {
  const value = event.target.value;

  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => (deboncedValueSpan.textContent = value), 1000);
};

debounceInput.addEventListener("input", Function.debounceFunc);

debounceInput.addEventListener(
  "blur",
  () => debounceInput.removeEventListener("input", Function.debounceFunc),
  {
    once: true,
  }
);
