const lengthRes = document.querySelector(".length-res");
const volumeRes = document.querySelector(".volume-res");
const massRes = document.querySelector(".mass-res");

const convertBtn = document.querySelector("#convert-btn");
let inputNum = document.querySelector("#input-number");

convertBtn.addEventListener("click", () => {
  let inputValue = Number(inputNum.value);
  if (isNaN(inputValue)) {
    alert("Enter a valid number");
    return;
  }
  convert(inputValue);
});

function convert(inputValue) {
  const convertMetersToFeet = (inputValue * 3.281).toFixed(2);
  const convertFeetToMeters = (inputValue * 0.3048).toFixed(2);

  const convertLitersTGallon = (inputValue * 0.264).toFixed(2);
  const convertGallonToLiters = (inputValue * 3.785411784).toFixed(2);

  const convertKilosToPounds = (inputValue * 2.204).toFixed(2);
  const convertPoundsToKilos = (inputValue * 0.45359237).toFixed(2);

  lengthRes.textContent = `${inputValue} meters = ${convertMetersToFeet} feet || ${inputValue} feet = ${convertFeetToMeters} meters`;
  volumeRes.textContent = `${inputValue} liters = ${convertLitersTGallon} gallon || ${inputValue} gallon = ${convertGallonToLiters} liters`;
  massRes.textContent = `${inputValue} kilos = ${convertKilosToPounds} pounds || ${inputValue} pound = ${convertPoundsToKilos} kilos`;

  return inputValue.toFixed(2);
}