`use strict`;
let date = "2021-04-07";
let putDataForDayFoto = new GetDataArray(1, date, 0, "", "");
console.log(putDataForDayFoto);
/**Вот в таком формате все работает, но мое мнение, что это не совсем правильно
 * ....нужно разобраться с асинхронностью....
 * ну т.е. я понимаю, что результат то я получил, но, мое мнение, что сделано это
 * не оптимально...
 */
putDataForDayFoto.getArray();
setTimeout(() => {
  console.log(putDataForDayFoto.arrayData);
  let newDayFoto = new DayNasaFoto();
  newDayFoto.start("fotoDay", putDataForDayFoto.arrayData);
}, 1000);
