import {getBinanceClient} from "./Client.js";

// 1 - Opened
// 2 - Highest
// 3 - Lowest
// 4 - Closed
export const getPairCline = async (pairName) => {
    const closedKlinesArr = [];

    const client = await getBinanceClient();

    const klines = await client.klines(pairName, '1h');

    klines.data.map((row) => {
        closedKlinesArr.push(row[4]);
    })

    return closedKlinesArr;
}