`use strict`;

//Slider using the constructor function
function SliderFactory(array) {
  // this.imgSliderArray = [];

  this.imgSliderArray = array;
  this.leftButton = null;
  this.rightButton = null;
  this.imgSlider = null;

  this.a = 0;
  this.start = function (id) {
    let elemId = document.querySelector("#" + id);

    this.leftButton = elemId.querySelector("#left-button");
    this.rightButton = elemId.querySelector("#right-button");
    this.imgSlider = elemId.querySelector("#img-slider");

    let that = this;
    this.leftButton.addEventListener("click", function (e) {
      that.putLeftButtonSlider(e);
    });
    this.rightButton.addEventListener("click", function (e) {
      that.putRightButtonSlider(e);
    });

    this.leftButton.disabled = true;

    this.imgSlider.src =
      "http://mars.nasa.gov/mer/gallery/all/1/n/100/1N137056041EFF2002P1825L0M1-BR.JPG";
    // this.imgSliderArray[this.a];
    // console.log(this.imgSlider.src);
  };
  this.putLeftButtonSlider = function (event) {
    this.a--;
    this.imgSlider.src = this.imgSliderArray[this.a];
    this.rightButton.disabled = false;
    if (this.a === 0) {
      this.leftButton.disabled = true;
      this.imgSlider.src = this.imgSliderArray[this.a];
    }
  };
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
