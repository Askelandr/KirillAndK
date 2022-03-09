"use strict";
let ImgSlider = [
  "https://wallbox.ru/wallpapers/main2/201646/kosmos-art-vselennaa-planeta-galaktika-zemla.jpg",
  "https://poisknews.ru/wp-content/uploads/2020/03/shutterstock_1072726052.jpg",
  "https://webpulse.imgsmail.ru/imgpreview?key=pic3047381702879972355&mb=pulse",
  "https://masyamba.ru/земля-из-космоса/43-фото-земли-из-космоса.jpg",
  "https://avatars.mds.yandex.net/get-zen_doc/3418917/pub_6055de6208506c23b0851696_6055e1d383224c57fbb2313e/scale_1200",
  "https://mirkosmosa.ru/download/news/7/6422.jpg",
  "https://f.vividscreen.info/soft/f0708836466ed29ca8ed153d1b81d11b/Rings-Of-Saturn-1920x1200.jpg",
  "https://interesnyefakty.org/wp-content/uploads/Planeta-Pluton-1.jpg",
];

let slider1 = new SliderFactory(ImgSlider);
slider1.start("slider1", ImgSlider[2]);
