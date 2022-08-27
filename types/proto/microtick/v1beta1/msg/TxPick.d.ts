import { DataActiveTrade } from "../keeper/DataActiveTrade";
import { DecCoin, Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface TxPickTrade {
    id: number;
    taker: Uint8Array;
    orderType: string;
}
export interface PickTradeData {
    time: Long;
    market: string;
    duration: string;
    trade: DataActiveTrade;
    consensus: DecCoin;
    commission: DecCoin;
    reward: Coin;
}
export declare const TxPickTrade: {
    encode(message: TxPickTrade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxPickTrade;
    fromJSON(object: any): TxPickTrade;
    toJSON(message: TxPickTrade): unknown;
    fromPartial(object: DeepPartial<TxPickTrade>): TxPickTrade;
};
export declare const PickTradeData: {
    encode(message: PickTradeData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PickTradeData;
    fromJSON(object: any): PickTradeData;
    toJSON(message: PickTradeData): unknown;
    fromPartial(object: DeepPartial<PickTradeData>): PickTradeData;
};
