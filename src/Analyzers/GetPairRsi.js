import {RSI} from "technicalindicators";
import {RSI_CONST} from "../Configs/Rsi.js";

export const getPairRsi = (data) => {
    const input = {
        values: data,
        period: RSI_CONST.period
    }

    return RSI.calculate(input)
}