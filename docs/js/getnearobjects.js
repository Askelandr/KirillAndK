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
        seySos = "Не опасный";
      } else {
        seySos = "Опасный";
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
      <td>${obj[key][i]["estimated_diameter"]["meters"]["estimated_diameter_max"]}</td>
      <td >${obj[key][i]["absolute_magnitude_h"]}</td>
      <td >${obj[key][i]["close_approach_data"][0]["miss_distance"]["lunar"]}</td>
      <td >${obj[key][i]["close_approach_data"][0]["miss_distance"]["kilometers"]}</td>
      <td >${obj[key][i]["close_approach_data"][0]["relative_velocity"]["kilometers_per_hour"]}</td>
      <td >${obj[key][i]["close_approach_data"][0]["close_approach_date_full"]}</td>`;
      document.querySelector("tbody").append(row);
    }
  }
  return dengerCounter;
}
