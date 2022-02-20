"use strict";
function getNearObjects(obj) {
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
        newapproachDate = date + " " + "Января" + " " + time;
      } else if (month === 1) {
        newapproachDate = date + " " + "Февраля" + " " + time;
      } else if (month === 2) {
        newapproachDate = date + " " + "Марта" + " " + time;
      } else if (month === 3) {
        newapproachDate = date + " " + "Апреля" + " " + time;
      } else if (month === 4) {
        newapproachDate = date + " " + "Мая" + " " + time;
      } else if (month === 5) {
        newapproachDate = date + " " + "Июня" + " " + time;
      } else if (month === 6) {
        newapproachDate = date + " " + "Июля" + " " + time;
      } else if (month === 7) {
        newapproachDate = date + " " + "Августа" + " " + time;
      } else if (month === 8) {
        newapproachDate = date + " " + "Сентября" + " " + time;
      } else if (month === 9) {
        newapproachDate = date + " " + "Октября" + " " + time;
      } else if (month === 10) {
        newapproachDate = date + " " + "Ноября" + " " + time;
      } else {
        newapproachDate = date + " " + "Декабря" + " " + time;
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
  return dengerCounter;
}
