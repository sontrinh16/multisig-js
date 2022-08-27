import { DecCoin, Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface TxCreateQuote {
    market: string;
    duration: string;
    provider: Uint8Array;
    backing: string;
    spot: string;
    ask: string;
    bid: string;
}
export interface CreateQuoteData {
    time: Long;
    id: number;
    consensus: DecCoin;
    commission: DecCoin;
    reward: Coin;
    adjustment: string;
}
export declare const TxCreateQuote: {
    encode(message: TxCreateQuote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxCreateQuote;
    fromJSON(object: any): TxCreateQuote;
    toJSON(message: TxCreateQuote): unknown;
    fromPartial(object: DeepPartial<TxCreateQuote>): TxCreateQuote;
};
export declare const CreateQuoteData: {
    encode(message: CreateQuoteData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateQuoteData;
    fromJSON(object: any): CreateQuoteData;
    toJSON(message: CreateQuoteData): unknown;
    fromPartial(object: DeepPartial<CreateQuoteData>): CreateQuoteData;
};
