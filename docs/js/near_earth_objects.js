let elemId = document.querySelector("#fotoDay");
let date = {};
let startDate = elemId.querySelector("#inputStartDate");
let endDate = elemId.querySelector("#inputEndDate");
let putButton = elemId.querySelector("#putBattonDate");

putButton.addEventListener("click", function (e) {
  date.startDate = startDate.value;
  date.endDate = endDate.value;
  console.log(date);
  let putDataForDayFoto = new GetDataArray(4, date, 0, "", "");
  console.log(putDataForDayFoto);

  putDataForDayFoto.getArray();

  console.log(putDataForDayFoto.arrayData);
});
