// Convert Age to Days
// Create a function that takes the age in years and returns the age in days.

// Examples
// calcAge(65) ➞ 23725

// calcAge(0) ➞ 0

// calcAge(20) ➞ 7300
// Notes
// Use 365 days as the length of a year for this challenge.
// Ignore leap years and days between last birthday and now.
// Expect only positive integer inputs.

const calcAge = function (age) {
  age = age * 365;
  calcAgeInput = document.getElementById("calc-age");
  ageResult = document.getElementById(
    "ageResult"
  ).innerHTML = `${calcAgeInput.value} Years = ${age} Days `;
};
