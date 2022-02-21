"use strict";
function isAppleDevice() {
  if (navigator.userAgent.match(/(iPhone|iPod|iPad|safari)/) != null) {
    return true;
  }
  return false;
}
