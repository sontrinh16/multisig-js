import { DecCoin, Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface TxDepositQuote {
    id: number;
    requester: Uint8Array;
    deposit: string;
}
export interface DepositQuoteData {
    time: Long;
    market: string;
    duration: string;
    consensus: DecCoin;
    backing: DecCoin;
    commission: DecCoin;
    reward: Coin;
    adjustment: string;
}
export declare const TxDepositQuote: {
    encode(message: TxDepositQuote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxDepositQuote;
    fromJSON(object: any): TxDepositQuote;
    toJSON(message: TxDepositQuote): unknown;
    fromPartial(object: DeepPartial<TxDepositQuote>): TxDepositQuote;
};
export declare const DepositQuoteData: {
    encode(message: DepositQuoteData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DepositQuoteData;
    fromJSON(object: any): DepositQuoteData;
    toJSON(message: DepositQuoteData): unknown;
    fromPartial(object: DeepPartial<DepositQuoteData>): DepositQuoteData;
};
