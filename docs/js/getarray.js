"use strict";
/**
 * The function creates an array with photos
 * @constructor
 * @param {string} date required date YYYY-MM-DD format
 * @param {Number} sol martian sol . Countdown from the moment of landing
 * @param {string} rover rover name Curiosity,opportunity,spirit
 * @param {string} cam camera name
 * @this {array} imgSliderArray - array of links to photos
 * @this {string} key - key for API
 * @this {string} getStartDate - date YYYY-MM-DD format
 * @this {string} getEndDate - date YYYY-MM-DD format
 * @this {array}  getUrlApi - URL array
 */
function GetRoverArray(date, sol, rover, cam) {
  this.imgSliderArray = [];
  this.key = "PGka1opQDcuPP3qIDr8TN2LkttJevZWu7DZOZJv3";
  this.getDate = date;
  this.getStartDate = "";
  this.getEndDate = "";
  this.getsol = sol;
  this.getRover = rover;
  this.getCam = cam;
  this.getUrlApi = [
    `https://api.nasa.gov/mars-photos/api/v1/rovers/${this.getRover}/photos?sol=${this.getsol}&camera=${this.getCam}&api_key=${this.key}`,
    `https://api.nasa.gov/planetary/apod?api_key=${this.key}&date=${this.getDate}`,
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.getStartDate}&end_date=${this.getEndDate}&api_key=${this.key}`,
    `https://api.nasa.gov/EPIC/api/natural/date/${this.getDate}?api_key=${this.key}`,
  ];

  /**
   * Method for getting Promis
   * @returns promis with an array of links
   */
  this.getPromis = async function () {
    let response = await fetch(this.getUrlApi[0]);
    if (response.ok) {
      let data = await response.json();
      // console.log(data);
      let imgPromisArray = data.photos;

      return imgPromisArray;
    } else {
      alert("Error", response.status);
    }
  };

  /**
   * The method returns an array of links to the photo
   * @returns array of links to the photo
   */
  this.getArray = () => {
    let that = this;
    that.getPromis().then((fulfilled) => {
      let imgSliderArray = fulfilled;
      //i = 0, lengh = imgSliderArray.length; i < lengh; i++
      for (let item of imgSliderArray) {
        let arrayImg = item;

        this.imgSliderArray.push(arrayImg.img_src);
      }
    });

    return this.imgSliderArray;
  };
}
