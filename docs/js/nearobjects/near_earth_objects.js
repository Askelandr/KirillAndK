let elemId = document.querySelector("#fotoDay");
let date = {};
let startDate = elemId.querySelector("#inputStartDate");
let endDate = elemId.querySelector("#inputEndDate");
let putButton = elemId.querySelector("#putBattonDate");

let header = document.createElement("tr");

header.innerHTML = `<th data-type="string">Имя</th>
  <th data-type="getsos" data-tooltip="Показать только<br>опасные объекты">Опасность</th>
  <th data-type="string">Тип объекта</th>
  <th data-type="number" data-tooltip="От минимального<br>к максимальному">Max диаметр(метры)</th>
  <th data-type="number" data-tooltip="От минимальной<br>к максимальной">Магнитуда</th>
  <th data-type="number" data-tooltip="От минимального<br>к максимальному">Расстояние промаха(lunar)</th>
  <th data-type="number" data-tooltip="От минимального<br>к максимальному">Расстояние промаха(Км.)</th>
  <th data-type="number" data-tooltip="От минимальной<br>к максимальной">Скорость(Км./ч.)</th>
  <th data-type="date" data-tooltip="От ближней<br>к дальней">Дата и время сближения</th>`;

document.querySelector("tbody").append(header);

// Получение данных из API
putButton.addEventListener("click", function (e) {
  date.startDate = startDate.value;
  date.endDate = endDate.value;
  // console.log(date);

  // Удаляем предыдущие данные
  let td = document.querySelectorAll(".table-data");
  for (let item of td) {
    item.remove();
  }

  let putDataForDayFoto = new GetDataArray(4, date, 0, "", "");
  // console.log(putDataForDayFoto);
  putDataForDayFoto.getArray();
  setTimeout(() => {
    // console.log(putDataForDayFoto.arrayData);
    let elementCount = putDataForDayFoto.arrayData.element_count;
    let nearObjectsData = putDataForDayFoto.arrayData.near_earth_objects;

    let count = document.querySelector(".count");

    let dengerCounter = getNearObjects(nearObjectsData);
    count.innerHTML = `Всего найдено ${elementCount} объектов. Опасных ${dengerCounter}`;
    let table = document.querySelector(".table");

    table.onclick = function (event) {
      if (event.target.tagName != "TH") return;

      let th = event.target;
      // console.log(th.cellIndex, th.dataset.type);
      sortTable(th.cellIndex, th.dataset.type);
    };

    function sortTable(colNum, type) {
      let tbody = table.querySelector("tbody");

      let rowsArray = Array.from(tbody.rows);
      // console.log(rowsArray);
      let compare;

      switch (type) {
        case "number":
          compare = function (rowA, rowB) {
            return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
          };
          break;
        case "getsos":
          compare = function (row) {
            if (row.cells[colNum].innerHTML === "~")
              return (row.hidden = !row.hidden);
          };
          break;
        case "date":
          compare = function (rowA, rowB) {
            return (
              new Date(rowA.cells[colNum].innerHTML) -
              new Date(rowB.cells[colNum].innerHTML)
            );
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
