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
  setTimeout(() => {
    console.log(putDataForDayFoto.arrayData);
    let elementCount = putDataForDayFoto.arrayData.element_count;
    let nearObjectsData = putDataForDayFoto.arrayData.near_earth_objects;

    let count = document.querySelector(".count");
    let dengerCounter = getNearObjects(nearObjectsData);
    count.innerHTML = `Всего найдено ${elementCount} объектов. Опасных ${dengerCounter}`;

    localStorage.setItem(
      "near_objects",
      JSON.stringify(putDataForDayFoto.arrayData)
    );
  }, 3000);
});
