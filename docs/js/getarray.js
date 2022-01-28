"use strict";
/**
 * The function creates an array with photos
 * @constructor
 * @param {Number} urlNum the number of the array element with URL
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
class GetDataArray {
  constructor(urlNum, date, sol, rover, cam) {
    this.imgSliderArray = [];
    this.key = "PGka1opQDcuPP3qIDr8TN2LkttJevZWu7DZOZJv3";
    this.getDate = {
      date: date,
      startDate: "2021-01-01",
      endDate: "2021-01-03",
    };

    this.getsol = sol;
    this.getRover = rover;
    this.getCam = cam;
    this.arrayUrlNum = urlNum;
    this.arrayData = {};
    this.getUrlApi = [
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${this.getRover}/photos?sol=${this.getsol}&camera=${this.getCam}&api_key=${this.key}`,
      `https://api.nasa.gov/planetary/apod?api_key=${this.key}&date=${this.getDate.date}`,
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.getDate.startDate}&end_date=${this.getDate.endDate}&api_key=${this.key}`,
      `https://api.nasa.gov/EPIC/api/natural/date/${this.getDate.date}?api_key=${this.key}`,
    ];
  }
  /**
   * Method for getting Promis
   * @returns promis with an array of links
   */

  getPromis = async function () {
    let i = this.arrayUrlNum;
    let response = await fetch(this.getUrlApi[i]);
    if (response.ok) {
      let data = await response.json();
      // console.log(data);
      let imgPromisArray = data;

      return imgPromisArray;
    } else {
      alert("Error", response.status);
    }
  };

  /**
   * The method returns an array of links to the photo
   * @returns array of links to the photo
   */
  /** Вот тут и начинается заколдованный круг с которым я разобраться никак не могу.
   * Прикол в том, что я вообще не понимаю как все это работает.
   * Берем первый if и цикл for - все прекрасно отрабатывает и возвращает нужный массив.
   * Стартуем мы это все в файле startslider.js
   * Я решил по образу и подобию пойти дальше. Но после второго if я уже ничего не получаю
   * точнее получаю, но пустой объект. Но самое интересное в том, что в переменную arrayData
   * прекрасно записываются нужные данные и происходит это, понятное дело, только после вызова
   * функции getArray.
   * Для наглядности все вывел в консоль что бы понимать что где и по чем))), даже таймаут поставил,
   * но это понимания не дало,
   * а только еще больше запутало.
   * Так как в моей картине мира все должно работать правильно. Точнее я понимаю, что при том способе записи
   * что применяю я функция от чего-то не возвращает то что мне надо, но как чделать правильно я не понимаю
   * сломал весь мозг)))
   * if-ы которые идут потом я вообще пока не прописывал это своего рода заготовка под следующие данные
   * но пока я не разберусь с этим вопросом дальше идти не могу.
   * ну и меня еще смущает в методе getarray данная повторяющаяся конструкция
   * that.getPromis().then((fulfilled) =>
   * и т.д. такой вариант мной был предпринят так как я никак не мог понять как мне что то получить из асинхронной
   * функии ну и решил не долго думая обрабатывать promise. Думаю, что такая конструкция не совсем правильна.
   * Так что тут тоже подскажи как бы ты подошел к данной проблеме.
   */
  getArray = () => {
    let that = this;

    if (this.arrayUrlNum === 0) {
      that.getPromis().then((fulfilled) => {
        let imgSliderArray = fulfilled;
        let sliderArray = imgSliderArray.photos;
        //i = 0, lengh = imgSliderArray.length; i < lengh; i++
        for (let item of sliderArray) {
          let arrayImg = item;

          this.imgSliderArray.push(arrayImg.img_src);
        }
      });
      return this.imgSliderArray;
    } else if (this.arrayUrlNum === 1) {
      that.getPromis().then((fulfilled) => {
        this.arrayData = fulfilled;
        console.log(this.arrayData);
      });

      return this.arrayData;
    } else if (this.arrayUrlNum === 2) {
      that.getPromis().then((fulfilled) => {
        let imgSliderArray = fulfilled;
        let sliderArray = imgSliderArray;
        console.log(sliderArray);

        //i = 0, lengh = imgSliderArray.length; i < lengh; i++
      });
      return this.imgSliderArray;
    } else if (this.arrayUrlNum === 3) {
      that.getPromis().then((fulfilled) => {
        let imgSliderArray = fulfilled;
        let sliderArray = imgSliderArray;
        console.log(sliderArray);

        //i = 0, lengh = imgSliderArray.length; i < lengh; i++
      });
      return this.imgSliderArray;
    } else {
      console.log("Ввеена не верная ссылка на API");
    }
  };
}
