import { DataActiveTrade } from "../keeper/DataActiveTrade";
import { DecCoin, Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface TxMarketTrade {
    market: string;
    duration: string;
    taker: Uint8Array;
    orderType: string;
    quantity: string;
}
export interface MarketTradeData {
    time: Long;
    trade: DataActiveTrade;
    consensus: DecCoin;
    commission: DecCoin;
    reward: Coin;
}
export declare const TxMarketTrade: {
    encode(message: TxMarketTrade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxMarketTrade;
    fromJSON(object: any): TxMarketTrade;
    toJSON(message: TxMarketTrade): unknown;
    fromPartial(object: DeepPartial<TxMarketTrade>): TxMarketTrade;
};
export declare const MarketTradeData: {
    encode(message: MarketTradeData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketTradeData;
    fromJSON(object: any): MarketTradeData;
    toJSON(message: MarketTradeData): unknown;
    fromPartial(object: DeepPartial<MarketTradeData>): MarketTradeData;
};
