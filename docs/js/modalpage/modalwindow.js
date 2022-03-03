"use strict";
let modalInfo = {
  header: "Получить приложение",
  text: "Для того что бы получить доступ к загрузке введите свое имя и email",
};
let body = document.querySelector(".body");
let clickButton = document.querySelector("#click-button");

clickButton.addEventListener("click", (e) => {
  console.log("Привет");
  let modalPage = document.createElement(`div`);
  modalPage.className = "modal-window";
  body.prepend(modalPage);
  let modalWindow = document.createElement(`div`);
  modalWindow.className = "modal";
  modalPage.append(modalWindow);
  let header = document.createElement(`h2`);
  header.className = "modal-header";
  modalWindow.append(header);
  header.append(modalInfo.header);
});
