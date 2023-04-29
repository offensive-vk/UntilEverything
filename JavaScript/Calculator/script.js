let display = document.getElementById("display");

function insertDigit(digit) {
  display.value += digit;
}

function clearDisplay() {
  display.value = "";
}

function deleteDigit() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}
