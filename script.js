const generateBtn = document.querySelector(".generate-btn");
const input = document.querySelector("input");
const copyI = document.querySelector(".fa-copy");
const alertContainer = document.querySelector(".alert-container");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");

const generatePassword = () => {
  let key = "";
  let uppercase = "";
  let lowercase = "";
  const numbers = "0123456789";
  const symbols = "!@$%^&*()_+-{};:,.<>?/~`'";

  for (let i = 65; i <= 90; i++) {
    uppercase += String.fromCharCode(i);
    lowercase += String.fromCharCode(i).toLowerCase();
  }

  if (uppercaseEl.checked) key += uppercase;
  if (lowercaseEl.checked) key += lowercase;
  if (numbersEl.checked) key += numbers;
  if (symbolsEl.checked) key += symbols;

  if (key === "") {
    alert("Please select at least one option");
    return;
  }

  let password = "";
  for (let i = 0; i < parseInt(lengthEl.value); i++) {
    const randomNumber = Math.floor(Math.random() * key.length);
    password += key.substring(randomNumber, randomNumber + 1);
  }
  input.value = password;
};

const copyPassword = () => {
  input.select();
  input.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(input.value);
};

generateBtn.addEventListener("click", () => generatePassword());

copyI.addEventListener("click", () => {
  copyPassword();
  if (input.value) {
    alertContainer.classList.remove("active");
    setTimeout(() => {
      alertContainer.classList.add("active");
    }, 2000);
  }
});
