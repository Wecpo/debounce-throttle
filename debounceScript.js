const debounceInput = document.querySelector("#debounceInput");
const deboncedValueSpan = document.querySelector("#debouncedValue");

let timeoutId = 0;

const debounceFunc = (event) => {
  const value = event.target.value;

  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => (deboncedValueSpan.textContent = value), 1000);
};

debounceInput.addEventListener("input", debounceFunc);

debounceInput.addEventListener(
  "blur",
  () => debounceInput.removeEventListener("input", debounceFunc),
  {
    once: true,
  }
);
