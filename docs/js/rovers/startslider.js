`use strict`;
let visualSlider = document.querySelectorAll(".is-slider");
let elemId = document.querySelector("#input-block");

let curiosityCam = elemId.querySelector("#curiosity-cam");
let curiositySol = elemId.querySelector("#inputSol-curiosity");

let opportunityCam = elemId.querySelector("#opportunity-cam");
let opportunitySol = elemId.querySelector("#inputSol-opportunity");

let spiritCam = elemId.querySelector("#spirit-cam");
let spiritSol = elemId.querySelector("#inputSol-spirit");

let putButton = elemId.querySelector("#putBattonGetData");

let curiosity = "./image/Curiosity.jpg";
let opportunity = "./image/opportunity.jpg";
let spirit = "./image/spirit.jpg";

putButton.addEventListener("click", function (e) {
  let camCuriosity = curiosityCam.value;
  let solCuriosity = curiositySol.value;

  let camOpportunity = opportunityCam.value;
  let solOpportunity = opportunitySol.value;

  let camSpirit = spiritCam.value;
  let solSpirit = spiritSol.value;

  //Initial photos of the rovers

  // Data introduction for all sliders
  let putImgSlider1 = new GetDataArray(
    0,
    "",
    solCuriosity,
    "Curiosity",
    camCuriosity
  );

  let putImgSlider2 = new GetDataArray(
    0,
    "",
    solOpportunity,
    "opportunity",
    camOpportunity
  );

  let putImgSlider3 = new GetDataArray(0, "", solSpirit, "spirit", camSpirit);

  // Getting an array of photos for each slider
  let ImgSlider1 = putImgSlider1.getArray();
  let ImgSlider2 = putImgSlider2.getArray();
  let ImgSlider3 = putImgSlider3.getArray();

  console.log(ImgSlider3);
  // Uploading photos to all sliders
  let slider1 = new SliderFactory(ImgSlider1);
  let slider2 = new SliderFactory(ImgSlider2);
  let slider3 = new SliderFactory(ImgSlider3);

  slider1.start("slider1", curiosity);

  slider2.start("slider2", opportunity);

  slider3.start("slider3", spirit);

  for (property of visualSlider) {
    property.style.opacity = 1;
  }
});
