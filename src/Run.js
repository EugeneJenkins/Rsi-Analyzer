import {GetPairRsiRow} from "./Analyzers/GetPairRsiRow.js";

export const Run = async () => {

    const pairsRow = await GetPairRsiRow();

    pairsRow.sort(function (a, b) {
        if (a.rsi[a.rsi.length - 1] < b.rsi[[b.rsi.length - 1]]) {
            return 1;
        }
        if (a.rsi[a.rsi.length - 1] > b.rsi[[b.rsi.length - 1]]) {
            return -1;
        }

        return 0;
    });

    pairsRow.map((row, rowNumber) => {
        console.log(`${rowNumber}) ${row.symbol} \t\t ${row.rsi[0]} \t ${row.rsi[1]} \t ${row.rsi[2]}`
            + ` \t ${row.rsi[3]} \t ${row.rsi[4]} \t ${row.rsi[5]} \t ${row.rsi[6]}`)
    })

}
