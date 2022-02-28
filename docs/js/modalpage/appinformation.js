"use strict";
// let elem = document.querySelector(".information-menu");

let epic = document.querySelector(".epic");

let epicIcon = epic.querySelector(".icon");
let fotoDay = document.querySelector(".foto-day");
let fotoDayIcon = fotoDay.querySelector(".icon");
let fotoDayText = fotoDay.querySelector(".information-menu-text");
let roverFoto = document.querySelector(".rover-foto");
let roverFotoIcon = roverFoto.querySelector(".icon");
let meteors = document.querySelector(".near-object");
let meteorsIcon = meteors.querySelector(".icon");
let marsWeather = document.querySelector(".mars-weather");
let marsWeatherIcon = marsWeather.querySelector(".icon");

epic.addEventListener("click", function (e) {
  console.log(e.currentTarget.className);
  fotoDayIcon.style.fill = "rgb(161,158,168)";
  roverFotoIcon.style.fill = "rgb(161,158,168)";
  marsWeatherIcon.style.fill = "rgb(161,158,168)";
  meteorsIcon.style.fill = "rgb(161,158,168)";
  epicIcon.style.fill = "rgb(68, 219, 181)";
  let elemSlicker = document.querySelector(".progresstab-slicker");
  elemSlicker.remove();
  let slicker = document.createElement(`div`);
  slicker.className = "progresstab-slicker";
  epic.append(slicker);
});
fotoDay.addEventListener("click", function (e) {
  epicIcon.style.fill = "rgb(161,158,168)";
  roverFotoIcon.style.fill = "rgb(161,158,168)";
  meteorsIcon.style.fill = "rgb(161,158,168)";
  marsWeatherIcon.style.fill = "rgb(161,158,168)";
  fotoDayIcon.style.fill = "rgb(68, 219, 181)";
  let elemSlicker = document.querySelector(".progresstab-slicker");
  console.log(elemSlicker);
  elemSlicker.remove();
  let slicker = document.createElement(`div`);
  slicker.className = "progresstab-slicker";
  fotoDay.append(slicker);
});
roverFoto.addEventListener("click", function (e) {
  epicIcon.style.fill = "rgb(161,158,168)";
  fotoDayIcon.style.fill = "rgb(161,158,168)";
  meteorsIcon.style.fill = "rgb(161,158,168)";
  marsWeatherIcon.style.fill = "rgb(161,158,168)";
  roverFotoIcon.style.fill = "rgb(68, 219, 181)";
  let elemSlicker = document.querySelector(".progresstab-slicker");
  elemSlicker.remove();
  let slicker = document.createElement(`div`);
  slicker.className = "progresstab-slicker";
  roverFoto.append(slicker);
});
meteors.addEventListener("click", function (e) {
  epicIcon.style.fill = "rgb(161,158,168)";
  fotoDayIcon.style.fill = "rgb(161,158,168)";
  roverFotoIcon.style.fill = "rgb(161,158,168)";
  marsWeatherIcon.style.fill = "rgb(161,158,168)";

  meteorsIcon.style.fill = "rgb(68, 219, 181)";

  let elemSlicker = document.querySelector(".progresstab-slicker");
  elemSlicker.remove();
  let slicker = document.createElement(`div`);
  slicker.className = "progresstab-slicker";
  meteors.append(slicker);
});
marsWeather.addEventListener("click", function (e) {
  epicIcon.style.fill = "rgb(161,158,168)";
  fotoDayIcon.style.fill = "rgb(161,158,168)";
  roverFotoIcon.style.fill = "rgb(161,158,168)";
  meteorsIcon.style.fill = "rgb(161,158,168)";
  marsWeatherIcon.style.fill = "rgb(68, 219, 181)";
  let elemSlicker = document.querySelector(".progresstab-slicker");
  elemSlicker.remove();
  let slicker = document.createElement(`div`);
  slicker.className = "progresstab-slicker";
  marsWeather.append(slicker);
});
