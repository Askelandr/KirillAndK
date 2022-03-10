"use strict";
function startModalWindow(mainSelector, buttonSelector) {
  let modalInfo = {
    header: "Получить приложение",
    text: "Для того что бы получить доступ к загрузке введите свое имя и email",
    input: `
              <h6 class="modal-error" style=" opacity:0" id="name-error-text">Поле должно быть заполнено</h6>
              <div class="modal-input"> 
                  <div class="wrapper_inpt">
                      <input type="text" id="input-get-name" placeholder="Введите свое  имя" tabindex=1>
                  </div>
              </div>
              <h6 class="modal-error" style=" opacity:0" id="email-error-text">Введен некорректный email</h6>
              <div class="modal-input"> 
                  <div class="wrapper_inpt">
                      <input type="email" id="input-get-email" placeholder="Введите свой email" tabindex=2>
                      <div class="btn_area" id="button-loading">
                          ЗАГРУЗКА
                      </div>
                  </div>
              </div>
                `,
    button: "	&#10060",
  };

  let body = document.querySelector(mainSelector);
  let clickButton = document.querySelector(buttonSelector);

  clickButton.addEventListener("click", (e) => {
    body.style.overflow = "hidden";

    let modalPage = document.createElement(`div`);
    modalPage.className = "modal-window";
    body.prepend(modalPage);

    let modalWindow = document.createElement(`div`);
    modalWindow.className = "modal";
    modalPage.append(modalWindow);

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

    let inputGetName = input.querySelector("#input-get-name");
    inputGetName.focus();
    let errorNameInput = input.querySelector("#name-error-text");
    let battonLoading = input.querySelector("#button-loading");
    let inputGetEmail = input.querySelector("#input-get-email");
    let errorEmailInput = input.querySelector("#email-error-text");

    modalWindow.addEventListener("click", (e) => {
      if (e.target.className === "modal-batton") {
        modalPage.remove();
        body.style.overflow = "";
      }
    });
    battonLoading.addEventListener("click", (e) => {
      validAndClose();
    });

    function closeModal() {
      document.addEventListener("click", (e) => {
        if (e.target === modalPage) {
          modalPage.remove();

          body.style.overflow = "";
        }
      });
    }
    let counterTab = 0;
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        modalPage.remove();

        body.style.overflow = "";
      } else if (e.key === "Tab") {
        inputGetName.focus();
      } else if (e.key === "Enter") {
        validAndClose();
      }
    });
    function validAndClose() {
      let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
      let myMail = inputGetEmail.value;
      let valid = re.test(myMail);
      let i = 0;

      if (inputGetName.value === "") {
        errorNameInput.style.opacity = 1;
      } else {
        i++;
        errorNameInput.style.opacity = 0;
      }
      if (!valid) {
        errorEmailInput.style.opacity = 1;
      } else {
        i++;
        errorEmailInput.style.opacity = 0;
      }
      if (i === 2) {
        modalPage.remove();
        body.style.overflow = "";
      }
    }
  });
}
