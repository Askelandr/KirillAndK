`use strict`;

let elemId = document.querySelector("#fotoDay");

let dayData = elemId.querySelector("#inputDate");
let putButton = elemId.querySelector("#putBattonGetData");

putButton.addEventListener("click", function (e) {
  let date = {};
  date.date = dayData.value;
  let putDataForDayFoto = new GetDataArray(3, date, 0, "", "");
  console.log(putDataForDayFoto);
  console.log(date);
  putDataForDayFoto.getArray();
  setTimeout(() => {
    console.log(putDataForDayFoto.arrayData);
    localStorage.setItem("epic", JSON.stringify(putDataForDayFoto.arrayData));
  }, 2000);

  // setTimeout(() => {
  //   console.log(putDataForDayFoto.arrayData);
  //   let newDayFoto = new DayNasaFoto();
  //   newDayFoto.start("fotoDay", putDataForDayFoto.arrayData);
  // }, 2000);
});
