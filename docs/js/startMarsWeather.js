`use strict`;
let date = {};
let elemId = document.querySelector("#fotoDay");

let putButton = elemId.querySelector("#putBattonGetData");

putButton.addEventListener("click", function (e) {
  date.date = "2021-02-05";
  let putDataForDayFoto = new GetDataArray(2, date, 0, "", "");
  console.log(putDataForDayFoto);
  console.log(date);
  putDataForDayFoto.getArray();
});
