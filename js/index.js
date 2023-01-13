import calculate from "./calculate.js";
import copyToClipboard from "./copyToClipboard.js";
import { charkeyBtnFunction, clearBtnFuncion, eventKeys } from "./keys.js";
import themeSwitcher from "./themeSwitcher.js";


document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", charkeyBtnFunction);
});
document.getElementById("clear").addEventListener("click", clearBtnFuncion);
document.getElementById("input").addEventListener("keydown", eventKeys);
document.getElementById("equal").addEventListener("click", calculate);
document.getElementById("copyToClipboard").addEventListener("click", copyToClipboard);
document.getElementById("themeSwitcher").addEventListener("click", themeSwitcher);
