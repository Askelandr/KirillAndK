"use strict";
function getNearObjects(obj) {
  let returnedArray = [];
  let newMonth = "";
  let seySos = "";
  let dengerCounter = 0;
  let seyWho = "";
  let newapproachDate = "";
  for (let key in obj) {
    // let row = document.createElement("tr");
    // row.innerHTML = `<th colspan="9">${key}</th>`;
    // document.querySelector("tbody").append(row);
    for (let i = 0; i < obj[key].length; i++) {
      let row = document.createElement("tr");
      row.classList.add("table-data");
      let approachDate =
        obj[key][i]["close_approach_data"][0]["close_approach_date_full"];
      let longDate = new Date(
        obj[key][i]["close_approach_data"][0]["close_approach_date_full"]
      );

      let month = longDate.getMonth();

      let date = longDate.getDate();
      let time = approachDate.slice(12);
      console.log(longDate);

      if (month === 0) {
        newMonth = "Января";
        newapproachDate = date + " " + newMonth + " " + time;
      } else if (month === 1) {
        newMonth = "Февраля";
        newapproachDate = date + " " + newMonth + " " + time;
      } else if (month === 2) {
        newMonth = "Марта";
        newapproachDate = date + " " + newMonth + " " + time;
      } else if (month === 3) {
        newMonth = "Апреля";
        newapproachDate = date + " " + newMonth + " " + time;
      } else if (month === 4) {
        newMonth = "Мая";
        newapproachDate = date + " " + newMonth + " " + time;
      } else if (month === 5) {
        newMonth = "Июня";
        newapproachDate = date + " " + newMonth + " " + time;
      } else if (month === 6) {
        newMonth = "Июля";
        newapproachDate = date + " " + newMonth + " " + time;
      } else if (month === 7) {
        newMonth = "Августа";
        newapproachDate = date + " " + newMonth + " " + time;
      } else if (month === 8) {
        newMonth = "Сентября";
        newapproachDate = date + " " + newMonth + " " + time;
      } else if (month === 9) {
        newMonth = "Октября";
        newapproachDate = date + " " + newMonth + " " + time;
      } else if (month === 10) {
        newMonth = "Ноября";
        newapproachDate = date + " " + newMonth + " " + time;
      } else {
        newMonth = "Декабря";
        newapproachDate = date + " " + newMonth + " " + time;
      }

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
  returnedArray[0] = dengerCounter;
  returnedArray[1] = newMonth;
  return returnedArray;
}
