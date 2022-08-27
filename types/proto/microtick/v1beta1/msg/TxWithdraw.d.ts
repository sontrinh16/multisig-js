import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface TxWithdrawQuote {
    id: number;
    requester: Uint8Array;
    withdraw: string;
}
export interface WithdrawQuoteData {
    time: Long;
    market: string;
    duration: string;
    consensus: DecCoin;
    backing: DecCoin;
    commission: DecCoin;
}
export declare const TxWithdrawQuote: {
    encode(message: TxWithdrawQuote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxWithdrawQuote;
    fromJSON(object: any): TxWithdrawQuote;
    toJSON(message: TxWithdrawQuote): unknown;
    fromPartial(object: DeepPartial<TxWithdrawQuote>): TxWithdrawQuote;
};
export declare const WithdrawQuoteData: {
    encode(message: WithdrawQuoteData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawQuoteData;
    fromJSON(object: any): WithdrawQuoteData;
    toJSON(message: WithdrawQuoteData): unknown;
    fromPartial(object: DeepPartial<WithdrawQuoteData>): WithdrawQuoteData;
};
