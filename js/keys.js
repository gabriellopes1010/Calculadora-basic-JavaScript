import calculate from "./calculate.js";

document.querySelector("#input")

export function charkeyBtnFunction(ev) {
  const value = ev.currentTarget.dataset.value;
  input.value += value;
}

export function clearBtnFuncion() {
  input.value = "";
  input.focus();
}

export function eventKeys(ev) {
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%"];

  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }

  //apagar caracter
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }

  if (ev.key === "Enter") {
    calculate();
  }
}