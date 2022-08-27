import { DecCoin, Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface TxSettleTrade {
    id: number;
    requester: Uint8Array;
}
export interface SettleLegData {
    legId: number;
    settleAccount: Uint8Array;
    settle: DecCoin;
    refundAccount: Uint8Array;
    refund: DecCoin;
}
export interface SettleTradeData {
    time: Long;
    id: number;
    final: DecCoin;
    legs: SettleLegData[];
    incentive: DecCoin;
    settler: Uint8Array;
    commission: DecCoin;
    reward: Coin;
}
export declare const TxSettleTrade: {
    encode(message: TxSettleTrade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxSettleTrade;
    fromJSON(object: any): TxSettleTrade;
    toJSON(message: TxSettleTrade): unknown;
    fromPartial(object: DeepPartial<TxSettleTrade>): TxSettleTrade;
};
export declare const SettleLegData: {
    encode(message: SettleLegData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SettleLegData;
    fromJSON(object: any): SettleLegData;
    toJSON(message: SettleLegData): unknown;
    fromPartial(object: DeepPartial<SettleLegData>): SettleLegData;
};
export declare const SettleTradeData: {
    encode(message: SettleTradeData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SettleTradeData;
    fromJSON(object: any): SettleTradeData;
    toJSON(message: SettleTradeData): unknown;
    fromPartial(object: DeepPartial<SettleTradeData>): SettleTradeData;
};
