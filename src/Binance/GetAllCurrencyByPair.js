import {getBinanceClient} from "./Client.js";
import {CURRENCY_RULES} from "../Configs/ValidationRules.js";

export const getAllCurrencyByPair = async () => {
    const client = await getBinanceClient();
    const allPairs = (await client.exchangeInfo()).data.symbols;

    const filteredPairs = [];

    allPairs.map(data => {
        if (data.isSpotTradingAllowed && data.symbol.match(CURRENCY_RULES.pairName)){
            filteredPairs.push(data)
        }
    })
    
    return filteredPairs;
}