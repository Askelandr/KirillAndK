"use strict";

/**
 * The class creates an array with photos
 * @constructor
 * @param {Number} urlNum the number of the array element with URL
 * @param {obj} date  obj. date:"", startDate:"", endDate:"" . Required date YYYY-MM-DD format
 * @param {Number} sol martian sol . Countdown from the moment of landing
 * @param {string} rover rover name Curiosity,opportunity,spirit
 * @param {string} cam camera name
 * @this {array} imgSliderArray - array of links to photos
 * @this {string} key - key for API
 * @this {array}  getUrlApi - URL array
 * @this {obj}  arrayData - object DATA
 */
class GetDataArray {
  constructor(urlNum, date, sol, rover, cam) {
    this.imgSliderArray = [];
    this.key = "PGka1opQDcuPP3qIDr8TN2LkttJevZWu7DZOZJv3";
    this.getDate = date;
    this.getsol = sol;
    this.getRover = rover;
    this.getCam = cam;
    this.arrayUrlNum = urlNum;
    this.arrayData = {};
    /**Array link API NASA
     * [0] roverFotoApi:
     * [1] fotoDayApi:
     * [2]  marsWeatherApi:
     * [3] epicApi:
     * [4] asteroidsNeoWsApi:
     */
    this.getUrlApi = [
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${this.getRover}/photos?sol=${this.getsol}&camera=${this.getCam}&api_key=${this.key}`,
      `https://api.nasa.gov/planetary/apod?api_key=${this.key}&date=${this.getDate.date}`,
      `https://api.nasa.gov/insight_weather/?api_key=${this.key}&feedtype=json&ver=1.0`,
      `https://api.nasa.gov/EPIC/api/natural/date/${this.getDate.date}?api_key=${this.key}`, //https://api.nasa.gov/EPIC/api/natural/images?api_key=DEMO_KEY//
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.getDate.startDate}&end_date=${this.getDate.endDate}&api_key=${this.key}`,
    ];
  }
  /**
   * Method for getting Promis
   * @returns promis with an array of links
   */

  getPromise = async function () {
    let i = this.arrayUrlNum;

    try {
      let objPromise = axios
        .get(this.getUrlApi[i])
        .then((res) => res.data)
        .then((objPromise) => {
          return objPromise;
        });
      return objPromise;
    } catch (error) {
      alert(error);
    }
  };
  /** 
   * Создание запроса при помощи fetch()
  getPromise = async function () {
    let i = this.arrayUrlNum;

    try {
      let objPromise = fetch(this.getUrlApi[i])
        .then((response) => response.json())
        .then((objPromise) => {
          return objPromise;
        });
      return objPromise;
    } catch (error) {
      alert(error);
    }
  };
  */

  /**
   * The method returns an array of links to the photo
   * @returns array of links to the photo
   */

  getArray = () => {
    let that = this;

    if (this.arrayUrlNum === 0) {
      console.log(that.getPromise());
      that.getPromise().then((fulfilled) => {
        // console.log(fulfilled);
        let imgSliderArray = fulfilled;
        let sliderArray = imgSliderArray.photos;

        for (let item of sliderArray) {
          let arrayImg = item;

          this.imgSliderArray.push(arrayImg.img_src);
        }
      });
      return this.imgSliderArray;
    } else {
      that.getPromise().then((fulfilled) => {
        this.arrayData = fulfilled;
        // console.log(this.arrayData);
        return this.arrayData;
      });
    }
  };
}
