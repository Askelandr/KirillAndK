// Получение данных из LocalStorage
// let nearObjData = JSON.parse(localStorage["near_objects"]);
// let elementCount = nearObjData.element_count;
// let nearObjectsData = nearObjData.near_earth_objects;

// let count = document.querySelector(".count");
// let dengerCounter = getNearObjects(nearObjectsData);
// count.innerHTML = `Всего найдено ${elementCount} объектов. Опасных ${dengerCounter}`;

// let table = document.querySelector(".table");
// console.log(table);
// table.onclick = function (event) {
//   if (event.target.tagName != "TH") return;

//   let th = event.target;
//   console.log(th.cellIndex, th.dataset.type);
//   sortTable(th.cellIndex, th.dataset.type);
// };
// console.log(table.onclick);
// function sortTable(colNum, type) {
//   let tbody = table.querySelector("tbody");
//   console.log(tbody);
//   let rowsArray = Array.from(tbody.rows);
//   let compare;

//   switch (type) {
//     case "number":
//       compare = function (rowA, rowB) {
//         return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
//       };

//       break;

//     default:
//       break;
//   }
//   rowsArray.sort(compare);
//   tbody.append(...rowsArray);
// }
