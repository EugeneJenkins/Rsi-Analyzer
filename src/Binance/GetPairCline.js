import {getBinanceClient} from "./Client.js";

export const getPairCline = async (pairName) => {
    const client = await getBinanceClient();

    client.klines('XRPUSDT','1m').then(data => {
        console.log(data);
    });
}