import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface TxCancelQuote {
    id: number;
    requester: Uint8Array;
}
export interface CancelQuoteData {
    time: Long;
    account: Uint8Array;
    market: string;
    duration: string;
    consensus: DecCoin;
    refund: DecCoin;
    slash: DecCoin;
    commission: DecCoin;
}
export declare const TxCancelQuote: {
    encode(message: TxCancelQuote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxCancelQuote;
    fromJSON(object: any): TxCancelQuote;
    toJSON(message: TxCancelQuote): unknown;
    fromPartial(object: DeepPartial<TxCancelQuote>): TxCancelQuote;
};
export declare const CancelQuoteData: {
    encode(message: CancelQuoteData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CancelQuoteData;
    fromJSON(object: any): CancelQuoteData;
    toJSON(message: CancelQuoteData): unknown;
    fromPartial(object: DeepPartial<CancelQuoteData>): CancelQuoteData;
};
