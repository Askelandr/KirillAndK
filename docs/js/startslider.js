`use strict`;
//Initial photos of the rovers
let curiosity = "./image/Curiosity.jpg";
let opportunity = "./image/opportunity.jpg";
let spirit = "./image/spirit.jpg";
let date = "2021-04-07";
// Data introduction for all sliders
let putImgSlider1 = new GetDataArray(0, date, 2800, "Curiosity", "mast");

let putImgSlider2 = new GetDataArray(0, date, 700, "opportunity", "navcam");

let putImgSlider3 = new GetDataArray(0, date, 100, "spirit", "navcam");

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
