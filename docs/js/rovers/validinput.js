"use strict";
let button = document.getElementById("putBattonGetData");
let elem = document.getElementById("curiosity");
let elem1 = document.getElementById("opportunity");
let elem2 = document.getElementById("spirit");

let errorCuriosity = elem.querySelector(".error-input");
let errorOpportunity = elem1.querySelector(".error-input");
let errorSpirit = elem2.querySelector(".error-input");

let input = document.forms[0].curiosity;
let input1 = document.forms[1].opportunity;
let input2 = document.forms[2].spirit;
console.log(input, input2);

input.onblur = function () {
  if (input.value % 1 != 0 || input.value === "") {
    errorCuriosity.style.opacity = 1;

    button.disabled = true;
  } else {
    button.disabled = false;
    errorCuriosity.style.opacity = 0;
  }
};
input1.onblur = function () {
  if (input1.value % 1 != 0 || input1.value === "") {
    errorOpportunity.style.opacity = 1;

    button.disabled = true;
  } else {
    button.disabled = false;
    errorOpportunity.style.opacity = 0;
  }
};
console.log(input1.onblur);

input2.onblur = function () {
  if (input2.value % 1 != 0 || input2.value === "") {
    errorSpirit.style.opacity = 1;

    button.disabled = true;
  } else {
    button.disabled = false;
    errorSpirit.style.opacity = 0;
  }
};
