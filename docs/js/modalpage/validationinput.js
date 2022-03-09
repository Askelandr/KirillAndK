"use strict";

let validInputFooter = document.querySelector("#btn-footer");
validInputFooter.addEventListener("click", (e) => {
  validInput("#input-footer", "#email-error-footer");
});

function validInput(selectorInput, selectorError) {
  let inputGetEmail = document.querySelector(selectorInput);
  let errorEmailInput = document.querySelector(selectorError);
  let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  let myMail = inputGetEmail.value;
  let valid = re.test(myMail);
  let i = 0;

  if (inputGetEmail.value === "") {
    errorEmailInput.innerHTML = "Поле должно быть заполнено";
    errorEmailInput.style.opacity = 1;
  } else if (!valid) {
    errorEmailInput.style.opacity = 0;
    errorEmailInput.innerHTML = "Введен некорректный email";
    errorEmailInput.style.opacity = 1;
  } else {
    errorEmailInput.style.opacity = 0;
    inputGetEmail.value = "";
  }
}
