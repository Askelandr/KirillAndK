`use strict`;
/**
 * The class put photos and data on page
 * @constructor
 *
 */
class DayNasaFoto {
  constructor() {
    this.headerInDayFoto = null;
    this.imgSrs = null;
    this.textInDayFoto = null;
    /**
     * Method fills in the necessary components of the page with data
     * @param {string} id - id
     * @param {object} obj - obj from Api Nasa
     */
    this.start = function (id, obj) {
      let elemId = document.querySelector("#" + id);

      this.headerInDayFoto = elemId.querySelector("#headerInDayFoto");
      this.imgSrs = elemId.querySelector("#img-slider");
      this.textInDayFoto = elemId.querySelector("#textInDayFoto");
      this.headerInDayFoto.innerHTML = obj.title;
      this.imgSrs.src = obj.url;
      this.textInDayFoto.innerHTML = obj.explanation;
    };
  }
}
