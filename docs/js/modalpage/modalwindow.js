"use strict";
let modalInfo = {
  header: "Получить приложение",
  text: "Для того что бы получить доступ к загрузке введите свое имя и email",
  input: `<div class="modal-input">
            <div class="wrapper_inpt">
                <input type="text" placeholder="Введите свое  имя">
            </div>
            <div class="wrapper_inpt">
                <input type="text" placeholder="Введите свой email">
                <div class="btn_area">
                    ЗАГРУЗКА
                </div>
            </div>
          </div>`,
  button: "	&#10060",
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

  modalWindow.focus();
  modalWindow.innerHTML = modalInfo.input;

  let text = document.createElement(`h3`);
  text.className = "modal-text";
  text.innerHTML = modalInfo.text;
  modalWindow.prepend(text);

  let header = document.createElement(`h2`);
  header.className = "modal-header";
  modalWindow.prepend(header);
  header.innerHTML = modalInfo.header;

  let button = document.createElement(`button`);
  button.className = "modal-batton";
  modalWindow.prepend(button);
  button.innerHTML = modalInfo.button;

  document.addEventListener("click", closeModal());

  modalWindow.addEventListener("click", (e) => {
    if (e.target.className === "modal-batton") {
      modalPage.remove();
      body.style.overflow = "";
    }
  });

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
  body.addEventListener("keydown", function (e) {
    if (e.key === "Tab") {
      e.preventDefault();
    }
  });
});
