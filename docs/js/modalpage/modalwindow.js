"use strict";
let modalInfo = {
  header: "Получить приложение",
  text: "Для того что бы получить доступ к загрузке введите свое имя и email",
};
let body = document.querySelector(".body");
let clickButton = document.querySelector("#click-button");

clickButton.addEventListener("click", (e) => {
  body.style.overflow = "hidden";
  let modalPage = document.createElement(`div`);
  modalPage.className = "modal-window";
  body.prepend(modalPage);
  let modalWindow = document.createElement(`div`);
  modalWindow.className = "modal";
  modalPage.append(modalWindow);

  body.setAttribute("tabindex", "-1");
  modalWindow.focus();

  let header = document.createElement(`h2`);
  header.className = "modal-header";
  modalWindow.append(header);
  header.innerHTML = modalInfo.header;

  document.addEventListener("click", closeModal());
  function closeModal() {
    document.addEventListener("click", (e) => {
      if (e.target === modalPage) {
        modalPage.remove();
        body.style.overflow = "";
      }
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      modalPage.remove();
      body.style.overflow = "";
    }
  });
});
