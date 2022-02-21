"use strict";
class ValidIosSistem {
  constructor() {
    this.isAppleDevice = function () {
      if (navigator.userAgent.match(/(iPhone|iPod|iPad|safari)/) != null) {
        return true;
      }
      return false;
    };
  }
}
