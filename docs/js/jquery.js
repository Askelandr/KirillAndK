"use strict";

class $ {
  constructor(selector, where = document) {
    this.self = where.querySelector(selector);
    this.elems = where.querySelectorAll(selector);
  }
  each(callback) {
    for (let elem of this.elems) {
      callback(elem);
    }
  }
  on(event, callback) {
    for (let elem of this.elems) {
      elem.addEventListener(event, callback);
    }
  }
}
