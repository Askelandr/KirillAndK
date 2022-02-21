"use strict";
function getNearObjects(obj) {
  let rusMonth = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];
  let returnedArray = [];
  let seySos = "";
  let dengerCounter = 0;
  let seyWho = "";
  let newapproachDate = "";
  let longDate;
  for (let key in obj) {
    //Вывод заголовка с числом
    // let row = document.createElement("tr");
    // row.innerHTML = `<th colspan="9">${key}</th>`;
    // document.querySelector("tbody").append(row);
    for (let i = 0; i < obj[key].length; i++) {
      let row = document.createElement("tr");
      row.classList.add("table-data");
      let approachDate =
        obj[key][i]["close_approach_data"][0]["close_approach_date_full"];

      if (isAppleDevice()) {
        longDate = new Date(
          obj[key][i]["close_approach_data"][0][
            "close_approach_date_full"
          ].replace("", "T")
        );
      } else {
        longDate = new Date(
          obj[key][i]["close_approach_data"][0]["close_approach_date_full"]
        );
      }

      //Получаем отдельно месяц день и год
      let month = longDate.getMonth();
      let date = longDate.getDate();
      let time = approachDate.slice(12);
      console.log(longDate);

      //Заменяем месяц  на русское написание в нужном падеже
      newapproachDate = date + " " + rusMonth[month] + " " + time;
      //Присваиваем нужный месяц возвращаемой переменной
      returnedArray[1] = rusMonth[month];

      if (obj[key][i]["is_potentially_hazardous_asteroid"] === false) {
        seySos = "~";
      } else {
        seySos = "&#9989";
        dengerCounter++;
      }
      if (obj[key][i]["is_sentry_object"] === false) {
        seyWho = "~";
      } else {
        seyWho = "&#9989";
      }

      row.innerHTML = `
      <td >${obj[key][i]["name"]}</td>
      <td >${seySos}</td>
      <td >${seyWho}</td>
      <td>${obj[key][i]["estimated_diameter"]["meters"][
        "estimated_diameter_max"
      ].toFixed(2)}</td>
      <td >${obj[key][i]["absolute_magnitude_h"].toFixed(2)}</td>
      <td >${Number(
        obj[key][i]["close_approach_data"][0]["miss_distance"]["lunar"]
      ).toFixed(2)}</td>
      <td >${Number(
        obj[key][i]["close_approach_data"][0]["miss_distance"]["kilometers"]
      ).toFixed(2)}</td>
      <td >${Number(
        obj[key][i]["close_approach_data"][0]["relative_velocity"][
          "kilometers_per_hour"
        ]
      ).toFixed(2)}</td>
      <td >${newapproachDate}</td>`;
      document.querySelector("tbody").append(row);
    }
  }

  // Присваиваем возвращаемой переменной количество опасных объектов
  returnedArray[0] = dengerCounter;

  return returnedArray;
}
