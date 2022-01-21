"use strict";

function GetRoverArray(date, sol, rover, cam) {
  this.imgSliderArray = [];
  this.key = "PGka1opQDcuPP3qIDr8TN2LkttJevZWu7DZOZJv3";
  this.getDate = date;
  this.getsol = sol;
  this.getRover = rover;
  this.getCam = cam;
  this.getUrlApi = `https://api.nasa.gov/mars-photos/api/v1/rovers/${this.getRover}/photos?sol=${this.getsol}&camera=${this.getCam}&api_key=${this.key}`;
  //Method for getting Promis
  this.getPromis = async function () {
    let response = await fetch(this.getUrlApi);
    if (response.ok) {
      let data = await response.json();
      this.imgSliderArray = data.photos;

      return this.imgSliderArray;
    } else {
      alert("Error", response.status);
    }
  };
  //Method for getting an array of photos
  this.getArray = function () {
    let that = this;
    let sliderArray = [];
    that.getPromis().then(function (fulfilled) {
      let imgSliderArray = fulfilled;

      for (let i = 0, lengh = imgSliderArray.length; i < lengh; i++) {
        let arrayImg = imgSliderArray[i];

        sliderArray.push(arrayImg.img_src);
      }
    });

    return sliderArray;
  };
}
