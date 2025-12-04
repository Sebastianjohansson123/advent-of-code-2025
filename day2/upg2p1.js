const { readFileSync } = require('fs');

const rawData = readFileSync("data.txt", "utf-8");
const rangesRaw = rawData.split(",");

const duplicateInts = [];

const getRange = (data) => {
    const asd = data.split("-");
    const from = asd[0];
    const to = asd[1];
    return { from, to };
}

const parseOverRange = (from, to) => {
    const fromInt = parseInt(from);
    const toInt = parseInt(to);
    for (let i = fromInt; i <= toInt; i++) {
        const amountOfNumbers = i.toString().length;

        if (amountOfNumbers % 2 === 0) {
            const firstHalf = i.toString().substring(0, amountOfNumbers / 2);
            const secondHalf = i.toString().substring(amountOfNumbers / 2 , amountOfNumbers);

            const duplicates = firstHalf === secondHalf;
            if (duplicates) {
                console.log('adding to duplicates array', firstHalf, secondHalf, 'index:', i);
                duplicateInts.push(parseInt(i));
            }
        }
    }
}

const parseOverAllData = () => {
    rangesRaw.forEach((data) => {
        const { from, to } = getRange(data);
        parseOverRange(from, to);
    })
    let totalAmount = 0;
    for (const n of duplicateInts) totalAmount += n;
}


parseOverAllData();
