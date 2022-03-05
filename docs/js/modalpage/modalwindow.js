"use strict";
let modalInfo = {
  header: "Получить приложение",
  text: "Для того что бы получить доступ к загрузке введите свое имя и email",
  input: `
        <h6 class="modal-error" style=" opacity:0" id="name-error-text">Поле должно быть заполнено</h6>
        <div class="modal-input"> 
            <div class="wrapper_inpt">
                <input type="text" id="input-get-name" placeholder="Введите свое  имя">
            </div>
        </div>
        <h6 class="modal-error" style=" opacity:0" id="email-error-text">Введен некорректный email</h6>
        <div class="modal-input"> 
            <div class="wrapper_inpt">
                <input type="text" id="input-get-name" placeholder="Введите свой email">
                <div class="btn_area" id="button-loading">
                    ЗАГРУЗКА
                </div>
            </div>
        </div>
          `,
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

  let input = document.querySelector(".modal");
  console.log(input);
  let inputGetName = input.querySelector("#input-get-name");
  let errorTextInput = input.querySelector("#name-error-text");
  let battonLoading = input.querySelector("#button-loading");

  battonLoading.addEventListener("click", (e) => {
    if (inputGetName.value === "") {
      errorTextInput.style.opacity = 1;
    } else {
      errorTextInput.style.opacity = 0;
    }
  });

  if (e.value === "") {
    errorTextInput.style.opacity = 1;
  }

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
