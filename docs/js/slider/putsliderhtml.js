"use strict";
function CreateHtmlSlider() {
  const slider = document.querySelector(".is-slider");
  const slider1 = slider.cloneNode(true);
  const slider2 = slider.cloneNode(true);

  slider1.setAttribute("id", "slider2");
  slider2.setAttribute("id", "slider3");

  slider.insertAdjacentElement("afterend", slider1);
  slider1.insertAdjacentElement("afterend", slider2);
}
CreateHtmlSlider();
