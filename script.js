let number = 0;

const numberText = document.getElementById("number");

function increase() {
  number++;
  numberText.textContent = number;
}
function reset() {
    number = 0;
    numberText.textContent = number;
  }
