const input = document.getElementById('value');

const lengthOutput = document.getElementById('length');
const volumeOutput = document.getElementById('volume');
const massOutput = document.getElementById('mass');
const button = document.getElementById('button');

const metersToFeetCalculation = (inputValue) => {
  const rawResult = inputValue * 3.281;
  return rawResult.toFixed(3);
};
const feetToMetersCalculation = (inputValue) => {
  const rawResult = inputValue * 0.3048;
  return rawResult.toFixed(3);
};
const litersToGallonsCalculation = (inputValue) => {
  const rawResult = inputValue * 0.21997;
  return rawResult.toFixed(3);
};
const gallonsToLitersCalculation = (inputValue) => {
  const rawResult = inputValue * 4.546;
  return rawResult.toFixed(3);
};
const kilogramsToPoundsCalculation = (inputValue) => {
  const rawResult = inputValue * 2.204;
  return rawResult.toFixed(3);
};
const PoundsToKilogramsCalculation = (inputValue) => {
  const rawResult = inputValue * 0.45359237;
  return rawResult.toFixed(3);
};

const lengthDisplay = (inputValue) => {
  lengthOutput.textContent = `${inputValue} meters = ${metersToFeetCalculation(inputValue)} feet | ${inputValue} feet = ${feetToMetersCalculation(inputValue)} meters`;
};

const volumeDisplay = (inputValue) => {
  volumeOutput.textContent = `${inputValue} liters = ${litersToGallonsCalculation(inputValue)} gallons | ${inputValue} gallons = ${gallonsToLitersCalculation(inputValue)} liters`;
};

const massDisplay = (inputValue) => {
  massOutput.textContent = `${inputValue} kilos = ${kilogramsToPoundsCalculation(inputValue)} pounds | ${inputValue} pounds = ${PoundsToKilogramsCalculation(inputValue)} kilos`;
};

const loadResults = () => {
  const inputValue = input.valueAsNumber;
  console.log(inputValue);
  lengthDisplay(inputValue);
  volumeDisplay(inputValue);
  massDisplay(inputValue);
};

loadResults();

button.addEventListener('click', loadResults);
