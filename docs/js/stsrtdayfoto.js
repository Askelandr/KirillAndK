`use strict`;

let elemId = document.querySelector("#fotoDay");

let dayData = elemId.querySelector("#inputDate");
let putButton = elemId.querySelector("#putBattonGetData");

/**Вот в таком формате все работает, но мое мнение, что это не совсем правильно
 * ....нужно разобраться с асинхронностью....
 * ну т.е. я понимаю, что результат то я получил, но, мое мнение, что сделано это
 * не оптимально...
 */

putButton.addEventListener("click", function (e) {
  let date = dayData.value;
  let putDataForDayFoto = new GetDataArray(1, date, 0, "", "");
  console.log(putDataForDayFoto);
  console.log(date);
  putDataForDayFoto.getArray();

  console.log(putDataForDayFoto.arrayData);
  setTimeout(() => {
    let newDayFoto = new DayNasaFoto();
    newDayFoto.start("fotoDay", putDataForDayFoto.arrayData);
  }, 6000);
});
