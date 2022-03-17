import {getAllCurrencyByPair} from "../Binance/GetAllCurrencyByPair.js";
import {getPairCline} from "../Binance/GetPairCline.js";
import {getPairRsi} from "./GetPairRsi.js";


export const GetPairRsiRow = async () => {
    const allPairs = await getAllCurrencyByPair();

    const allPairsRsi = [];

    await Promise.all(allPairs.map(async (row, index) => {

        const closedKLines = await getPairCline(row.symbol)

        let rsi = getPairRsi(closedKLines)

        if (!rsi[rsi.length - 7]) {
            return;
        }

        allPairsRsi.push({
            symbol: row.symbol, rsi: [
                rsi[rsi.length - 7],
                rsi[rsi.length - 6],
                rsi[rsi.length - 5],
                rsi[rsi.length - 4],
                rsi[rsi.length - 3],
                rsi[rsi.length - 2],
                rsi[rsi.length - 1],
            ]
        })
    }))

    return allPairsRsi;
}