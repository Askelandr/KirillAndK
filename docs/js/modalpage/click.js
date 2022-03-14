"use strict";
function click(elem, func) {
  elem.addEventListener("click", (e) => {
    func(e);
  });
}
