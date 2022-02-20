"use strict";

let elemId = document.querySelector("#fotoDay");
let date = {};
let startDate = elemId.querySelector("#inputStartDate");
let endDate = elemId.querySelector("#inputEndDate");
let putButton = elemId.querySelector("#putBattonDate");
let rollingStone = document.querySelector(".rolling-stone");

let header = document.createElement("tr");
header.classList.add("table-header");
header.innerHTML = `<th data-type="string">Имя</th>
  <th data-type="getsos" data-tooltip="Показать все<br>или только<br>опасные объекты">Опасность</th>
  <th data-type="string">Sentry</th>
  <th data-type="number" data-tooltip="&#8920 Min-Max &#8921">Max диаметр<br>(метры)</th>
  <th data-type="number" data-tooltip="&#8920 Min-Max &#8921">Магнитуда</th>
  <th data-type="number" data-tooltip="&#8920 Min-Max &#8921">Расстояние промаха<br>(lunar)</th>
  <th data-type="number" data-tooltip="&#8920 Min-Max &#8921">Расстояние промаха<br>(Км.)</th>
  <th data-type="number" data-tooltip="&#8920 Min-Max &#8921">Скорость<br>(Км./ч.)</th>
  <th data-type="date" data-tooltip="&#8920 Min-Max &#8921">Дата <br>и <br>время сближения</th>`;

document.querySelector("tbody").append(header);
// Счетчик попыток запросов
let counterAttempt = 0;
// Получение данных из API
putButton.addEventListener("click", function (e) {
  rollingStone.style.opacity = 1;
  date.startDate = startDate.value;
  date.endDate = endDate.value;
  console.log(date.startDate, date.endDate);
  let count = document.querySelector(".count");
  count.innerHTML = "Идет загрузка...";

  // Удаляем предыдущие данные
  let td = document.querySelectorAll(".table-data");
  for (let item of td) {
    item.remove();
  }

  let putDataForDayFoto = new GetDataArray(4, date, 0, "", "");
  putDataForDayFoto.getArray();
  setTimeout(() => {
    let elementCount = putDataForDayFoto.arrayData.element_count;
    let nearObjectsData = putDataForDayFoto.arrayData.near_earth_objects;
    console.log(nearObjectsData);
    let dataArray = getNearObjects(nearObjectsData);
    let dengerCounter = dataArray[0];
    let newMonth = dataArray[1];

    if (elementCount === undefined) {
      counterAttempt++;

      if (counterAttempt > 2) {
        rollingStone.style.opacity = 0;
        count.innerHTML = "Попробуйте поменять даты или уменьшить период.";
        counterAttempt = 0;
      } else {
        rollingStone.style.opacity = 0;
        count.innerHTML = "Похоже в космосе проблемы. Попробуйте еще раз.";
      }
    } else {
      rollingStone.style.opacity = 0;
      counterAttempt = 0;
      count.innerHTML = `Всего найдено ${elementCount} объектов. Опасных ${dengerCounter}`;
    }
    let table = document.querySelector(".table");
    let counter = 0;
    table.onclick = function (event) {
      if (event.target.tagName != "TH") return;

      let th = event.target;

      sortTable(th.cellIndex, th.dataset.type);
    };

    function sortTable(colNum, type) {
      let tbody = table.querySelector("tbody");
      counter++;
      let rowsArray = Array.from(tbody.rows);

      let compare;
      //Фильтруем от меньшего к большему и наоборот
      switch (type) {
        case "number":
          if (counter % 1 == 0 && counter % 2 != 0) {
            compare = function (rowA, rowB) {
              return (
                rowB.cells[colNum].innerHTML - rowA.cells[colNum].innerHTML
              );
            };
          } else {
            compare = function (rowA, rowB) {
              return (
                rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML
              );
            };
          }

          break;
        case "date":
          if (counter % 1 == 0 && counter % 2 != 0) {
            compare = function (rowA, rowB) {
              return (
                new Date(rowA.cells[colNum].innerHTML.replace(newMonth, "")) -
                new Date(rowB.cells[colNum].innerHTML.replace(newMonth, ""))
              );
            };
          } else {
            compare = function (rowA, rowB) {
              return (
                new Date(rowB.cells[colNum].innerHTML.replace(newMonth, "")) -
                new Date(rowA.cells[colNum].innerHTML.replace(newMonth, ""))
              );
            };
          }

          break;
        //Убираем все неопасные объекты
        case "getsos":
          compare = function (row) {
            if (row.cells[colNum].innerHTML === "~")
              return (row.hidden = !row.hidden);
          };
          break;

        default:
          break;
      }
      rowsArray.sort(compare);
      tbody.append(...rowsArray);
    }
  }, 3000);
});
