const display = document.getElementById("display");

function clearDisplay() {
  display.value = "";
}

function appendValue(value) {
  display.value += value;
}

function calculate() {
  display.value = eval(display.value);
}

function deleteValue() {
  display.value = display.value.slice(0, -1);
}

function calculatePercentage() {
  const value = display.value;
  const percentage = value / 100;
  display.value = percentage;
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    calculate();
  } else if (event.key === "Escape") {
    clearDisplay();
  } else if (event.key === "Backspace") {
    deleteValue();
  }

  if (
    (event.key >= "0" && event.key <= "9") ||
    event.key === "." ||
    event.key === "+" ||
    event.key === "-" ||
    event.key === "*" ||
    event.key === "/" ||
    event.key === "%" ||
    event.key === "="
  ) {
    appendValue(event.key);
  }
});
