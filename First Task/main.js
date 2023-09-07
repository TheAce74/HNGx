const day = document.querySelector(".day");
const time = document.querySelector(".time");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const date = new Date();
day.textContent = days[date.getDay()];
time.textContent = date.getUTCMilliseconds();
