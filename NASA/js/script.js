let buttonHw1 = document.getElementById("button-hw1");
let homework1 = document.getElementById("homework1");

let firstNameId = "first-name";
let lastNameId = "last-name";
let addressId = "address";
let avatarId = "avatar";
let avatarWrapperId = "avatar-wrapper";
let buttonPersonInputId = "input-button";

let i = 0;
let firstNameEl = document.getElementById(firstNameId);
let lastNameEl = document.getElementById(lastNameId);
let addressEl = document.getElementById(addressId);
let avatarEl = document.getElementById(avatarId);
let avatarWrapperEl = document.getElementById(avatarWrapperId);
let battonPersonInputEl = document.getElementById(buttonPersonInputId);

function counter() {
  i++;
  if (i === 10) firstNameEl.value = "Serge";
  else firstNameEl.value = "Alex";
  console.log(i);
  return i;
}

function getValue(Id) {
  let el = document.getElementById(Id);
  return el.value;
}

function alertValue(elementParametr) {
  console.log(elementParametr.value);
  counter();

  console.log(elementParametr.className);
  counter();

  console.log(elementParametr.id);
  counter();
  console.log(elementParametr.type);
}

function chengeColorInput() {
  counter();
  if (firstNameEl.value === "Serge")
    avatarEl.src = "https://stihi.ru/photos/grishinsvit.jpg";
  else avatarEl.src = "https://stihi.ru/photos/setlex.jpg";
}

// firstNameEl.value = "Serge";
// alertValue(firstNameEl);
// let value = getValue(firstNameId);
// console.log(value);
// avatarEl.src = "https://stihi.ru/photos/grishinsvit.jpg";
// alertValue(lastNameEl);
value = getValue(lastNameId);
console.log(value);
// avatarWrapperEl.innerHTML = '<input value="Все будет хорошо"/>';
// firstNameEl.className = "default-input error-input";
// alertValue(addressEl);
value = getValue(addressId);
console.log(value);

battonPersonInputEl.addEventListener("click", chengeColorInput);
