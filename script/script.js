// function timeConversion(s) {
//   let hour = s.slice(0, -8);
//   let period = s.slice(-2);
//   let minuteSecond = s.slice(2, -2);
//   let midnight = "00";

//   if (period === "AM" && hour <= "11") {
//     let am = s.slice(0, -2);
//     return am;
//   } else if (period === "AM" && hour === "12") {
//     let convertion = midnight + minuteSecond;
//     return convertion;
//   } else if (period === "PM" && hour < "12") {
//     let num = Number(hour);
//     let convertion = num + 12;
//     let pm = convertion.toString() + minuteSecond;
//     return pm;
//   } else if (period === "PM" && hour === "12") {
//     let pm = s.slice(0, -2);
//     return pm;
//   }
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const timeConversionLog = document.getElementById("time-conversion-log");
//   const timeConversionInput = document.getElementById("time-conversion-input");
//   const timeConversionBtn = document.getElementById("time-conversion-btn");

//   timeConversionBtn.addEventListener("click", function () {
//     timeConversionLog.textContent = timeConversion(timeConversionInput.value);
//   });
// });
