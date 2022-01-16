import {Spot} from "@binance/connector";
import {Binance} from "../Configs/Binance.js";

export const getBinanceClient = () => {
    let client;

    if(client){
        return client;
    }

    client = new Promise((resolve, reject) => {
        const client = new Spot(Binance.API_KEY, Binance.API_SECRET, {
            baseURL: Binance.API_URL
        })
        resolve(client)
    });

    return client
}
