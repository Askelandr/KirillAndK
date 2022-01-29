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

let putDataForDayFoto = new GetDataArray(1, date, 0, "", "");
console.log(putDataForDayFoto);
// Getting an array of photos for each slider
let ImgSlider1 = putImgSlider1.getArray();
let ImgSlider2 = putImgSlider2.getArray();
let ImgSlider3 = putImgSlider3.getArray();
/**Вот в таком формате все работает, но мое мнение, что это не совсем правильно
 * ....нужно разобраться с асинхронностью....
 * ну т.е. я понимаю, что результат то я получил, но, мое мнение, что сделано это
 * не оптимально...
 */
putDataForDayFoto.getArray();
setTimeout(() => {
  console.log(putDataForDayFoto.arrayData);
}, 1000);

console.log(ImgSlider3);
// Uploading photos to all sliders
let slider1 = new SliderFactory(ImgSlider1);
let slider2 = new SliderFactory(ImgSlider2);
let slider3 = new SliderFactory(ImgSlider3);

slider1.start("slider1", curiosity);

slider2.start("slider2", opportunity);

slider3.start("slider3", spirit);
