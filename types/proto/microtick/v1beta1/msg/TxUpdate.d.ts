import { DecCoin, Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface TxUpdateQuote {
    id: number;
    requester: Uint8Array;
    newSpot: string;
    newAsk: string;
    newBid: string;
}
export interface UpdateQuoteData {
    time: Long;
    market: string;
    duration: string;
    consensus: DecCoin;
    commission: DecCoin;
    reward: Coin;
    adjustment: string;
}
export declare const TxUpdateQuote: {
    encode(message: TxUpdateQuote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxUpdateQuote;
    fromJSON(object: any): TxUpdateQuote;
    toJSON(message: TxUpdateQuote): unknown;
    fromPartial(object: DeepPartial<TxUpdateQuote>): TxUpdateQuote;
};
export declare const UpdateQuoteData: {
    encode(message: UpdateQuoteData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateQuoteData;
    fromJSON(object: any): UpdateQuoteData;
    toJSON(message: UpdateQuoteData): unknown;
    fromPartial(object: DeepPartial<UpdateQuoteData>): UpdateQuoteData;
};
