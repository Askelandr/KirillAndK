`use strict`;
let tooltipElem;

document.onmouseover = function (event) {
  let target = event.target;
  let tooltipHtml = target.dataset.tooltip;

  if (!tooltipHtml) return;
  tooltipElem = document.createElement(`div`);
  tooltipElem.className = "tooltip";
  tooltipElem.innerHTML = tooltipHtml;

  document.body.append(tooltipElem);

  let coords = target.getBoundingClientRect();

  let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 5;

  let top = coords.top - tooltipElem.offsetHeight;
  if (top < 0) top = coords.top + target.offsetHeight;

  tooltipElem.style.left = left + "px";
  tooltipElem.style.top = top + "px";
};
document.onmouseout = function (event) {
  if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
  }
};
