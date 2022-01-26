`use strict`;
//Initial photos of the rovers
let curiosity = "./image/Curiosity.jpg";
let opportunity = "./image/opportunity.jpg";
let spirit = "./image/spirit.jpg";
// Data introduction for all sliders
let putImgSlider1 = new GetRoverArray(
  0,
  "2021-03-31",
  2800,
  "Curiosity",
  "mast"
);
console.log(putImgSlider1);
let putImgSlider2 = new GetRoverArray(
  0,
  "2021-04-07",
  700,
  "opportunity",
  "navcam"
);
console.log(putImgSlider2);
let putImgSlider3 = new GetRoverArray(0, "2021-10-08", 100, "spirit", "navcam");
console.log(putImgSlider3);
// Getting an array of photos for each slider
let ImgSlider1 = putImgSlider1.getArray();
let ImgSlider2 = putImgSlider2.getArray();
let ImgSlider3 = putImgSlider3.getArray();

// Uploading photos to all sliders
let slider1 = new SliderFactory(ImgSlider1);
let slider2 = new SliderFactory(ImgSlider2);
let slider3 = new SliderFactory(ImgSlider3);

slider1.start("slider1", curiosity);

slider2.start("slider2", opportunity);

slider3.start("slider3", spirit);
