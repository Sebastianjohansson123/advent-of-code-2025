const { readFileSync } = require('fs');

const rawData = readFileSync("data1.txt", "utf-8");
const rows = rawData.split("\n");

const firstLetter = (rowString) => rowString.toUpperCase()[0];
const getNumers = (rowString) => parseInt(rowString.substring(1));

let numberOfZeros = 0;
let currentNumberState = 50;

function start() {
    rows.forEach((row) => {
        const isAddition = firstLetter(row) === "R";
        const number = getNumers(row);

        currentNumberState = isAddition 
            ? currentNumberState + number 
            : currentNumberState - number;
        
        currentNumberState = currentNumberState % 100;
        
        if (currentNumberState === 0) {
            numberOfZeros++;
        }
    });
    
    console.log('number of 0s:', numberOfZeros);
}

start();