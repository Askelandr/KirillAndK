localStorage.setItem(
  "near_objects",
  JSON.stringify(putDataForDayFoto.arrayData)
);
//Старая подставка русского месяца
{
  if (month === 0) {
    newMonth = "Января";
    newapproachDate = date + " " + newMonth + " " + time;
  } else if (month === 1) {
    newMonth = "Февраля";
    newapproachDate = date + " " + newMonth + " " + time;
  } else if (month === 2) {
    newMonth = "Марта";
    newapproachDate = date + " " + newMonth + " " + time;
  } else if (month === 3) {
    newMonth = "Апреля";
    newapproachDate = date + " " + newMonth + " " + time;
  } else if (month === 4) {
    newMonth = "Мая";
    newapproachDate = date + " " + newMonth + " " + time;
  } else if (month === 5) {
    newMonth = "Июня";
    newapproachDate = date + " " + newMonth + " " + time;
  } else if (month === 6) {
    newMonth = "Июля";
    newapproachDate = date + " " + newMonth + " " + time;
  } else if (month === 7) {
    newMonth = "Августа";
    newapproachDate = date + " " + newMonth + " " + time;
  } else if (month === 8) {
    newMonth = "Сентября";
    newapproachDate = date + " " + newMonth + " " + time;
  } else if (month === 9) {
    newMonth = "Октября";
    newapproachDate = date + " " + newMonth + " " + time;
  } else if (month === 10) {
    newMonth = "Ноября";
    newapproachDate = date + " " + newMonth + " " + time;
  } else {
    newMonth = "Декабря";
    newapproachDate = date + " " + newMonth + " " + time;
  }
}
