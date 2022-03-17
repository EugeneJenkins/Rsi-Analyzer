import {getBinanceClient} from "./Client.js";
import {CURRENCY_RULES, NOT_EXIST_IN_FUTURE} from "../Configs/ValidationRules.js";

export const getAllCurrencyByPair = async () => {
    const client = await getBinanceClient();
    const allPairs = (await client.exchangeInfo()).data.symbols;

    const filteredPairs = [];

    allPairs.map(data => {
        if (data.isSpotTradingAllowed
            && data.symbol.match(CURRENCY_RULES.pairName)
            && !NOT_EXIST_IN_FUTURE.includes(data.symbol)){
            filteredPairs.push(data)
        }
    })
    
    return filteredPairs;
}