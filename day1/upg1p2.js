const { readFileSync } = require('fs');

const rawData = readFileSync("data1.txt", "utf-8");
const rows = rawData.split("\n").map(s => s.trim()).filter(Boolean);

const firstLetter = (rowString) => rowString.toUpperCase()[0];
const getNumber = (rowString) => parseInt(rowString.substring(1), 10);

let numberOfZeroPasses = 0;

let currentNumberState = 50;

function zeroClicksDuringRotation(rowAmount, addition) {
  let amountToFirstClick;
  if (addition) {
    amountToFirstClick = currentNumberState > 0 ? (100 - currentNumberState) : 100;
  } else {
    amountToFirstClick = currentNumberState > 0 ? currentNumberState : 100;
  }

  if (rowAmount < amountToFirstClick) {
    return 0;
  } else {
      return 1 + Math.floor((rowAmount - amountToFirstClick) / 100);
  }
}

for (const row of rows) {
  const isRight = firstLetter(row) === 'R';
  const rowAmount = getNumber(row);

  numberOfZeroPasses += zeroClicksDuringRotation(rowAmount, isRight);

  if (isRight) {
    currentNumberState = currentNumberState + rowAmount;
  } else {
    currentNumberState = currentNumberState - rowAmount;
  }

  currentNumberState = ((currentNumberState % 100) + 100) % 100;
}

console.log('Number of 0 passes:', numberOfZeroPasses);