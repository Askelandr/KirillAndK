"use strict";
// Секция калькулятора
// Инициализация кнопок действий
// let plusButton = document.getElementById("plusButton");
// let minusButton = document.getElementById("minusButton");
// let divisionButton = document.getElementById("divisionButton");
// let multiplyButton = document.getElementById("multiplyButton");
// let dellButton = document.getElementById("dellButton");

let operationBatton = document.getElementsByClassName("button-click");
// Инициализация полей ввода
let firstNumber = document.getElementById("first-number");
let secondNumber = document.getElementById("second-number");
// Инициализация поля вывода итога
let resultCalc = document.getElementById("calk-result");
let operation = document.getElementById("operation");

//Функция отображения выполняемого арифметического действия
function getArithmeticAction(number) {
  operation.innerHTML = number.innerHTML;
}

// Функция инициализации ввода знака действия
function arithmeticAction(number) {
  let arifmeticAction = number.innerHTML;
  return arifmeticAction;
}

function culcAction(button) {
  let nunber1 = Number(firstNumber.value);
  let nunber2 = Number(secondNumber.value);
  if (firstNumber.value === "" || secondNumber.value === "") {
    resultCalc.innerHTML = "Введите два числа";
  } else if (arithmeticAction(button) === "+") {
    let result = nunber1 + nunber2;
    resultCalc.innerHTML = "=  " + result;
    getArithmeticAction(button);
  } else if (arithmeticAction(button) === "-") {
    let result = nunber1 - nunber2;
    resultCalc.innerHTML = "=  " + result;
    getArithmeticAction(button);
  } else if (arithmeticAction(button) === "/") {
    let result = nunber1 / nunber2;
    resultCalc.innerHTML = "=  " + result;
    getArithmeticAction(button);
  } else if (arithmeticAction(button) === "*") {
    let result = nunber1 * nunber2;
    resultCalc.innerHTML = "=  " + result;
    getArithmeticAction(button);
  } else {
    resultCalc.innerHTML = "";
    operation.innerHTML = "";
    firstNumber.value = "";
    secondNumber.value = "";
  }
}

// Определения элемента в котором произошло событие

function onOperationButtonClick(eventObjekt) {
  let operation = eventObjekt.target;
  culcAction(operation);
}

//Инициализация массива кнопок

// let operationBatton = [
//   plusButton,
//   minusButton,
//   divisionButton,
//   multiplyButton,
//   dellButton,
// ];

//Цикл выполнения присвоения Listener на кнопку
for (let i = 0; i < operationBatton.length; i++) {
  operationBatton[i].addEventListener("click", onOperationButtonClick);
}

//Выполнение арифметических действий по нажатию на кнопку.
// plusButton.addEventListener("click", onOperationButtonClick);
// minusButton.addEventListener("click", onOperationButtonClick);
// divisionButton.addEventListener("click", onOperationButtonClick);
// multiplyButton.addEventListener("click", onOperationButtonClick);
// dellButton.addEventListener("click", onOperationButtonClick);
