"use strict";

let elemId = document.querySelector("#fotoDay");
let date = {};
let startDate = elemId.querySelector("#inputStartDate");
let endDate = elemId.querySelector("#inputEndDate");
let putButton = elemId.querySelector("#putBattonDate");

let header = document.createElement("tr");

header.innerHTML = `<th data-type="string">Имя</th>
  <th data-type="getsos" data-tooltip="Показать все<br>или только<br>опасные объекты">Опасность</th>
  <th data-type="string">Тип объекта</th>
  <th data-type="number" data-tooltip="&#8920 Min-Max &#8921">Max диаметр(метры)</th>
  <th data-type="number" data-tooltip="&#8920 Min-Max &#8921">Магнитуда</th>
  <th data-type="number" data-tooltip="&#8920 Min-Max &#8921">Расстояние промаха(lunar)</th>
  <th data-type="number" data-tooltip="&#8920 Min-Max &#8921">Расстояние промаха(Км.)</th>
  <th data-type="number" data-tooltip="&#8920 Min-Max &#8921">Скорость(Км./ч.)</th>
  <th data-type="date" data-tooltip="&#8920 Min-Max &#8921">Дата и время сближения</th>`;

document.querySelector("tbody").append(header);

// Получение данных из API
putButton.addEventListener("click", function (e) {
  date.startDate = startDate.value;
  date.endDate = endDate.value;

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

    let count = document.querySelector(".count");

    let dengerCounter = getNearObjects(nearObjectsData);
    count.innerHTML = `Всего найдено ${elementCount} объектов. Опасных ${dengerCounter}`;
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
                new Date(rowA.cells[colNum].innerHTML) -
                new Date(rowB.cells[colNum].innerHTML)
              );
            };
          } else {
            compare = function (rowA, rowB) {
              return (
                new Date(rowB.cells[colNum].innerHTML) -
                new Date(rowA.cells[colNum].innerHTML)
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
