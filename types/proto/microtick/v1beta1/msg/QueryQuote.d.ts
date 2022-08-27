import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface QueryQuoteRequest {
    id: number;
}
export interface QueryQuoteResponse {
    id: number;
    provider: Uint8Array;
    market: string;
    duration: string;
    backing: DecCoin;
    ask: DecCoin;
    bid: DecCoin;
    quantity: DecCoin;
    consensus: DecCoin;
    spot: DecCoin;
    callAsk: DecCoin;
    callBid: DecCoin;
    putAsk: DecCoin;
    putBid: DecCoin;
    modified: Long;
    canModify: Long;
}
export declare const QueryQuoteRequest: {
    encode(message: QueryQuoteRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryQuoteRequest;
    fromJSON(object: any): QueryQuoteRequest;
    toJSON(message: QueryQuoteRequest): unknown;
    fromPartial(object: DeepPartial<QueryQuoteRequest>): QueryQuoteRequest;
};
export declare const QueryQuoteResponse: {
    encode(message: QueryQuoteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryQuoteResponse;
    fromJSON(object: any): QueryQuoteResponse;
    toJSON(message: QueryQuoteResponse): unknown;
    fromPartial(object: DeepPartial<QueryQuoteResponse>): QueryQuoteResponse;
};
