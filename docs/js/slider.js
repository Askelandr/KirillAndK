`use strict`;

//Slider using the constructor function
/**
 * @constructor
 * @param {array} array - array of links to the photo@
 */
function SliderFactory(array) {
  // this.imgSliderArray = [];

  this.imgSliderArray = array;
  this.leftButton = null;
  this.rightButton = null;
  this.imgSlider = null;

  this.a = 0;
  /**
   * The method launches a slider with the necessary data
   * @param {string} id - id DIV element slider
   * @param {string} url - url for the initial image in the slider
   */
  this.start = function (id, url) {
    let elemId = document.querySelector("#" + id);

    this.leftButton = elemId.querySelector("#left-button");
    this.rightButton = elemId.querySelector("#right-button");
    this.imgSlider = elemId.querySelector("#img-slider");
    this.imgSlider.src = url;
    let that = this;
    this.leftButton.addEventListener("click", function (e) {
      that.putLeftButtonSlider(e);
    });
    this.rightButton.addEventListener("click", function (e) {
      that.putRightButtonSlider(e);
    });

    this.leftButton.disabled = true;
  };
  /**
   * The function handles the event of pressing the left button
   * @param {event} event
   */
  this.putLeftButtonSlider = function (event) {
    this.a--;
    this.imgSlider.src = this.imgSliderArray[this.a];
    this.rightButton.disabled = false;
    if (this.a === 0) {
      this.leftButton.disabled = true;
      this.imgSlider.src = this.imgSliderArray[this.a];
    }
  };
  /**
   * The function handles the event of pressing the right button
   * @param {event} event
   */
  this.putRightButtonSlider = function (event) {
    this.a++;
    // console.log(this.imgSliderArray);
    this.imgSlider.src = this.imgSliderArray[this.a];
    this.leftButton.disabled = false;
    if (this.a === this.imgSliderArray.length - 1) {
      this.rightButton.disabled = true;
      this.imgSlider.src = this.imgSliderArray[this.a];
    }
  };
}

//Slider using the object literal
// sliderFactory = {
//     getNewSlider: function () {
//       let newSlider = {
//         imgSliderArray: [],
//         leftButton: null,
//         rightButton: null,
//         imgSlider: null,

//         a: 0,
//         start: function (id) {
//           let elemId = document.querySelector("#" + id);

//           this.leftButton = elemId.querySelector("#left-button");
//           this.rightButton = elemId.querySelector("#right-button");
//           this.imgSlider = elemId.querySelector("#img-slider");

//           let that = this;
//           this.leftButton.addEventListener("click", function (e) {
//             that.putLeftButtonSlider(e);
//           });
//           this.rightButton.addEventListener("click", function (e) {
//             that.putRightButtonSlider(e);
//           });

//           this.imgSliderArray.push("https://stihi.ru/photos/alex1961.jpg");
//           this.imgSliderArray.push("https://stihi.ru/photos/alrychkova.jpg");
//           this.imgSliderArray.push("https://stihi.ru/photos/zauska.jpg");
//           this.imgSliderArray.push("https://stihi.ru/photos/vvkislitsyn.jpg");
//           this.imgSliderArray.push("https://stihi.ru/photos/newvanek08.jpg");
//           this.imgSliderArray.push("https://stihi.ru/photos/VitSib.jpg");
//           this.imgSliderArray.push("https://stihi.ru/photos/wanter.jpg");

//           this.leftButton.disabled = true;

//           this.imgSlider.src = this.imgSliderArray[that.a];
//         },
//         putLeftButtonSlider: function (event) {
//           this.a--;
//           this.imgSlider.src = this.imgSliderArray[this.a];
//           this.rightButton.disabled = false;
//           if (this.a === 0) {
//             this.leftButton.disabled = true;
//             this.imgSlider.src = this.imgSliderArray[this.a];
//           }
//         },
//         putRightButtonSlider: function (event) {
//           this.a++;
//           this.imgSlider.src = this.imgSliderArray[this.a];
//           this.leftButton.disabled = false;
//           if (this.a === this.imgSliderArray.length - 1) {
//             this.rightButton.disabled = true;
//             this.imgSlider.src = this.imgSliderArray[this.a];
//           }
//         },
//       };
//       return newSlider;
//     },
//   };
