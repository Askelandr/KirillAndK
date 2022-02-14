function getNearObjects(obj) {
  let seySos = "";
  let dengerCounter = 0;
  let seyWho = "";

  for (let key in obj) {
    // let row = document.createElement("tr");
    // row.innerHTML = `<th colspan="9">${key}</th>`;
    // document.querySelector("tbody").append(row);
    for (let i = 0; i < obj[key].length; i++) {
      let row = document.createElement("tr");
      row.classList.add("table-data");
      if (obj[key][i]["is_potentially_hazardous_asteroid"] === false) {
        seySos = "~";
      } else {
        seySos = "&#9989";
        dengerCounter++;
      }
      if (obj[key][i]["is_sentry_object"] === false) {
        seyWho = "Не сторожевой";
      } else {
        seyWho = "Сторожевой";
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
      <td >${
        obj[key][i]["close_approach_data"][0]["close_approach_date_full"]
      }</td>`;
      document.querySelector("tbody").append(row);
    }
  }
  return dengerCounter;
}
