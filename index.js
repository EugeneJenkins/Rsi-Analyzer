import {Spot} from "@binance/connector";

const client = new Spot('', '', {
    baseURL: 'https://api.binance.com/'
})

client.klines('BTCUSDT', '1m', { limit: 5 }).then(response => client.logger.log(response.data))
    .catch(error => client.logger.error(error.message))